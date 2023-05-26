(function(){"use strict";var e={9065:function(e,t,n){var o=n(9242),r=n(3396),i=n(4870),s=n(2483);var a={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.j4)((0,i.SU)(s.MA)))}},l=n(89);const c=(0,l.Z)(a,[["__scopeId","data-v-d048656c"]]);var u=c,d=n(5431);(0,d.z)("/sus_front_celular_producao/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(7139);const p={id:"mainContainer"},h={class:"floatingBox"},g={class:"susLogo"},m=["src"],v={class:"inputBox"},S={class:"inputBox btOKField"},y={key:0,class:"mesagemDeErro"},b={class:"hello"};function _(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("main",p,[(0,r._)("div",h,[(0,r._)("div",g,[(0,r._)("img",{class:"susLogoImg",src:s.logo,alt:"susLogo"},null,8,m)]),(0,r._)("div",v,[(0,r.wy)((0,r._)("input",{class:"inputHome",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.CPF=e),placeholder:"CPF"},null,512),[[o.nr,s.CPF]]),(0,r.wy)((0,r._)("input",{class:"inputHome",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.cSUS=e),placeholder:"Cartão SUS"},null,512),[[o.nr,s.cSUS]])]),(0,r._)("div",S,[(0,r._)("input",{class:"inputHome btOK",type:"button",value:"OK",onClick:t[2]||(t[2]=(...e)=>a.consultClient&&a.consultClient(...e))})]),s.showEMessage?((0,r.wg)(),(0,r.iD)("div",y,(0,f.zw)(s.deuMerda),1)):(0,r.kq)("",!0),(0,r._)("div",b,[(0,r.Uk)(" É sua primeira vez por aqui? Clique "),(0,r._)("span",{class:"cliqueAqui",onClick:t[3]||(t[3]=(...e)=>a.switchPageCad&&a.switchPageCad(...e))},"Aqui"),(0,r.Uk)(" para fazer seu cadastro. ")])])])}n(7658);var w=n(4161);const C=w.Z.create();var P={data(){return{cSUS:null,CPF:null,showEMessage:!1,deuMerda:null,rClient:null,logo:"https://phsantosalves.github.io/sus_front_recepcao_producao/img/icons/sus-logo.svg",BASE_URL:null}},mounted(){this.pedeNotifyPermission(),this.BASE_URL="https://vizinhoapi.herokuapp.com/",this.verifySection()},methods:{pedeNotifyPermission(){"Notification"in window&&Notification.permission,"granted"!==Notification.permission&&Notification.requestPermission().then((e=>{}))},verifySection(){let e=localStorage.getItem("secction_page"),t=localStorage.getItem("client");null===t&&(localStorage.setItem("secction_page","home"),localStorage.setItem("sPrefix",null),localStorage.setItem("sSelection",null),this.$router.push("/")),null===e&&(localStorage.setItem("secction_page","home"),localStorage.setItem("sPrefix",null),localStorage.setItem("sSelection",null),localStorage.setItem("client",null),this.$router.push("/")),t&&"home"!==e&&null!==e&&this.$router.push("/selecao")},switchPageCad(){this.$router.push("/cadastro")},async verifyCad(){this.CPF&&(this.CPF=this.CPF.replace(/[.,() -]/g,""),this.CPF=this.CPF.replace(/\D/g,"")),this.cSUS&&(this.cSUS=this.cSUS.replace(/[.,() -]/g,""),this.cSUS=this.cSUS.replace(/\D/g,""));try{const e=await C.post(this.BASE_URL+"clientes/sus",{doc:this.CPF,docsus:this.cSUS,vertype:1}),t=e.data.response;return t&&(this.rClient=t.client),t.status}catch(e){return!1}},async consultClient(){if(this.cSUS&&this.CPF){let e=await this.verifyCad();if(e){let e=JSON.stringify(this.rClient);localStorage.setItem("secction_page","selecao"),localStorage.setItem("client",e),this.$router.push("/selecao")}else this.deuMerda="Paciente não encontrado.",this.showEMessage=!0,setTimeout((()=>{this.showEMessage=!1}),5e3)}else this.deuMerda="Parâmetros inválidos!",this.showEMessage=!0,setTimeout((()=>{this.showEMessage=!1}),5e3)}}};const k=(0,l.Z)(P,[["render",_],["__scopeId","data-v-b10a8c90"]]);var E=k;const U=[{path:"/",name:"home",component:E},{path:"/cadastro",name:"cadastro",component:()=>n.e(581).then(n.bind(n,6581))},{path:"/selecao",name:"selecao",component:()=>Promise.all([n.e(66),n.e(812)]).then(n.bind(n,5812))},{path:"/fila",name:"fila",component:()=>Promise.all([n.e(66),n.e(395)]).then(n.bind(n,6395))}],A=(0,s.p7)({history:(0,s.r5)(),routes:U});var N=A,O=n(65),F=(0,O.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(u).use(F).use(N).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{66:"fb0f8089",395:"3820017b",581:"2dd122d7",812:"f364c59b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{395:"92475cb3",581:"234d2226",812:"490c1cef"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sus_front_celular_2:";n.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/sus_front_celular_producao/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return r();e(o,a,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={395:1,581:1,812:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunksus_front_celular_2"]=self["webpackChunksus_front_celular_2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9065)}));o=n.O(o)})();
//# sourceMappingURL=app.90d10ad0.js.map