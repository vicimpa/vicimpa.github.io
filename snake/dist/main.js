!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=11)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){e.exports=React},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:g(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Range=void 0;class r{constructor(e,t,n=!1){this.from=e,this.to=t,this.include=n,this.from=0|e,this.to=0|t,this[""+e]=""+t,Object.defineProperty(this,"from",{enumerable:!1}),Object.defineProperty(this,"to",{enumerable:!1})}map(e){const t=[];let n=0;for(let r of this)t.push(e(r,n++,this));return t}[Symbol.iterator](){const{from:e,to:t,include:n}=this;let r=e,o=0;e<t&&(o=1),t<e&&(o=-1);const i=n?t+o:t;return{next(){if(r==i)return{done:!0};let e=r;return r+=o,{value:e,done:!1}}}}static go(e,t,n=!1){return new r(e,t,n)}}t.Range=r},function(e,t,n){"use strict";t.a=n.p+"[2]/[1]/icomoon.eot"},function(e,t,n){"use strict";var r,o,i,a,s,c=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},u=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.SnakeGame=t.SnakeObject=void 0;const l=n(14),d=n(4),f=n(15);var h;!function(e){e[e.CLEAR=0]="CLEAR",e[e.HEAD=1]="HEAD",e[e.BODY=2]="BODY",e[e.TAIL=3]="TAIL",e[e.APPLE=4]="APPLE"}(h=t.SnakeObject||(t.SnakeObject={}));const p={UP:[0,-1],LEFT:[-1,0],RIGHT:[1,0],BOTTOM:[0,1]},m=Object.keys(p);t.SnakeGame=class{constructor(e=3,t=10,n=t){r.set(this,void 0),o.set(this,void 0),i.set(this,void 0),a.set(this,!1),s.set(this,void 0),c(this,s,new l.GameMap(t,n)),c(this,r,0),c(this,o,e),c(this,i,m[f.rand(0,3)]),this.pushSnake(),this.pushApple()}get map(){return[...u(this,s)]}get width(){return u(this,s).width}get height(){return u(this,s).height}get maxScore(){return u(this,s).maxScore}get ticks(){return u(this,r)}get score(){return u(this,o)}get appleLength(){return this.map.filter(e=>e==this.maxScore).length}get renderMap(){const{map:e,width:t,height:n}=this;return d.Range.go(0,n).map(n=>d.Range.go(0,t).map(r=>{let i=e[n*t+r];return i?i==this.maxScore?h.APPLE:i==u(this,o)?h.HEAD:1==i?h.TAIL:h.BODY:h.CLEAR}))}pushSnake(){const{width:e,height:t,score:n}=this,r=e/2|0,o=t/2|0,a=this.getDirection(u(this,i));d.Range.go(n,0).map((e,t)=>{let n=a.map(e=>-1*e*t);u(this,s)[u(this,s).getIndex(r,o,...n)]=e})}posIndex(e){return u(this,s).posIndex(e)}posValue(e){return u(this,s).posValue(e)}getIndex(e=0,t=e,n=0,r=0){return u(this,s).getIndex(e,t,n,r)}getValue(e=0,t=e,n=0,r=0){return u(this,s).getValue(e,t,n,r)}pushApple(){const{map:e}=this,t=e.map((e,t)=>t).filter(t=>!e[t]),n=t[f.rand(0,t.length-1)];u(this,s)[n]=this.maxScore}getDirection(e=u(this,i)){return[...p[e]]}setDirection(e=u(this,i)){const[t,n]=this.getDirection(),[r,o]=this.getDirection(e);return u(this,i)==e?u(this,i):u(this,a)?t&&r&&t==-1*r||n&&o&&n==-1*o?u(this,i):(c(this,a,!1),c(this,i,e)):u(this,i)}cutTail(e=0){return d.Range.go(u(this,o),0).map(t=>{let[n,r]=u(this,s).posValue(t),o=u(this,s).getIndex(n,r),i=t-e;return 0==i&&(i=this.maxScore),i<0&&(i=this.maxScore),[o,i]}).map(([e,t])=>{u(this,s)[e]=t}),c(this,o,u(this,o)-e),e}loop(e=this.score,t){if(e==this.score&&c(this,a,!0),!e)return u(this,s)[u(this,s).getIndex(...t)]=e;const[n,l]=u(this,s).posValue(e),d=this.getDirection(u(this,i));if(n<0||l<0)return 0;t||(t=u(this,s).posIndex(u(this,s).getIndex(n,l,...d)));const f=u(this,s).getValue(...t),h=u(this,s).getIndex(...t);return f==this.maxScore?(u(this,s)[h]=c(this,o,+u(this,o)+1),c(this,r,+u(this,r)+1),this.appleLength||this.pushApple(),u(this,o)):f?(this.cutTail(f),this.loop()):(e==this.score&&c(this,r,+u(this,r)+1),u(this,s)[u(this,s).getIndex(n,l)]=0,u(this,s)[h]=e,this.loop(e-1,[n,l]))}},r=new WeakMap,o=new WeakMap,i=new WeakMap,a=new WeakMap,s=new WeakMap},function(e,t,n){"use strict";var r,o,i=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ReactRenderer=t.DirectionBlock=void 0;const a=n(16),s=n(17),c=n(4);var u;!function(e){e[e.VERTICAL=0]="VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.TOP=2]="TOP",e[e.BOTTOM=3]="BOTTOM",e[e.LEFT=4]="LEFT",e[e.RIGHT=5]="RIGHT",e[e.TOP_LEFT=6]="TOP_LEFT",e[e.TOP_RIGHT=7]="TOP_RIGHT",e[e.BOTTOM_LEFT=8]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=9]="BOTTOM_RIGHT"}(u=t.DirectionBlock||(t.DirectionBlock={}));class l extends a.BaseRenderer{constructor(){super(...arguments),r.set(this,s.createShareStore({score:0,ticks:0})),o.set(this,s.createShareStore([]))}get data(){return i(this,o).get()}get width(){return this.game.width}get height(){return this.game.height}useInfo(){return i(this,r).useState()}useData(){return i(this,o).useState()}render(){const{width:e,height:t,score:n,ticks:a,renderMap:s}=this.game,l=[...i(this,o).get()]||!1,d=[];c.Range.go(n,0).map(r=>{const[o,i]=this.game.posValue(r),a=this.game.getIndex(o,i),s=[],c=this.game.getDirection(),{previewLast:l}=this;r==n&&s.push(this.game.posIndex(this.game.getIndex(o,i,...c))),1==r&&l&&s.push(l),1==r&&(this.previewLast=[o,i]),r+1<=n&&s.push(this.game.posValue(r+1)),r-1>0&&s.push(this.game.posValue(r-1));const f=new Uint8Array(4);for(let[n,r]of s){let[a,s]=[o-n,i-r];-1==s&&(f[0]=1),1==s&&(f[1]=1),-1==a&&(f[2]=1),1==a&&(f[3]=1),s==t-1&&(f[0]=1),s==-(t-1)&&(f[1]=1),a==e-1&&(f[2]=1),a==-(e-1)&&(f[3]=1)}switch(parseInt([...f].join(""),2)){case 2:d[a]=u.LEFT;break;case 1:d[a]=u.RIGHT;break;case 3:d[a]=u.HORIZONTAL;break;case 8:d[a]=u.TOP;break;case 4:d[a]=u.BOTTOM;break;case 12:d[a]=u.VERTICAL;break;case 9:d[a]=u.TOP_LEFT;break;case 10:d[a]=u.TOP_RIGHT;break;case 5:d[a]=u.BOTTOM_LEFT;break;case 6:d[a]=u.BOTTOM_RIGHT}});for(let n=0;n<e*t;n++){let[e,t]=this.game.posIndex(n);l[n]={value:s[t][e],direction:d[n]}}i(this,r).set({score:n,ticks:a}),i(this,o).set(l)}}t.ReactRenderer=l,r=new WeakMap,o=new WeakMap},function(e,t,n){"use strict";t.a=n.p+"[2]/[1]/icomoon.ttf"},function(e,t,n){"use strict";t.a=n.p+"[2]/[1]/icomoon.woff"},function(e,t,n){"use strict";t.a=n.p+"[2]/[1]/icomoon.svg"},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(1)),i=n(12),a=n(13);n(29);const s=document.getElementById("root");i.render(o.default.createElement(a.MainComponent,{width:20,height:20}),s)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MainComponent=void 0;const a=i(n(1)),s=n(6),c=n(7);n(18);const u=n(20);t.MainComponent=e=>{const{width:t=20,height:n=20,score:r=4}=e,o=new s.SnakeGame(r,t,n),i=new c.ReactRenderer(o);i.render();const l={width:16*t,height:16*n};return a.useEffect(()=>{let e=setInterval(()=>{o.loop(),i.render()},200);return window.addEventListener("keydown",({key:e})=>{switch(e){case"w":case"ArrowUp":o.setDirection("UP");break;case"s":case"ArrowDown":o.setDirection("BOTTOM");break;case"a":case"ArrowLeft":o.setDirection("LEFT");break;case"d":case"ArrowRight":o.setDirection("RIGHT");break;default:console.log(e)}}),()=>{window.removeEventListener("keydown",onkeydown),clearInterval(e)}},[]),a.default.createElement("div",{className:"main-component",style:l},a.default.createElement(u.GameComponent,{renderer:i}))}},function(e,t,n){"use strict";var r,o,i=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},a=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.GameMap=void 0;const s=new Uint16Array([-1]);class c extends Uint16Array{constructor(e=10,t=e){super((0|e)*(0|t)),r.set(this,void 0),o.set(this,void 0),i(this,r,0|e),i(this,o,0|t)}get width(){return a(this,r)}get height(){return a(this,o)}get maxScore(){return s[0]}posIndex(e){const{width:t}=this,n=e%t;return[n,(e-n)/t]}posValue(e){const t=this.indexOf(0|e);return-1==t?[-1,-1]:this.posIndex(t)}getIndex(e=0,t=e,n=0,r=0){const{width:o,height:i}=this;for(e+=n,t+=r;e<0;)e+=o;for(;e>o-1;)e-=o;for(;t<0;)t+=i;for(;t>i-1;)t-=i;return t*o+e}getValue(e=0,t=e,n=0,r=0){return this[this.getIndex(e,t,n,r)]}}t.GameMap=c,r=new WeakMap,o=new WeakMap},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rand=void 0,t.rand=function(e,t){var n=arguments.length;if(0===n)e=0,t=2147483647;else if(1===n)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(t-e+1))+e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseRenderer=void 0;t.BaseRenderer=class{constructor(e){this.game=e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createShareStore=void 0;const r=n(1);t.createShareStore=function(e){let t=e,n=null,o=!0,i=[];function a(e){o&&(o=!1,n=e&&"object"==typeof e&&!Array.isArray(e)),t=function(e){return n?{...t,...e}:e}(e);for(let e of i)e(t)}return a(e),{useState:function(e=t){let[n,o]=r.useState(e);return r.useEffect(()=>{void 0!==e&&a(e)},[]),r.useEffect(()=>(i.push(o),()=>{let e=i.indexOf(o);-1!==e&&i.splice(e,1)}),[]),[n,a]},get:function(){return t},set:a}}},function(e,t,n){var r=n(3),o=n(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,".main-component{border:1px solid #999999;background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;padding:30px;padding-top:80px}\n",""]),t.default=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameComponent=void 0;const o=r(n(1));n(21);const i=n(23),a=n(26);t.GameComponent=({renderer:e})=>o.default.createElement("div",{className:"game-component"},o.default.createElement(a.GameInfoComponent,{renderer:e}),o.default.createElement(i.GameMapComponent,{renderer:e}))},function(e,t,n){var r=n(3),o=n(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,".game-component{display:flex;align-content:centerd;align-items:center;justify-content:center}\n",""]),t.default=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameMapComponent=void 0;const o=r(n(1)),i=n(7),a=n(6),s=n(4);function c(e){switch(e.value){case a.SnakeObject.CLEAR:return"";case a.SnakeObject.APPLE:return"green";case a.SnakeObject.HEAD:return"red";case a.SnakeObject.TAIL:return"cyan";case a.SnakeObject.BODY:return""}}n(24),t.GameMapComponent=({renderer:e,size:t=16})=>{const[n]=e.useData(),{width:r,height:u}=e,l=s.Range.go(0,u).map(e=>s.Range.go(0,r).map(t=>n[e*r+t]));return o.default.createElement("div",{className:"gamemap-component"},l.map((e,n)=>o.default.createElement("p",{key:"row-"+n},e.map((e,r)=>{const s={width:t,height:t,fontSize:t-2};return o.default.createElement("span",{style:s,key:`symbol-${n}-${r}`,className:c(e)},function(e){switch(e.value){case a.SnakeObject.HEAD:case a.SnakeObject.TAIL:case a.SnakeObject.BODY:switch(e.direction){case i.DirectionBlock.TOP:return"";case i.DirectionBlock.BOTTOM:return"";case i.DirectionBlock.LEFT:return"";case i.DirectionBlock.RIGHT:return"";case i.DirectionBlock.VERTICAL:return"";case i.DirectionBlock.HORIZONTAL:return"";case i.DirectionBlock.TOP_LEFT:return"";case i.DirectionBlock.TOP_RIGHT:return"";case i.DirectionBlock.BOTTOM_LEFT:return"";case i.DirectionBlock.BOTTOM_RIGHT:return""}case a.SnakeObject.APPLE:return"";case a.SnakeObject.CLEAR:return""}}(e))}))))}},function(e,t,n){var r=n(3),o=n(25);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),s=n(5),c=n(8),u=n(9),l=n(10),d=o()(!1),f=a()(s.a),h=a()(s.a,{hash:"#iefix"}),p=a()(c.a),m=a()(u.a),g=a()(l.a,{hash:"#icomoon"});d.push([e.i,"@font-face{font-family:'icomoon';src:url("+f+");src:url("+h+') format("embedded-opentype"),url('+p+') format("truetype"),url('+m+') format("woff"),url('+g+") format(\"svg\");font-weight:normal;font-style:normal;font-display:block}.gamemap-component{color:#ffffff;background-color:rgba(255,255,255,0.2);padding:2px;padding-top:6px;transform:scale(1.2)}.gamemap-component p{margin:0;padding:0;margin-top:-4px;padding-left:2px}.gamemap-component p span{display:inline-block;margin-left:-2px;margin-top:-2px;font-family:'icomoon' !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.gamemap-component p span.green{color:green}.gamemap-component p span.red{color:red}.gamemap-component p span.cyan{color:cyan}\n",""]),t.default=d},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameInfoComponent=void 0;const o=r(n(1));n(27),t.GameInfoComponent=({renderer:e})=>{const[{ticks:t,score:n}]=e.useInfo();return o.default.createElement("div",{className:"gameinfo-component"},o.default.createElement("p",null,"Score: ",o.default.createElement("b",null,n),", Ticks: ",t))}},function(e,t,n){var r=n(3),o=n(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,".gameinfo-component{position:absolute;top:-15px;left:0;right:0;text-align:left;padding:10px;color:#fff}\n",""]),t.default=o},function(e,t,n){var r=n(3),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"html,body,#root{width:100%;height:100%;margin:0;padding:0;background-color:#555}\n",""]),t.default=o}]);