(function(){"use strict";const d="modulepreload",l={},m="./",f=function(s,o){return s()};var u=void 0;try{if(!(self instanceof Window))throw"Hi"}catch{const s={log(...o){postMessage(JSON.stringify({program:"log",args:o}))},error(...o){postMessage(JSON.stringify({program:"error",args:o}))},clear(){postMessage(JSON.stringify({program:"clear",args:[]}))}};addEventListener("message",async({data:o})=>{const{program:r="",args:t=[],cmd:c}=JSON.parse(o);(async()=>{try{let e={},i=c.split('"')[1];if(!i)throw new Error(`commands/${r}`);try{e=await f(()=>import(`${i}`),void 0)}catch{try{e=await f(()=>import(`../commands/${r}`),void 0)}catch{}}const a=t[0];if(!e)throw new Error(`commands/${r}`);return!e.default&&!e[a]?`Error executable in "${r}"`:e[a]?typeof e[a]=="function"?await e[a].apply(s,t.splice(1)):e[a]:typeof e.default=="function"?await e.default.apply(s,t):e.default}catch(e){return e instanceof Error&&(e.message.indexOf(`commands/${r}`)!=-1||e.message.indexOf("import")!=-1)?`bsh: command not found: ${r}`:String(e)}})().then(s.log).catch(s.error).finally(()=>{postMessage(JSON.stringify({program:"end",args:[]}))})})}return u})();
