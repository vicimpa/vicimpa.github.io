"""Generate the portfolio pages. Run with python3 site/build.py."""
import json
from html import escape
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, ElementTree, register_namespace

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://vicimpa.github.io"
PROJECTS = json.loads((ROOT / "site/projects.json").read_text())
PROJECT_BY_ID = {project["id"]: project for project in PROJECTS}
TEXT = {
    "ru": {
        "name": "Роман Аленичев", "workshop": "ЦЕХ", "brand": "Цех",
        "field": "Полигон", "work": "Верстак", "author": "Автор",
        "skip": "К содержимому", "language": "Язык сайта", "projects": "Проекты",
        "case": "О проекте", "source": "Исходный код", "demo": "Открыть проект",
        "about": "Что внутри", "back": "Все проекты", "related": "Ещё на верстаке",
        "illustration": "ИЛЛЮСТРАЦИЯ", "screen": "Скриншот проекта",
        "telegram": "Написать мне", "contact": "На связи", "contact_index": "04 / КОНТАКТЫ",
        "top": "НАВЕРХ ↑", "github": "Код и проекты", "career": "Хабр Карьера",
        "profile": "Профиль", "community": "Сообщество", "end": "КОНЕЦ СМЕНЫ ■",
        "title": "PromiSe#### — Роман Аленичев · TypeScript, игры и аудио",
        "description": "Портфолио Романа Аленичева, PromiSe#### (vicimpa). Senior Fullstack TypeScript-разработчик. Pixprite, WebAudio Nodes, OpenBomber и другие открытые проекты.",
        "questions": ["Как собрать игру и инструменты для неё?", "Как сгенерировать целый мир?", "Как создавать и слушать звук?", "Что вынести в библиотеку или демо?", "Как соединять людей?"],
    },
    "en": {
        "name": "Roman Alenichev", "workshop": "WORKSHOP", "brand": "Workshop",
        "field": "Test field", "work": "Workbench", "author": "Author",
        "skip": "Skip to content", "language": "Site language", "projects": "Projects",
        "case": "Project notes", "source": "Source code", "demo": "Open project",
        "about": "Inside the project", "back": "All projects", "related": "More from the workbench",
        "illustration": "ILLUSTRATION", "screen": "Project screenshot",
        "telegram": "Message me", "contact": "Get in touch", "contact_index": "04 / CONTACT",
        "top": "BACK TO TOP ↑", "github": "Code and projects", "career": "Habr Career",
        "profile": "Profile", "community": "Community", "end": "END OF SHIFT ■",
        "title": "PromiSe#### — Roman Alenichev · TypeScript, games and audio",
        "description": "Roman Alenichev, PromiSe#### (vicimpa), Senior Fullstack TypeScript developer. Explore Pixprite, WebAudio Nodes, OpenBomber and more open-source projects.",
        "questions": ["How do you build a game and its tools?", "How do you generate an entire world?", "How do you create and play sound?", "What belongs in a library or demo?", "How do you connect people?"],
    },
}
GROUPS = [
    ["pixprite", "openbomber", "new-tetris"],
    ["kharos", "citylabs"],
    ["w-nodes", "audio", "my-player"],
    ["toolkit", "particles", "graph-calc"],
    ["hellcord", "chatroulette"],
]


def route(lang, project=None):
    prefix = "/en/" if lang == "en" else "/"
    return prefix + ("projects/" + project["id"] + "/" if project else "")


