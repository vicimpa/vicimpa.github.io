!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var r=(i=s,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var i,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(s)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);s&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t){e.exports=React},function(e,t,n){"use strict";var s,r=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},s=[],r=0;r<e.length;r++){var o=e[r],l=t.base?o[0]+t.base:o[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,t),references:1}),s.push(u)}return s}function c(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var r=n.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,s){var r=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,n){var s=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var p=null,m=0;function v(e,t){var n,s,r;if(t.singleton){var o=m++;n=p||(p=c(t)),s=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(t),s=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var r=a(n[s]);i[r].references--}for(var o=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e=0){return new Promise(t=>setTimeout(t,e))}},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(n(1)),o=n(5);n(6);const i=n(8),a=n(23),l=(n(3),new Uint8Array),c=(document.getElementById("ss"),document.getElementById("root")),u=l.length?new a.GameState(l,3):a.GameState.generate(7,3);o.render(r.default.createElement(i.GameComponent,{state:u}),c)},function(e,t){e.exports=ReactDOM},function(e,t,n){var s=n(2),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,"html,body,#root{width:100%;height:100%;margin:0;padding:0;background:#666;position:relative;display:flex;justify-content:center}",""]),t.default=r},function(e,t,n){"use strict";var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.GameComponent=void 0;const i=o(n(1));n(9);const a=n(11);t.GameComponent=({state:e})=>(e.useState(),i.useEffect(()=>{const t=({key:t})=>{switch(t){case"Backspace":e.back();break;case"Escape":e.restart();break;case"+":e.appendLine()}};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}}),i.default.createElement("div",{className:"game-component"},i.default.createElement(a.LinesMapComponent,{state:e})))},function(e,t,n){var s=n(2),r=n(10);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,".game-component{margin:0;padding:0;display:flex;justify-content:center;align-items:center}",""]),t.default=r},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinesMapComponent=void 0;const r=s(n(1));n(12);const o=n(14);t.LinesMapComponent=({state:e})=>{const{rowsLines:t}=e;return r.default.createElement("div",{className:"lines-map-component"},t.map((t,n)=>r.default.createElement(o.LinesRowComponent,{key:"rowLien-"+n,state:e,rowsLine:t})))}},function(e,t,n){var s=n(2),r=n(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,".lines-map-component{margin:0;padding:0;width:750px;height:400px;border:1px solid;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,.2)}",""]),t.default=r},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinesRowComponent=void 0;const r=s(n(1));n(15);const o=n(17);t.LinesRowComponent=({state:e,rowsLine:t})=>r.default.createElement("div",{className:"lines-row-component"},t.map((t,n)=>r.default.createElement(o.LineComponent,{key:"row-"+n,state:e,row:t})))},function(e,t,n){var s=n(2),r=n(16);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,".lines-row-component{margin:0;padding:0;width:100%;flex-grow:1;display:flex;justify-content:center;align-items:center}",""]),t.default=r},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineComponent=void 0;const r=s(n(1));n(18);const o=n(20);t.LineComponent=({state:e,row:t})=>{const{balls:n,index:s,select:i}=t,a={up:()=>(a.up=()=>!1,!0)};return r.default.createElement("div",{className:"line-component",onClick:()=>e.click(s)},n.map((e,t)=>{const{colorStyle:n,id:s,free:l}=e,c=!(!i||l)&&a.up();return r.default.createElement(o.BallComponent,{key:s,id:s,up:c,color:n})}))}},function(e,t,n){var s=n(2),r=n(19);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,".line-component{margin:20px;padding:5px;width:30px;height:120px;border:1px solid;display:flex;flex-direction:column;cursor:pointer;background-color:rgba(255,255,255,.4)}",""]),t.default=r},function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BallComponent=void 0;const r=s(n(1));n(21),t.BallComponent=({id:e,up:t,color:n})=>r.default.createElement("div",{id:e,style:{backgroundColor:n},className:"ball-component "+(t?"up":"")})},function(e,t,n){var s=n(2),r=n(22);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};s(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s)()(!1);r.push([e.i,"@keyframes ball-spawn{0%{opacity:0}100%{opacity:1}}.ball-component{margin:3px;padding:0;width:24px;height:24px;border-radius:100%;animation:ball-spawn .6s;transition:.3s;transform:scale(1.2) translateY(0px)}.ball-component.up{transform:scale(1.4) translateY(-30px)}",""]),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameState=t.Ball=t.ColorList=void 0;const s=n(1),r=n(3),o=document.getElementById("s"),i=(document.getElementById("w"),document.getElementById("i"));t.ColorList=[[81,153,255],[35,0,176],[118,254,197],[0,207,145],[0,65,86],[30,60,0],[255,214,0],[210,170,27],[255,117,107],[232,213,213],[70,0,0],[239,47,162],[56,4,56],[164,0,255],[35,31,32]];class a{constructor(e,t,n=-1){this.game=e,this.colorIndex=n,this.free=!1;const{color:s}=this;this.id=[t,...s].map(e=>e.toString(16)).join("")}get colorStyle(){return this.free?"transparent":`rgb(${this.color.join(",")})`}get color(){const{colorIndex:e}=this;return-1==e?(this.free=!0,[0,0,0]):[...t.ColorList[e]]}static free(e,t){return new this(e,t,-1)}}t.Ball=a;class l{constructor(e,t=1){this.balls=[],this.handlers=[],this.steps=[],this.stepsHash=[],this.select=-1,this.startState=[],this.moves=[],this.win=!1;for(let n=0;n<e.length+4*t;n++){let t,s=e[n];t=void 0!==s?new a(this,n,s):a.free(this,n),this.balls.push(t)}this.startState=[...this.balls],this.reduceHandelrs=this.reduceHandelrs.bind(this)}get rows(){const e=[];for(let t=0;t<this.size;t++)e.push({select:t==this.select,index:t,balls:this.getRow(t),first(e){const{balls:t}=this;return 0==t.indexOf(e)}});return e}get rowsLines(){const{rows:e,size:t}=this,n=t>5?Math.ceil(t/2):0;return n?[e,e.splice(n)]:[e]}get size(){return this.balls.length/4}getHashBalls(e){return e.map(e=>(e.colorIndex+1).toString(16)).join()}reduceHandelrs(){for(let e of this.handlers)e()}appendLine(){const{balls:e}=this;for(let t=0;t<4;t++)this.balls.push(a.free(this,e.length+t));this.reduceHandelrs()}getMaxOnly(e){const{rows:t}=this,n=t.map(t=>{const{balls:n}=t,s=n.filter(e=>-1!==e.colorIndex),r=!!s.find(t=>t.colorIndex!==e.colorIndex),{length:o}=s.filter(t=>t.colorIndex==e.colorIndex);return{...t,length:o,haveOther:r}}).filter(e=>!e.haveOther);return n.sort((e,t)=>t.length-e.length),n[0]}needMove(e,t=-1){const n=this.getRow(e),s=this.getTop(e),r=this.getMaxOnly(s);if(r&&r.index!=t)return!1;const o=(-1!==t?this.getRow(t):n).filter(e=>-1!==e.colorIndex);let i=0;for(let e=0;e<4;e++)if(!n[e].free){if(n[e].colorIndex!=s.colorIndex)return!0;if(i++,i>=3)return!1}return o.length&&!0}canMove(e,t){if(4==this.getRow(t).filter(e=>!e.free).length)return!1;const n=this.getTop(e),s=this.getTop(t);return!(!s.free&&n.colorIndex!=s.colorIndex)}click(e){if(this.win)return null;if(-1==this.select){this.getTop(e).free||this.setSelect(e)}else this.select==e?this.setSelect():this.canMove(this.select,e)?this.move(this.select,e):this.setSelect(e)}setSelect(e=-1){this.select=e,-1!==e&&console.log(this.needMove(e)),this.reduceHandelrs()}move(e,t){const n=this.getTopIndex(e),s=this.getTopIndex(t,!0),r=[...this.balls];this.moves.push([e,t]),this.steps.push(r);const o=this.balls[n],i=this.balls[s];this.balls[n]=i,this.balls[s]=o;const a=this.getHashBalls(r);-1==this.stepsHash.indexOf(a)&&this.stepsHash.push(a),this.select=-1,this.checkWin(),this.reduceHandelrs()}fakeMove(e,t){const{balls:n,moves:s,steps:r,reduceHandelrs:o,stepsHash:i}=this;this.balls=[...n],this.steps=[],this.moves=[],this.stepsHash=[],this.reduceHandelrs=()=>{},this.move(e,t);const a=this.balls;return this.balls=n,this.steps=r,this.moves=s,this.stepsHash=i,this.reduceHandelrs=o,a}restart(){if(!this.steps.length)return null;this.steps=[],this.stepsHash=[],this.moves=[],this.balls=[...this.startState],this.reduceHandelrs()}back(){if(!this.steps.length)return null;this.balls=[...this.steps.pop()],this.moves.pop(),this.stepsHash.pop(),this.reduceHandelrs()}getRow(e){const t=[];for(let n=4*e;n<4*e+4;n++)t.push(this.balls[n]);return t}getTop(e,t=!1){const n=this.getRow(e);let s;for(let e of n){if(!e.free)return t?s:e;s=e}return s}getTopIndex(e,t=!1){const n=this.getTop(e,t);return this.balls.indexOf(n)}useState(){const[,e]=s.useState(0);s.useEffect(()=>{let t=0;const n=()=>{t>8&&(t=0),e(++t)};return this.handlers.push(n),()=>{let e=this.handlers.indexOf(n);-1!==e&&this.handlers.splice(e,1)}},[])}checkWin(){for(let e=0;e<this.size;e++){if(this.getRow(e).filter((e,t,n)=>n[0].colorIndex!==e.colorIndex).length)return this.win=!1}return this.win=!0}hasStep(e,t,n){const s=this.getHashBalls(e);return-1!==this.stepsHash.indexOf(s)}clone(){const{balls:e,steps:t,stepsHash:n,startState:s,moves:r}=this,o=new l(new Uint8Array(0),0);return o.balls=[...e],o.steps=[...t],o.moves=[...r],o.stepsHash=[...n],o.startState=[...s],o}async calculate(e=this){const t=[e];let n=0;for(o.innerText=""+t.length,i.innerText=""+n;t.length;){const e=t.shift().clone();o.innerText=""+t.length,n%123==0&&await r.delay();for(let s=0;s<e.size;s++)for(let r=0;r<e.size;r++)if(s!==r){const a=e.clone();if(a.canMove(s,r)&&a.needMove(s,r)){const e=a.fakeMove(s,r);if(!a.hasStep(e,s,r)){if(i.innerText=""+ ++n,a.move(s,r),a.win)return a;t.unshift(a),o.innerText=""+t.length}}}}return null}static generate(e,t){const n=new Uint8Array(4*e);for(let e=0;e<n.length;e++)n[e]=(e-e%4)/4;return n.sort(()=>Math.random()>.5?1:-1),console.log(n),new this(n,t)}}t.GameState=l}]);