(self["webpackChunksus_front_celular_2"]=self["webpackChunksus_front_celular_2"]||[]).push([[66],{7066:function(t,e,s){"use strict";var n=s(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},2087:function(t,e,s){var n=s(7854),i=s(9781),r=s(7045),o=s(7066),h=s(7293),a=n.RegExp,c=a.prototype,u=i&&h((function(){var t=!0;try{a(".","d")}catch(u){t=!1}var e={},s="",n=t?"dgimsy":"gimsy",i=function(t,n){Object.defineProperty(e,t,{get:function(){return s+=n,!0}})},r={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(r.hasIndices="d"),r)i(o,r[o]);var h=Object.getOwnPropertyDescriptor(c,"flags").get.call(e);return h!==n||s!==n}));u&&r(c,"flags",{configurable:!0,get:o})},2066:function(t,e,s){"use strict";s.d(e,{io:function(){return Dt}});var n={};s.r(n),s.d(n,{Decoder:function(){return Bt},Encoder:function(){return Tt},PacketType:function(){return Ct},protocol:function(){return Rt}});s(7658);const i=Object.create(null);i["open"]="0",i["close"]="1",i["ping"]="2",i["pong"]="3",i["message"]="4",i["upgrade"]="5",i["noop"]="6";const r=Object.create(null);Object.keys(i).forEach((t=>{r[i[t]]=t}));const o={type:"error",data:"parser error"},h="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),a="function"===typeof ArrayBuffer,c=t=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,u=({type:t,data:e},s,n)=>h&&e instanceof Blob?s?n(e):p(e,n):a&&(e instanceof ArrayBuffer||c(e))?s?n(e):p(new Blob([e]),n):n(i[t]+(e||"")),p=(t,e)=>{const s=new FileReader;return s.onload=function(){const t=s.result.split(",")[1];e("b"+(t||""))},s.readAsDataURL(t)};var l=u;s(3767),s(8585),s(8696);const d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let Ft=0;Ft<d.length;Ft++)f[d.charCodeAt(Ft)]=Ft;const y=t=>{let e,s,n,i,r,o=.75*t.length,h=t.length,a=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);const c=new ArrayBuffer(o),u=new Uint8Array(c);for(e=0;e<h;e+=4)s=f[t.charCodeAt(e)],n=f[t.charCodeAt(e+1)],i=f[t.charCodeAt(e+2)],r=f[t.charCodeAt(e+3)],u[a++]=s<<2|n>>4,u[a++]=(15&n)<<4|i>>2,u[a++]=(3&i)<<6|63&r;return c},g="function"===typeof ArrayBuffer,m=(t,e)=>{if("string"!==typeof t)return{type:"message",data:v(t,e)};const s=t.charAt(0);if("b"===s)return{type:"message",data:b(t.substring(1),e)};const n=r[s];return n?t.length>1?{type:r[s],data:t.substring(1)}:{type:r[s]}:o},b=(t,e)=>{if(g){const s=y(t);return v(s,e)}return{base64:!0,data:t}},v=(t,e)=>{switch(e){case"blob":return t instanceof ArrayBuffer?new Blob([t]):t;case"arraybuffer":default:return t}};var k=m;const w=String.fromCharCode(30),_=(t,e)=>{const s=t.length,n=new Array(s);let i=0;t.forEach(((t,r)=>{l(t,!1,(t=>{n[r]=t,++i===s&&e(n.join(w))}))}))},E=(t,e)=>{const s=t.split(w),n=[];for(let i=0;i<s.length;i++){const t=k(s[i],e);if(n.push(t),"error"===t.type)break}return n},A=4;function O(t){if(t)return R(t)}function R(t){for(var e in O.prototype)t[e]=O.prototype[e];return t}O.prototype.on=O.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},O.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},O.prototype.off=O.prototype.removeListener=O.prototype.removeAllListeners=O.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<n.length;i++)if(s=n[i],s===e||s.fn===e){n.splice(i,1);break}return 0===n.length&&delete this._callbacks["$"+t],this},O.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),s=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(s){s=s.slice(0);n=0;for(var i=s.length;n<i;++n)s[n].apply(this,e)}return this},O.prototype.emitReserved=O.prototype.emit,O.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},O.prototype.hasListeners=function(t){return!!this.listeners(t).length};const C=(()=>"undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")())();function T(t,...e){return e.reduce(((e,s)=>(t.hasOwnProperty(s)&&(e[s]=t[s]),e)),{})}const B=C.setTimeout,x=C.clearTimeout;function N(t,e){e.useNativeTimers?(t.setTimeoutFn=B.bind(C),t.clearTimeoutFn=x.bind(C)):(t.setTimeoutFn=C.setTimeout.bind(C),t.clearTimeoutFn=C.clearTimeout.bind(C))}const L=1.33;function S(t){return"string"===typeof t?q(t):Math.ceil((t.byteLength||t.size)*L)}function q(t){let e=0,s=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?s+=1:e<2048?s+=2:e<55296||e>=57344?s+=3:(n++,s+=4);return s}class P extends Error{constructor(t,e,s){super(t),this.description=e,this.context=s,this.type="TransportError"}}class j extends O{constructor(t){super(),this.writable=!1,N(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,e,s){return super.emitReserved("error",new P(t,e,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=k(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}}const D="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),I=64,F={};let M,V=0,U=0;function H(t){let e="";do{e=D[t%I]+e,t=Math.floor(t/I)}while(t>0);return e}function K(){const t=H(+new Date);return t!==M?(V=0,M=t):t+"."+H(V++)}for(;U<I;U++)F[D[U]]=U;function Y(t){let e="";for(let s in t)t.hasOwnProperty(s)&&(e.length&&(e+="&"),e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e}function z(t){let e={},s=t.split("&");for(let n=0,i=s.length;n<i;n++){let t=s[n].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])}return e}let W=!1;try{W="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(It){}const $=W;function J(t){const e=t.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!e||$))return new XMLHttpRequest}catch(s){}if(!e)try{return new(C[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(s){}}function Q(){}const X=function(){const t=new J({xdomain:!1});return null!=t.responseType}();class G extends j{constructor(t){if(super(t),this.polling=!1,"undefined"!==typeof location){const e="https:"===location.protocol;let s=location.port;s||(s=e?"443":"80"),this.xd="undefined"!==typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}const e=t&&t.forceBase64;this.supportsBinary=X&&!e}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)};E(t,this.socket.binaryType).forEach(e),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,_(t,(t=>{this.doWrite(t,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let s="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=K()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port);const n=Y(t),i=-1!==this.opts.hostname.indexOf(":");return e+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new Z(this.uri(),t)}doWrite(t,e){const s=this.request({method:"POST",data:t});s.on("success",e),s.on("error",((t,e)=>{this.onError("xhr post error",t,e)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",((t,e)=>{this.onError("xhr poll error",t,e)})),this.pollXhr=t}}class Z extends O{constructor(t,e){super(),N(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){const t=T(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new J(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let t in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(t)&&e.setRequestHeader(t,this.opts.extraHeaders[t])}}catch(s){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{e.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"===typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(s){return void this.setTimeoutFn((()=>{this.onError(s)}),0)}"undefined"!==typeof document&&(this.index=Z.requestsCount++,Z.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=Q,t)try{this.xhr.abort()}catch(e){}"undefined"!==typeof document&&delete Z.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if(Z.requestsCount=0,Z.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",tt);else if("function"===typeof addEventListener){const t="onpagehide"in C?"pagehide":"unload";addEventListener(t,tt,!1)}function tt(){for(let t in Z.requests)Z.requests.hasOwnProperty(t)&&Z.requests[t].abort()}const et=(()=>{const t="function"===typeof Promise&&"function"===typeof Promise.resolve;return t?t=>Promise.resolve().then(t):(t,e)=>e(t,0)})(),st=C.WebSocket||C.MozWebSocket,nt=!0,it="arraybuffer",rt="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ot extends j{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,s=rt?{}:T(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=nt&&!rt?e?new st(t,e):new st(t):new st(t,e,s)}catch(It){return this.emitReserved("error",It)}this.ws.binaryType=this.socket.binaryType||it,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const s=t[e],n=e===t.length-1;l(s,this.supportsBinary,(t=>{const e={};if(!nt&&(s.options&&(e.compress=s.options.compress),this.opts.perMessageDeflate)){const s="string"===typeof t?Buffer.byteLength(t):t.length;s<this.opts.perMessageDeflate.threshold&&(e.compress=!1)}try{nt?this.ws.send(t):this.ws.send(t,e)}catch(i){}n&&et((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){"undefined"!==typeof this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let s="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=K()),this.supportsBinary||(t.b64=1);const n=Y(t),i=-1!==this.opts.hostname.indexOf(":");return e+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}check(){return!!st}}const ht={websocket:ot,polling:G},at=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ct=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ut(t){const e=t,s=t.indexOf("["),n=t.indexOf("]");-1!=s&&-1!=n&&(t=t.substring(0,s)+t.substring(s,n).replace(/:/g,";")+t.substring(n,t.length));let i=at.exec(t||""),r={},o=14;while(o--)r[ct[o]]=i[o]||"";return-1!=s&&-1!=n&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=pt(r,r["path"]),r.queryKey=lt(r,r["query"]),r}function pt(t,e){const s=/\/{2,9}/g,n=e.replace(s,"/").split("/");return"/"!=e.slice(0,1)&&0!==e.length||n.splice(0,1),"/"==e.slice(-1)&&n.splice(n.length-1,1),n}function lt(t,e){const s={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(s[e]=n)})),s}class dt extends O{constructor(t,e={}){super(),this.writeBuffer=[],t&&"object"===typeof t&&(e=t,t=null),t?(t=ut(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=ut(e.host).host),N(this,e),this.secure=null!=e.secure?e.secure:"undefined"!==typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=z(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"===typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=A,e.transport=t,this.id&&(e.sid=this.id);const s=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new ht[t](s)}open(){let t;if(this.opts.rememberUpgrade&&dt.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(e){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(t=>this.onClose("transport close",t)))}probe(t){let e=this.createTransport(t),s=!1;dt.priorWebsocketSuccess=!1;const n=()=>{s||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!s)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;dt.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{s||"closed"!==this.readyState&&(c(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function i(){s||(s=!0,c(),e.close(),e=null)}const r=t=>{const s=new Error("probe error: "+t);s.transport=e.name,i(),this.emitReserved("upgradeError",s)};function o(){r("transport closed")}function h(){r("socket closed")}function a(t){e&&t.name!==e.name&&i()}const c=()=>{e.removeListener("open",n),e.removeListener("error",r),e.removeListener("close",o),this.off("close",h),this.off("upgrading",a)};e.once("open",n),e.once("error",r),e.once("close",o),this.once("close",h),this.once("upgrading",a),e.open()}onOpen(){if(this.readyState="open",dt.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){const t=this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1;if(!t)return this.writeBuffer;let e=1;for(let s=0;s<this.writeBuffer.length;s++){const t=this.writeBuffer[s].data;if(t&&(e+=S(t)),s>0&&e>this.maxPayload)return this.writeBuffer.slice(0,s);e+=2}return this.writeBuffer}write(t,e,s){return this.sendPacket("message",t,e,s),this}send(t,e,s){return this.sendPacket("message",t,e,s),this}sendPacket(t,e,s,n){if("function"===typeof e&&(n=e,e=void 0),"function"===typeof s&&(n=s,s=null),"closing"===this.readyState||"closed"===this.readyState)return;s=s||{},s.compress=!1!==s.compress;const i={type:t,data:e,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),n&&this.once("flush",n),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},s=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?s():t()})):this.upgrading?s():t()),this}onError(t){dt.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"===typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let s=0;const n=t.length;for(;s<n;s++)~this.transports.indexOf(t[s])&&e.push(t[s]);return e}}dt.protocol=A;dt.protocol;function ft(t,e="",s){let n=t;s=s||"undefined"!==typeof location&&location,null==t&&(t=s.protocol+"//"+s.host),"string"===typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?s.protocol+t:s.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!==typeof s?s.protocol+"//"+t:"https://"+t),n=ut(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=-1!==n.host.indexOf(":"),r=i?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(s&&s.port===n.port?"":":"+n.port),n}s(2087);const yt="function"===typeof ArrayBuffer,gt=t=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,mt=Object.prototype.toString,bt="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===mt.call(Blob),vt="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===mt.call(File);function kt(t){return yt&&(t instanceof ArrayBuffer||gt(t))||bt&&t instanceof Blob||vt&&t instanceof File}function wt(t,e){if(!t||"object"!==typeof t)return!1;if(Array.isArray(t)){for(let e=0,s=t.length;e<s;e++)if(wt(t[e]))return!0;return!1}if(kt(t))return!0;if(t.toJSON&&"function"===typeof t.toJSON&&1===arguments.length)return wt(t.toJSON(),!0);for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)&&wt(t[s]))return!0;return!1}function _t(t){const e=[],s=t.data,n=t;return n.data=Et(s,e),n.attachments=e.length,{packet:n,buffers:e}}function Et(t,e){if(!t)return t;if(kt(t)){const s={_placeholder:!0,num:e.length};return e.push(t),s}if(Array.isArray(t)){const s=new Array(t.length);for(let n=0;n<t.length;n++)s[n]=Et(t[n],e);return s}if("object"===typeof t&&!(t instanceof Date)){const s={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=Et(t[n],e));return s}return t}function At(t,e){return t.data=Ot(t.data,e),delete t.attachments,t}function Ot(t,e){if(!t)return t;if(t&&!0===t._placeholder){const s="number"===typeof t.num&&t.num>=0&&t.num<e.length;if(s)return e[t.num];throw new Error("illegal attachments")}if(Array.isArray(t))for(let s=0;s<t.length;s++)t[s]=Ot(t[s],e);else if("object"===typeof t)for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(t[s]=Ot(t[s],e));return t}const Rt=5;var Ct;(function(t){t[t["CONNECT"]=0]="CONNECT",t[t["DISCONNECT"]=1]="DISCONNECT",t[t["EVENT"]=2]="EVENT",t[t["ACK"]=3]="ACK",t[t["CONNECT_ERROR"]=4]="CONNECT_ERROR",t[t["BINARY_EVENT"]=5]="BINARY_EVENT",t[t["BINARY_ACK"]=6]="BINARY_ACK"})(Ct||(Ct={}));class Tt{constructor(t){this.replacer=t}encode(t){return t.type!==Ct.EVENT&&t.type!==Ct.ACK||!wt(t)?[this.encodeAsString(t)]:this.encodeAsBinary({type:t.type===Ct.EVENT?Ct.BINARY_EVENT:Ct.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id})}encodeAsString(t){let e=""+t.type;return t.type!==Ct.BINARY_EVENT&&t.type!==Ct.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=_t(t),s=this.encodeAsString(e.packet),n=e.buffers;return n.unshift(s),n}}class Bt extends O{constructor(t){super(),this.reviver=t}add(t){let e;if("string"===typeof t){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const s=e.type===Ct.BINARY_EVENT;s||e.type===Ct.BINARY_ACK?(e.type=s?Ct.EVENT:Ct.ACK,this.reconstructor=new xt(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else{if(!kt(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e))}}decodeString(t){let e=0;const s={type:Number(t.charAt(0))};if(void 0===Ct[s.type])throw new Error("unknown packet type "+s.type);if(s.type===Ct.BINARY_EVENT||s.type===Ct.BINARY_ACK){const n=e+1;while("-"!==t.charAt(++e)&&e!=t.length);const i=t.substring(n,e);if(i!=Number(i)||"-"!==t.charAt(e))throw new Error("Illegal attachments");s.attachments=Number(i)}if("/"===t.charAt(e+1)){const n=e+1;while(++e){const s=t.charAt(e);if(","===s)break;if(e===t.length)break}s.nsp=t.substring(n,e)}else s.nsp="/";const n=t.charAt(e+1);if(""!==n&&Number(n)==n){const n=e+1;while(++e){const s=t.charAt(e);if(null==s||Number(s)!=s){--e;break}if(e===t.length)break}s.id=Number(t.substring(n,e+1))}if(t.charAt(++e)){const n=this.tryParse(t.substr(e));if(!Bt.isPayloadValid(s.type,n))throw new Error("invalid payload");s.data=n}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(e){return!1}}static isPayloadValid(t,e){switch(t){case Ct.CONNECT:return"object"===typeof e;case Ct.DISCONNECT:return void 0===e;case Ct.CONNECT_ERROR:return"string"===typeof e||"object"===typeof e;case Ct.EVENT:case Ct.BINARY_EVENT:return Array.isArray(e)&&("string"===typeof e[0]||"number"===typeof e[0]);case Ct.ACK:case Ct.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class xt{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const t=At(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Nt(t,e,s){return t.on(e,s),function(){t.off(e,s)}}const Lt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class St extends O{constructor(t,e,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Nt(t,"open",this.onopen.bind(this)),Nt(t,"packet",this.onpacket.bind(this)),Nt(t,"error",this.onerror.bind(this)),Nt(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io["_reconnecting"]||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(Lt.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const s={type:Ct.EVENT,data:e,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof e[e.length-1]){const t=this.ids++,n=e.pop();this._registerAckCallback(t,n),s.id=t}const n=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,i=this.flags.volatile&&(!n||!this.connected);return i||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){var s;const n=null!==(s=this.flags.timeout)&&void 0!==s?s:this._opts.ackTimeout;if(void 0===n)return void(this.acks[t]=e);const i=this.io.setTimeoutFn((()=>{delete this.acks[t];for(let e=0;e<this.sendBuffer.length;e++)this.sendBuffer[e].id===t&&this.sendBuffer.splice(e,1);e.call(this,new Error("operation has timed out"))}),n);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(i),e.apply(this,[null,...t])}}emitWithAck(t,...e){const s=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise(((n,i)=>{e.push(((t,e)=>s?t?i(t):n(e):n(t))),this.emit(t,...e)}))}_addToQueue(t){let e;"function"===typeof t[t.length-1]&&(e=t.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push(((t,...n)=>{if(s!==this._queue[0])return;const i=null!==t;return i?s.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(t)):(this._queue.shift(),e&&e(null,...n)),s.pending=!1,this._drainQueue()})),this._queue.push(s),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||0===this._queue.length)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth((t=>{this._sendConnectPacket(t)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Ct.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){const e=t.nsp===this.nsp;if(e)switch(t.type){case Ct.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ct.EVENT:case Ct.BINARY_EVENT:this.onevent(t);break;case Ct.ACK:case Ct.BINARY_ACK:this.onack(t);break;case Ct.DISCONNECT:this.ondisconnect();break;case Ct.CONNECT_ERROR:this.destroy();const e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e);break}}onevent(t){const e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const s of e)s.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&"string"===typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let s=!1;return function(...n){s||(s=!0,e.packet({type:Ct.ACK,id:t,data:n}))}}onack(t){const e=this.acks[t.id];"function"===typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((t=>this.emitEvent(t))),this.receiveBuffer=[],this.sendBuffer.forEach((t=>{this.notifyOutgoingListeners(t),this.packet(t)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((t=>t())),this.subs=void 0),this.io["_destroy"](this)}disconnect(){return this.connected&&this.packet({type:Ct.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const s of e)s.apply(this,t.data)}}}function qt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}qt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),s=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-s:t+s}return 0|Math.min(t,this.max)},qt.prototype.reset=function(){this.attempts=0},qt.prototype.setMin=function(t){this.ms=t},qt.prototype.setMax=function(t){this.max=t},qt.prototype.setJitter=function(t){this.jitter=t};class Pt extends O{constructor(t,e){var s;super(),this.nsps={},this.subs=[],t&&"object"===typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,N(this,e),this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(s=e.randomizationFactor)&&void 0!==s?s:.5),this.backoff=new qt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this._readyState="closed",this.uri=t;const i=e.parser||n;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==e.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new dt(this.uri,this.opts);const e=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const n=Nt(e,"open",(function(){s.onopen(),t&&t()})),i=Nt(e,"error",(e=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",e),t?t(e):s.maybeReconnectOnOpen()}));if(!1!==this._timeout){const t=this._timeout;0===t&&n();const s=this.setTimeoutFn((()=>{n(),e.close(),e.emit("error",new Error("timeout"))}),t);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}return this.subs.push(n),this.subs.push(i),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Nt(t,"ping",this.onping.bind(this)),Nt(t,"data",this.ondata.bind(this)),Nt(t,"error",this.onerror.bind(this)),Nt(t,"close",this.onclose.bind(this)),Nt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){et((()=>{this.emitReserved("packet",t)}),this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let s=this.nsps[t];return s?this._autoConnect&&!s.active&&s.connect():(s=new St(this,t,e),this.nsps[t]=s),s}_destroy(t){const e=Object.keys(this.nsps);for(const s of e){const t=this.nsps[s];if(t.active)return}this._close()}_packet(t){const e=this.encoder.encode(t);for(let s=0;s<e.length;s++)this.engine.write(e[s],t.options)}cleanup(){this.subs.forEach((t=>t())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn((()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open((e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()})))}),e);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const jt={};function Dt(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};const s=ft(t,e.path||"/socket.io"),n=s.source,i=s.id,r=s.path,o=jt[i]&&r in jt[i]["nsps"],h=e.forceNew||e["force new connection"]||!1===e.multiplex||o;let a;return h?a=new Pt(n,e):(jt[i]||(jt[i]=new Pt(n,e)),a=jt[i]),s.query&&!e.query&&(e.query=s.queryKey),a.socket(s.path,e)}Object.assign(Dt,{Manager:Pt,Socket:St,io:Dt,connect:Dt})}}]);
//# sourceMappingURL=66.fb0f8089.js.map