def head(lang, project=None):
    text = TEXT[lang]
    url = BASE + route(lang, project)
    title = text["title"] if project is None else project["name"] + " — " + project[lang]["title"] + " | PromiSe####"
    description = text["description"] if project is None else project[lang]["description"]
    image = "/assets/" + (project.get("image", "avatar.png") if project else "avatar.png")
    locale = "ru_RU" if lang == "ru" else "en_US"
    person = {
        "@type": "Person", "@id": BASE + "/#person", "name": text["name"],
        "alternateName": ["PromiSe####", "vicimpa"],
        "url": BASE + "/", "image": BASE + "/assets/avatar.png",
        "jobTitle": "Senior Fullstack TypeScript Developer",
        "sameAs": ["https://github.com/vicimpa", "https://career.habr.com/vic_dev", "https://t.me/vic_dev"],
        "knowsAbout": ["TypeScript", "WebGL", "Web Audio", "Bun", "React", "SvelteKit"],
    }
    page = {
        "@type": "WebPage", "@id": url + "#page", "url": url, "name": title,
        "description": description, "inLanguage": lang,
        "isPartOf": {"@id": BASE + "/#website"},
        "about": {"@id": BASE + "/#person"},
    }
    graph = [person, {"@type": "WebSite", "@id": BASE + "/#website", "url": BASE + "/", "name": "PromiSe#### / " + text["brand"], "inLanguage": ["ru", "en"]}, page]
    if project:
        work = {
            "@type": "CreativeWork", "@id": url + "#project", "name": project["name"],
            "description": description, "url": url, "inLanguage": lang,
            "sameAs": project["repository"],
        }
        page["mainEntity"] = {"@id": work["@id"]}
        graph.extend([work, {
            "@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": text["brand"], "item": BASE + route(lang)},
                {"@type": "ListItem", "position": 2, "name": project["name"], "item": url},
            ],
        }])
    alternates = "".join(f'<link rel="alternate" hreflang="{language}" href="{BASE}{route(language, project)}">\n' for language in TEXT)
    structured = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False).replace("<", "\\u003c")
    return f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#222824">
<title>{escape(title)}</title>
<meta name="description" content="{escape(description, quote=True)}">
<meta name="author" content="{escape(text['name'])} / PromiSe####">
<link rel="canonical" href="{url}">
{alternates}<link rel="alternate" hreflang="x-default" href="{BASE}{route('ru', project)}">
<meta property="og:type" content="website">
<meta property="og:title" content="{escape(title, quote=True)}">
<meta property="og:description" content="{escape(description, quote=True)}">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="PromiSe#### / {text['brand']}">
<meta property="og:locale" content="{locale}">
<meta property="og:locale:alternate" content="{'en_US' if lang == 'ru' else 'ru_RU'}">
<meta property="og:image" content="{BASE}{image}">
<meta property="og:image:alt" content="{escape(project['name'] if project else 'PromiSe####', quote=True)}">
<meta name="twitter:card" content="{'summary_large_image' if project and project.get('image') else 'summary'}">
<meta name="twitter:title" content="{escape(title, quote=True)}">
<meta name="twitter:description" content="{escape(description, quote=True)}">
<meta name="twitter:image" content="{BASE}{image}">
<link rel="icon" href="/assets/avatar.png" type="image/png">
<link rel="stylesheet" href="/style.css">
<script type="application/ld+json">{structured}</script>
{'<script src="/workshop.js" defer></script>' if project is None else ''}"""


def header(lang, project=None):
    text = TEXT[lang]
    home = route(lang)
    navigation = "".join(f'<a href="{home}#{key}">{text[label]}</a>' for key, label in (("field", "field"), ("work", "work"), ("about", "author")))
    language_links = []
    for language in TEXT:
        current = ' aria-current="page"' if language == lang else ""
        language_links.append(f'<a href="{route(language, project)}" lang="{language}" hreflang="{language}"{current}>{language.upper()}</a>')
    languages = "".join(language_links)
    return f"""<a class="skip" href="#content">{text['skip']}</a>
<header class="top" id="top"><div class="frame bar">
<a class="brand" href="{home}"><img src="/assets/avatar.png" alt="" width="32" height="32"> PromiSe####<span>/ {text['workshop']}</span></a>
<nav aria-label="{text['projects']}">{navigation}</nav>
<nav class="languages" aria-label="{text['language']}">{languages}</nav>
</div></header>"""


def footer(lang):
    text = TEXT[lang]
    return f"""<footer class="contact" id="contact"><div class="frame">
<div class="section-index mono"><span>{text['contact_index']}</span><a href="#top">{text['top']}</a></div>
<div class="contact-grid"><h2>{text['contact']}<span>.</span></h2><div class="contact-links">
<a href="https://t.me/vic_dev">Telegram <span>{text['telegram']} ↗</span></a>
<a href="https://github.com/vicimpa">GitHub <span>{text['github']} ↗</span></a>
<a href="https://career.habr.com/vic_dev">{text['career']} <span>{text['profile']} ↗</span></a>
<a href="https://discord.gg/hellcord">HellCord <span>{text['community']} ↗</span></a></div></div>
<div class="credits mono"><span>{text['name']} / PromiSe####</span><span>{text['end']}</span></div></div></footer>"""


