const projectButtons = [...document.querySelectorAll("[data-project]")];
const projectPanels = projectButtons.map(button => document.getElementById(button.dataset.project));
const narrowScreen = window.matchMedia("(max-width: 760px)");

function selectProject(selectedButton) {
  projectButtons.forEach((button, index) => {
    const selected = button === selectedButton;
    button.setAttribute("aria-pressed", String(selected));
    projectPanels[index].hidden = !selected;
  });
}

selectProject(projectButtons[0]);
document.documentElement.classList.add("js");
projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectProject(button);
    if (narrowScreen.matches) {
      const panel = projectPanels[index];
      panel.tabIndex = -1;
      panel.focus({ preventScroll: true });
      panel.scrollIntoView({ block: "nearest" });
    }
  });
});

const canvas = document.getElementById("terrain");
const context = canvas.getContext("2d");
if (context) setupTerrain(canvas, context);

function setupTerrain(canvas, context) {
  const width = canvas.width;
  const height = canvas.height;
  const size = 22;
  const seedInput = document.getElementById("seed");
  const viewButton = document.getElementById("view");
  const status = document.getElementById("terrain-status");
  const land = [
    { name: "Топь", top: "#80b0a0", side: "#4c766a", level: 0, note: "Техника сюда не пройдёт." },
    { name: "Песок", top: "#f2bf72", side: "#ad7946", level: 1, note: "Техника может проехать, строить нельзя." },
    { name: "Камень", top: "#b1c390", side: "#6d8056", level: 3, note: "Здесь можно поставить штаб." },
    { name: "Горы", top: "#e7e2c7", side: "#a69e7f", level: 6, note: "Горы непроходимы." }
  ];
  let cells;
  let faces;
  let selection = null;
  let base = null;
  let topDown = false;

  function generate(seed) {
    function sample(x, y) {
      let hash = Math.imul(x + 13, 0x1f123bb5) ^ Math.imul(y + 71, 0x5f356495) ^ Math.imul(seed + 3, 0x6c8e9cf5);
      hash = Math.imul(hash ^ (hash >>> 16), 0x45d9f3b);
      return ((hash ^ (hash >>> 16)) >>> 0) / 4294967296;
    }

    function noise(x, y) {
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      const smooth = n => n * n * (3 - 2 * n);
      const fx = smooth(x - ix);
      const fy = smooth(y - iy);
      const north = sample(ix, iy) * (1 - fx) + sample(ix + 1, iy) * fx;
      const south = sample(ix, iy + 1) * (1 - fx) + sample(ix + 1, iy + 1) * fx;
      return north * (1 - fy) + south * fy;
    }

    const map = Array.from({ length: size * size }, (_, index) => {
      const x = index % size;
      const y = Math.floor(index / size);
      const slope = Math.hypot(x - 10.5, y - 10.5) / 15;
      const elevation = noise(x / 7, y / 7) * 0.73 + noise(x / 2.9 + 6, y / 2.9) * 0.27 - slope * 0.18;
      return { x, y, elevation, texture: sample(x + 117, y + 131) };
    });
    const elevations = map.map(cell => cell.elevation).sort((a, b) => a - b);
    const cuts = [0.22, 0.51, 0.87].map(percentile => elevations[Math.floor(elevations.length * percentile)]);
    map.forEach(cell => {
      const band = cuts.findIndex(cut => cell.elevation < cut);
      cell.kind = land[band === -1 ? 3 : band];
      cell.z = cell.kind.level;
    });
    return map;
  }

  function point(x, y, z) {
    if (topDown) return [width / 2 + (x - size / 2) * 17, 36 + y * 17];
    return [width / 2 + (x - y) * 14.7, 92 + (x + y) * 6.5 - z * 11];
  }

  function polygon(points) {
    const path = new Path2D();
    path.moveTo(...points[0]);
    points.slice(1).forEach(vertex => path.lineTo(...vertex));
    path.closePath();
    return path;
  }

  function getFaces() {
    const ordered = [...cells].sort((a, b) => (a.x + a.y) - (b.x + b.y));
    const tiles = [];
    ordered.forEach(cell => {
      const { x, y, z, kind } = cell;
      const corners = [point(x, y, z), point(x + 1, y, z), point(x + 1, y + 1, z), point(x, y + 1, z)];
      if (!topDown) {
        const east = x + 1 < size ? cells[y * size + x + 1].z : -1;
        const south = y + 1 < size ? cells[(y + 1) * size + x].z : -1;
        if (z > east) tiles.push({ cell, path: polygon([corners[1], corners[2], point(x + 1, y + 1, east), point(x + 1, y, east)]), color: kind.side, shade: 0.16 });
        if (z > south) tiles.push({ cell, path: polygon([corners[2], corners[3], point(x, y + 1, south), point(x + 1, y + 1, south)]), color: kind.side, shade: 0.03 });
      }
      tiles.push({ cell, path: polygon(corners), color: kind.top, shade: cell.texture * 0.14, surface: true });
    });
    return tiles;
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    context.lineWidth = 0.8;
    context.strokeStyle = "#26342e77";
    faces.forEach(({ cell, path, color, shade, surface }) => {
      context.fillStyle = color;
      context.fill(path);
      context.fillStyle = `rgba(22, 30, 27, ${shade})`;
      context.fill(path);
      context.stroke(path);
      if (surface && cell === selection) {
        context.save();
        context.strokeStyle = "#fffbec";
        context.lineWidth = 2.6;
        context.stroke(path);
        context.restore();
      }
    });

    if (base) {
      const [x, y] = point(base.x + 0.5, base.y + 0.5, base.z);
      context.fillStyle = "#242822";
      context.fillRect(x - 2, y - 24, 4, 24);
      context.fillStyle = "#ff9d66";
      context.fillRect(x + 1, y - 25, 18, 11);
      context.strokeStyle = "#242822";
      context.strokeRect(x + 1, y - 25, 18, 11);
    }

    context.font = "bold 12px monospace";
    context.fillStyle = "#d7ddc7";
    context.fillText(topDown ? "ПЛАН" : "РЕЛЬЕФ", 25, 34);
    context.fillText("N ↑", 703, 34);
    context.fillText(selection ? `X ${selection.x + 1} · Y ${selection.y + 1}` : "X — · Y —", 25, 431);
  }

  function resetMap(seed, initial = false) {
    seedInput.value = seed;
    cells = generate(seed);
    faces = getFaces();
    selection = null;
    base = null;
    if (!initial) status.textContent = `Карта ${seed} готова. Найди каменную клетку.`;
    draw();
  }

  function choose(cell, place) {
    selection = cell;
    if (place && cell.kind === land[2]) {
      base = cell;
      status.textContent = `Штаб установлен · X ${cell.x + 1}, Y ${cell.y + 1}.`;
    } else {
      status.textContent = `${cell.kind.name}. ${cell.kind.note}`;
    }
    draw();
  }

  canvas.tabIndex = 0;
  canvas.addEventListener("click", event => {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * width / rect.width;
    const y = (event.clientY - rect.top) * height / rect.height;
    const face = faces.findLast(({ path }) => context.isPointInPath(path, x, y));
    if (face) choose(face.cell, true);
  });

  const directions = new Map([
    ["ArrowLeft", [-1, 0]], ["ArrowRight", [1, 0]],
    ["ArrowUp", [0, -1]], ["ArrowDown", [0, 1]]
  ]);
  const clamp = value => Math.max(0, Math.min(size - 1, value));
  canvas.addEventListener("keydown", event => {
    const direction = directions.get(event.key);
    const current = selection ?? cells[11 * size + 11];
    if (direction) {
      event.preventDefault();
      const x = clamp(current.x + direction[0]);
      const y = clamp(current.y + direction[1]);
      choose(cells[y * size + x], false);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(current, true);
    }
  });

  document.getElementById("seed-form").addEventListener("submit", event => {
    event.preventDefault();
    resetMap(seedInput.valueAsNumber);
  });

  document.getElementById("new-seed").addEventListener("click", () => {
    const next = (seedInput.valueAsNumber + 1 + Math.floor(Math.random() * 999999)) % 1000000;
    resetMap(Number.isFinite(next) ? next : 217);
  });

  viewButton.addEventListener("click", () => {
    topDown = !topDown;
    viewButton.setAttribute("aria-pressed", String(topDown));
    faces = getFaces();
    draw();
  });

  resetMap(seedInput.valueAsNumber, true);
  document.getElementById("scope-tools").hidden = false;
}
