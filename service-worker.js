if(!self.define){let s,r={};const o=(o,e)=>(o=new URL(o+".js",e).href,r[o]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=r,document.head.appendChild(s)}else s=o,importScripts(o),r()})).then((()=>{let s=r[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(e,u)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let c={};const n=s=>o(s,l),i={module:{uri:l},exports:c,require:n};r[l]=Promise.all(e.map((s=>i[s]||n(s)))).then((s=>(u(...s),c)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"sus_front_celular_2"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/sus_front_celular_producao/css/395.92475cb3.css",revision:null},{url:"/sus_front_celular_producao/css/581.234d2226.css",revision:null},{url:"/sus_front_celular_producao/css/812.490c1cef.css",revision:null},{url:"/sus_front_celular_producao/css/app.b2abdcf7.css",revision:null},{url:"/sus_front_celular_producao/img/qr_code_img.png",revision:"c6c74bd7829e3ef40a4d181cc057c715"},{url:"/sus_front_celular_producao/index.html",revision:"c89ead4a3e7294ea1263a998e4c2c0c1"},{url:"/sus_front_celular_producao/js/395.3820017b.js",revision:null},{url:"/sus_front_celular_producao/js/581.2dd122d7.js",revision:null},{url:"/sus_front_celular_producao/js/66.fb0f8089.js",revision:null},{url:"/sus_front_celular_producao/js/812.f364c59b.js",revision:null},{url:"/sus_front_celular_producao/js/app.90d10ad0.js",revision:null},{url:"/sus_front_celular_producao/js/chunk-vendors.4e6bf652.js",revision:null},{url:"/sus_front_celular_producao/manifest.json",revision:"149df543f1d11045e21d35e1e5bdf87a"},{url:"/sus_front_celular_producao/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
