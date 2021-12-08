import{r as a,p as I,u as O,j as y,a as D}from"./vendor.3f94e942.js";const R=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}};R();const S="modulepreload",L={},A="./",i=function(r,c){return!c||c.length===0?r():Promise.all(c.map(e=>{if(e=`${A}${e}`,e in L)return;L[e]=!0;const o=e.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":S,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((u,p)=>{n.addEventListener("load",u),n.addEventListener("error",p)})})).then(()=>r())};function k(t){switch(t){case"../commands/author.ts":return i(()=>import("./author.97390bc4.js"),[]);case"../commands/counter.ts":return i(()=>import("./counter.dcdf7081.js"),["assets/counter.dcdf7081.js","assets/delay.2ef41e11.js"]);case"../commands/eval.ts":return i(()=>import("./eval.086e2fb6.js"),[]);case"../commands/github.ts":return i(()=>import("./github.617cb376.js"),[]);case"../commands/help.ts":return i(()=>import("./help.9fed3847.js"),[]);case"../commands/ping.ts":return i(()=>import("./ping.ba9dd065.js"),["assets/ping.ba9dd065.js","assets/delay.2ef41e11.js"]);default:return new Promise(function(r,c){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}const V={"../commands/author.ts":()=>i(()=>import("./author.97390bc4.js"),[]),"../commands/counter.ts":()=>i(()=>import("./counter.dcdf7081.js"),["assets/counter.dcdf7081.js","assets/delay.2ef41e11.js"]),"../commands/eval.ts":()=>i(()=>import("./eval.086e2fb6.js"),[]),"../commands/github.ts":()=>i(()=>import("./github.617cb376.js"),[]),"../commands/help.ts":()=>i(()=>import("./help.9fed3847.js"),[]),"../commands/ping.ts":()=>i(()=>import("./ping.ba9dd065.js"),["assets/ping.ba9dd065.js","assets/delay.2ef41e11.js"])},$=()=>Promise.all([...Object.entries(V).map(([t])=>{var r;return(r=t.split("/").pop())==null?void 0:r.split(".").slice(0,-1).join(".")}).map(async t=>{const r=await k(`../commands/${t}.ts`);return{name:t,description:r._description_}}),{name:"clear",description:"Clear console"}]),w=async()=>({startTime:Date.now(),commands:await $()});function C(){return new Worker("./assets/worker.7f84e0e8.js",{type:"module"})}const N="0.0.1",M=t=>{const[r]=a.exports.useState(()=>I(typeof t=="function"?t():t));return O(r),r},q={"/src/commands/author.ts":()=>i(()=>import("./author.97390bc4.js"),[]),"/src/commands/counter.ts":()=>i(()=>import("./counter.dcdf7081.js"),["assets/counter.dcdf7081.js","assets/delay.2ef41e11.js"]),"/src/commands/eval.ts":()=>i(()=>import("./eval.086e2fb6.js"),[]),"/src/commands/github.ts":()=>i(()=>import("./github.617cb376.js"),[]),"/src/commands/help.ts":()=>i(()=>import("./help.9fed3847.js"),[]),"/src/commands/ping.ts":()=>i(()=>import("./ping.ba9dd065.js"),["assets/ping.ba9dd065.js","assets/delay.2ef41e11.js"])},H=()=>{const t=M(()=>({running:!1,output:[`Browser CLI v${N}
`,`Type "help" for start or press "Tab"
`]})),r=e=>{!e||t.output.push(e+(e[e.length-1]==`
`?"":`
`))},c={log(...e){r(e.join(" "))},error(...e){r("Error: "+e.join(" "))},clear(){t.output.splice(0)}};return{running:t.running,output:t.output,clear:c.clear,context:c,runCommand(e,o){if(t.output.push(o+e+`
`),e=e.trim(),!e)return;const[s,...n]=e.split(/\s+/);switch(s){case"clear":return c.clear();default:{t.running=!0;const u=[],p=()=>u.splice(0).map(l=>l()),f=new C,d=l=>{l.preventDefault(),l.ctrlKey&&l.key=="c"&&p()};document.addEventListener("keydown",d),new Promise(async l=>{f.onmessage=({data:m})=>{const{program:_,args:j}=JSON.parse(m);if(_=="end")return l();c[_](...j)};const g=q[`/src/commands/${s}.ts`];u.push(()=>{f.terminate(),l()}),f.postMessage(JSON.stringify({program:s,args:n,env:await w(),cmd:(g==null?void 0:g.toString())||""}))}).finally(()=>{p(),t.running=!1,document.removeEventListener("keydown",d)})}}}}},W="_root_1v506_1";var z={root:W};const B=(t,r)=>{a.exports.useEffect(()=>(document.addEventListener(t,r),()=>document.removeEventListener(t,r)))},F="_root_1u99m_1",K="_show_1u99m_5";var P={root:F,show:K};const E=y.exports.jsx,x=y.exports.jsxs,J=y.exports.Fragment,U=()=>{const[t,r]=a.exports.useState(!0);return a.exports.useEffect(()=>{let c=setTimeout(()=>{r(e=>!e)},500);return()=>clearTimeout(c)}),E("span",{className:P.root+" "+(t?P.show:void 0)})},G="_root_86tds_1";var Q={root:G};const X=({context:t,onSubmit:r=()=>null})=>{var g;const[c]=a.exports.useState("vic@host ~ "),[e,o]=a.exports.useState(""),[s,n]=a.exports.useState([]),[u,p]=a.exports.useState(void 0),f=typeof u=="number"||!!e.trim()&&e.trim().split(/\s+/).length==1,d=typeof u=="undefined"?e:((g=s[u])==null?void 0:g.name)||e,b=s.length>0&&typeof u=="number",l=s.map(({name:m},_)=>({name:m,index:_})).filter(m=>m.name.indexOf(e)==0);return a.exports.useEffect(()=>{w().then(m=>n(m.commands))},[]),a.exports.useEffect(()=>{p(void 0)},[e]),B("keydown",m=>{m.preventDefault();const{key:_,code:j}=m;if(m.ctrlKey&&_=="l"){t.clear();return}switch(_){case"Backspace":o(h=>{const v=h!=d?d:h;return v.substr(0,v.length-1)});break;case"Tab":p(h=>{if(!l.length)return;if(typeof h==null)return 0;const v=l.findIndex(T=>T.index==h);return l[v+1]?l[v+1].index:l[0].index});break;case"Enter":r(e!=d?d:e,c),o("");break;default:_.length==1?o(h=>(e!=d?d:h)+_):console.log(_,j)}}),x(J,{children:[x("pre",{className:Q.root,children:[c+d,b?` (${s[u].description})
`:E(U,{})]}),f?E("pre",{children:l.map(m=>m.index==u?`[-${m.name}-]`:`  ${m.name}  `).join(" ")}):null]})},Y=()=>{const t=a.exports.useRef(),r=a.exports.useMemo(()=>({scroll:0,scrollSize:0,height:0}),[]),{running:c,output:e,runCommand:o,context:s}=H();return a.exports.useEffect(()=>{if(!t.current)return;const{scroll:n,scrollSize:u}=r;n>=u&&(t.current.scrollTop=t.current.scrollHeight);const{offsetHeight:f,scrollTop:d,scrollHeight:b}=t.current;r.scroll=d+f,r.scrollSize=b}),a.exports.useEffect(()=>{var u;const n=()=>{if(!t.current)return;const{offsetHeight:p,scrollTop:f}=t.current;r.scroll=p+f};return(u=t.current)==null||u.addEventListener("scroll",n),()=>{var p;return(p=t.current)==null?void 0:p.removeEventListener("scroll",n)}}),x("div",{ref:t,className:z.root,children:[a.exports.createElement("pre",null,...e),c?null:E(X,{context:s,onSubmit:o})]})},Z=document.getElementById("app");D.exports.render(E(a.exports.StrictMode,{children:E(Y,{})}),Z);