def art(project, lang):
    text = TEXT[lang]
    if project.get("image"):
        return f'<figure class="project-shot"><img src="/assets/{project["image"]}" width="{project['image_width']}" height="{project['image_height']}" alt="{text["screen"]} — {escape(project["name"])}" loading="lazy"><figcaption>{text["screen"]} / {escape(project["name"])}</figcaption></figure>'
    path = ROOT / "site/art" / (project["id"] + ".html")
    if path.exists():
        return path.read_text().replace("ИЛЛЮСТРАЦИЯ", text["illustration"])
    return f'<div class="project-type" aria-hidden="true"><span>{escape(project["name"])}</span><small>{" / ".join(project["tags"])}</small></div>'


def actions(project, lang, detail=False):
    text = TEXT[lang]
    links = f'<a class="inline" href="{project["repository"]}">{text["source"]} ↗</a>'
    if project.get("demo"):
        links += f'<a class="inline" href="{project["demo"]}">{text["demo"]} ↗</a>'
    if not detail:
        links += f'<a class="inline" href="{route(lang, project)}">{text["case"]} →</a>'
    return '<div class="project-actions">' + links + "</div>"


def tags(project):
    return '<div class="tags">' + "".join(f'<span>{escape(tag)}</span>' for tag in project["tags"]) + "</div>"


def bench(lang):
    routes = []
    for number, ids in enumerate(GROUPS):
        links = "".join(f'<a data-project="{key}" href="{route(lang, PROJECT_BY_ID[key])}" aria-controls="{key}">{escape(PROJECT_BY_ID[key]["name"])}</a>' for key in ids)
        routes.append(f'<div class="route"><h3><span class="mono">{number + 1}.</span> {TEXT[lang]["questions"][number]}</h3><div>{links}</div></div>')
    cards = []
    for project in PROJECTS:
        content = project[lang]
        cards.append(f"""<article id="{project['id']}" class="dossier">
{art(project, lang)}<div class="dossier-copy"><h3>{escape(content['title'])}</h3>
<p>{escape(content['description'])}</p>{tags(project)}{actions(project, lang)}</div></article>""")
    return '<div class="bench"><div class="project-list">' + "".join(routes) + '</div><div class="dossiers" aria-live="polite">' + "".join(cards) + "</div></div>"


def document(lang, body, project=None):
    return f'<!doctype html>\n<html lang="{lang}">\n<head>{head(lang, project)}</head>\n<body>{header(lang, project)}<main id="content">{body}</main>{footer(lang)}</body></html>\n'


def save(url, content):
    target = ROOT / url.lstrip("/") / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content)


urls = []
for lang in TEXT:
    home = (ROOT / "site" / f"home.{lang}.html").read_text().replace("@@PROJECTS@@", bench(lang))
    save(route(lang), document(lang, home))
    urls.append(BASE + route(lang))
    for project in PROJECTS:
        text = TEXT[lang]
        content = project[lang]
        group = next(group for group in GROUPS if project["id"] in group)
        siblings = [PROJECT_BY_ID[key] for key in group if key != project["id"]]
        related = "".join(f'<a href="{route(lang, item)}">{escape(item["name"])} →</a>' for item in siblings)
        details = "".join(f"<p>{escape(paragraph)}</p>" for paragraph in content["details"])
        body = f"""<article class="case-page frame">
<a class="jump" href="{route(lang)}#work">← {text['back']}</a>
<p class="mono case-label">{text['case']} / {escape(project['name'])}</p>
<h1>{escape(project['name'])}<span>.</span></h1>
<p class="case-subtitle">{escape(content['title'])}</p>
<div class="case-grid"><div class="case-copy"><p>{escape(content['description'])}</p>{tags(project)}{actions(project, lang, True)}
<h2>{text['about']}</h2>{details}
<nav class="related" aria-label="{text['related']}"><h3>{text['related']}</h3>{related}</nav></div>{art(project, lang)}</div></article>"""
        save(route(lang, project), document(lang, body, project))
        urls.append(BASE + route(lang, project))

namespace = "http://www.sitemaps.org/schemas/sitemap/0.9"
register_namespace("", namespace)
sitemap = Element(f"{{{namespace}}}urlset")
for url in urls:
    entry = SubElement(sitemap, f"{{{namespace}}}url")
    SubElement(entry, f"{{{namespace}}}loc").text = url
ElementTree(sitemap).write(ROOT / "sitemap.xml", encoding="utf-8", xml_declaration=True)
(ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /site/\n\nSitemap: {BASE}/sitemap.xml\n")
print(f"Built {len(urls)} pages in RU and EN")
