import{d as le,e as I,f as H,g as E,p as Oa,h as Pa,i as G,t as X,j as Q,F as Gt,k as Fo,n as ze,u as $,r as V,l as jo,m as Bo,q as wt,w as tt,s as Br,x as kn,y as $o,z as Ia,B as La,C as Na,D as Da,G as Uo,H as Fa,I as fe,J as ja,K as $r,L as qn,M as Ce,N as Mn,O as yn,P as Me,b as Jt,Q as Ho,R as Ba,S as Ur,T as $a,U as Hr,V as Ua,W as Ha,v as zr,X as za}from"./embedder.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Va=["xlink:href"],zo=le({__name:"UISvg",props:{icon:{}},setup(e){return(t,n)=>(I(),H("svg",null,[E("use",{"xlink:href":"#"+t.icon},null,8,Va)]))}}),Vr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ka={},qa=e=>(Oa("data-v-eea10147"),e=e(),Pa(),e),Ga={class:"menu"},Ja=qa(()=>E("a",{href:"https://fdm.dk/",class:"menu__logo-link"},[E("img",{src:"https://fdm.dk/themes/common/fdmmotus/images/logo.svg",alt:"logo",class:"menu__logo"})],-1)),Wa=[Ja];function Xa(e,t){return I(),H("div",Ga,Wa)}const Ya=Vr(Ka,[["render",Xa],["__scopeId","data-v-eea10147"]]),Za={class:"hero"},Qa={class:"hero__inner-wrapper"},el={class:"flex flex-col sm:items-center text-center"},tl={class:"mt-4"},nl=["innerHTML"],rl=le({__name:"UIHero",props:{header:{},subheader:{},icon:{}},setup(e){return(t,n)=>(I(),H("section",Za,[E("div",Qa,[G(zo,{class:"w-10 h-10 sm:w-16 sm:h-16",icon:t.icon},null,8,["icon"]),E("div",el,[E("h1",tl,X(t.header),1),t.subheader?(I(),H("div",{key:0,class:"mt-2 sm:mt-4 rich-text",innerHTML:t.subheader},null,8,nl)):Q("",!0)])])]))}}),sl=Vr(rl,[["__scopeId","data-v-48f2208d"]]),ol={class:"progression-bar"},il={class:"relative"},al={class:"progression-bar__step-number"},ll={class:"progression-bar__step-text"},cl=le({__name:"UIProgressBar",props:{steps:{},progressStatus:{}},setup(e){const t=e,n=s=>t.progressStatus>=s+1?"progression-bar__step-divider--completed":"",r=s=>t.progressStatus>s+1?"progression-bar__step-counter--completed":t.progressStatus===s+1?"progression-bar__step-counter--active":"";return(s,o)=>(I(),H("div",ol,[(I(!0),H(Gt,null,Fo(t.steps,(i,a)=>(I(),H("div",{key:a,class:"progression-bar__step"},[a!==0?(I(),H("span",{key:0,class:ze(["progression-bar__step-divider",n(a)])},null,2)):Q("",!0),E("div",il,[E("span",{class:ze(["progression-bar__step-counter",r(a)])},[G(zo,{class:"progression-bar__step-icon",icon:"check-mark"}),E("span",al,X(a+1),1)],2),E("span",ll,X(i),1)])]))),128))]))}}),Vo=Vr(cl,[["__scopeId","data-v-3c98e4ac"]]),dl={class:"header lg:justify-start"},ul=le({__name:"MembershipHeader",setup(e){return(t,n)=>(I(),H("header",dl,[G($(Ya))]))}});const Le=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},fl=Le(ul,[["__scopeId","data-v-2154cd3c"]]),pl=["xlink:href"],_e=le({__name:"UISvg",props:["classes","icon"],setup(e){const n=V(e.icon);return(r,s)=>(I(),H("svg",{class:ze(e.classes)},[E("use",{"xlink:href":"#"+n.value},null,8,pl)],2))}}),ml={class:"flex flex-col items-center m-auto"},hl={key:0,class:"text-white"},gl=le({__name:"UILoadingSpinner",props:{loadingText:{},iconClass:{default:"w-20 h-20 m-4"}},setup(e){const t=e;return(n,r)=>(I(),H("div",ml,[G(_e,{class:ze(`${t.iconClass} loading-spinner`),icon:"loading-spinner"},null,8,["class"]),t.loadingText&&t.loadingText!==""?(I(),H("p",hl,X(t.loadingText),1)):Q("",!0)]))}});const vl=Le(gl,[["__scopeId","data-v-9175e78d"]]),kl={class:"absolute inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"},yl=le({__name:"UILoadingScreen",props:{loadingText:{}},setup(e){const t=e;return(n,r)=>(I(),H("div",kl,[G(vl,{"loading-text":t.loadingText},null,8,["loading-text"])]))}});function bl(){const e=V([]),t=V("");function n(s){var i;if(!((i=e.value)==null?void 0:i.find(a=>a===s))){const a=[...e.value];a.push(s),e.value=a}}function r(s){const i=[...e.value].filter(a=>a!==s);e.value=i}return{loadingStates:e,loadingMessage:t,addLoadingState:n,removeLoadingState:r}}const{loadingStates:_l,addLoadingState:xl,removeLoadingState:wl}=bl();function En(){return{loadingStates:_l,addLoadingState:xl,removeLoadingState:wl}}var Cl=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ko;const Sn=e=>Ko=e,qo=Symbol();function fr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ft;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ft||(Ft={}));function Ml(){const e=jo(!0),t=e.run(()=>V({}));let n=[],r=[];const s=Bo({install(o){Sn(s),s._a=o,o.provide(qo,s),o.config.globalProperties.$pinia=s,r.forEach(i=>n.push(i)),r=[]},use(o){return!this._a&&!Cl?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Go=()=>{};function Is(e,t,n,r=Go){e.push(t);const s=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&Na()&&Da(s),s}function gt(e,...t){e.slice().forEach(n=>{n(...t)})}const El=e=>e();function pr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];fr(s)&&fr(r)&&e.hasOwnProperty(n)&&!kn(r)&&!$o(r)?e[n]=pr(s,r):e[n]=r}return e}const Sl=Symbol();function Rl(e){return!fr(e)||!e.hasOwnProperty(Sl)}const{assign:Qe}=Object;function Tl(e){return!!(kn(e)&&e.effect)}function Al(e,t,n,r){const{state:s,actions:o,getters:i}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const d=Fa(n.state.value[e]);return Qe(d,o,Object.keys(i||{}).reduce((u,f)=>(u[f]=Bo(fe(()=>{Sn(n);const m=n._s.get(e);return i[f].call(m,m)})),u),{}))}return c=Jo(e,l,t,n,r,!0),c}function Jo(e,t,n={},r,s,o){let i;const a=Qe({actions:{}},n),c={deep:!0};let l,d,u=[],f=[],m;const h=r.state.value[e];!o&&!h&&(r.state.value[e]={}),V({});let v;function x(F){let S;l=d=!1,typeof F=="function"?(F(r.state.value[e]),S={type:Ft.patchFunction,storeId:e,events:m}):(pr(r.state.value[e],F),S={type:Ft.patchObject,payload:F,storeId:e,events:m});const C=v=Symbol();Uo().then(()=>{v===C&&(l=!0)}),d=!0,gt(u,S,r.state.value[e])}const _=o?function(){const{state:S}=n,C=S?S():{};this.$patch(B=>{Qe(B,C)})}:Go;function M(){i.stop(),u=[],f=[],r._s.delete(e)}function N(F,S){return function(){Sn(r);const C=Array.from(arguments),B=[],Y=[];function ve(re){B.push(re)}function ae(re){Y.push(re)}gt(f,{args:C,name:F,store:L,after:ve,onError:ae});let ke;try{ke=S.apply(this&&this.$id===e?this:L,C)}catch(re){throw gt(Y,re),re}return ke instanceof Promise?ke.then(re=>(gt(B,re),re)).catch(re=>(gt(Y,re),Promise.reject(re))):(gt(B,ke),ke)}}const j={_p:r,$id:e,$onAction:Is.bind(null,f),$patch:x,$reset:_,$subscribe(F,S={}){const C=Is(u,F,S.detached,()=>B()),B=i.run(()=>tt(()=>r.state.value[e],Y=>{(S.flush==="sync"?d:l)&&F({storeId:e,type:Ft.direct,events:m},Y)},Qe({},c,S)));return C},$dispose:M},L=Br(j);r._s.set(e,L);const D=r._a&&r._a.runWithContext||El,q=r._e.run(()=>(i=jo(),D(()=>i.run(t))));for(const F in q){const S=q[F];if(kn(S)&&!Tl(S)||$o(S))o||(h&&Rl(S)&&(kn(S)?S.value=h[F]:pr(S,h[F])),r.state.value[e][F]=S);else if(typeof S=="function"){const C=N(F,S);q[F]=C,a.actions[F]=S}}return Qe(L,q),Qe(Ia(L),q),Object.defineProperty(L,"$state",{get:()=>r.state.value[e],set:F=>{x(S=>{Qe(S,F)})}}),r._p.forEach(F=>{Qe(L,i.run(()=>F({store:L,app:r._a,pinia:r,options:a})))}),h&&o&&n.hydrate&&n.hydrate(L.$state,h),l=!0,d=!0,L}function Ol(e,t,n){let r,s;const o=typeof t=="function";typeof e=="string"?(r=e,s=o?n:t):(s=e,r=e.id);function i(a,c){const l=La();return a=a||(l?wt(qo,null):null),a&&Sn(a),a=Ko,a._s.has(r)||(o?Jo(r,t,s,a):Al(r,s,a)),a._s.get(r)}return i.$id=r,i}var he=(e=>(e.GENERIC="generic",e.UPDATE_ORDER="update-order",e.PRODUCT_RESOURCES="product-resources",e.PRODUCT_PACKAGE_CONFIG="product-package-config",e.OAUTH_EXCHANGE="oauth-exchange",e.CONTACT="contact",e.CONSENT="consent",e.USER="user",e))(he||{});function Wo(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xo}=Object.prototype,{getPrototypeOf:Kr}=Object,qr=(e=>t=>{const n=Xo.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qe=e=>(e=e.toLowerCase(),t=>qr(t)===e),Rn=e=>t=>typeof t===e,{isArray:Rt}=Array,Ut=Rn("undefined");function Pl(e){return e!==null&&!Ut(e)&&e.constructor!==null&&!Ut(e.constructor)&&nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Yo=qe("ArrayBuffer");function Il(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Yo(e.buffer),t}const Ll=Rn("string"),nt=Rn("function"),Zo=Rn("number"),Gr=e=>e!==null&&typeof e=="object",Nl=e=>e===!0||e===!1,pn=e=>{if(qr(e)!=="object")return!1;const t=Kr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Dl=qe("Date"),Fl=qe("File"),jl=qe("Blob"),Bl=qe("FileList"),$l=e=>Gr(e)&&nt(e.pipe),Ul=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Xo.call(e)===t||nt(e.toString)&&e.toString()===t)},Hl=qe("URLSearchParams"),zl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wt(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Rt(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function Qo(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ei=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ti=e=>!Ut(e)&&e!==ei;function mr(){const{caseless:e}=ti(this)&&this||{},t={},n=(r,s)=>{const o=e&&Qo(t,s)||s;pn(t[o])&&pn(r)?t[o]=mr(t[o],r):pn(r)?t[o]=mr({},r):Rt(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Wt(arguments[r],n);return t}const Vl=(e,t,n,{allOwnKeys:r}={})=>(Wt(t,(s,o)=>{n&&nt(s)?e[o]=Wo(s,n):e[o]=s},{allOwnKeys:r}),e),Kl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ql=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Gl=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Kr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jl=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wl=e=>{if(!e)return null;if(Rt(e))return e;let t=e.length;if(!Zo(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xl=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kr(Uint8Array)),Yl=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Zl=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ql=qe("HTMLFormElement"),ec=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ls=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tc=qe("RegExp"),ni=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wt(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},nc=e=>{ni(e,(t,n)=>{if(nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rc=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return Rt(e)?r(e):r(String(e).split(t)),n},sc=()=>{},oc=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Gn="abcdefghijklmnopqrstuvwxyz",Ns="0123456789",ri={DIGIT:Ns,ALPHA:Gn,ALPHA_DIGIT:Gn+Gn.toUpperCase()+Ns},ic=(e=16,t=ri.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ac(e){return!!(e&&nt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const lc=e=>{const t=new Array(10),n=(r,s)=>{if(Gr(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=Rt(r)?[]:{};return Wt(r,(i,a)=>{const c=n(i,s+1);!Ut(c)&&(o[a]=c)}),t[s]=void 0,o}}return r};return n(e,0)},y={isArray:Rt,isArrayBuffer:Yo,isBuffer:Pl,isFormData:Ul,isArrayBufferView:Il,isString:Ll,isNumber:Zo,isBoolean:Nl,isObject:Gr,isPlainObject:pn,isUndefined:Ut,isDate:Dl,isFile:Fl,isBlob:jl,isRegExp:tc,isFunction:nt,isStream:$l,isURLSearchParams:Hl,isTypedArray:Xl,isFileList:Bl,forEach:Wt,merge:mr,extend:Vl,trim:zl,stripBOM:Kl,inherits:ql,toFlatObject:Gl,kindOf:qr,kindOfTest:qe,endsWith:Jl,toArray:Wl,forEachEntry:Yl,matchAll:Zl,isHTMLForm:Ql,hasOwnProperty:Ls,hasOwnProp:Ls,reduceDescriptors:ni,freezeMethods:nc,toObjectSet:rc,toCamelCase:ec,noop:sc,toFiniteNumber:oc,findKey:Qo,global:ei,isContextDefined:ti,ALPHABET:ri,generateString:ic,isSpecCompliantForm:ac,toJSONObject:lc};function J(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}y.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const si=J.prototype,oi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{oi[e]={value:e}});Object.defineProperties(J,oi);Object.defineProperty(si,"isAxiosError",{value:!0});J.from=(e,t,n,r,s,o)=>{const i=Object.create(si);return y.toFlatObject(e,i,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),J.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const cc=null;function hr(e){return y.isPlainObject(e)||y.isArray(e)}function ii(e){return y.endsWith(e,"[]")?e.slice(0,-2):e}function Ds(e,t,n){return e?e.concat(t).map(function(s,o){return s=ii(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function dc(e){return y.isArray(e)&&!e.some(hr)}const uc=y.toFlatObject(y,{},null,function(t){return/^is[A-Z]/.test(t)});function Tn(e,t,n){if(!y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!y.isUndefined(x[v])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(t);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(y.isDate(h))return h.toISOString();if(!c&&y.isBlob(h))throw new J("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(h)||y.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,v,x){let _=h;if(h&&!x&&typeof h=="object"){if(y.endsWith(v,"{}"))v=r?v:v.slice(0,-2),h=JSON.stringify(h);else if(y.isArray(h)&&dc(h)||(y.isFileList(h)||y.endsWith(v,"[]"))&&(_=y.toArray(h)))return v=ii(v),_.forEach(function(N,j){!(y.isUndefined(N)||N===null)&&t.append(i===!0?Ds([v],j,o):i===null?v:v+"[]",l(N))}),!1}return hr(h)?!0:(t.append(Ds(x,v,o),l(h)),!1)}const u=[],f=Object.assign(uc,{defaultVisitor:d,convertValue:l,isVisitable:hr});function m(h,v){if(!y.isUndefined(h)){if(u.indexOf(h)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(h),y.forEach(h,function(_,M){(!(y.isUndefined(_)||_===null)&&s.call(t,_,y.isString(M)?M.trim():M,v,f))===!0&&m(_,v?v.concat(M):[M])}),u.pop()}}if(!y.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Fs(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Jr(e,t){this._pairs=[],e&&Tn(e,this,t)}const ai=Jr.prototype;ai.append=function(t,n){this._pairs.push([t,n])};ai.toString=function(t){const n=t?function(r){return t.call(this,r,Fs)}:Fs;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function fc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function li(e,t,n){if(!t)return e;const r=n&&n.encode||fc,s=n&&n.serialize;let o;if(s?o=s(t,n):o=y.isURLSearchParams(t)?t.toString():new Jr(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class pc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){y.forEach(this.handlers,function(r){r!==null&&t(r)})}}const js=pc,ci={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mc=typeof URLSearchParams<"u"?URLSearchParams:Jr,hc=FormData,gc=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),vc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),De={isBrowser:!0,classes:{URLSearchParams:mc,FormData:hc,Blob},isStandardBrowserEnv:gc,isStandardBrowserWebWorkerEnv:vc,protocols:["http","https","file","blob","url","data"]};function kc(e,t){return Tn(e,new De.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return De.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yc(e){return y.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bc(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function di(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),c=o>=n.length;return i=!i&&y.isArray(s)?s.length:i,c?(y.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!y.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&y.isArray(s[i])&&(s[i]=bc(s[i])),!a)}if(y.isFormData(e)&&y.isFunction(e.entries)){const n={};return y.forEachEntry(e,(r,s)=>{t(yc(r),s,n,0)}),n}return null}const _c={"Content-Type":void 0};function xc(e,t,n){if(y.isString(e))try{return(t||JSON.parse)(e),y.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const An={transitional:ci,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=y.isObject(t);if(o&&y.isHTMLForm(t)&&(t=new FormData(t)),y.isFormData(t))return s&&s?JSON.stringify(di(t)):t;if(y.isArrayBuffer(t)||y.isBuffer(t)||y.isStream(t)||y.isFile(t)||y.isBlob(t))return t;if(y.isArrayBufferView(t))return t.buffer;if(y.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kc(t,this.formSerializer).toString();if((a=y.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Tn(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),xc(t)):t}],transformResponse:[function(t){const n=this.transitional||An.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&y.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:De.classes.FormData,Blob:De.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(t){An.headers[t]={}});y.forEach(["post","put","patch"],function(t){An.headers[t]=y.merge(_c)});const Wr=An,wc=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cc=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&wc[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Bs=Symbol("internals");function It(e){return e&&String(e).trim().toLowerCase()}function mn(e){return e===!1||e==null?e:y.isArray(e)?e.map(mn):String(e)}function Mc(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Ec(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Jn(e,t,n,r){if(y.isFunction(r))return r.call(this,t,n);if(y.isString(t)){if(y.isString(r))return t.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(t)}}function Sc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rc(e,t){const n=y.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class On{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,c,l){const d=It(c);if(!d)throw new Error("header name must be a non-empty string");const u=y.findKey(s,d);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=mn(a))}const i=(a,c)=>y.forEach(a,(l,d)=>o(l,d,c));return y.isPlainObject(t)||t instanceof this.constructor?i(t,n):y.isString(t)&&(t=t.trim())&&!Ec(t)?i(Cc(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=It(t),t){const r=y.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Mc(s);if(y.isFunction(n))return n.call(this,s,r);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=It(t),t){const r=y.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Jn(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=It(i),i){const a=y.findKey(r,i);a&&(!n||Jn(r,r[a],a,n))&&(delete r[a],s=!0)}}return y.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Jn(this,this[o],o,t))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return y.forEach(this,(s,o)=>{const i=y.findKey(r,o);if(i){n[i]=mn(s),delete n[o];return}const a=t?Sc(o):String(o).trim();a!==o&&delete n[o],n[a]=mn(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Bs]=this[Bs]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=It(i);r[a]||(Rc(s,i),r[a]=!0)}return y.isArray(t)?t.forEach(o):o(t),this}}On.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.freezeMethods(On.prototype);y.freezeMethods(On);const Ve=On;function Wn(e,t){const n=this||Wr,r=t||n,s=Ve.from(r.headers);let o=r.data;return y.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ui(e){return!!(e&&e.__CANCEL__)}function Xt(e,t,n){J.call(this,e??"canceled",J.ERR_CANCELED,t,n),this.name="CanceledError"}y.inherits(Xt,J,{__CANCEL__:!0});function Tc(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ac=De.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const c=[];c.push(n+"="+encodeURIComponent(r)),y.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),y.isString(o)&&c.push("path="+o),y.isString(i)&&c.push("domain="+i),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Oc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Pc(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function fi(e,t){return e&&!Oc(t)?Pc(e,t):t}const Ic=De.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=y.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Lc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Nc(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),d=r[o];i||(i=l),n[s]=c,r[s]=l;let u=o,f=0;for(;u!==s;)f+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const m=d&&l-d;return m?Math.round(f*1e3/m):void 0}}function $s(e,t){let n=0;const r=Nc(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,c=r(a),l=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&l?(i-o)/c:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const Dc=typeof XMLHttpRequest<"u",Fc=Dc&&function(e){return new Promise(function(n,r){let s=e.data;const o=Ve.from(e.headers).normalize(),i=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}y.isFormData(s)&&(De.isStandardBrowserEnv||De.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+h))}const d=fi(e.baseURL,e.url);l.open(e.method.toUpperCase(),li(d,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function u(){if(!l)return;const m=Ve.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:e,request:l};Tc(function(_){n(_),c()},function(_){r(_),c()},v),l=null}if("onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(u)},l.onabort=function(){l&&(r(new J("Request aborted",J.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||ci;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new J(h,v.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,l)),l=null},De.isStandardBrowserEnv){const m=(e.withCredentials||Ic(d))&&e.xsrfCookieName&&Ac.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&y.forEach(o.toJSON(),function(h,v){l.setRequestHeader(v,h)}),y.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",$s(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",$s(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=m=>{l&&(r(!m||m.type?new Xt(null,e,l):m),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const f=Lc(d);if(f&&De.protocols.indexOf(f)===-1){r(new J("Unsupported protocol "+f+":",J.ERR_BAD_REQUEST,e));return}l.send(s||null)})},hn={http:cc,xhr:Fc};y.forEach(hn,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const jc={getAdapter:e=>{e=y.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=y.isString(n)?hn[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new J(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(y.hasOwnProp(hn,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!y.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:hn};function Xn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Xt(null,e)}function Us(e){return Xn(e),e.headers=Ve.from(e.headers),e.data=Wn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),jc.getAdapter(e.adapter||Wr.adapter)(e).then(function(r){return Xn(e),r.data=Wn.call(e,e.transformResponse,r),r.headers=Ve.from(r.headers),r},function(r){return ui(r)||(Xn(e),r&&r.response&&(r.response.data=Wn.call(e,e.transformResponse,r.response),r.response.headers=Ve.from(r.response.headers))),Promise.reject(r)})}const Hs=e=>e instanceof Ve?e.toJSON():e;function Ct(e,t){t=t||{};const n={};function r(l,d,u){return y.isPlainObject(l)&&y.isPlainObject(d)?y.merge.call({caseless:u},l,d):y.isPlainObject(d)?y.merge({},d):y.isArray(d)?d.slice():d}function s(l,d,u){if(y.isUndefined(d)){if(!y.isUndefined(l))return r(void 0,l,u)}else return r(l,d,u)}function o(l,d){if(!y.isUndefined(d))return r(void 0,d)}function i(l,d){if(y.isUndefined(d)){if(!y.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function a(l,d,u){if(u in t)return r(l,d);if(u in e)return r(void 0,l)}const c={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,d)=>s(Hs(l),Hs(d),!0)};return y.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const u=c[d]||s,f=u(e[d],t[d],d);y.isUndefined(f)&&u!==a||(n[d]=f)}),n}const pi="1.3.2",Xr={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xr[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zs={};Xr.transitional=function(t,n,r){function s(o,i){return"[Axios v"+pi+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new J(s(i," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!zs[i]&&(zs[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function Bc(e,t,n){if(typeof e!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],c=a===void 0||i(a,o,e);if(c!==!0)throw new J("option "+o+" must be "+c,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+o,J.ERR_BAD_OPTION)}}const gr={assertOptions:Bc,validators:Xr},Xe=gr.validators;class bn{constructor(t){this.defaults=t,this.interceptors={request:new js,response:new js}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ct(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&gr.assertOptions(r,{silentJSONParsing:Xe.transitional(Xe.boolean),forcedJSONParsing:Xe.transitional(Xe.boolean),clarifyTimeoutError:Xe.transitional(Xe.boolean)},!1),s!==void 0&&gr.assertOptions(s,{encode:Xe.function,serialize:Xe.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&y.merge(o.common,o[n.method]),i&&y.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=Ve.concat(i,o);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let d,u=0,f;if(!c){const h=[Us.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,l),f=h.length,d=Promise.resolve(n);u<f;)d=d.then(h[u++],h[u++]);return d}f=a.length;let m=n;for(u=0;u<f;){const h=a[u++],v=a[u++];try{m=h(m)}catch(x){v.call(this,x);break}}try{d=Us.call(this,m)}catch(h){return Promise.reject(h)}for(u=0,f=l.length;u<f;)d=d.then(l[u++],l[u++]);return d}getUri(t){t=Ct(this.defaults,t);const n=fi(t.baseURL,t.url);return li(n,t.params,t.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(t){bn.prototype[t]=function(n,r){return this.request(Ct(r||{},{method:t,url:n,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(Ct(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}bn.prototype[t]=n(),bn.prototype[t+"Form"]=n(!0)});const gn=bn;class Yr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new Xt(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Yr(function(s){t=s}),cancel:t}}}const $c=Yr;function Uc(e){return function(n){return e.apply(null,n)}}function Hc(e){return y.isObject(e)&&e.isAxiosError===!0}const vr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vr).forEach(([e,t])=>{vr[t]=e});const zc=vr;function mi(e){const t=new gn(e),n=Wo(gn.prototype.request,t);return y.extend(n,gn.prototype,t,{allOwnKeys:!0}),y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return mi(Ct(e,s))},n}const ge=mi(Wr);ge.Axios=gn;ge.CanceledError=Xt;ge.CancelToken=$c;ge.isCancel=ui;ge.VERSION=pi;ge.toFormData=Tn;ge.AxiosError=J;ge.Cancel=ge.CanceledError;ge.all=function(t){return Promise.all(t)};ge.spread=Uc;ge.isAxiosError=Hc;ge.mergeConfig=Ct;ge.AxiosHeaders=Ve;ge.formToJSON=e=>di(y.isHTMLForm(e)?new FormData(e):e);ge.HttpStatusCode=zc;ge.default=ge;const Pn=ge;var Se=(e=>(e.ACCESS_TOKEN="accessToken",e.REFRESH_TOKEN="refreshToken",e.LOGIN_UUID="loginUUID",e.LOGIN_CHALLENGE="loginChallenge",e.LOGIN_VERIFIER="loginVerifier",e))(Se||{}),hi={};Object.defineProperty(hi,"__esModule",{value:!0});function gi(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Vc(e,t){e||(e=43);for(var n=window.msCrypto||window.crypto,r=gi(Array.prototype.map.call(n.getRandomValues(new Uint8Array(e)),function(a){return String.fromCharCode(a)}).join("")).substring(0,e),s=new Uint8Array(r.length),o=0;o<r.length;o++)s[o]=r.charCodeAt(o);var i=n.subtle.digest("SHA-256",s);window.CryptoOperation?(i.onerror=t,i.oncomplete=function(a){Vs(t,r,a.target.result)}):i.then(function(a){Vs(t,r,a)}).catch(t)}var Kc=hi.default=Vc;function Vs(e,t,n){e(null,{verifier:t,challenge:gi(String.fromCharCode.apply(null,new Uint8Array(n)))})}const qc=async(e,t,n)=>{const r=new FormData;r.append("grant_type","authorization_code"),r.append("client_id","fc7ddac0-12a9-43b3-9473-c18e7e77f328"),r.append("code",e),r.append("code_verifier",t),r.append("state",n);try{const s=await K2.post("https://auth.pre.fdm.dk/187af4a1-40b9-4262-8e3a-5000fb9a4e22/B2C_1A_FDMLOGIN/oauth2/v2.0/token",r);return Promise.resolve(s.data)}catch(s){return Promise.reject(s)}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bt=typeof window<"u";function Gc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Yn(e,t){const n={};for(const r in t){const s=t[r];n[r]=Pe(s)?s.map(e):e(s)}return n}const jt=()=>{},Pe=Array.isArray,Jc=/\/$/,Wc=e=>e.replace(Jc,"");function Zn(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),s=e(o)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Qc(r??t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:i}}function Xc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ks(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yc(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Mt(t.matched[r],n.matched[s])&&vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Zc(e[n],t[n]))return!1;return!0}function Zc(e,t){return Pe(e)?qs(e,t):Pe(t)?qs(t,e):e===t}function qs(e,t){return Pe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Qc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ht;(function(e){e.pop="pop",e.push="push"})(Ht||(Ht={}));var Bt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Bt||(Bt={}));function e1(e){if(!e)if(bt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wc(e)}const t1=/^[^#]+#/;function n1(e,t){return e.replace(t1,"#")+t}function r1(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const In=()=>({left:window.pageXOffset,top:window.pageYOffset});function s1(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=r1(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Gs(e,t){return(history.state?history.state.position-t:-1)+e}const kr=new Map;function o1(e,t){kr.set(e,t)}function i1(e){const t=kr.get(e);return kr.delete(e),t}let a1=()=>location.protocol+"//"+location.host;function ki(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let a=s.includes(e.slice(o))?e.slice(o).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ks(c,"")}return Ks(n,e)+r+s}function l1(e,t,n,r){let s=[],o=[],i=null;const a=({state:f})=>{const m=ki(e,location),h=n.value,v=t.value;let x=0;if(f){if(n.value=m,t.value=f,i&&i===h){i=null;return}x=v?f.position-v.position:0}else r(m);s.forEach(_=>{_(n.value,h,{delta:x,type:Ht.pop,direction:x?x>0?Bt.forward:Bt.back:Bt.unknown})})};function c(){i=n.value}function l(f){s.push(f);const m=()=>{const h=s.indexOf(f);h>-1&&s.splice(h,1)};return o.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(Z({},f.state,{scroll:In()}),"")}function u(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:l,destroy:u}}function Js(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?In():null}}function c1(e){const{history:t,location:n}=window,r={value:ki(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,l,d){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:a1()+e+c;try{t[d?"replaceState":"pushState"](l,"",f),s.value=l}catch(m){console.error(m),n[d?"replace":"assign"](f)}}function i(c,l){const d=Z({},t.state,Js(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});o(c,d,!0),r.value=c}function a(c,l){const d=Z({},s.value,t.state,{forward:c,scroll:In()});o(d.current,d,!0);const u=Z({},Js(r.value,c,null),{position:d.position+1},l);o(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:i}}function yi(e){e=e1(e);const t=c1(e),n=l1(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=Z({location:"",base:e,go:r,createHref:n1.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function d1(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yi(e)}function u1(e){return typeof e=="string"||e&&typeof e=="object"}function bi(e){return typeof e=="string"||typeof e=="symbol"}const Ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_i=Symbol("");var Ws;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ws||(Ws={}));function Et(e,t){return Z(new Error,{type:e,[_i]:!0},t)}function $e(e,t){return e instanceof Error&&_i in e&&(t==null||!!(e.type&t))}const Xs="[^/]+?",f1={sensitive:!1,strict:!1,start:!0,end:!0},p1=/[.+*?^${}()[\]/\\]/g;function m1(e,t){const n=Z({},f1,t),r=[];let s=n.start?"^":"";const o=[];for(const l of e){const d=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const f=l[u];let m=40+(n.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(p1,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:v,optional:x,regexp:_}=f;o.push({name:h,repeatable:v,optional:x});const M=_||Xs;if(M!==Xs){m+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${h}" (${M}): `+j.message)}}let N=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;u||(N=x&&l.length<2?`(?:/${N})`:"/"+N),x&&(N+="?"),s+=N,m+=20,x&&(m+=-8),v&&(m+=-20),M===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(l){const d=l.match(i),u={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",h=o[f-1];u[h.name]=m&&h.repeatable?m.split("/"):m}return u}function c(l){let d="",u=!1;for(const f of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:h,repeatable:v,optional:x}=m,_=h in l?l[h]:"";if(Pe(_)&&!v)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const M=Pe(_)?_.join("/"):_;if(!M)if(x)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${h}"`);d+=M}}return d||"/"}return{re:i,score:r,keys:o,parse:a,stringify:c}}function h1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function g1(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=h1(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Ys(r))return 1;if(Ys(s))return-1}return s.length-r.length}function Ys(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const v1={type:0,value:""},k1=/[a-zA-Z0-9_]/;function y1(e){if(!e)return[[]];if(e==="/")return[[v1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,c,l="",d="";function u(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),i()):c===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:k1.test(c)?f():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}function b1(e,t,n){const r=m1(y1(e.path),n),s=Z(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function _1(e,t){const n=[],r=new Map;t=eo({strict:!1,end:!0,sensitive:!1},t);function s(d){return r.get(d)}function o(d,u,f){const m=!f,h=x1(d);h.aliasOf=f&&f.record;const v=eo(t,d),x=[h];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of N)x.push(Z({},h,{components:f?f.record.components:h.components,path:j,aliasOf:f?f.record:h}))}let _,M;for(const N of x){const{path:j}=N;if(u&&j[0]!=="/"){const L=u.record.path,D=L[L.length-1]==="/"?"":"/";N.path=u.record.path+(j&&D+j)}if(_=b1(N,u,v),f?f.alias.push(_):(M=M||_,M!==_&&M.alias.push(_),m&&d.name&&!Qs(_)&&i(d.name)),h.children){const L=h.children;for(let D=0;D<L.length;D++)o(L[D],_,f&&f.children[D])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return M?()=>{i(M)}:jt}function i(d){if(bi(d)){const u=r.get(d);u&&(r.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function c(d){let u=0;for(;u<n.length&&g1(d,n[u])>=0&&(d.record.path!==n[u].record.path||!xi(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!Qs(d)&&r.set(d.record.name,d)}function l(d,u){let f,m={},h,v;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw Et(1,{location:d});v=f.record.name,m=Z(Zs(u.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),d.params&&Zs(d.params,f.keys.map(M=>M.name))),h=f.stringify(m)}else if("path"in d)h=d.path,f=n.find(M=>M.re.test(h)),f&&(m=f.parse(h),v=f.record.name);else{if(f=u.name?r.get(u.name):n.find(M=>M.re.test(u.path)),!f)throw Et(1,{location:d,currentLocation:u});v=f.record.name,m=Z({},u.params,d.params),h=f.stringify(m)}const x=[];let _=f;for(;_;)x.unshift(_.record),_=_.parent;return{name:v,path:h,params:m,matched:x,meta:C1(x)}}return e.forEach(d=>o(d)),{addRoute:o,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:s}}function Zs(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function x1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:w1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function w1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Qs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function C1(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function eo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xi(e,t){return t.children.some(n=>n===e||xi(e,n))}const wi=/#/g,M1=/&/g,E1=/\//g,S1=/=/g,R1=/\?/g,Ci=/\+/g,T1=/%5B/g,A1=/%5D/g,Mi=/%5E/g,O1=/%60/g,Ei=/%7B/g,P1=/%7C/g,Si=/%7D/g,I1=/%20/g;function Zr(e){return encodeURI(""+e).replace(P1,"|").replace(T1,"[").replace(A1,"]")}function L1(e){return Zr(e).replace(Ei,"{").replace(Si,"}").replace(Mi,"^")}function yr(e){return Zr(e).replace(Ci,"%2B").replace(I1,"+").replace(wi,"%23").replace(M1,"%26").replace(O1,"`").replace(Ei,"{").replace(Si,"}").replace(Mi,"^")}function N1(e){return yr(e).replace(S1,"%3D")}function D1(e){return Zr(e).replace(wi,"%23").replace(R1,"%3F")}function F1(e){return e==null?"":D1(e).replace(E1,"%2F")}function _n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function j1(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Ci," "),i=o.indexOf("="),a=_n(i<0?o:o.slice(0,i)),c=i<0?null:_n(o.slice(i+1));if(a in t){let l=t[a];Pe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function to(e){let t="";for(let n in e){const r=e[n];if(n=N1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Pe(r)?r.map(o=>o&&yr(o)):[r&&yr(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function B1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Pe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const $1=Symbol(""),no=Symbol(""),Qr=Symbol(""),Ri=Symbol(""),br=Symbol("");function Lt(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function et(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,a)=>{const c=u=>{u===!1?a(Et(4,{from:n,to:t})):u instanceof Error?a(u):u1(u)?a(Et(2,{from:t,to:u})):(o&&r.enterCallbacks[s]===o&&typeof u=="function"&&o.push(u),i())},l=e.call(r&&r.instances[s],t,n,c);let d=Promise.resolve(l);e.length<3&&(d=d.then(c)),d.catch(u=>a(u))})}function Qn(e,t,n,r){const s=[];for(const o of e)for(const i in o.components){let a=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(U1(a)){const l=(a.__vccOpts||a)[t];l&&s.push(et(l,n,r,o,i))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const d=Gc(l)?l.default:l;o.components[i]=d;const f=(d.__vccOpts||d)[t];return f&&et(f,n,r,o,i)()}))}}return s}function U1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ro(e){const t=wt(Qr),n=wt(Ri),r=fe(()=>t.resolve($(e.to))),s=fe(()=>{const{matched:c}=r.value,{length:l}=c,d=c[l-1],u=n.matched;if(!d||!u.length)return-1;const f=u.findIndex(Mt.bind(null,d));if(f>-1)return f;const m=so(c[l-2]);return l>1&&so(d)===m&&u[u.length-1].path!==m?u.findIndex(Mt.bind(null,c[l-2])):f}),o=fe(()=>s.value>-1&&K1(n.params,r.value.params)),i=fe(()=>s.value>-1&&s.value===n.matched.length-1&&vi(n.params,r.value.params));function a(c={}){return V1(c)?t[$(e.replace)?"replace":"push"]($(e.to)).catch(jt):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}const H1=le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(e,{slots:t}){const n=Br(ro(e)),{options:r}=wt(Qr),s=fe(()=>({[oo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:$r("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),z1=H1;function V1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function K1(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pe(s)||s.length!==r.length||r.some((o,i)=>o!==s[i]))return!1}return!0}function so(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oo=(e,t,n)=>e??t??n,q1=le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=wt(br),s=fe(()=>e.route||r.value),o=wt(no,0),i=fe(()=>{let l=$(o);const{matched:d}=s.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),a=fe(()=>s.value.matched[i.value]);qn(no,fe(()=>i.value+1)),qn($1,a),qn(br,s);const c=V();return tt(()=>[c.value,a.value,e.name],([l,d,u],[f,m,h])=>{d&&(d.instances[u]=l,m&&m!==d&&l&&l===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),l&&d&&(!m||!Mt(d,m)||!f)&&(d.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,d=e.name,u=a.value,f=u&&u.components[d];if(!f)return io(n.default,{Component:f,route:l});const m=u.props[d],h=m?m===!0?l.params:typeof m=="function"?m(l):m:null,x=$r(f,Z({},h,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[d]=null)},ref:c}));return io(n.default,{Component:x,route:l})||x}}});function io(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const G1=q1;function J1(e){const t=_1(e.routes,e),n=e.parseQuery||j1,r=e.stringifyQuery||to,s=e.history,o=Lt(),i=Lt(),a=Lt(),c=ja(Ye);let l=Ye;bt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yn.bind(null,b=>""+b),u=Yn.bind(null,F1),f=Yn.bind(null,_n);function m(b,O){let T,P;return bi(b)?(T=t.getRecordMatcher(b),P=O):P=b,t.addRoute(P,T)}function h(b){const O=t.getRecordMatcher(b);O&&t.removeRoute(O)}function v(){return t.getRoutes().map(b=>b.record)}function x(b){return!!t.getRecordMatcher(b)}function _(b,O){if(O=Z({},O||c.value),typeof b=="string"){const U=Zn(n,b,O.path),de=t.resolve({path:U.path},O),Ge=s.createHref(U.fullPath);return Z(U,de,{params:f(de.params),hash:_n(U.hash),redirectedFrom:void 0,href:Ge})}let T;if("path"in b)T=Z({},b,{path:Zn(n,b.path,O.path).path});else{const U=Z({},b.params);for(const de in U)U[de]==null&&delete U[de];T=Z({},b,{params:u(b.params)}),O.params=u(O.params)}const P=t.resolve(T,O),ee=b.hash||"";P.params=d(f(P.params));const ce=Xc(r,Z({},b,{hash:L1(ee),path:P.path})),z=s.createHref(ce);return Z({fullPath:ce,hash:ee,query:r===to?B1(b.query):b.query||{}},P,{redirectedFrom:void 0,href:z})}function M(b){return typeof b=="string"?Zn(n,b,c.value.path):Z({},b)}function N(b,O){if(l!==b)return Et(8,{from:O,to:b})}function j(b){return q(b)}function L(b){return j(Z(M(b),{replace:!0}))}function D(b){const O=b.matched[b.matched.length-1];if(O&&O.redirect){const{redirect:T}=O;let P=typeof T=="function"?T(b):T;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=M(P):{path:P},P.params={}),Z({query:b.query,hash:b.hash,params:"path"in P?{}:b.params},P)}}function q(b,O){const T=l=_(b),P=c.value,ee=b.state,ce=b.force,z=b.replace===!0,U=D(T);if(U)return q(Z(M(U),{state:typeof U=="object"?Z({},ee,U.state):ee,force:ce,replace:z}),O||T);const de=T;de.redirectedFrom=O;let Ge;return!ce&&Yc(r,P,T)&&(Ge=Et(16,{to:de,from:P}),mt(P,P,!0,!1)),(Ge?Promise.resolve(Ge):S(de,P)).catch(ye=>$e(ye)?$e(ye,2)?ye:te(ye):xe(ye,de,P)).then(ye=>{if(ye){if($e(ye,2))return q(Z({replace:z},M(ye.to),{state:typeof ye.to=="object"?Z({},ee,ye.to.state):ee,force:ce}),O||de)}else ye=B(de,P,!0,z,ee);return C(de,P,ye),ye})}function F(b,O){const T=N(b,O);return T?Promise.reject(T):Promise.resolve()}function S(b,O){let T;const[P,ee,ce]=W1(b,O);T=Qn(P.reverse(),"beforeRouteLeave",b,O);for(const U of P)U.leaveGuards.forEach(de=>{T.push(et(de,b,O))});const z=F.bind(null,b,O);return T.push(z),vt(T).then(()=>{T=[];for(const U of o.list())T.push(et(U,b,O));return T.push(z),vt(T)}).then(()=>{T=Qn(ee,"beforeRouteUpdate",b,O);for(const U of ee)U.updateGuards.forEach(de=>{T.push(et(de,b,O))});return T.push(z),vt(T)}).then(()=>{T=[];for(const U of b.matched)if(U.beforeEnter&&!O.matched.includes(U))if(Pe(U.beforeEnter))for(const de of U.beforeEnter)T.push(et(de,b,O));else T.push(et(U.beforeEnter,b,O));return T.push(z),vt(T)}).then(()=>(b.matched.forEach(U=>U.enterCallbacks={}),T=Qn(ce,"beforeRouteEnter",b,O),T.push(z),vt(T))).then(()=>{T=[];for(const U of i.list())T.push(et(U,b,O));return T.push(z),vt(T)}).catch(U=>$e(U,8)?U:Promise.reject(U))}function C(b,O,T){for(const P of a.list())P(b,O,T)}function B(b,O,T,P,ee){const ce=N(b,O);if(ce)return ce;const z=O===Ye,U=bt?history.state:{};T&&(P||z?s.replace(b.fullPath,Z({scroll:z&&U&&U.scroll},ee)):s.push(b.fullPath,ee)),c.value=b,mt(b,O,T,z),te()}let Y;function ve(){Y||(Y=s.listen((b,O,T)=>{if(!it.listening)return;const P=_(b),ee=D(P);if(ee){q(Z(ee,{replace:!0}),P).catch(jt);return}l=P;const ce=c.value;bt&&o1(Gs(ce.fullPath,T.delta),In()),S(P,ce).catch(z=>$e(z,12)?z:$e(z,2)?(q(z.to,P).then(U=>{$e(U,20)&&!T.delta&&T.type===Ht.pop&&s.go(-1,!1)}).catch(jt),Promise.reject()):(T.delta&&s.go(-T.delta,!1),xe(z,P,ce))).then(z=>{z=z||B(P,ce,!1),z&&(T.delta&&!$e(z,8)?s.go(-T.delta,!1):T.type===Ht.pop&&$e(z,20)&&s.go(-1,!1)),C(P,ce,z)}).catch(jt)}))}let ae=Lt(),ke=Lt(),re;function xe(b,O,T){te(b);const P=ke.list();return P.length?P.forEach(ee=>ee(b,O,T)):console.error(b),Promise.reject(b)}function pt(){return re&&c.value!==Ye?Promise.resolve():new Promise((b,O)=>{ae.add([b,O])})}function te(b){return re||(re=!b,ve(),ae.list().forEach(([O,T])=>b?T(b):O()),ae.reset()),b}function mt(b,O,T,P){const{scrollBehavior:ee}=e;if(!bt||!ee)return Promise.resolve();const ce=!T&&i1(Gs(b.fullPath,0))||(P||!T)&&history.state&&history.state.scroll||null;return Uo().then(()=>ee(b,O,ce)).then(z=>z&&s1(z)).catch(z=>xe(z,b,O))}const Be=b=>s.go(b);let Tt;const At=new Set,it={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:x,getRoutes:v,resolve:_,options:e,push:j,replace:L,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:ke.add,isReady:pt,install(b){const O=this;b.component("RouterLink",z1),b.component("RouterView",G1),b.config.globalProperties.$router=O,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>$(c)}),bt&&!Tt&&c.value===Ye&&(Tt=!0,j(s.location).catch(ee=>{}));const T={};for(const ee in Ye)T[ee]=fe(()=>c.value[ee]);b.provide(Qr,O),b.provide(Ri,Br(T)),b.provide(br,c);const P=b.unmount;At.add(b),b.unmount=function(){At.delete(b),At.size<1&&(l=Ye,Y&&Y(),Y=null,c.value=Ye,Tt=!1,re=!1),P()}}};return it}function vt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function W1(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(l=>Mt(l,a))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(l=>Mt(l,c))||s.push(c))}return[n,r,s]}const X1={class:"footer"},Y1={class:"footer__main"},Z1=["href"],Q1=["disabled"],ed=le({__name:"MembershipFooter",props:["nextDisabled","previousLink","showNext","nextLabel","previousLabel"],emits:["nextClicked"],setup(e,{emit:t}){const n=e,r=t,s=()=>{r("nextClicked")},o=fe(()=>n.nextDisabled);return(i,a)=>{const c=yn("router-link");return I(),H("footer",X1,[Q("",!0),E("div",Y1,[e.previousLink&&!e.previousLink.startsWith("http")?(I(),Ce(c,{key:0,to:e.previousLink,class:"fdm-button fdm-button--blue fdm-button--outline w-48 text-center"},{default:Mn(()=>[Me(X(e.previousLabel),1)]),_:1},8,["to"])):Q("",!0),e.previousLink.startsWith("http")?(I(),H("a",{key:1,href:e.previousLink,class:"fdm-button fdm-button--blue fdm-button--outline w-48 text-center"},X(e.previousLabel),9,Z1)):Q("",!0),e.showNext?(I(),H("button",{key:2,onClick:a[0]||(a[0]=l=>s()),disabled:o.value,class:"fdm-button fdm-button--blue w-48 text-center"},X(e.nextLabel),9,Q1)):Q("",!0)])])}}});const es=Le(ed,[["__scopeId","data-v-5438cade"]]),ts=({funnelName:e,stepName:t,userType:n,salesType:r,salesChannel:s})=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({auth:null}),window.dataLayer.push({event:"orderflow",funnel:e,step_name:t,userType:n?"member":"unknown",sales_type:r,sales_channel:s})};var oe=(e=>(e.REQUIRED="required",e.LENGTH="length",e.NUMBER="number",e.STRING="string",e.EMAIL="email",e.SOCIAL_SECURITY_NUMBER="social-security-number",e.LASTNAME="last-name",e))(oe||{}),_r=(e=>(e.PRODUCT_NAME="køreklar",e.PRODUCT_TYPE="baseProduct",e))(_r||{});const td=e=>{let t=e.errors;for(const n of e.types){if(n===oe.REQUIRED&&(t=e.input.toString().length?at(n,e):lt(n,e)),n===oe.LENGTH&&(t=e.input.toString().length===e.requiredLength?at(n,e):lt(n,e)),n===oe.NUMBER&&(t=/^\d+$/.test(e.input.toString())?at(n,e):lt(n,e)),n===oe.STRING&&(t=/^[a-zA-Z\s-]+$/g.test(e.input.toString())||e.input.toString()===""?at(n,e):lt(n,e)),n===oe.EMAIL&&(t=/^\S+@\S+\.\S+$/.test(e.input.toString())?at(n,e):lt(n,e)),n===oe.SOCIAL_SECURITY_NUMBER){const r=e.input.toString().replace("-",""),s=/^\d+$/.test(r),o=r.length===10;t=s&&o?at(n,e):lt(n,e)}if(n===oe.LASTNAME){const r=e.input.toString().trim();t=/^[\S]*$/g.test(r)||e.input.toString()===""?at(n,e):lt(n,e)}}return t},at=(e,t)=>{const n=t.errors,r=n.findIndex(s=>s.id===e);return r!==-1&&n.splice(r,1),n},lt=(e,t)=>{const n=t.errors;let r="";switch(e){case oe.REQUIRED:r="Skal udfyldes";break;case oe.LENGTH:r=`Skal indeholde ${t.requiredLength} karakterer`;break;case oe.NUMBER:r="Må kun indeholde tal";break;case oe.STRING:r="Må kun indeholde bogstaver";break;case oe.EMAIL:r="Skal indeholde gyldig email";break;case oe.SOCIAL_SECURITY_NUMBER:r="Skal indeholde gyldigt cpr-nummer";break;case oe.LASTNAME:r="Efternavn må kun indeholde ét navn";break}return n.find(o=>o.id===e)||n.push({id:e,text:r}),n},Ze=(e,t=!1)=>e.trim().replace(/\s{1,}/g,t?" ":""),nd=(e,t)=>e.replace(/{{(.*?)}}/g,(n,r)=>r in t?String(t[r]):""),rd=(e,t=_r.PRODUCT_NAME,n=_r.PRODUCT_TYPE)=>{const r=t.toLowerCase(),s=n.toLowerCase();return e.flatMap(({products:o})=>o).find(({name:o,type:i})=>o.toLowerCase()===r&&i.toLowerCase()===s)},sd={class:"content"},od={class:"content__section"},id={class:"content__section-inner text-center md:text-left"},ad=["innerHTML"],ld={class:"content__section"},cd={class:"content__section-inner text-center md:text-left"},dd=["innerHTML"],ud={key:0,class:"content__benefits"},fd={class:"flex items-center"},pd={class:"content__icon-wrapper"},md={class:"flex items-center"},hd={class:"content__icon-wrapper"},gd={class:"flex items-center"},vd={class:"content__icon-wrapper"},kd=["innerHTML"],yd=le({__name:"HomeView",setup(e){const t=st(),{productPackageConfig:n}=t,r=rd(n.ProductPackages),s=fe(()=>{var l;return(l=t.appContent)==null?void 0:l.pages.find(d=>d.id==="selectMembership")}),o=fe(()=>{var l;return nd(((l=s.value)==null?void 0:l.footerNoMember)??"",{FIRST_YEAR_PRICE:(r==null?void 0:r.price)??0,YEARLY_PRICE:(r==null?void 0:r.listprice)??0})});Jt(async()=>{var l,d;ts({funnelName:t.productPackageConfig.name,stepName:"medlemstatus",userType:!1,salesType:(l=t.currentOrder)==null?void 0:l.salesType,salesChannel:(d=t.currentOrder)==null?void 0:d.salesChannel})});const i=()=>{localStorage.getItem(Se.ACCESS_TOKEN)&&localStorage.removeItem(Se.ACCESS_TOKEN)},a=async()=>{Bn()},c=()=>{var l;window.open((l=s.value)==null?void 0:l.benefit_more_link,"_blank")};return(l,d)=>{var m,h,v,x,_,M,N,j,L,D,q,F,S,C,B,Y,ve;const u=yn("router-view"),f=yn("router-link");return I(),H(Gt,null,[E("main",sd,[(I(),Ce(u,{key:l.$route.fullPath})),E("div",od,[E("div",id,[E("h2",null,X((m=s.value)==null?void 0:m.headerMember),1),E("div",{class:"hidden sm:block mt-8",innerHTML:(h=s.value)==null?void 0:h.textMember},null,8,ad),E("button",{onClick:d[0]||(d[0]=ae=>a()),class:"content__login-button fdm-button fdm-button--blue fdm-button--outline fdm-button--mobile-wide"},X((v=s.value)==null?void 0:v.linkMember),1)])]),E("div",ld,[E("div",cd,[E("h2",null,X((x=s.value)==null?void 0:x.headerNoMember),1),E("div",{class:"mt-8",innerHTML:(_=s.value)==null?void 0:_.textNoMember},null,8,dd),(M=s.value)!=null&&M.benefit_text_1?(I(),H("ul",ud,[E("li",fd,[E("span",pd,[G(_e,{class:"w-4 h-4",icon:(N=s.value)==null?void 0:N.benefit_icon_1},null,8,["icon"])]),Me(" "+X((j=s.value)==null?void 0:j.benefit_text_1),1)]),E("li",md,[E("span",hd,[G(_e,{class:"w-4 h-4",icon:(L=s.value)==null?void 0:L.benefit_icon_2},null,8,["icon"])]),Me(" "+X((D=s.value)==null?void 0:D.benefit_text_2),1)]),E("li",gd,[E("span",vd,[G(_e,{class:"w-4 h-4",icon:(q=s.value)==null?void 0:q.benefit_icon_3},null,8,["icon"])]),Me(" "+X((F=s.value)==null?void 0:F.benefit_text_3),1)])])):Q("",!0),E("button",{class:"fdm-text-button inline-block font-bold",onClick:d[1]||(d[1]=ae=>c())},X((S=s.value)==null?void 0:S.benefit_more_text),1),E("div",{class:"font-bold mt-8",innerHTML:o.value},null,8,kd),G(f,{to:"/opret-medlemskab",class:"fdm-button fdm-button--blue fdm-button--mobile-wide mt-8 sm:w-48 js-tracking","data-tracking-action":"Start bestilling","data-tracking-label":"Start bestilling",onClick:i},{default:Mn(()=>{var ae;return[Me(X((ae=s.value)==null?void 0:ae.linkNoMember),1)]}),_:1})])])]),(C=$(t).currentOrder)!=null&&C.origin?(I(),Ce(es,{key:0,previousLink:(B=$(t).currentOrder)==null?void 0:B.origin,previousLabel:(ve=(Y=$(t).appContent)==null?void 0:Y.labels)==null?void 0:ve.previous},null,8,["previousLink","previousLabel"])):Q("",!0)],64)}}});const ao=Le(yd,[["__scopeId","data-v-e5d3a608"]]),bd={class:"fdm-checkbox rich-text"},_d=["id"],xd=["for","innerHTML"],wd={key:0,class:"text-fdm-red text-xs font-normal list-none"},Cd=le({__name:"ConsentBox",props:["id","text","modelValue","required","showFull"],emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const r=e,s=n,o=V(r.modelValue),i=V(!1),a=V(r.showFull!==!1);tt(()=>r.modelValue,u=>{o.value=u}),tt(o,u=>{s("update:modelValue",u),u&&(i.value=!1)});const c=()=>{a.value=!a.value},l=()=>a.value?"consent-toggle consent-toggle--open":"consent-toggle";return t({validate:()=>r.required&&!o.value?(i.value=!0,!1):(i.value=!1,!0)}),(u,f)=>(I(),H("div",{class:ze(["consent-box",{"has-chevron":e.showFull===!1}])},[E("div",bd,[Ho(E("input",{"onUpdate:modelValue":f[0]||(f[0]=m=>o.value=m),type:"checkbox",id:e.id},null,8,_d),[[Ba,o.value]]),E("label",{for:e.id,innerHTML:e.text,class:ze([a.value?"":"consent-text--hidden"])},null,10,xd),Ur(u.$slots,"default",{},void 0,!0),e.required&&i.value&&!o.value?(I(),H("p",wd," Skal udfyldes ")):Q("",!0)]),e.showFull===!1?(I(),H("span",{key:0,class:ze(l()),onClick:c},[G(_e,{icon:"chevron",class:"w-5 h-5 stroke-3"})],2)):Q("",!0)],2))}});const ns=Le(Cd,[["__scopeId","data-v-11918ad5"]]),Md={class:"newsletter-signup"},Ed={class:"text-left"},Sd={class:"flex justify-between mb-6"},Rd={key:0,class:"benefit"},Td={class:"icon"},Ad={key:1,class:"benefit"},Od={class:"icon"},Pd={key:2,class:"benefit"},Id={class:"icon"},Ld=le({__name:"NewsletterSignup",props:["modelValue","consentText"],emits:["update:modelValue"],setup(e,{emit:t}){const n=st(),r=e,s=t,o=V(r.modelValue),i=fe(()=>{var a;return(a=n.appContent)==null?void 0:a.pages.find(c=>c.id==="newsletterSignup")});return tt(o,a=>{s("update:modelValue",a)}),(a,c)=>{var l,d,u,f,m,h,v,x,_,M;return I(),H("section",Md,[E("h3",Ed,X((l=i.value)==null?void 0:l.title),1),E("div",Sd,[(d=i.value)!=null&&d.benefit_icon_1?(I(),H("div",Rd,[E("span",Td,[G(_e,{icon:(u=i.value)==null?void 0:u.benefit_icon_1,classes:"w-5 h-5"},null,8,["icon"])]),Me(" "+X((f=i.value)==null?void 0:f.benefit_text_1),1)])):Q("",!0),(m=i.value)!=null&&m.benefit_icon_2?(I(),H("div",Ad,[E("span",Od,[G(_e,{icon:(h=i.value)==null?void 0:h.benefit_icon_2,classes:"w-5 h-5"},null,8,["icon"])]),Me(" "+X((v=i.value)==null?void 0:v.benefit_text_2),1)])):Q("",!0),(x=i.value)!=null&&x.benefit_icon_3?(I(),H("div",Pd,[E("span",Id,[G(_e,{icon:(_=i.value)==null?void 0:_.benefit_icon_3,classes:"w-5 h-5"},null,8,["icon"])]),Me(" "+X((M=i.value)==null?void 0:M.benefit_text_3),1)])):Q("",!0)]),G(ns,{id:"newsletter-consent",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=N=>o.value=N),text:e.consentText,"show-full":!1},null,8,["modelValue","text"])])}}});const Ti=Le(Ld,[["__scopeId","data-v-8b719a62"]]),Nd={class:"h-full text-left px-8 py-10 md:p-20 overflow-auto"},Dd=["innerHTML"],Fd=le({__name:"UIPopoverSlide",props:{content:{},slideHeight:{},show:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,s=()=>{r("close")};return(o,i)=>(I(),H("div",{style:$a({height:n.slideHeight+"px"}),class:ze(["absolute top-0 left-0 w-full bg-white transform ease-in-out duration-300 z-20",[n.show?"":"translate-x-full",""]])},[E("button",{class:"absolute bg-white right-0 mr-4 mt-4",onClick:s},[G(_e,{class:"w-8 h-8 close-icon",icon:"circle-arrow"})]),E("div",Nd,[G(_e,{class:"popover__slide-icon",icon:"exclamation-circle"}),E("div",{innerHTML:n.content},null,8,Dd)])],6))}});const jd=Le(Fd,[["__scopeId","data-v-25147b83"]]),Bd={class:"popover",style:{"background-color":"rgba(0, 0, 0, 0.3)"}},$d={class:"popover__container flex bg-white relative mx-auto max-w-2xl overflow-hidden"},Ud=["innerHTML"],Hd=le({__name:"UIPopover",props:{content:{},slideContent:{},showSlide:{type:Boolean}},emits:["close","close:slide"],setup(e,{emit:t}){const n=e,r=t,s=V(0),o=V(),i=()=>{r("close:slide"),r("close")};return tt(()=>n.showSlide,a=>{a&&(s.value=o.value.clientHeight)}),(a,c)=>(I(),H("div",Bd,[E("div",$d,[E("button",{onClick:Hr(i,["prevent"]),class:"popover__close-button",title:"close-popover"},[G(_e,{class:"popover__close-icon",icon:"close-thick"})]),G(jd,{slideHeight:s.value,content:n.slideContent,show:n.showSlide,onClose:c[0]||(c[0]=l=>r("close:slide"))},null,8,["slideHeight","content","show"]),E("div",{ref_key:"popoverContentElement",ref:o,class:"popover__content"},[E("div",{innerHTML:n.content,class:"rich-text"},null,8,Ud),Ur(a.$slots,"default",{},void 0,!0)],512)])]))}});const xr=Le(Hd,[["__scopeId","data-v-3d600dd7"]]),zd={class:"content"},Vd={class:"mt-16 text-center"},Kd={class:"content__contact"},qd={class:"my-6"},Gd={class:"content__contact-info"},Jd={class:"w-full md:w-80 mb-2"},Wd={class:"icon"},Xd={class:"w-80"},Yd={class:"content__contact-info"},Zd={class:"w-full md:w-80 mb-2"},Qd={class:"icon"},eu={class:"w-full md:w-80 mb-2"},tu={class:"icon"},nu={class:"mt-2"},ru={class:"icon"},su=["innerHTML"],ou=le({__name:"MemberInfo",setup(e){const t=st(),n=V(!1),r=V(),s=V(!1),o=V(!1),i=V(null);Jt(()=>{var m,h,v;(m=t.contact.address)!=null&&m.streetName||(s.value=!0),ts({funnelName:t.productPackageConfig.name,stepName:"personlige_oplysninger",userType:!0,salesType:(h=t.currentOrder)==null?void 0:h.salesType,salesChannel:(v=t.currentOrder)==null?void 0:v.salesChannel})});const a=()=>{o.value=!0},c=()=>{var m,h;return(m=t.flowConfig)!=null&&m.MEMBERS_MUST_ACCEPT_TERMS?((h=i.value)==null?void 0:h.validate())??!1:!0},l=fe(()=>{var m;return(m=t.appContent)==null?void 0:m.pages.find(h=>h.id==="existingMembership")}),d=fe(()=>{var m,h;return(h=(m=t.appContent)==null?void 0:m.progressionSteps)!=null&&h.length?t.appContent.progressionSteps.map(v=>v.text):null}),u=fe(()=>!t.contact),f=async()=>{var m;if(!((m=t.contact.address)!=null&&m.streetName))return s.value=!0;if(c())try{const h=await t.addExistingContactAndTermsConsent(n.value);location.href=h}catch{en.push({name:"Error"})}};return(m,h)=>{var v,x,_,M,N,j,L,D,q,F,S,C,B,Y,ve,ae,ke,re;return I(),H(Gt,null,[E("main",zd,[(v=d.value)!=null&&v.length?(I(),Ce($(Vo),{key:0,steps:d.value,progressStatus:1},null,8,["steps"])):Q("",!0),E("h2",Vd,X((x=l.value)==null?void 0:x.title),1),E("div",Kd,[E("div",qd,[E("div",Gd,[E("div",Jd,[E("span",Wd,[G(_e,{class:"inline mb-1 mr-2",icon:"user",classes:"w-6 h-6"})]),Me(" "+X((_=$(t).contact)==null?void 0:_.fullName),1)]),E("div",Xd,X((M=l.value)==null?void 0:M.mebershipNo)+" "+X((N=$(t).contact)==null?void 0:N.fdmNumber),1)]),E("div",Yd,[E("div",Zd,[E("span",Qd,[G(_e,{class:"inline mb-1 mr-2",icon:"home",classes:"w-6 h-6"})]),Me(" "+X((L=(j=$(t).contact)==null?void 0:j.address)==null?void 0:L.fullAddress),1)]),E("div",eu,[E("div",null,[E("span",tu,[G(_e,{class:"inline mb-1 mr-2",icon:"phone",classes:"w-6 h-6"})]),Me(" "+X((D=$(t).contact)==null?void 0:D.mobilePhone),1)]),E("div",nu,[E("span",ru,[G(_e,{class:"inline mb-1 mr-2",icon:"email",classes:"w-6 h-6"})]),Me(" "+X((q=$(t).contact)==null?void 0:q.email),1)])])]),E("div",{class:"content__contact-info",innerHTML:(F=l.value)==null?void 0:F.info},null,8,su)]),(S=$(t).flowConfig)!=null&&S.MEMBERS_MUST_ACCEPT_TERMS&&((C=$(t).membershipConsent)!=null&&C.text)?(I(),Ce(ns,{key:0,id:"membership-consent",text:$(t).membershipConsent.description,modelValue:r.value,"onUpdate:modelValue":h[2]||(h[2]=xe=>r.value=xe),required:!0,ref_key:"consentBoxRef",ref:i},{default:Mn(()=>[E("button",{class:"align-middle md:ml-3",onClick:h[0]||(h[0]=Hr(xe=>a(),["prevent"])),type:"button"},[G(_e,{classes:"text-fdm-blue-400 w-5 h-5",icon:"exclamation-circle"})]),o.value?(I(),Ce(xr,{key:0,onClose:h[1]||(h[1]=xe=>o.value=!1),content:$(t).membershipConsent.text},null,8,["content"])):Q("",!0)]),_:1},8,["text","modelValue"])):Q("",!0)]),l.value?(I(),Ce(Ti,{key:1,modelValue:n.value,"onUpdate:modelValue":h[3]||(h[3]=xe=>n.value=xe),consentText:(B=l.value)==null?void 0:B.newsletterConsentText},null,8,["modelValue","consentText"])):Q("",!0),s.value?(I(),Ce(xr,{key:2,onClose:h[4]||(h[4]=xe=>s.value=!1),content:(Y=l.value)==null?void 0:Y.updateAddressText},null,8,["content"])):Q("",!0)]),G(es,{previousLink:"/",showNext:!0,nextDisabled:u.value,onNextClicked:h[5]||(h[5]=xe=>f()),nextLabel:(ae=(ve=$(t).appContent)==null?void 0:ve.labels)==null?void 0:ae.next,previousLabel:(re=(ke=$(t).appContent)==null?void 0:ke.labels)==null?void 0:re.previous},null,8,["nextDisabled","nextLabel","previousLabel"])],64)}}});const iu=Le(ou,[["__scopeId","data-v-b7393a49"]]),au={key:0,class:"p-0 mt-1"},lu=le({__name:"UIInputErrors",props:["errors"],setup(e){const t=e;return(n,r)=>t.errors.length?(I(),H("ul",au,[(I(!0),H(Gt,null,Fo(t.errors,s=>(I(),H("li",{key:s.id,class:"text-fdm-red text-xs font-normal list-none"},X(s.text),1))),128))])):Q("",!0)}}),cu=["for"],du={class:"flex items-center"},uu={class:"flex w-full"},fu={key:0,class:"py-3 px-3 text-fdm-gray-500 bg-fdm-gray-200 border-fdm-gray-500 border border-r-0 rounded-l-sm"},pu=["id","type","name","disabled","placeholder","maxlength","value"],ln=le({__name:"UIInput",props:["id","label","placeholder","infoText","maxLength","prefix","showValidation","requiredLength","uppercase","modelValue","name","type","disabled","validationTypes"],emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const r=e,s=n,o=V([]),i=V(r.modelValue);tt(()=>r.modelValue,d=>{c(d)});const a=d=>{var m;if(!((m=r.validationTypes)!=null&&m.length))return[];const u={types:r.validationTypes,input:d,errors:o.value};return r.requiredLength&&(u.requiredLength=r.requiredLength),td(u)},c=async d=>{i.value=d,r.validationTypes&&(o.value=a(d)),s("update:modelValue",d)};return t({validate:()=>(r.validationTypes&&(o.value=a(i.value)),o.value)}),(d,u)=>(I(),H("label",{for:e.id,class:"flex flex-col items-start self-start"},[E("span",du,X(e.label),1),E("div",uu,[e.prefix?(I(),H("span",fu,X(e.prefix),1)):Q("",!0),E("input",{class:ze(["fdm-input w-full",[o.value.length&&e.showValidation?"border-fdm-red":"",e.uppercase?"uppercase":""]]),id:e.id,type:e.type,name:e.name,disabled:e.disabled,placeholder:e.placeholder,maxlength:e.maxLength,value:i.value,onInput:u[0]||(u[0]=f=>c(f.target.value))},null,42,pu)]),G(lu,{errors:o.value},null,8,["errors"]),Ur(d.$slots,"default")],8,cu))}});var cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ut(e,t){return t={exports:{}},e(t,t.exports),t.exports}var K=ut(function(e){var t=e.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=t)}),Fe=ut(function(e){var t=e.exports={version:"2.6.12"};typeof __e=="number"&&(__e=t)});Fe.version;var Oe=function(e){return typeof e=="object"?e!==null:typeof e=="function"},Ie=function(e){if(!Oe(e))throw TypeError(e+" is not an object!");return e},Ke=function(e){try{return!!e()}catch{return!0}},Yt=!Ke(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),wr=K.document,hu=Oe(wr)&&Oe(wr.createElement),Cr=function(e){return hu?wr.createElement(e):{}},gu=!Yt&&!Ke(function(){return Object.defineProperty(Cr("div"),"a",{get:function(){return 7}}).a!=7}),vu=function(e,t){if(!Oe(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!Oe(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!Oe(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!Oe(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},ku=Object.defineProperty,yu=Yt?Object.defineProperty:function(t,n,r){if(Ie(t),n=vu(n,!0),Ie(r),gu)try{return ku(t,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t},rs={f:yu},bu=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},_t=Yt?function(e,t,n){return rs.f(e,t,bu(1,n))}:function(e,t,n){return e[t]=n,e},_u={}.hasOwnProperty,zt=function(e,t){return _u.call(e,t)},xu=0,wu=Math.random(),ss=function(e){return"Symbol(".concat(e===void 0?"":e,")_",(++xu+wu).toString(36))},os=ut(function(e){var t="__core-js_shared__",n=K[t]||(K[t]={});(e.exports=function(r,s){return n[r]||(n[r]=s!==void 0?s:{})})("versions",[]).push({version:Fe.version,mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),er=os("native-function-to-string",Function.toString),Ln=ut(function(e){var t=ss("src"),n="toString",r=(""+er).split(n);Fe.inspectSource=function(s){return er.call(s)},(e.exports=function(s,o,i,a){var c=typeof i=="function";c&&(zt(i,"name")||_t(i,"name",o)),s[o]!==i&&(c&&(zt(i,t)||_t(i,t,s[o]?""+s[o]:r.join(String(o)))),s===K?s[o]=i:a?s[o]?s[o]=i:_t(s,o,i):(delete s[o],_t(s,o,i)))})(Function.prototype,n,function(){return typeof this=="function"&&this[t]||er.call(this)})}),Vt=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e},Ee=function(e,t,n){if(Vt(e),t===void 0)return e;switch(n){case 1:return function(r){return e.call(t,r)};case 2:return function(r,s){return e.call(t,r,s)};case 3:return function(r,s,o){return e.call(t,r,s,o)}}return function(){return e.apply(t,arguments)}},tr="prototype",we=function(e,t,n){var r=e&we.F,s=e&we.G,o=e&we.S,i=e&we.P,a=e&we.B,c=s?K:o?K[t]||(K[t]={}):(K[t]||{})[tr],l=s?Fe:Fe[t]||(Fe[t]={}),d=l[tr]||(l[tr]={}),u,f,m,h;s&&(n=t);for(u in n)f=!r&&c&&c[u]!==void 0,m=(f?c:n)[u],h=a&&f?Ee(m,K):i&&typeof m=="function"?Ee(Function.call,m):m,c&&Ln(c,u,m,e&we.U),l[u]!=m&&_t(l,u,h),i&&d[u]!=m&&(d[u]=m)};K.core=Fe;we.F=1;we.G=2;we.S=4;we.P=8;we.B=16;we.W=32;we.U=64;we.R=128;var ie=we,Cu={}.toString,rt=function(e){return Cu.call(e).slice(8,-1)},is=Object("z").propertyIsEnumerable(0)?Object:function(e){return rt(e)=="String"?e.split(""):Object(e)},Nn=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e},Ai=function(e){return is(Nn(e))},Mu=Math.ceil,Eu=Math.floor,Dn=function(e){return isNaN(e=+e)?0:(e>0?Eu:Mu)(e)},Su=Math.min,Zt=function(e){return e>0?Su(Dn(e),9007199254740991):0},Ru=Math.max,Tu=Math.min,Au=function(e,t){return e=Dn(e),e<0?Ru(e+t,0):Tu(e,t)},Ou=function(e){return function(t,n,r){var s=Ai(t),o=Zt(s.length),i=Au(r,o),a;if(e&&n!=n){for(;o>i;)if(a=s[i++],a!=a)return!0}else for(;o>i;i++)if((e||i in s)&&s[i]===n)return e||i||0;return!e&&-1}},lo=os("keys"),Pu=function(e){return lo[e]||(lo[e]=ss(e))},Iu=Ou(!1),Lu=Pu("IE_PROTO"),Nu=function(e,t){var n=Ai(e),r=0,s=[],o;for(o in n)o!=Lu&&zt(n,o)&&s.push(o);for(;t.length>r;)zt(n,o=t[r++])&&(~Iu(s,o)||s.push(o));return s},Du="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Mr=Object.keys||function(t){return Nu(t,Du)},Fu=Object.getOwnPropertySymbols,ju={f:Fu},Bu={}.propertyIsEnumerable,$u={f:Bu},Fn=function(e){return Object(Nn(e))},dn=Object.assign,Uu=!dn||Ke(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(s){t[s]=s}),dn({},e)[n]!=7||Object.keys(dn({},t)).join("")!=r})?function(t,n){for(var r=Fn(t),s=arguments.length,o=1,i=ju.f,a=$u.f;s>o;)for(var c=is(arguments[o++]),l=i?Mr(c).concat(i(c)):Mr(c),d=l.length,u=0,f;d>u;)f=l[u++],(!Yt||a.call(c,f))&&(r[f]=c[f]);return r}:dn;ie(ie.S+ie.F,"Object",{assign:Uu});var Re=ut(function(e){var t=os("wks"),n=K.Symbol,r=typeof n=="function",s=e.exports=function(o){return t[o]||(t[o]=r&&n[o]||(r?n:ss)("Symbol."+o))};s.store=t}),Hu=Re("match"),zu=function(e){var t;return Oe(e)&&((t=e[Hu])!==void 0?!!t:rt(e)=="RegExp")},Vu=Re("species"),Oi=function(e,t){var n=Ie(e).constructor,r;return n===void 0||(r=Ie(n)[Vu])==null?t:Vt(r)},Ku=function(e){return function(t,n){var r=String(Nn(t)),s=Dn(n),o=r.length,i,a;return s<0||s>=o?e?"":void 0:(i=r.charCodeAt(s),i<55296||i>56319||s+1===o||(a=r.charCodeAt(s+1))<56320||a>57343?e?r.charAt(s):i:e?r.slice(s,s+2):(i-55296<<10)+(a-56320)+65536)}},qu=Ku(!0),Pi=function(e,t,n){return t+(n?qu(e,t).length:1)},Gu=Re("toStringTag"),Ju=rt(function(){return arguments}())=="Arguments",Wu=function(e,t){try{return e[t]}catch{}},jn=function(e){var t,n,r;return e===void 0?"Undefined":e===null?"Null":typeof(n=Wu(t=Object(e),Gu))=="string"?n:Ju?rt(t):(r=rt(t))=="Object"&&typeof t.callee=="function"?"Arguments":r},Xu=RegExp.prototype.exec,Er=function(e,t){var n=e.exec;if(typeof n=="function"){var r=n.call(e,t);if(typeof r!="object")throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if(jn(e)!=="RegExp")throw new TypeError("RegExp#exec called on incompatible receiver");return Xu.call(e,t)},Yu=function(){var e=Ie(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},xn=RegExp.prototype.exec,Zu=String.prototype.replace,Ii=xn,wn="lastIndex",Sr=function(){var e=/a/,t=/b*/g;return xn.call(e,"a"),xn.call(t,"a"),e[wn]!==0||t[wn]!==0}(),Rr=/()??/.exec("")[1]!==void 0,Qu=Sr||Rr;Qu&&(Ii=function(t){var n=this,r,s,o,i;return Rr&&(s=new RegExp("^"+n.source+"$(?!\\s)",Yu.call(n))),Sr&&(r=n[wn]),o=xn.call(n,t),Sr&&o&&(n[wn]=n.global?o.index+o[0].length:r),Rr&&o&&o.length>1&&Zu.call(o[0],s,function(){for(i=1;i<arguments.length-2;i++)arguments[i]===void 0&&(o[i]=void 0)}),o});var Cn=Ii;ie({target:"RegExp",proto:!0,forced:Cn!==/./.exec},{exec:Cn});var ef=Re("species"),tf=!Ke(function(){var e=/./;return e.exec=function(){var t=[];return t.groups={a:"7"},t},"".replace(e,"$<a>")!=="7"}),nf=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return n.length===2&&n[0]==="a"&&n[1]==="b"}(),Li=function(e,t,n){var r=Re(e),s=!Ke(function(){var d={};return d[r]=function(){return 7},""[e](d)!=7}),o=s?!Ke(function(){var d=!1,u=/a/;return u.exec=function(){return d=!0,null},e==="split"&&(u.constructor={},u.constructor[ef]=function(){return u}),u[r](""),!d}):void 0;if(!s||!o||e==="replace"&&!tf||e==="split"&&!nf){var i=/./[r],a=n(Nn,r,""[e],function(u,f,m,h,v){return f.exec===Cn?s&&!v?{done:!0,value:i.call(f,m,h)}:{done:!0,value:u.call(m,f,h)}:{done:!1}}),c=a[0],l=a[1];Ln(String.prototype,e,c),_t(RegExp.prototype,r,t==2?function(d,u){return l.call(d,this,u)}:function(d){return l.call(d,this)})}},rf=Math.min,sf=[].push,ct="split",Te="length",nr="lastIndex",Tr=4294967295,Nt=!Ke(function(){RegExp(Tr,"y")});Li("split",2,function(e,t,n,r){var s;return"abbc"[ct](/(b)*/)[1]=="c"||"test"[ct](/(?:)/,-1)[Te]!=4||"ab"[ct](/(?:ab)*/)[Te]!=2||"."[ct](/(.?)(.?)/)[Te]!=4||"."[ct](/()()/)[Te]>1||""[ct](/.?/)[Te]?s=function(o,i){var a=String(this);if(o===void 0&&i===0)return[];if(!zu(o))return n.call(a,o,i);for(var c=[],l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(o.sticky?"y":""),d=0,u=i===void 0?Tr:i>>>0,f=new RegExp(o.source,l+"g"),m,h,v;(m=Cn.call(f,a))&&(h=f[nr],!(h>d&&(c.push(a.slice(d,m.index)),m[Te]>1&&m.index<a[Te]&&sf.apply(c,m.slice(1)),v=m[0][Te],d=h,c[Te]>=u)));)f[nr]===m.index&&f[nr]++;return d===a[Te]?(v||!f.test(""))&&c.push(""):c.push(a.slice(d)),c[Te]>u?c.slice(0,u):c}:"0"[ct](void 0,0)[Te]?s=function(o,i){return o===void 0&&i===0?[]:n.call(this,o,i)}:s=n,[function(i,a){var c=e(this),l=i==null?void 0:i[t];return l!==void 0?l.call(i,c,a):s.call(String(c),i,a)},function(o,i){var a=r(s,o,this,i,s!==n);if(a.done)return a.value;var c=Ie(o),l=String(this),d=Oi(c,RegExp),u=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(Nt?"y":"g"),m=new d(Nt?c:"^(?:"+c.source+")",f),h=i===void 0?Tr:i>>>0;if(h===0)return[];if(l.length===0)return Er(m,l)===null?[l]:[];for(var v=0,x=0,_=[];x<l.length;){m.lastIndex=Nt?x:0;var M=Er(m,Nt?l:l.slice(x)),N;if(M===null||(N=rf(Zt(m.lastIndex+(Nt?0:x)),l.length))===v)x=Pi(l,x,u);else{if(_.push(l.slice(v,x)),_.length===h)return _;for(var j=1;j<=M.length-1;j++)if(_.push(M[j]),_.length===h)return _;x=v=N}}return _.push(l.slice(v)),_}]});var co=Array.isArray||function(t){return rt(t)=="Array"},of=Re("species"),af=function(e){var t;return co(e)&&(t=e.constructor,typeof t=="function"&&(t===Array||co(t.prototype))&&(t=void 0),Oe(t)&&(t=t[of],t===null&&(t=void 0))),t===void 0?Array:t},lf=function(e,t){return new(af(e))(t)},cf=function(e,t){var n=e==1,r=e==2,s=e==3,o=e==4,i=e==6,a=e==5||i,c=t||lf;return function(l,d,u){for(var f=Fn(l),m=is(f),h=Ee(d,u,3),v=Zt(m.length),x=0,_=n?c(l,v):r?c(l,0):void 0,M,N;v>x;x++)if((a||x in m)&&(M=m[x],N=h(M,x,f),e)){if(n)_[x]=N;else if(N)switch(e){case 3:return!0;case 5:return M;case 6:return x;case 2:_.push(M)}else if(o)return!1}return i?-1:s||o?o:_}},df=function(e,t){return!!e&&Ke(function(){t?e.call(null,function(){},1):e.call(null)})},uf=cf(1);ie(ie.P+ie.F*!df([].map,!0),"Array",{map:function(t){return uf(this,t,arguments[1])}});var ff=Math.max,pf=Math.min,mf=Math.floor,hf=/\$([$&`']|\d\d?|<[^>]*>)/g,gf=/\$([$&`']|\d\d?)/g,vf=function(e){return e===void 0?e:String(e)};Li("replace",2,function(e,t,n,r){return[function(i,a){var c=e(this),l=i==null?void 0:i[t];return l!==void 0?l.call(i,c,a):n.call(String(c),i,a)},function(o,i){var a=r(n,o,this,i);if(a.done)return a.value;var c=Ie(o),l=String(this),d=typeof i=="function";d||(i=String(i));var u=c.global;if(u){var f=c.unicode;c.lastIndex=0}for(var m=[];;){var h=Er(c,l);if(h===null||(m.push(h),!u))break;var v=String(h[0]);v===""&&(c.lastIndex=Pi(l,Zt(c.lastIndex),f))}for(var x="",_=0,M=0;M<m.length;M++){h=m[M];for(var N=String(h[0]),j=ff(pf(Dn(h.index),l.length),0),L=[],D=1;D<h.length;D++)L.push(vf(h[D]));var q=h.groups;if(d){var F=[N].concat(L,j,l);q!==void 0&&F.push(q);var S=String(i.apply(void 0,F))}else S=s(N,l,j,L,q,i);j>=_&&(x+=l.slice(_,j)+S,_=j+N.length)}return x+l.slice(_)}];function s(o,i,a,c,l,d){var u=a+o.length,f=c.length,m=gf;return l!==void 0&&(l=Fn(l),m=hf),n.call(d,m,function(h,v){var x;switch(v.charAt(0)){case"$":return"$";case"&":return o;case"`":return i.slice(0,a);case"'":return i.slice(u);case"<":x=l[v.slice(1,-1)];break;default:var _=+v;if(_===0)return h;if(_>f){var M=mf(_/10);return M===0?h:M<=f?c[M-1]===void 0?v.charAt(1):c[M-1]+v.charAt(1):h}x=c[_-1]}return x===void 0?"":x})}});var W=ut(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});let n="key";function r(){return n}function s(p){n=p}let o=!1,i=!1,a=!1;function c(p){if(!p)throw new Error("Expected value to be defined");return p}function l(p){if(!a)throw new Error("Cannot call "+p+"() unless in patch.")}function d(p,g){if(p===g)return;let k=p;const w=[];for(;k&&k!==g;)w.push(k.nodeName.toLowerCase()),k=k.parentNode;throw new Error(`One or more tags were not closed:
`+w.join(`
`))}function u(p){p||console.warn("patchOuter requires the node have a parent if there is a key.")}function f(p){if(o)throw new Error(p+"() can not be called between elementOpenStart() and elementOpenEnd().")}function m(p){if(i)throw new Error(p+"() may not be called inside an element that has called skip().")}function h(p){if(!o)throw new Error(p+"() can only be called after calling elementOpenStart().")}function v(){if(o)throw new Error("elementOpenEnd() must be called after calling elementOpenStart().")}function x(p,g){if(p!==g)throw new Error('Received a call to close "'+g+'" but "'+p+'" was open.')}function _(p,g){if(g!==null)throw new Error(p+"() must come before any child declarations inside the current element.")}function M(p,g,k,w){const A=c(p),R=c(g),ne=R.nextSibling===k&&R.previousSibling===w,ue=R.nextSibling===A.nextSibling&&R.previousSibling===w;if(!ne&&!ue&&!(R===A))throw new Error("There must be exactly one top level call corresponding to the patched element.")}function N(p){a=p!=null}function j(p){const g=o;return o=p,g}function L(p){const g=i;return i=p,g}const D=Object.prototype.hasOwnProperty;function q(){}q.prototype=Object.create(null);function F(p,g){return D.call(p,g)}function S(){return new q}function C(p,g){for(;p.length>g;)p.pop()}function B(p){const g=new Array(p);return C(g,0),g}const Y={default:"__default"};function ve(p){return p.lastIndexOf("xml:",0)===0?"http://www.w3.org/XML/1998/namespace":p.lastIndexOf("xlink:",0)===0?"http://www.w3.org/1999/xlink":null}function ae(p,g,k){if(k==null)p.removeAttribute(g);else{const w=ve(g);w?p.setAttributeNS(w,g,String(k)):p.setAttribute(g,String(k))}}function ke(p,g,k){p[g]=k}function re(p,g,k){g.indexOf("-")>=0?p.setProperty(g,k):p[g]=k}function xe(p,g,k){c("style"in p);const w=p.style;if(typeof k=="string")w.cssText=k;else{w.cssText="";for(const A in k)F(k,A)&&re(w,A,k[A])}}function pt(p,g,k){const w=typeof k;w==="object"||w==="function"?ke(p,g,k):ae(p,g,k)}const te=S();te[Y.default]=pt,te.style=xe;function mt(p,g,k){(te[g]||te[Y.default])(p,g,k)}const Be={nodesCreated:null,nodesDeleted:null};class Tt{constructor(){this.created=[],this.deleted=[]}markCreated(g){this.created.push(g)}markDeleted(g){this.deleted.push(g)}notifyChanges(){Be.nodesCreated&&this.created.length>0&&Be.nodesCreated(this.created),Be.nodesDeleted&&this.deleted.length>0&&Be.nodesDeleted(this.deleted)}}function At(p){return p.nodeType===11||p.nodeType===9}function it(p){return p.nodeType===1}function b(p,g){const k=[];let w=p;for(;w!==g;){const A=c(w);k.push(A),w=A.parentNode}return k}const O=typeof Node<"u"&&Node.prototype.getRootNode||function(){let p=this,g=p;for(;p;)g=p,p=p.parentNode;return g};function T(p){const g=O.call(p);return At(g)?g.activeElement:null}function P(p,g){const k=T(p);return!k||!p.contains(k)?[]:b(k,g)}function ee(p,g,k){const w=g.nextSibling;let A=k;for(;A!==null&&A!==g;){const R=A.nextSibling;p.insertBefore(A,w),A=R}}class ce{constructor(g,k,w){this._attrsArr=null,this.staticsApplied=!1,this.nameOrCtor=g,this.key=k,this.text=w}hasEmptyAttrsArr(){const g=this._attrsArr;return!g||!g.length}getAttrsArr(g){return this._attrsArr||(this._attrsArr=B(g))}}function z(p,g,k,w){const A=new ce(g,k,w);return p.__incrementalDOMData=A,A}function U(p){return Boolean(p.__incrementalDOMData)}function de(p,g){const k=p.attributes,w=k.length;if(!w)return;const A=g.getAttrsArr(w);for(let R=0,ne=0;R<w;R+=1,ne+=2){const ue=k[R],Ae=ue.name,Kn=ue.value;A[ne]=Ae,A[ne+1]=Kn}}function Ge(p,g){if(p.__incrementalDOMData)return p.__incrementalDOMData;const k=it(p)?p.localName:p.nodeName,w=r(),A=it(p)&&w!=null?p.getAttribute(w):null,R=it(p)?A||g:null,ne=z(p,k,R);return it(p)&&de(p,ne),ne}function ye(p){Ge(p);for(let g=p.firstChild;g;g=g.nextSibling)ye(g)}function Je(p,g){return Ge(p,g)}function ia(p){return c(p.__incrementalDOMData),Je(p).key}function us(p){p.__incrementalDOMData=null;for(let g=p.firstChild;g;g=g.nextSibling)us(g)}function aa(p,g){return p==="svg"?"http://www.w3.org/2000/svg":p==="math"?"http://www.w3.org/1998/Math/MathML":g==null||Je(g).nameOrCtor==="foreignObject"?null:g.namespaceURI}function la(p,g,k,w){let A;if(typeof k=="function")A=new k;else{const R=aa(k,g);R?A=p.createElementNS(R,k):A=p.createElement(k)}return z(A,k,w),A}function ca(p){const g=p.createTextNode("");return z(g,"#text",null),g}function fs(p,g,k,w,A){return g==k&&w==A}let We=null,se=null,me=null,Ot=null,nn=[],rn=fs,sn=[],on=[];function $n(){return sn}function ps(){return on}function da(p,g,k){const w=Je(p,k);return rn(p,g,w.nameOrCtor,k,w.key)}function ua(p,g,k){if(!p)return null;let w=p;do if(da(w,g,k))return w;while(k&&(w=w.nextSibling));return null}function ms(p,g,k){const w=p;let A=g;for(;A!==k;){const R=A.nextSibling;w.removeChild(A),We.markDeleted(A),A=R}}function an(){return se?se.nextSibling:me.firstChild}function hs(){me=se,se=null}function gs(){ms(me,an(),null),se=me,me=me.parentNode}function vs(){se=an()}function fa(p,g){let k;return p==="#text"?k=ca(Ot):k=la(Ot,me,p,g),We.markCreated(k),k}function Un(p,g){vs();const w=ua(se,p,g)||fa(p,g);w!==se&&(nn.indexOf(w)>=0?ee(me,w,se):me.insertBefore(w,se),se=w)}function ks(p,g){return Un(p,g),hs(),me}function ys(){return L(!1),gs(),se}function pa(){return Un("#text",null),se}function Hn(){return l("currentElement"),f("currentElement"),me}function ma(){return l("currentPointer"),f("currentPointer"),an()}function ha(){_("skip",se),L(!0),se=me.lastChild}function bs(p,g={}){const{matches:k=fs}=g;return(A,R,ne)=>{const ue=We,Ae=Ot,Kn=nn,Ma=sn,Ea=on,Sa=se,Ra=me,Ta=rn;let Os=!1,Ps=!1;Ot=A.ownerDocument,We=new Tt,rn=k,sn=[],on=[],se=null,me=A.parentNode,nn=P(A,me),Os=j(!1),Ps=L(!1),N(We);try{const Aa=p(A,R,ne);return v(),Aa}finally{We.notifyChanges(),Ot=Ae,We=ue,rn=Ta,sn=Ma,on=Ea,se=Sa,me=Ra,nn=Kn,j(Os),L(Ps),N(We)}}}function _s(p){return bs((g,k,w)=>(se=g,hs(),k(w),gs(),d(se,g),g),p)}function xs(p){return bs((g,k,w)=>{const A={nextSibling:g};let R=null,ne=null;return R=g.nextSibling,ne=g.previousSibling,se=A,k(w),u(me),M(A,se,R,ne),me&&ms(me,an(),g.nextSibling),A===se?null:se},p)}const ws=_s(),ga=xs(),Ne=[];let zn=0;function Vn(p,g,k,w){Ne.push(p),Ne.push(g),Ne.push(k),Ne.push(w)}function va(){const p=zn,g=Ne.length;zn=g;for(let k=p;k<g;k+=4){const w=Ne[k];w(Ne[k+1],Ne[k+2],Ne[k+3])}zn=p,C(Ne,p)}const Pt=S();function ka(p,g,k,w){const A=!p.length;let R=0;for(;R<g.length;R+=2){const ne=g[R];if(A)p[R]=ne;else if(p[R]!==ne)break;const ue=g[R+1];(A||p[R+1]!==ue)&&(p[R+1]=ue,Vn(w,k,ne,ue))}if(R<g.length||R<p.length){const ne=R;for(R=ne;R<p.length;R+=2)Pt[p[R]]=p[R+1];for(R=ne;R<g.length;R+=2){const ue=g[R],Ae=g[R+1];Pt[ue]!==Ae&&Vn(w,k,ue,Ae),p[R]=ue,p[R+1]=Ae,delete Pt[ue]}C(p,g.length);for(const ue in Pt)Vn(w,k,ue,void 0),delete Pt[ue]}va()}const ya=3,ht=S();function Cs(p,g){const k=ps(),w=g.getAttrsArr(k.length);ka(w,k,p,mt),C(k,0)}function Ms(p,g,k){if(g.staticsApplied||(g.staticsApplied=!0,!k||!k.length))return;if(g.hasEmptyAttrsArr()){for(let R=0;R<k.length;R+=2)mt(p,k[R],k[R+1]);return}for(let R=0;R<k.length;R+=2)ht[k[R]]=R+1;const w=g.getAttrsArr(0);let A=0;for(let R=0;R<w.length;R+=2){const ne=w[R],ue=w[R+1],Ae=ht[ne];if(Ae){k[Ae]===ue&&delete ht[ne];continue}w[A]=ne,w[A+1]=ue,A+=2}C(w,A);for(const R in ht)mt(p,R,k[ht[R]]),delete ht[R]}function Es(p,g,k){const w=$n();f("elementOpenStart"),j(!0),w[0]=p,w[1]=g,w[2]=k}function ba(p){const g=$n();h("key"),c(g),g[1]=p}function Ss(p,g){const k=ps();l("attr"),k.push(p),k.push(g)}function Rs(){const p=$n();h("elementOpenEnd"),j(!1);const g=ks(p[0],p[1]),k=Je(g);return Ms(g,k,p[2]),Cs(g,k),C(p,0),g}function Ts(p,g,k,...w){f("elementOpen"),m("elementOpen"),Es(p,g,k);for(let A=ya;A<arguments.length;A+=2)Ss(arguments[A],arguments[A+1]);return Rs()}function _a(){const p=Hn(),g=Je(p);Cs(p,g)}function xa(p){const g=Hn(),k=Je(g);Ms(g,k,p)}function As(p){f("elementClose");const g=ys();return x(Je(g).nameOrCtor,p),g}function wa(p,g,k,...w){return Ts.apply(null,arguments),As(p)}function Ca(p,...g){f("text"),m("text");const k=pa(),w=Je(k);if(w.text!==p){w.text=p;let A=p;for(let R=1;R<arguments.length;R+=1){const ne=arguments[R];A=ne(A)}k.data!==A&&(k.data=A)}return k}t.applyAttr=ae,t.applyProp=ke,t.attributes=te,t.alignWithDOM=Un,t.close=ys,t.createPatchInner=_s,t.createPatchOuter=xs,t.currentElement=Hn,t.currentPointer=ma,t.open=ks,t.patch=ws,t.patchInner=ws,t.patchOuter=ga,t.skip=ha,t.skipNode=vs,t.setKeyAttributeName=s,t.clearCache=us,t.getKey=ia,t.importNode=ye,t.isDataInitialized=U,t.notifications=Be,t.symbols=Y,t.applyAttrs=_a,t.applyStatics=xa,t.attr=Ss,t.elementClose=As,t.elementOpen=Ts,t.elementOpenEnd=Rs,t.elementOpenStart=Es,t.elementVoid=wa,t.key=ba,t.text=Ca});mu(W);W.applyAttr;var kf=W.applyProp,Ni=W.attributes;W.alignWithDOM;W.close;W.createPatchInner;W.createPatchOuter;W.currentElement;W.currentPointer;W.open;var Di=W.patch;W.patchInner;W.patchOuter;W.skip;W.skipNode;W.setKeyAttributeName;W.clearCache;W.getKey;W.importNode;W.isDataInitialized;W.notifications;W.symbols;W.applyAttrs;W.applyStatics;W.attr;var uo=W.elementClose,fo=W.elementOpen;W.elementOpenEnd;W.elementOpenStart;var yf=W.elementVoid;W.key;var rr=W.text;Ni.caretpos=function(e,t,n){e.setSelectionRange(n,n)};Ni.value=kf;var bf=function(t,n,r){if(t.suggestions.length>0&&t.focused){fo("ul","",["class","dawa-autocomplete-suggestions","role","listbox","unselectable","on"]);for(var s=function(a){var c=t.suggestions[a],l="dawa-autocomplete-suggestion";t.selected===a&&(l+=" dawa-selected"),fo("li","",["role","option"],"class",l,"onmousedown",function(f){n(a),f.preventDefault()});var d=c.forslagstekst.split(`
`);if(d=d.map(function(f){return f.replace(/ /g," ")}),r){rr(d[0]);for(var u=1;u<d.length;++u)yf("br"),rr(d[u])}else rr(d.join(", "));uo("li")},o=0;o<t.suggestions.length;++o)s(o);uo("ul")}},_f=function(t,n,r,s){Di(t,function(){bf(n,r,s)})},xf=function(t,n){var r=n.onSelect,s=n.onTextChange,o=n.render||_f,i=!1,a="",c=0,l=document.createElement("div");t.parentNode.insertBefore(l,t.nextSibling);var d=function(C,B){(a!==C||c!==B)&&(s(C,B),a=C,c=B)},u={caretpos:2,inputText:"",selected:0,focused:document.activeElement===t,suggestions:[]},f=function(C){var B=C.value,Y=C.selectionStart;u.caretpos=Y,u.inputText=B,d(B,Y)},m,h=function(C){var B=u.suggestions[C];u.inputText=B.tekst,u.caretpos=B.caretpos,u.suggestions=[],r(B),m(!0)},v=function(C){var B=window.event?C.keyCode:C.which;if(u.suggestions.length>0&&u.focused){if(B===40)u.selected=(u.selected+1)%u.suggestions.length,m();else if(B===38)u.selected=(u.selected-1+u.suggestions.length)%u.suggestions.length,m();else if(B===13||B===9)h(u.selected);else return!0;return C.preventDefault(),!1}},x=function(){u.focused=!0,m()},_=function(){return u.focused=!1,m(),!1},M=function(C){f(C.target)},N=function(C){return f(C.target)},j=!1,L=!1;m=function(C){C&&(L=!0),j||(j=!0,requestAnimationFrame(function(){i||(j=!1,L&&(t.value=u.inputText,t.setSelectionRange(u.caretpos,u.caretpos)),L=!1,o(l,u,function(B){return h(B)},n.multiline))}))},m();var D=function(){i=!0,t.removeEventListener("keydown",v),t.removeEventListener("blur",_),t.removeEventListener("focus",x),t.removeEventListener("input",M),t.removeEventListener("mouseup",N),Di(l,function(){}),l.remove()},q=function(C){u.suggestions=C,u.selected=0,m()},F=function(C){u.inputText=C,u.caretpos=C.length,u.suggestions=[],u.selected=0,m(!0)};return t.addEventListener("keydown",v),t.addEventListener("blur",_),t.addEventListener("focus",x),t.addEventListener("input",M),t.addEventListener("mouseup",N),t.setAttribute("aria-autocomplete","list"),t.setAttribute("autocomplete","off"),{destroy:D,setSuggestions:q,selectAndClose:F}};function wf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function po(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ef(r.key),r)}}function Cf(e,t,n){return t&&po(e.prototype,t),n&&po(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mf(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ef(e){var t=Mf(e,"string");return typeof t=="symbol"?t:String(t)}var Sf=function(e,t){var n=(Fe.Object||{})[e]||Object[e],r={};r[e]=t(n),ie(ie.S+ie.F*Ke(function(){n(1)}),"Object",r)};Sf("keys",function(){return function(t){return Mr(Fn(t))}});var Fi={};Fi[Re("toStringTag")]="z";Fi+""!="[object z]"&&Ln(Object.prototype,"toString",function(){return"[object "+jn(this)+"]"},!0);var Rf=function(e,t,n,r){if(!(e instanceof t)||r!==void 0&&r in e)throw TypeError(n+": incorrect invocation!");return e},Tf=function(e,t,n,r){try{return r?t(Ie(n)[0],n[1]):t(n)}catch(o){var s=e.return;throw s!==void 0&&Ie(s.call(e)),o}},ji={},Af=Re("iterator"),Of=Array.prototype,Pf=function(e){return e!==void 0&&(ji.Array===e||Of[Af]===e)},If=Re("iterator"),Lf=Fe.getIteratorMethod=function(e){if(e!=null)return e[If]||e["@@iterator"]||ji[jn(e)]},mo=ut(function(e){var t={},n={},r=e.exports=function(s,o,i,a,c){var l=c?function(){return s}:Lf(s),d=Ee(i,a,o?2:1),u=0,f,m,h,v;if(typeof l!="function")throw TypeError(s+" is not iterable!");if(Pf(l)){for(f=Zt(s.length);f>u;u++)if(v=o?d(Ie(m=s[u])[0],m[1]):d(s[u]),v===t||v===n)return v}else for(h=l.call(s);!(m=h.next()).done;)if(v=Tf(h,d,m.value,o),v===t||v===n)return v};r.BREAK=t,r.RETURN=n}),Nf=function(e,t,n){var r=n===void 0;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)},ho=K.document,go=ho&&ho.documentElement,vo=K.process,Ar=K.setImmediate,Or=K.clearImmediate,ko=K.MessageChannel,sr=K.Dispatch,or=0,$t={},yo="onreadystatechange",dt,ir,ar,Dt=function(){var e=+this;if($t.hasOwnProperty(e)){var t=$t[e];delete $t[e],t()}},bo=function(e){Dt.call(e.data)};(!Ar||!Or)&&(Ar=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return $t[++or]=function(){Nf(typeof t=="function"?t:Function(t),n)},dt(or),or},Or=function(t){delete $t[t]},rt(vo)=="process"?dt=function(e){vo.nextTick(Ee(Dt,e,1))}:sr&&sr.now?dt=function(e){sr.now(Ee(Dt,e,1))}:ko?(ir=new ko,ar=ir.port2,ir.port1.onmessage=bo,dt=Ee(ar.postMessage,ar,1)):K.addEventListener&&typeof postMessage=="function"&&!K.importScripts?(dt=function(e){K.postMessage(e+"","*")},K.addEventListener("message",bo,!1)):yo in Cr("script")?dt=function(e){go.appendChild(Cr("script"))[yo]=function(){go.removeChild(this),Dt.call(e)}}:dt=function(e){setTimeout(Ee(Dt,e,1),0)});var Bi={set:Ar,clear:Or},Df=Bi.set,_o=K.MutationObserver||K.WebKitMutationObserver,Pr=K.process,lr=K.Promise,xo=rt(Pr)=="process",Ff=function(){var e,t,n,r=function(){var a,c;for(xo&&(a=Pr.domain)&&a.exit();e;){c=e.fn,e=e.next;try{c()}catch(l){throw e?n():t=void 0,l}}t=void 0,a&&a.enter()};if(xo)n=function(){Pr.nextTick(r)};else if(_o&&!(K.navigator&&K.navigator.standalone)){var s=!0,o=document.createTextNode("");new _o(r).observe(o,{characterData:!0}),n=function(){o.data=s=!s}}else if(lr&&lr.resolve){var i=lr.resolve(void 0);n=function(){i.then(r)}}else n=function(){Df.call(K,r)};return function(a){var c={fn:a,next:void 0};t&&(t.next=c),e||(e=c,n()),t=c}};function jf(e){var t,n;this.promise=new e(function(r,s){if(t!==void 0||n!==void 0)throw TypeError("Bad Promise constructor");t=r,n=s}),this.resolve=Vt(t),this.reject=Vt(n)}var Bf=function(e){return new jf(e)},as={f:Bf},Ir=function(e){try{return{e:!1,v:e()}}catch(t){return{e:!0,v:t}}},wo=K.navigator,$f=wo&&wo.userAgent||"",Uf=function(e,t){if(Ie(e),Oe(t)&&t.constructor===e)return t;var n=as.f(e),r=n.resolve;return r(t),n.promise},Hf=function(e,t,n){for(var r in t)Ln(e,r,t[r],n);return e},zf=rs.f,Co=Re("toStringTag"),Vf=function(e,t,n){e&&!zt(e=n?e:e.prototype,Co)&&zf(e,Co,{configurable:!0,value:t})},Mo=Re("species"),Kf=function(e){var t=K[e];Yt&&t&&!t[Mo]&&rs.f(t,Mo,{configurable:!0,get:function(){return this}})},Lr=Re("iterator"),$i=!1;try{var Eo=[7][Lr]();Eo.return=function(){$i=!0},Array.from(Eo,function(){throw 2})}catch{}var qf=function(e,t){if(!t&&!$i)return!1;var n=!1;try{var r=[7],s=r[Lr]();s.next=function(){return{done:n=!0}},r[Lr]=function(){return s},e(r)}catch{}return n},Ui=Bi.set,Hi=Ff(),ot="Promise",zi=K.TypeError,St=K.process,So=St&&St.versions,Gf=So&&So.v8||"",He=K[ot],Kt=jn(St)=="process",vn=function(){},un,Vi,Ro,Ki,qt=Vi=as.f,Qt=!!function(){try{var e=He.resolve(1),t=(e.constructor={})[Re("species")]=function(n){n(vn,vn)};return(Kt||typeof PromiseRejectionEvent=="function")&&e.then(vn)instanceof t&&Gf.indexOf("6.6")!==0&&$f.indexOf("Chrome/66")===-1}catch{}}(),qi=function(e){var t;return Oe(e)&&typeof(t=e.then)=="function"?t:!1},ls=function(e,t){if(!e._n){e._n=!0;var n=e._c;Hi(function(){for(var r=e._v,s=e._s==1,o=0,i=function(a){var c=s?a.ok:a.fail,l=a.resolve,d=a.reject,u=a.domain,f,m,h;try{c?(s||(e._h==2&&Wf(e),e._h=1),c===!0?f=r:(u&&u.enter(),f=c(r),u&&(u.exit(),h=!0)),f===a.promise?d(zi("Promise-chain cycle")):(m=qi(f))?m.call(f,l,d):l(f)):d(r)}catch(v){u&&!h&&u.exit(),d(v)}};n.length>o;)i(n[o++]);e._c=[],e._n=!1,t&&!e._h&&Jf(e)})}},Jf=function(e){Ui.call(K,function(){var t=e._v,n=To(e),r,s,o;if(n&&(r=Ir(function(){Kt?St.emit("unhandledRejection",t,e):(s=K.onunhandledrejection)?s({promise:e,reason:t}):(o=K.console)&&o.error&&o.error("Unhandled promise rejection",t)}),e._h=Kt||To(e)?2:1),e._a=void 0,n&&r.e)throw r.v})},To=function(e){return e._h!==1&&(e._a||e._c).length===0},Wf=function(e){Ui.call(K,function(){var t;Kt?St.emit("rejectionHandled",e):(t=K.onrejectionhandled)&&t({promise:e,reason:e._v})})},xt=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),ls(t,!0))},Nr=function(e){var t=this,n;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw zi("Promise can't be resolved itself");(n=qi(e))?Hi(function(){var r={_w:t,_d:!1};try{n.call(e,Ee(Nr,r,1),Ee(xt,r,1))}catch(s){xt.call(r,s)}}):(t._v=e,t._s=1,ls(t,!1))}catch(r){xt.call({_w:t,_d:!1},r)}}};Qt||(He=function(t){Rf(this,He,ot,"_h"),Vt(t),un.call(this);try{t(Ee(Nr,this,1),Ee(xt,this,1))}catch(n){xt.call(this,n)}},un=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},un.prototype=Hf(He.prototype,{then:function(t,n){var r=qt(Oi(this,He));return r.ok=typeof t=="function"?t:!0,r.fail=typeof n=="function"&&n,r.domain=Kt?St.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&ls(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),Ro=function(){var e=new un;this.promise=e,this.resolve=Ee(Nr,e,1),this.reject=Ee(xt,e,1)},as.f=qt=function(e){return e===He||e===Ki?new Ro(e):Vi(e)});ie(ie.G+ie.W+ie.F*!Qt,{Promise:He});Vf(He,ot);Kf(ot);Ki=Fe[ot];ie(ie.S+ie.F*!Qt,ot,{reject:function(t){var n=qt(this),r=n.reject;return r(t),n.promise}});ie(ie.S+ie.F*!Qt,ot,{resolve:function(t){return Uf(this,t)}});ie(ie.S+ie.F*!(Qt&&qf(function(e){He.all(e).catch(vn)})),ot,{all:function(t){var n=this,r=qt(n),s=r.resolve,o=r.reject,i=Ir(function(){var a=[],c=0,l=1;mo(t,!1,function(d){var u=c++,f=!1;a.push(void 0),l++,n.resolve(d).then(function(m){f||(f=!0,a[u]=m,--l||s(a))},o)}),--l||s(a)});return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=qt(n),s=r.reject,o=Ir(function(){mo(t,!1,function(i){n.resolve(i).then(r.resolve,s)})});return o.e&&s(o.v),r.promise}});function Xf(e,t){return t=t||{},new Promise(function(n,r){var s=new XMLHttpRequest,o=[],i=[],a={},c=function(){return{ok:(s.status/100|0)==2,statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return i},get:function(d){return a[d.toLowerCase()]},has:function(d){return d.toLowerCase()in a}}}};for(var l in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(d,u,f){o.push(u=u.toLowerCase()),i.push([u,f]),a[u]=a[u]?a[u]+","+f:f}),n(c())},s.onerror=r,s.withCredentials=t.credentials=="include",t.headers)s.setRequestHeader(l,t.headers[l]);s.send(t.body||null)})}var Yf=function(t){return Object.keys(t).map(function(n){var r=t[n];return"".concat(n,"=").concat(encodeURIComponent(r))}).join("&")},Zf=function(t){return new Promise(function(n){return setTimeout(n,t)})},Qf={params:{},minLength:2,retryDelay:500,renderCallback:function(){console.error("No renderCallback supplied")},initialRenderCallback:function(){console.error("No initialRenderCallback supplied")},type:"adresse",baseUrl:"https://dawa.aws.dk",adgangsadresserOnly:!1,stormodtagerpostnumre:!0,supplerendebynavn:!0,fuzzy:!0,fetchImpl:function(t,n){return Xf("".concat(t,"?").concat(Yf(n)),{mode:"cors"}).then(function(r){return r.json()})}},e2=function(){function e(t){wf(this,e),t=Object.assign({},Qf,t||{}),this.options=t,this.state={currentRequest:null,pendingRequest:null},this.selected=null}return Cf(e,[{key:"_getAutocompleteResponse",value:function(n,r,s,o,i,a){var c=Object.assign({},this.options.params,{q:n,type:this.options.type,caretpos:r,supplerendebynavn:i,stormodtagerpostnumre:a,multilinje:!0});return this.options.fuzzy&&(c.fuzzy=""),o&&(c.adgangsadresseid=o),s&&(c.startfra="adgangsadresse"),this.options.fetchImpl("".concat(this.options.baseUrl,"/autocomplete"),c)}},{key:"_scheduleRequest",value:function(n){this.state.currentRequest!==null?this.state.pendingRequest=n:(this.state.currentRequest=n,this._executeRequest())}},{key:"_executeRequest",value:function(){var n=this,r=this.state.currentRequest,s=null,o=!1,i,a;if(r.selected){var c=r.selected;if(c.type!==this.options.type)s=c.type==="adgangsadresse"?c.data.id:null,o=c.type==="vejnavn",i=c.tekst,a=c.caretpos;else{this.options.selectCallback(c),this.selected=c,this._requestCompleted();return}}else i=r.text,a=r.caretpos;if(r.selectedId){var l={id:r.selectedId,type:this.options.type};return this.options.fetchImpl("".concat(this.options.baseUrl,"/autocomplete"),l).then(function(d){return n._handleResponse(r,d)},function(d){return n._handleFailedRequest(r,d)})}else r.selected||r.text.length>=this.options.minLength?this._getAutocompleteResponse(i,a,o,s,this.options.supplerendebynavn,this.options.stormodtagerpostnumre).then(function(d){return n._handleResponse(r,d)},function(d){return n._handleFailedRequest(r,d)}):this._handleResponse(r,[])}},{key:"_handleFailedRequest",value:function(n,r){var s=this;return console.error("DAWA request failed",r),Zf(this.options.retryDelay).then(function(){s.state.pendingRequest||s._scheduleRequest(n),s._requestCompleted()})}},{key:"_handleResponse",value:function(n,r){if(n.selected)if(r.length===1){var s=r[0];s.type===this.options.type?this.options.selectCallback(s):this.state.pendingRequest||(this.state.pendingRequest={selected:s})}else this.options.renderCallback&&this.options.renderCallback(r);else n.selectedId?r.length===1&&(this.selected=r[0],this.options.initialRenderCallback(r[0].tekst)):this.options.renderCallback&&this.options.renderCallback(r);this._requestCompleted()}},{key:"_requestCompleted",value:function(){this.state.currentRequest=this.state.pendingRequest,this.state.pendingRequest=null,this.state.currentRequest&&this._executeRequest()}},{key:"setRenderCallback",value:function(n){this.options.renderCallback=n}},{key:"setInitialRenderCallback",value:function(n){this.options.initialRenderCallback=n}},{key:"setSelectCallback",value:function(n){this.options.selectCallback=n}},{key:"update",value:function(n,r){var s={text:n,caretpos:r};this._scheduleRequest(s)}},{key:"select",value:function(n){var r={selected:n};this._scheduleRequest(r)}},{key:"selectInitial",value:function(n){var r={selectedId:n};this._scheduleRequest(r)}},{key:"destroy",value:function(){}}]),e}(),t2="Expected a function",Ao=0/0,n2="[object Symbol]",r2=/^\s+|\s+$/g,s2=/^[-+]0x[0-9a-f]+$/i,o2=/^0b[01]+$/i,i2=/^0o[0-7]+$/i,a2=parseInt,l2=typeof cn=="object"&&cn&&cn.Object===Object&&cn,c2=typeof self=="object"&&self&&self.Object===Object&&self,d2=l2||c2||Function("return this")(),u2=Object.prototype,f2=u2.toString,p2=Math.max,m2=Math.min,cr=function(){return d2.Date.now()};function h2(e,t,n){var r,s,o,i,a,c,l=0,d=!1,u=!1,f=!0;if(typeof e!="function")throw new TypeError(t2);t=Oo(t)||0,Dr(n)&&(d=!!n.leading,u="maxWait"in n,o=u?p2(Oo(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function m(D){var q=r,F=s;return r=s=void 0,l=D,i=e.apply(F,q),i}function h(D){return l=D,a=setTimeout(_,t),d?m(D):i}function v(D){var q=D-c,F=D-l,S=t-q;return u?m2(S,o-F):S}function x(D){var q=D-c,F=D-l;return c===void 0||q>=t||q<0||u&&F>=o}function _(){var D=cr();if(x(D))return M(D);a=setTimeout(_,v(D))}function M(D){return a=void 0,f&&r?m(D):(r=s=void 0,i)}function N(){a!==void 0&&clearTimeout(a),l=0,r=c=s=a=void 0}function j(){return a===void 0?i:M(cr())}function L(){var D=cr(),q=x(D);if(r=arguments,s=this,c=D,q){if(a===void 0)return h(c);if(u)return a=setTimeout(_,t),m(c)}return a===void 0&&(a=setTimeout(_,t)),i}return L.cancel=N,L.flush=j,L}function Dr(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function g2(e){return!!e&&typeof e=="object"}function v2(e){return typeof e=="symbol"||g2(e)&&f2.call(e)==n2}function Oo(e){if(typeof e=="number")return e;if(v2(e))return Ao;if(Dr(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Dr(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(r2,"");var n=o2.test(e);return n||i2.test(e)?a2(e.slice(2),n?2:8):s2.test(e)?Ao:+e}var k2=h2;function y2(e,t){t=Object.assign({select:function(){return null}},t);var n=["baseUrl","minLength","params","fuzzy","stormodtagerpostnumre","supplerendebynavn","type"].reduce(function(i,a){return t.hasOwnProperty(a)&&(i[a]=t[a]),i},{});n.type||(t.adgangsadresserOnly?n.type="adgangsadresse":n.type="adresse");var r=new e2(n),s=function(a,c){return r.update(a,c)};s=t.debounce?k2(s,t.debounce,{maxWait:500}):s;var o=xf(e,{onSelect:function(a){r.select(a)},onTextChange:s,render:t.render,multiline:t.multiline||!1});return r.setRenderCallback(function(i){return o.setSuggestions(i)}),r.setSelectCallback(function(i){o.selectAndClose(i.tekst),t.select(i)}),r.setInitialRenderCallback(function(i){return o.selectAndClose(i)}),t.id&&r.selectInitial(t.id),{id:function(a){return r.selectInitial(a)},destroy:function(){return o.destroy()},selected:function(){return r.selected}}}const b2=async e=>{try{const t=await Pn.get(`https://api.dataforsyningen.dk/autocomplete?id=${e}`);return Promise.resolve(t.data)}catch(t){return Promise.reject(t)}},_2={class:"relative"},x2={for:"addressField"},w2={key:0,class:"text-fdm-red text-xs font-normal list-none"},C2=le({__name:"UIDawaInput",props:["text","dawaId","modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,s=V(),o=V(null),i=V(!1);tt(()=>n.modelValue,c=>{s.value=c});const a=c=>{i.value=!0,r("update:modelValue",c)};return Jt(async()=>{n.dawaId&&await b2(n.dawaId).then(c=>{i.value=!0,r("update:modelValue",c[0])}),y2(o.value,{select:a,id:n.dawaId})}),(c,l)=>(I(),H("div",_2,[E("label",x2,X(n.text),1),Ho(E("input",{"onUpdate:modelValue":l[0]||(l[0]=d=>s.value=d),id:"addressField",ref_key:"addressField",ref:o,name:"address",type:"text",class:"fdm-input w-full"},null,512),[[Ua,s.value]]),!i.value&&s.value!==void 0?(I(),H("span",w2," Vælg gyldig adresse ")):Q("",!0)]))}});const M2={class:"content"},E2={class:"mt-16 text-center"},S2={class:"font-normal text-center"},R2={class:"content__section"},T2={key:0,class:"content__field-grid"},A2=le({__name:"NewMembership",setup(e){const{addLoadingState:t,removeLoadingState:n}=En(),r=st(),s=V(),o=V(),i=V(),a=V(),c=V(),l=V(),d=V(),u=V(!1),f=V(!1),m=V(),h=V(),v=V(null),x=V(null),_=V(null),M=V(null),N=V(null),j=()=>{f.value=!0},L=fe(()=>{var S;return(S=r.appContent)==null?void 0:S.pages.find(C=>C.id==="newMembership")}),D=fe(()=>{var S;return(S=r.appContent)!=null&&S.progressionSteps.length?r.appContent.progressionSteps.map(C=>C.text):null});Jt(async()=>{var S,C;t(he.GENERIC),r.currentOrder.customer&&(m.value=r.currentOrder.customer.customerId,h.value=r.currentOrder.customer.address.addressId,s.value=Ze(r.currentOrder.customer.firstName,!0),o.value=Ze(r.currentOrder.customer.lastName,!0),a.value=Ze(r.currentOrder.customer.phone),i.value=Ze(r.currentOrder.customer.email),c.value=r.currentOrder.customer.address.dawaId),n(he.GENERIC),ts({funnelName:r.productPackageConfig.name,stepName:"personlige_oplysninger",userType:!1,salesType:(S=r.currentOrder)==null?void 0:S.salesType,salesChannel:(C=r.currentOrder)==null?void 0:C.salesChannel})});const q=()=>{var C,B,Y,ve,ae;const S=((C=N.value)==null?void 0:C.validate())??!0;return!(!d.value||!l.value||(B=v.value)!=null&&B.validate().length||(Y=x.value)!=null&&Y.validate().length||(ve=_.value)!=null&&ve.validate().length||(ae=M.value)!=null&&ae.validate().length||!S)},F=async()=>{if(q())try{const S={firstName:Ze(s.value,!0),lastName:Ze(o.value,!0),email:Ze(i.value),phone:Ze(a.value),marketingPermission:u.value,customerId:m.value?m.value:"",addressId:h.value?h.value:"",address:{addressId:h.value??l.value.data.adgangsadresseid,dawaId:l.value.data.id,streetName:l.value.data.vejnavn,streetNumber:l.value.data.husnr,floor:l.value.data.etage??"",door:l.value.data.dør??"",postalCode:l.value.data.postnr,city:l.value.data.postnrnavn,country:"Danmark"}},C=await r.addCustomerAndTermsConsent(S);location.href=C}catch{en.push({name:"Error"})}};return(S,C)=>{var B,Y,ve,ae,ke,re,xe,pt;return I(),H(Gt,null,[E("main",M2,[(B=D.value)!=null&&B.length?(I(),Ce($(Vo),{key:0,steps:D.value,progressStatus:1},null,8,["steps"])):Q("",!0),E("h2",E2,X((Y=L.value)==null?void 0:Y.title),1),E("h3",S2,X((ve=L.value)==null?void 0:ve.subTitle),1),E("div",R2,[L.value?(I(),H("div",T2,[G(ln,{label:L.value.firstName,name:"first-name",class:"w-full",ref_key:"firstNameRef",ref:v,modelValue:s.value,"onUpdate:modelValue":C[0]||(C[0]=te=>s.value=te),validationTypes:[$(oe).REQUIRED]},null,8,["label","modelValue","validationTypes"]),G(ln,{label:L.value.lastName,name:"last-name",class:"w-full",ref_key:"lastNameRef",ref:x,modelValue:o.value,"onUpdate:modelValue":C[1]||(C[1]=te=>o.value=te),validationTypes:[$(oe).REQUIRED,$(oe).LASTNAME]},null,8,["label","modelValue","validationTypes"]),G(C2,{text:L.value.address,"dawa-id":c.value,modelValue:l.value,"onUpdate:modelValue":C[2]||(C[2]=te=>l.value=te),class:"w-full"},null,8,["text","dawa-id","modelValue"]),G(ln,{label:L.value.phone,name:"phone",class:"w-full",ref_key:"phoneRef",ref:_,modelValue:a.value,"onUpdate:modelValue":C[3]||(C[3]=te=>a.value=te),requiredLength:8,prefix:"+45",validationTypes:[$(oe).REQUIRED,$(oe).NUMBER,$(oe).LENGTH]},null,8,["label","modelValue","validationTypes"]),G(ln,{label:L.value.email,name:"email",class:"w-full",ref_key:"emailRef",ref:M,modelValue:i.value,"onUpdate:modelValue":C[4]||(C[4]=te=>i.value=te),validationTypes:[$(oe).REQUIRED,$(oe).EMAIL]},null,8,["label","modelValue","validationTypes"])])):Q("",!0),(ae=$(r).membershipConsent)!=null&&ae.text?(I(),Ce(ns,{key:1,id:"membership-consent",text:$(r).membershipConsent.description,modelValue:d.value,"onUpdate:modelValue":C[7]||(C[7]=te=>d.value=te),required:!0,ref_key:"consentBoxRef",ref:N},{default:Mn(()=>[E("button",{"aria-label":"Mere information",class:"align-middle md:ml-3",onClick:C[5]||(C[5]=Hr(te=>j(),["prevent"])),type:"button"},[G(_e,{classes:"text-fdm-blue-400 w-5 h-5",icon:"exclamation-circle"})]),f.value?(I(),Ce(xr,{key:0,onClose:C[6]||(C[6]=te=>f.value=!1),content:$(r).membershipConsent.text},null,8,["content"])):Q("",!0)]),_:1},8,["text","modelValue"])):Q("",!0)]),L.value?(I(),Ce(Ti,{key:1,modelValue:u.value,"onUpdate:modelValue":C[8]||(C[8]=te=>u.value=te),consentText:L.value.newsletterConsentText},null,8,["modelValue","consentText"])):Q("",!0)]),G(es,{previousLink:"/",onNextClicked:C[9]||(C[9]=te=>F()),showNext:!0,nextLabel:(re=(ke=$(r).appContent)==null?void 0:ke.labels)==null?void 0:re.next,previousLabel:(pt=(xe=$(r).appContent)==null?void 0:xe.labels)==null?void 0:pt.previous},null,8,["nextLabel","previousLabel"])],64)}}});const O2=Le(A2,[["__scopeId","data-v-b8fcc705"]]),P2={},I2={class:"text-fdm-red text-center py-12 px-2"};function L2(e,t){return I(),H("main",I2,[...t[0]||(t[0]=[E("p",null,"Der opstod desværre en fejl.",-1),E("p",null,[Me("Kontakt eventuelt FDM kundeservice på "),E("span",{class:"inline-block"},[Me("tlf.: "),E("a",{href:"tel:+4570133040",class:"underline"},"70 13 30 40")])],-1)])])}const N2=Le(P2,[["render",L2]]),D2=()=>{var e;return((e=document.querySelector(Ha))==null?void 0:e.getRootNode())!==document},{addLoadingState:Gi,removeLoadingState:Ji}=En(),F2=[{path:"/",name:"Home",component:ao,beforeEnter:async(e,t,n)=>{e.query.basketId?n("/"):n()}},{path:"/medlemskab",name:"MemberInfo",component:iu,beforeEnter:async(e,t,n)=>{var s;const r=st();try{await r.fetchContact(),(s=r.flowConfig)!=null&&s.MEMBERS_MUST_ACCEPT_TERMS&&await r.fetchMembershipConsent(),n()}catch{n("/fejl")}}},{path:"/opret-medlemskab",name:"NewMembership",component:O2,beforeEnter:async(e,t,n)=>{const r=st();try{await r.fetchMembershipConsent(),n()}catch{n("/fejl")}}},{path:"/verify-token",name:"Validate Membership Token",component:ao,beforeEnter:async(e,t,n)=>{Gi(he.OAUTH_EXCHANGE),await V2().then(async()=>{n("/medlemskab"),Ji(he.OAUTH_EXCHANGE)})}},{path:"/fejl",name:"Error",component:N2}],en=J1({routes:F2,history:D2()?d1("/"):yi("/")});en.beforeEach(async(e,t,n)=>{if(["/verify-token","/fejl"].includes(e.path))return n();Gi(he.GENERIC);try{await st().getBaseContent(),n()}catch{n("/fejl")}finally{Ji(he.GENERIC)}});let fn;const j2=new Uint8Array(16);function B2(){if(!fn&&(fn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!fn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fn(j2)}const be=[];for(let e=0;e<256;++e)be.push((e+256).toString(16).slice(1));function $2(e,t=0){return be[e[t+0]]+be[e[t+1]]+be[e[t+2]]+be[e[t+3]]+"-"+be[e[t+4]]+be[e[t+5]]+"-"+be[e[t+6]]+be[e[t+7]]+"-"+be[e[t+8]]+be[e[t+9]]+"-"+be[e[t+10]]+be[e[t+11]]+be[e[t+12]]+be[e[t+13]]+be[e[t+14]]+be[e[t+15]]}const U2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Po={randomUUID:U2};function H2(e,t,n){if(Po.randomUUID&&!t&&!e)return Po.randomUUID();e=e||{};const r=e.random||(e.rng||B2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let s=0;s<16;++s)t[n+s]=r[s];return t}return $2(r)}const z2=()=>{let e=new URLSearchParams(document.location.search);if(!e.has("code")&&!e.has("state")){const t=document.location.hash,n=t.includes("?")?t.substring(t.indexOf("?")+1):"";n&&(e=new URLSearchParams(n))}return e},Bn=async()=>{const e=zr.getContainer(),t=e==null?void 0:e.dataset,n=(t==null?void 0:t.redirectLoginUrl)||"https://localhost:8080/verify-token",{verifier:r,challenge:s}=await new Promise(c=>{Kc(43,(l,{verifier:d,challenge:u})=>{l||c({verifier:d,challenge:u})})}),o=H2(),a=`https://auth.pre.fdm.dk/187af4a1-40b9-4262-8e3a-5000fb9a4e22/B2C_1A_FDMLOGIN/oauth2/v2.0/authorize?client_id=fc7ddac0-12a9-43b3-9473-c18e7e77f328&response_type=code&scope=openid%20offline_access%20fc7ddac0-12a9-43b3-9473-c18e7e77f328&state=${o}&code_challenge=${s}&code_challenge_method=S256&redirect_uri=${n}`;localStorage.setItem(Se.LOGIN_VERIFIER,r),localStorage.setItem(Se.LOGIN_CHALLENGE,s),localStorage.setItem(o,en.currentRoute.value.path),window.location.assign(a)},V2=async()=>{const e=z2(),t=e.get("code"),n=e.get("state"),r=localStorage.getItem(Se.LOGIN_VERIFIER);if(n&&localStorage.getItem(n)!==null&&t&&r)try{const s=await qc(t,r,n);return localStorage.setItem(Se.ACCESS_TOKEN,s.access_token),localStorage.setItem(Se.REFRESH_TOKEN,s.refresh_token),Promise.resolve(localStorage.getItem(n))}catch{Bn()}return Promise.reject()},je=Pn.create({baseURL:"https://nexus-api.pre.fdm.dk/",headers:{"Ocp-Apim-Subscription-Key":"4ea07990e9bc45fbb88f980db4273db1"}}),K2=Pn.create({baseURL:"https://auth.pre.fdm.dk/187af4a1-40b9-4262-8e3a-5000fb9a4e22/B2C_1A_FDMLOGIN",headers:{"Ocp-Apim-Subscription-Key":"4ea07990e9bc45fbb88f980db4273db1"}}),Wi=Pn.create({baseURL:"https://auth.pre.fdm.dk/187af4a1-40b9-4262-8e3a-5000fb9a4e22/B2C_1A_FDMLOGIN",headers:{"Ocp-Apim-Subscription-Key":"4ea07990e9bc45fbb88f980db4273db1"}}),q2=async e=>{try{const t=new FormData;t.append("grant_type","refresh_token"),t.append("refresh_token",e);const n=await je.post("https://auth.pre.fdm.dk/187af4a1-40b9-4262-8e3a-5000fb9a4e22/B2C_1A_FDMLOGIN/oauth2/v2.0/token",t);return localStorage.setItem(Se.ACCESS_TOKEN,n.data.access_token),localStorage.setItem(Se.REFRESH_TOKEN,n.data.refresh_token),je.defaults.headers.common.Authorization="Bearer "+n.data.access_token,n.data.access_token}catch{return Bn()}};je.interceptors.request.use(e=>{const t=localStorage.getItem(Se.ACCESS_TOKEN);return t&&(e.headers.Authorization="Bearer "+t),e},e=>Promise.reject(e));Wi.interceptors.request.use(e=>{const t=localStorage.getItem(Se.ACCESS_TOKEN);return t&&(e.headers.Authorization="Bearer "+t),e},e=>Promise.reject(e));je.interceptors.response.use(e=>e,async e=>{const t=e.config,n=localStorage.getItem(Se.ACCESS_TOKEN),r=localStorage.getItem(Se.REFRESH_TOKEN);return e.response.status===401&&!t._retry?(t._retry=!0,n||(r?await q2(r):Bn()),je(t)):Promise.reject(e)});const Xi="basket-id",G2=e=>{sessionStorage.setItem(Xi,e)},J2=()=>sessionStorage.getItem(Xi);let dr=null;const W2=async()=>{if(dr!==null)return Promise.resolve(dr);const e=J2(),t=await je.get(`/asl-orderbaskets-api/v1/orderbaskets-api/baskets/${e}`);return dr=t.data,Promise.resolve(t.data)},X2=async e=>{const t=await je.patch("/asl-orderbaskets-api/v1/orderbaskets-api/baskets",e);return Promise.resolve(t.data)},Y2=async()=>{const e=await je.get("/asl-contacts-api/V1/contact");return Promise.resolve(e.data)},Z2=async e=>{const t=await je.get(`/asl-terms-api/V1/definitions/${e}`);return Promise.resolve(t.data)};let ur=null;const Q2=async e=>(ur||(ur=(await je.get("/asl-productpackages-api/v1/productpackage/"+e)).data),Promise.resolve(ur));var tn=(e=>(e.CONTENT_INSURANCE="ContentInsurance",e.CAR_WARRANTY="CarWarranty",e.PERSON_INSURANCE="PersonInsurance",e.CAR_INSURANCE="CarInsurance",e))(tn||{}),ft=(e=>(e.FDM="FdmOrderline",e.CLEVER="CleverOrderline",e.WILLIS="WillisOrderLine",e.TRYG="TrygOrderline",e))(ft||{});const e0={MEMBERS_MUST_ACCEPT_TERMS:!1,TYPE:tn.CAR_WARRANTY,MEMBERSHIP_ORDERLINE:ft.FDM,TERMS_CODE:1},t0={MEMBERS_MUST_ACCEPT_TERMS:!0,TYPE:"Green",MEMBERSHIP_ORDERLINE:ft.CLEVER,TERMS_CODE:11},n0={MEMBERS_MUST_ACCEPT_TERMS:!1,TYPE:tn.CONTENT_INSURANCE,MEMBERSHIP_ORDERLINE:ft.FDM,TERMS_CODE:1},r0={MEMBERS_MUST_ACCEPT_TERMS:!1,TYPE:tn.PERSON_INSURANCE,MEMBERSHIP_ORDERLINE:ft.FDM,TERMS_CODE:1},s0={MEMBERS_MUST_ACCEPT_TERMS:!1,TYPE:tn.CAR_INSURANCE,MEMBERSHIP_ORDERLINE:ft.FDM,TERMS_CODE:1},o0={carwarranty:e0,green:t0,contentinsurance:n0,personinsurance:r0,carinsurance:s0},i0="FDM Reparationsforsikring",a0="Formidlet af WIA på vegne af QBE",l0="spanner-and-nut",c0=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"},{id:"payment",text:"Betaling"}],d0={next:"Næste",previous:"Tilbage"},u0={},f0=[{id:"selectMembership",textMember:"<p>Log ind med dit FDM login for at bestille reparationsforsikring</p>",headerMember:"Allerede medlem?",linkMember:"Fortsæt som medlem",headerNoMember:"Endnu ikke medlem?",textNoMember:"<p>For at få adgang til dette tilbud, skal du være medlem af FDM. Det er nemt at tilmelde dig, og medlemskabet giver dig en masse fordele. Bliv medlem samtidig med, at du bestiller FDM Reparationsforsikring</p>",footerNoMember:"<p>Et medlemskab koster {{FIRST_YEAR_PRICE}} kr. første år, derefter {{YEARLY_PRICE}} kr. om året.</p>",linkNoMember:"Bliv medlem",benefit_text_1:"Personlig råd og vejledning hos vores bileksperter",benefit_icon_1:"chat",benefit_text_2:"Adgang til testvindende bilforsikring",benefit_icon_2:"gear-check",benefit_text_3:"Rabatter på brændstof",benefit_icon_3:"discount",benefit_more_text:"+ mange flere",benefit_more_link:"https://fdm.dk/fordele"},{id:"newMembership",title:"Her tilmelder du dig FDM-Medlemskab",subTitle:"Indtast dine personlige oplysninger",firstName:"Fornavn",lastName:"Efternavn",phone:"Telefon nummer",email:"Email",address:"Adresse",newsletterConsentText:'<p>Ja tak, jeg vil gerne modtage så relevant markedsføring som muligt omkring <a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter " target="_blank">services og produkter</a> fra FDM og FDM’s <a href="https://fdm.dk/fordelspartneroversigt" target="_blank">fordels- og samarbejdspartnere</a>. Disse kan løbende ændres og altid ses i oversigten. Jeg giver derfor FDM lov til at kontakte mig via e-mail, sms, telefon og <a href="https://fdm.dk/om-fdm/persondatapolitik/sociale-medier " target="_blank">sociale medier</a> ved at sætte kryds her.</p><p>Jeg kan altid tilbagekalde mit samtykke ved at kontakte FDM på fx fdm.dk/kontakt, og jeg kan læse i FDMs <a href="https://fdm.dk/om-fdm/persondatapolitik " target="_blank">privatlivspolitik</a>, hvordan mine oplysninger behandles.</p>'},{id:"existingMembership",title:"Personlige oplysninger",mebershipNo:"Medlemsnr:",info:'<p>Er dine oplysninger ikke korrekte, kan du ændre dem på <strong><a href="https://fdm.dk/mitfdm" target="_blank">Mit FDM</a>.</strong> Husk at genindlæse siden her når du har opdateret dine oplysninger.</p>',newsletterConsentText:'<p>Ja tak, jeg vil gerne modtage så relevant markedsføring som muligt omkring <a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter " target="_blank">services og produkter</a> fra FDM og FDM’s <a href="https://fdm.dk/fordelspartneroversigt" target="_blank">fordels- og samarbejdspartnere</a>. Disse kan løbende ændres og altid ses i oversigten. Jeg giver derfor FDM lov til at kontakte mig via e-mail, sms, telefon og <a href="https://fdm.dk/om-fdm/persondatapolitik/sociale-medier " target="_blank">sociale medier</a> ved at sætte kryds her.</p><p>Jeg kan altid tilbagekalde mit samtykke ved at kontakte FDM på fx fdm.dk/kontakt, og jeg kan læse i FDMs <a href="https://fdm.dk/om-fdm/persondatapolitik " target="_blank">privatlivspolitik</a>, hvordan mine oplysninger behandles.</p>',updateAddressText:'<h2>Hov ...</h2><p>Vi kan se, at der desværre er en uoverensstemmelse i din adresse.</p><p>Før du kan gå videre, skal vi bede dig logge ind <a href="https://fdm.dk/mit-fdm/medlemskab">her</a> og foretage følgende:</p><ol><li>Klikke på "Redigér" under Medlemsinfo.</li><li>Slette din adresse fra adressefeltet.</li><li>Indtaste adressen på ny, trykke "Gem ændringer" og logge ud.</li></ol><p>Herefter bør du kunne gennemføre dit køb.</p>'},{id:"newsletterSignup",benefit_icon_1:"discount",benefit_text_1:"Fokus på rabatter",benefit_icon_2:"car",benefit_text_2:"Nyeste tests",benefit_icon_3:"archive",benefit_text_3:"Relevante artikler",title:"Gode fordele med FDM"},{id:"genericAPIError",generic:"<p>Siden kunne ikke vises.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badRequest:"<p>Siden kunne ikke vise indholdet.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",notFound:"<p>Indholdet findes ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",internalServerError:"<p>Siden kunne ikke vises</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badGateway:"<p>Der opstod en fejl hos en samarbejdspartner.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",noResponse:"<p>Serveren svarer ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>"}],p0={heroHeading:i0,heroSubheading:a0,heroIcon:l0,progressionSteps:c0,labels:d0,defaultValues:u0,pages:f0},m0="Bliv medlem",h0="Du har valgt ePlus i samarbejde med Clever",g0="icon-membership-fullcircle",v0=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"addons",text:"Valg og tilvalg"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"}],k0={next:"Næste",previous:"Tilbage"},y0={},b0=[{id:"selectMembership",textMember:"<p>Log ind for at bestille dit medlemskab ePlus.</p>",headerMember:"Allerede medlem?",linkMember:"Fortsæt som medlem",headerNoMember:"Endnu ikke medlem?",textNoMember:"<p>Det er nemt at tilmelde dig medlemskabet ePlus som giver dig en masse fordele.</p>",footerNoMember:"",linkNoMember:"Bliv medlem",benefit_text_1:"Personlig råd og vejledning hos vores bileksperter",benefit_icon_1:"chat",benefit_text_2:"Adgang til testvindende bilforsikring",benefit_icon_2:"gear-check",benefit_text_3:"Rabatter på brændstof",benefit_icon_3:"discount",benefit_more_text:"+ mange flere",benefit_more_link:"https://fdm.dk/fordele"},{id:"newMembership",title:"Her tilmelder du dig FDM-Medlemskab",subTitle:"Indtast dine personlige oplysninger",firstName:"Fornavn",lastName:"Efternavn",phone:"Telefon nummer",email:"Email",address:"Adresse",newsletterConsentText:'<p>Ja tak, jeg vil gerne modtage så relevant markedsføring som muligt omkring <a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter " target="_blank">services og produkter</a> fra FDM og FDM’s <a href="https://fdm.dk/fordelspartneroversigt" target="_blank">fordels- og samarbejdspartnere</a>. Disse kan løbende ændres og altid ses i oversigten. Jeg giver derfor FDM lov til at kontakte mig via e-mail, sms, telefon og <a href="https://fdm.dk/om-fdm/persondatapolitik/sociale-medier " target="_blank">sociale medier</a> ved at sætte kryds her.</p><p>Jeg kan altid tilbagekalde mit samtykke ved at kontakte FDM på fx fdm.dk/kontakt, og jeg kan læse i FDMs <a href="https://fdm.dk/om-fdm/persondatapolitik " target="_blank">privatlivspolitik</a>, hvordan mine oplysninger behandles.</p>'},{id:"existingMembership",title:"Personlige oplysninger",mebershipNo:"Medlemsnr:",info:'<p>Er dine oplysninger ikke korrekte, kan du ændre dem på <strong><a href="https://fdm.dk/mitfdm" target="_blank" title="Mit FDM">Mit FDM</a>.</strong> Husk at genindlæse siden her når du har opdateret dine oplysninger.</p>',newsletterConsentText:'<p>Ja tak, jeg vil gerne modtage så relevant markedsføring som muligt omkring <a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter " target="_blank">services og produkter</a> fra FDM og FDM’s <a href="https://fdm.dk/fordelspartneroversigt" target="_blank">fordels- og samarbejdspartnere</a>. Disse kan løbende ændres og altid ses i oversigten. Jeg giver derfor FDM lov til at kontakte mig via e-mail, sms, telefon og <a href="https://fdm.dk/om-fdm/persondatapolitik/sociale-medier " target="_blank">sociale medier</a> ved at sætte kryds her.</p><p>Jeg kan altid tilbagekalde mit samtykke ved at kontakte FDM på fx fdm.dk/kontakt, og jeg kan læse i FDMs <a href="https://fdm.dk/om-fdm/persondatapolitik " target="_blank">privatlivspolitik</a>, hvordan mine oplysninger behandles.</p>',updateAddressText:'<h2>Hov ...</h2><p>Vi kan se, at der desværre er en uoverensstemmelse i din adresse.</p><p>Før du kan gå videre, skal vi bede dig logge ind <a href="https://fdm.dk/mit-fdm/medlemskab">her</a> og foretage følgende:</p><ol><li>Klikke på "Redigér" under Medlemsinfo.</li><li>Slette din adresse fra adressefeltet.</li><li>Indtaste adressen på ny, trykke "Gem ændringer" og logge ud.</li></ol><p>Herefter bør du kunne gennemføre dit køb.</p>'},{id:"newsletterSignup",benefit_icon_1:"discount",benefit_text_1:"Fokus på rabatter",benefit_icon_2:"car",benefit_text_2:"Nyeste tests",benefit_icon_3:"archive",benefit_text_3:"Relevante artikler",title:"Gode fordele med FDM"},{id:"genericAPIError",generic:"<p>Siden kunne ikke vises.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badRequest:"<p>Siden kunne ikke vise indholdet.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",notFound:"<p>Indholdet findes ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",internalServerError:"<p>Siden kunne ikke vises</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badGateway:"<p>Der opstod en fejl hos en samarbejdspartner.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",noResponse:"<p>Serveren svarer ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>"}],_0={heroHeading:m0,heroSubheading:h0,heroIcon:g0,progressionSteps:v0,labels:k0,defaultValues:y0,pages:b0},x0="FDM Indboforsikring",w0="Formidlet af Tryg",C0="furniture",M0=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"},{id:"payment",text:"Betaling"}],E0={next:"Næste",previous:"Tilbage"},S0={},R0=[{id:"selectMembership",textMember:"<p>Log ind med dit FDM login for at bestille indboforsikring</p>",headerMember:"Allerede medlem?",linkMember:"Fortsæt som medlem",headerNoMember:"Endnu ikke medlem?",textNoMember:"<p>For at få adgang til dette tilbud, skal du være medlem af FDM. Det er nemt at tilmelde dig, og medlemskabet giver dig en masse fordele. Bliv medlem samtidig med, at du bestiller FDM Indboforsikring</p>",footerNoMember:"<p>Et medlemskab koster {{FIRST_YEAR_PRICE}} kr. første år, derefter {{YEARLY_PRICE}} kr. om året.</p>",linkNoMember:"Bliv medlem",benefit_text_1:"Personlig råd og vejledning hos vores bileksperter",benefit_icon_1:"chat",benefit_text_2:"Adgang til testvindende bilforsikring",benefit_icon_2:"gear-check",benefit_text_3:"Rabatter på brændstof",benefit_icon_3:"discount",benefit_more_text:"+ mange flere",benefit_more_link:"https://fdm.dk/fordele"},{id:"newMembership",title:"Her tilmelder du dig FDM-Medlemskab",subTitle:"Indtast dine personlige oplysninger",firstName:"Fornavn",lastName:"Efternavn",phone:"Telefon nummer",email:"Email",address:"Adresse",newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>'},{id:"existingMembership",title:"Personlige oplysninger",mebershipNo:"Medlemsnr:",info:'<p>Er dine oplysninger ikke korrekte, kan du ændre dem på <strong><a href="https://fdm.dk/mitfdm" target="_blank" title="Mit FDM">Mit FDM</a>.</strong> Husk at genindlæse siden her når du har opdateret dine oplysninger.</p>',newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>',updateAddressText:'<h2>Hov ...</h2><p>Vi kan se, at der desværre er en uoverensstemmelse i din adresse.</p><p>Før du kan gå videre, skal vi bede dig logge ind <a href="https://fdm.dk/mit-fdm/medlemskab">her</a> og foretage følgende:</p><ol><li>Klikke på "Redigér" under Medlemsinfo.</li><li>Slette din adresse fra adressefeltet.</li><li>Indtaste adressen på ny, trykke "Gem ændringer" og logge ud.</li></ol><p>Herefter bør du kunne gennemføre dit køb.</p>'},{id:"newsletterSignup",benefit_icon_1:"discount",benefit_text_1:"Fokus på rabatter",benefit_icon_2:"car",benefit_text_2:"Nyeste tests",benefit_icon_3:"archive",benefit_text_3:"Relevante artikler",title:"Gode fordele med FDM"},{id:"genericAPIError",generic:"<p>Siden kunne ikke vises.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badRequest:"<p>Siden kunne ikke vise indholdet.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",notFound:"<p>Indholdet findes ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",internalServerError:"<p>Siden kunne ikke vises</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badGateway:"<p>Der opstod en fejl hos en samarbejdspartner.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",noResponse:"<p>Serveren svarer ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>"}],T0={heroHeading:x0,heroSubheading:w0,heroIcon:C0,progressionSteps:M0,labels:E0,defaultValues:S0,pages:R0},A0="FDM Personforsikiring",O0="Formidlet af Tryg",P0="buoy",I0=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"},{id:"payment",text:"Betaling"}],L0={next:"Næste",previous:"Tilbage"},N0={},D0=[{id:"selectMembership",textMember:"<p>Log ind med dit FDM login for at bestille personforsikiring</p>",headerMember:"Allerede medlem?",linkMember:"Fortsæt som medlem",headerNoMember:"Endnu ikke medlem?",textNoMember:"<p>For at få adgang til dette tilbud, skal du være medlem af FDM. Det er nemt at tilmelde dig, og medlemskabet giver dig en masse fordele. Bliv medlem samtidig med, at du bestiller FDM Personforsikiring</p>",footerNoMember:"<p>Et medlemskab koster {{FIRST_YEAR_PRICE}} kr. første år, derefter {{YEARLY_PRICE}} kr. om året.</p>",linkNoMember:"Bliv medlem",benefit_text_1:"Personlig råd og vejledning hos vores bileksperter",benefit_icon_1:"chat",benefit_text_2:"Adgang til testvindende bilforsikring",benefit_icon_2:"gear-check",benefit_text_3:"Rabatter på brændstof",benefit_icon_3:"discount",benefit_more_text:"+ mange flere",benefit_more_link:"https://fdm.dk/fordele"},{id:"newMembership",title:"Her tilmelder du dig FDM-Medlemskab",subTitle:"Indtast dine personlige oplysninger",firstName:"Fornavn",lastName:"Efternavn",phone:"Telefon nummer",email:"Email",address:"Adresse",newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>'},{id:"existingMembership",title:"Personlige oplysninger",mebershipNo:"Medlemsnr:",info:'<p>Er dine oplysninger ikke korrekte, kan du ændre dem på <strong><a href="https://fdm.dk/mitfdm" target="_blank" title="Mit FDM">Mit FDM</a>.</strong> Husk at genindlæse siden her når du har opdateret dine oplysninger.</p>',newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>',updateAddressText:'<h2>Hov ...</h2><p>Vi kan se, at der desværre er en uoverensstemmelse i din adresse.</p><p>Før du kan gå videre, skal vi bede dig logge ind <a href="https://fdm.dk/mit-fdm/medlemskab">her</a> og foretage følgende:</p><ol><li>Klikke på "Redigér" under Medlemsinfo.</li><li>Slette din adresse fra adressefeltet.</li><li>Indtaste adressen på ny, trykke "Gem ændringer" og logge ud.</li></ol><p>Herefter bør du kunne gennemføre dit køb.</p>'},{id:"newsletterSignup",benefit_icon_1:"discount",benefit_text_1:"Fokus på rabatter",benefit_icon_2:"car",benefit_text_2:"Nyeste tests",benefit_icon_3:"archive",benefit_text_3:"Relevante artikler",title:"Gode fordele med FDM"},{id:"genericAPIError",generic:"<p>Siden kunne ikke vises.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badRequest:"<p>Siden kunne ikke vise indholdet.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",notFound:"<p>Indholdet findes ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",internalServerError:"<p>Siden kunne ikke vises</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badGateway:"<p>Der opstod en fejl hos en samarbejdspartner.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",noResponse:"<p>Serveren svarer ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>"}],F0={heroHeading:A0,heroSubheading:O0,heroIcon:P0,progressionSteps:I0,labels:L0,defaultValues:N0,pages:D0},j0="FDM Bilforsikring",B0="Formidlet af Tryg",$0="car",U0=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"},{id:"payment",text:"Betaling"}],H0={next:"Næste",previous:"Tilbage"},z0={},V0=[{id:"selectMembership",textMember:"<p>Log ind med dit FDM login for at bestille bilforsikring</p>",headerMember:"Allerede medlem?",linkMember:"Fortsæt som medlem",headerNoMember:"Endnu ikke medlem?",textNoMember:"<p>For at få adgang til dette tilbud, skal du være medlem af FDM. Det er nemt at tilmelde dig, og medlemskabet giver dig en masse fordele. Bliv medlem samtidig med, at du bestiller FDM Bilforsikring</p>",footerNoMember:"<p>Et medlemskab koster {{FIRST_YEAR_PRICE}} kr. første år, derefter {{YEARLY_PRICE}} kr. om året.</p>",linkNoMember:"Bliv medlem",benefit_text_1:"Personlig råd og vejledning hos vores bileksperter",benefit_icon_1:"chat",benefit_text_2:"Adgang til testvindende bilforsikring",benefit_icon_2:"gear-check",benefit_text_3:"Rabatter på brændstof",benefit_icon_3:"discount",benefit_more_text:"+ mange flere",benefit_more_link:"https://fdm.dk/fordele"},{id:"newMembership",title:"Her tilmelder du dig FDM-Medlemskab",subTitle:"Indtast dine personlige oplysninger",firstName:"Fornavn",lastName:"Efternavn",phone:"Telefon nummer",email:"Email",address:"Adresse",newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>'},{id:"existingMembership",title:"Personlige oplysninger",mebershipNo:"Medlemsnr:",info:'<p>Er dine oplysninger ikke korrekte, kan du ændre dem på <strong><a href="https://fdm.dk/mitfdm" target="_blank" title="Mit FDM">Mit FDM</a>.</strong> Husk at genindlæse siden her når du har opdateret dine oplysninger.</p>',newsletterConsentText:'<p>Ja, FDM f.m.b.a., FDM travel, FDM Test & Bilsyn (tilsammen "FDM") og Tryg Forsikring, må kontakte mig via e-mail, sms, meddelelser i nyhedsfeed og notifikationer på sociale medier (Facebook, Instagram, Youtube og LinkedIn), telefon og mine online kundesider med markedsføring af <ul><li class="text-xs">Produkter og services inden for forsikring og skadesforebyggelse</li><li class="text-xs">Kundefordele, fordelsprogrammer og events</li><li class="text-xs"><a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" class="fdm-link text-xs" target="_blank" >Medlemsfordele</a>, som opnås via <a href="https://fdm.dk/fordelspartneroversigt" class="fdm-link text-xs" target="_blank" >FDMs samarbejdspartnere</a> og konkurrencer.</li></ul><br/>Tryg og FDM må til brug for markedsføring udveksle og anvende mit navn, adresse, telefonnummer, e-mail, fødselsdato, registreringsnummer, FDM medlemsnummer samt information om købte forsikringer og skadesforebyggende produkter, som jeg har købt igennem FDM Forsikringer. Tryg og FDM må derudover behandle oplysninger om læsning og kliks på links i de e-mails, jeg modtager, for at gøre fremtidig kommunikation mere relevant.<br/><br/>Jeg kan til enhver tid tilbagekalde mit samtykke ved at kontakte Tryg på <a href="mailto:samtykke@tryg.dk" class="fdm-link text-xs" target="_blank" >samtykke@tryg.dk</a>, <a href="https://tryg.dk/fdmforsikringer/afmeld" class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/afmeld</a> eller telefon <a href="tel:+4533916688" class="fdm-link text-xs">33 91 66 88</a>, eller FDM på <a href="mailto:fdm@fdm.dk" class="fdm-link text-xs" target="_blank" >fdm@fdm.dk</a> eller telefon <a href="tel:+4570133040" class="fdm-link text-xs">70 13 30 40</a>.<br/><br/>Jeg kan læse mere om, hvordan Tryg og FDM behandler mine personoplysninger ved at klikke <a href="https://tryg.dk/fdmforsikringer/persondatapolitik " class="fdm-link text-xs" target="_blank" >tryg.dk/fdmforsikringer/persondatapolitik</a> for Tryg og <a href="https://fdm.dk/persondatapolitik " class="fdm-link text-xs" target="_blank" >fdm.dk/persondatapolitik</a> for FDM.</p>',updateAddressText:'<h2>Hov ...</h2><p>Vi kan se, at der desværre er en uoverensstemmelse i din adresse.</p><p>Før du kan gå videre, skal vi bede dig logge ind <a href="https://fdm.dk/mit-fdm/medlemskab">her</a> og foretage følgende:</p><ol><li>Klikke på "Redigér" under Medlemsinfo.</li><li>Slette din adresse fra adressefeltet.</li><li>Indtaste adressen på ny, trykke "Gem ændringer" og logge ud.</li></ol><p>Herefter bør du kunne gennemføre dit køb.</p>'},{id:"newsletterSignup",benefit_icon_1:"discount",benefit_text_1:"Fokus på rabatter",benefit_icon_2:"car",benefit_text_2:"Nyeste tests",benefit_icon_3:"archive",benefit_text_3:"Relevante artikler",title:"Gode fordele med FDM"},{id:"genericAPIError",generic:"<p>Siden kunne ikke vises.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badRequest:"<p>Siden kunne ikke vise indholdet.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",notFound:"<p>Indholdet findes ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",internalServerError:"<p>Siden kunne ikke vises</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",badGateway:"<p>Der opstod en fejl hos en samarbejdspartner.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>",noResponse:"<p>Serveren svarer ikke.</p><p>Prøv at genindlæse siden.</p><p>Kontakt Medlems- og Kundeservice på 70 13 30 40 hvis fejlen fortsætter.</p>"}],K0={heroHeading:j0,heroSubheading:B0,heroIcon:$0,progressionSteps:U0,labels:H0,defaultValues:z0,pages:V0},q0={carwarranty:p0,green:_0,contentinsurance:T0,personinsurance:F0,carinsurance:K0},G0=e=>{if(!e)return{};const t={};for(const[n,r]of Object.entries(e))if(r!==void 0){const s=n,o=J0(r);o!==void 0&&(t[s]=o)}return t},J0=e=>{if(!(!e||e==="undefined"||e==="null"||e===""))return e==="true"?!0:e==="false"?!1:/^\d+(\.\d+)?$/.test(e)?Number(e):e},W0=e=>({...e,isMember:e.isMember==="true"||e.isMember==="True"}),X0=async()=>{const e=await Wi.get("/openid/v2.0/userinfo");return Promise.resolve(e.data)},{addLoadingState:kt,removeLoadingState:yt}=En(),st=Ol("membership",{state:()=>({contact:null,user:null,currentOrder:null,productPackageConfig:null,membershipConsent:null}),getters:{appContent:e=>{if(e.productPackageType){const t=q0[e.productPackageType.toLowerCase()];if(t)return t}return null},flowConfig:e=>e.productPackageType?o0[e.productPackageType.toLowerCase()]:null,productPackageType:e=>e.currentOrder?e.currentOrder.productPackageType??"CarWarranty":null},actions:{updateTrygMarketingConsent(e,t){const n=e.orderlines.find(r=>r.type===ft.TRYG);n&&(n.trygMarketingConsent=t)},async fetchCurrentOrder(){try{kt(he.UPDATE_ORDER);const e=await W2();return this.currentOrder=e.order,Promise.resolve(e)}catch(e){return Promise.reject(e)}finally{yt(he.UPDATE_ORDER)}},async fetchContact(){try{kt(he.CONTACT);const e=await Y2();return this.contact=e,Promise.resolve(e)}catch(e){return Promise.reject(e)}finally{yt(he.CONTACT)}},async fetchUser(){try{kt(he.USER);const e=await X0();return this.user=W0(e),Promise.resolve(e)}catch(e){return Promise.reject(e)}finally{yt(he.USER)}},async fetchProductPackageConfig(){try{kt(he.PRODUCT_PACKAGE_CONFIG);const e=await Q2(this.currentOrder.productPackageConfigurationId);return this.productPackageConfig=e,Promise.resolve(e)}catch(e){return Promise.reject(e)}finally{yt(he.PRODUCT_PACKAGE_CONFIG)}},async fetchMembershipConsent(){var e;try{kt(he.CONSENT);const t=await Z2((e=this.flowConfig)==null?void 0:e.TERMS_CODE);return this.membershipConsent=t,Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{yt(he.CONSENT)}},async addCustomerAndTermsConsent(e){var t,n,r,s,o,i;try{kt(he.UPDATE_ORDER);const a=Object.assign({},this.currentOrder);if(a.customer=Object.assign({},e,{marketingPermissionOrigin:"web"}),this.updateTrygMarketingConsent(a,e.marketingPermission),(t=this.user)!=null&&t.isMember&&((n=this.flowConfig)!=null&&n.MEMBERS_MUST_ACCEPT_TERMS)||!((r=this.user)!=null&&r.isMember)){const d=a.orderlines.findIndex(v=>{var x;return v.type===((x=this.flowConfig)==null?void 0:x.MEMBERSHIP_ORDERLINE)}),u=d===-1?-1:a.orderlines[d].productlines?a.orderlines[d].productlines.findIndex(v=>v.type==="BaseProduct"):-1,f=u===-1?this.productPackageConfig.ProductPackages.find(v=>v.productPackageId===a.productPackageId).products.find(v=>v.type==="BaseProduct"):Object.assign({},a.orderlines[d].productlines[u]),m={termsCode:(s=this.flowConfig)==null?void 0:s.TERMS_CODE,acceptDate:new Date},h={type:(o=this.flowConfig)==null?void 0:o.MEMBERSHIP_ORDERLINE,motorMagasin:!0,termsAndConditions:[m],productlines:[f]};if(d===-1)a.orderlines.push(h);else{const v=Object.assign({},a.orderlines[d]),x=v.termsAndConditions?v.termsAndConditions.findIndex(_=>{var M;return _.termsCode.toString()===((M=this.flowConfig)==null?void 0:M.TERMS_CODE.toString())}):-1;x!==-1?v.termsAndConditions[x]=m:v.termsAndConditions=v.termsAndConditions?[m,...v.termsAndConditions]:[m],u===-1&&(v.productlines=v.productlines?[f,...v.productlines]:[f]),a.orderlines.splice(d,1,v)}}const c=await X2({order:a}),l=`${this.productPackageConfig.configurationAppUrl}?basketId=${a.orderId}&existing=${(i=this.user)!=null&&i.isMember?1:0}`;return this.currentOrder=c.order,Promise.resolve(l)}catch(a){return Promise.reject(a)}finally{yt(he.UPDATE_ORDER)}},async addExistingContactAndTermsConsent(e){var t,n;try{if(this.contact){const r=Object.assign({},this.contact),s=await this.addCustomerAndTermsConsent({customerId:((n=(t=this.currentOrder)==null?void 0:t.customer)==null?void 0:n.customerId)??r.customerId??"",fdmNumber:r.fdmNumber,firstName:r.firstName,lastName:r.lastName,email:r.email,phone:r.mobilePhone,marketingPermission:e,marketingPermissionOrigin:"web",address:{dawaId:r.address.dawaId,streetName:r.address.streetName,streetNumber:r.address.streetNumber,floor:r.address.floor??"",door:r.address.door??"",postalCode:r.address.postcode,city:r.address.city,country:"Danmark"}});return Promise.resolve(s)}else throw new Error("no contact fetched")}catch(r){return Promise.reject(r)}},async getBaseContent(){this.currentOrder||await this.fetchCurrentOrder(),!this.productPackageConfig&&this.currentOrder&&await this.fetchProductPackageConfig()}}}),Y0=e=>{if(!document)return;const t={development:"33345678-1234-1234-1234-123456789333",staging:"22245678-1234-1234-1234-123456789222",production:"11145678-1234-1234-1234-123456789111"},n={development:"https://trackbr.dev.fdm.dk",staging:"https://trackbr.pre.fdm.dk",production:"https://trackbr.fdm.dk"},r={development:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",staging:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",production:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js"};[{name:"googleConsentModeV2",attributes:null,text:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
      `},{name:"cookieConsent",attributes:{src:"//policy.app.cookieinformation.com/uc.js","data-culture":"DA","data-gcm-version":"2.0",id:"CookieConsent"},text:""},{name:"googleoptimize",attributes:{"data-consent-src":"https://www.googleoptimize.com/optimize.js?id=OPT-WGVJJS3","data-category-consent":"cookie_cat_statistic"},text:""},{name:"bloomReach",attributes:null,text:`
      !function(e,n,t,i,r,o){function s(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,c="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var r=t.getElementsByTagName(n)[0];return r.parentNode.insertBefore(i,r),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}o.target=o.target||"https://api.exponea.com",o.file_path=o.file_path||o.target+"/js/exponea.min.js",r[n]=p(["anonymize","initialize","identify","getSegments","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers","_preInitialize","_initializeConfig"]),r[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),r[n].segments=p(["subscribe"]),r[n]["snippetVersion"]="v2.7.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(r,n,"performance"),function(e,n,t,i,r,o){e[r]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(o.exec(n.cookie)||["","new"])[1],path:t.target}}(r,e,o,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(o,t,e),function(e,n,t,i,r,o,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var l,f=e.new_experiments.hide_class||c,_=e.new_experiments.timeout||a,g=encodeURIComponent(o.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?l=s(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(l=s(e.cookies.expires.tracking))),l&&l<new Date&&(l=void 0);var d=e.target+"/webxp/"+n+"/"+o[t].sign+"/modifications.min.js?http-referer="+g+"&timeout="+_+"ms"+(l?"&cookie-expires="+Math.floor(l.getTime()/1e3):"");"sync"===e.new_experiments.mode&&o.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,r){t[r][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[r][n]),i.writeln("<"+n+">!"+r+".init && document.writeln("+r+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(d,n,o,p,t):function(e,n,t,i,r,o,s,a){o.documentElement.classList.add(e);var c=m(t,i,o);function p(){r[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,o)}function u(){o.documentElement.classList.remove(e)}c.onload=p,c.onerror=p,r.setTimeout(u,n),r[s]._revealPage=u}(f,_,d,n,o,p,r,t)}}(o,t,i,0,n,r,e),function(e,n,t){var i;e[n]._initializeConfig(t),(null===(i=t.experimental)||void 0===i?void 0:i.non_personalized_weblayers)&&e[n]._preInitialize(t),e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(r,n,o)}(document,"exponea","script","webxpClient",window,{
        target: "${n[e]}",
        token: "${t[e]}",
        file_path: "${r[e]}",
        experimental: {
            non_personalized_weblayers: true
        },
        track: {
            visits: true,
            google_analytics: false,
        },
      });
      `},{name:"googleTagManager",attributes:null,text:`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PZ2KCTG');
      `}].forEach(o=>{const i=document.createElement("script");if(o.attributes)for(const[a,c]of Object.entries(o.attributes))c&&i.setAttribute(a,c);i.text=o.text,document.head.appendChild(i)})},Z0=` <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-0">
      <symbol
        id="buoy"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.5496 30.8096C38.4145 27.8167 39.5195 24.2942 39.5195 20.5186C39.5195 16.7429 38.4145 13.2204 36.5496 10.2275C36.5036 10.1124 36.4575 9.9973 36.3655 9.90521C34.869 7.62599 32.9121 5.66909 30.6329 4.17263C30.5408 4.08054 30.4257 4.03449 30.3106 3.98845C27.3176 2.12363 23.7952 1.01855 20.0195 1.01855C16.2439 1.01855 12.7214 2.12363 9.7285 3.98845C9.61339 4.03449 9.49828 4.08054 9.40619 4.17263C7.12697 5.66909 5.17006 7.62599 3.6736 9.90521C3.58151 9.9973 3.53547 10.1124 3.48942 10.2275C1.62461 13.2204 0.519531 16.7429 0.519531 20.5186C0.519531 24.2942 1.62461 27.8167 3.48942 30.8096C3.53547 30.9247 3.58151 31.0398 3.6736 31.1319C5.17006 33.4111 7.12697 35.368 9.40619 36.8645C9.49828 36.9566 9.61339 37.0256 9.7285 37.0487C12.7214 38.9135 16.2439 40.0186 20.0195 40.0186C23.7952 40.0186 27.3176 38.9135 30.3106 37.0487C30.4257 37.0026 30.5408 36.9566 30.6329 36.8645C32.9121 35.368 34.869 33.4111 36.3655 31.1319C36.4575 31.0398 36.5036 30.9247 36.5496 30.8096ZM35.6057 29.221L29.4127 23.028C29.6199 22.2222 29.758 21.3934 29.758 20.5186C29.758 19.6437 29.6429 18.8149 29.4127 18.0091L35.6057 11.8161C37.0561 14.3946 37.8849 17.3645 37.8849 20.5186C37.8849 23.6726 37.0561 26.6425 35.6057 29.221ZM19.9965 28.6455C15.5071 28.6455 11.8696 25.0079 11.8696 20.5186C11.8696 16.0292 15.5071 12.3916 19.9965 12.3916C24.4859 12.3916 28.1234 16.0292 28.1234 20.5186C28.1234 25.0079 24.4859 28.6455 19.9965 28.6455ZM34.7309 10.3887L28.7911 16.3285C27.8241 14.3255 26.2126 12.6909 24.1866 11.724L30.1264 5.7842C31.9221 7.02741 33.4877 8.59293 34.7309 10.3887ZM28.722 4.90935L22.529 11.1024C21.7232 10.8952 20.8944 10.757 20.0195 10.757C19.1447 10.757 18.3159 10.8722 17.5101 11.1024L11.3171 4.90935C13.8956 3.45893 16.8655 2.63012 20.0195 2.63012C23.1736 2.63012 26.1435 3.45893 28.722 4.90935ZM9.88966 5.7842L15.8294 11.724C13.8265 12.6909 12.1919 14.3025 11.225 16.3285L5.28517 10.3887C6.52839 8.59293 8.09391 7.02741 9.88966 5.7842ZM4.41032 11.7931L10.6034 17.9861C10.3962 18.7919 10.258 19.6207 10.258 20.4955C10.258 21.3704 10.3731 22.1992 10.6034 23.005L4.41032 29.198C2.95991 26.6195 2.1311 23.6496 2.1311 20.4955C2.1311 17.3415 2.95991 14.3716 4.41032 11.7931ZM5.28517 30.6254L11.225 24.6856C12.1919 26.6886 13.8035 28.3232 15.8294 29.2901L9.88966 35.2299C8.09391 33.9867 6.52839 32.4212 5.28517 30.6254ZM11.294 36.1047L17.4871 29.9117C18.2928 30.1189 19.1217 30.257 19.9965 30.257C20.8714 30.257 21.7002 30.1419 22.506 29.9117L28.699 36.1047C26.1205 37.5552 23.1506 38.384 19.9965 38.384C16.8424 38.384 13.8725 37.5552 11.294 36.1047ZM30.1264 35.2299L24.1866 29.2901C26.1895 28.3232 27.8241 26.7116 28.7911 24.6856L34.7309 30.6254C33.4877 32.4212 31.9221 33.9867 30.1264 35.2299Z"
          fill="black"
        />
      </symbol>

      <symbol
        id="archive"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        xml:space="preserve"
      >
        <path
          d="M23.5 11.4s9.8 1.2 12.1 1.7m-12.1 3.4s9.8 1.2 12.1 1.7m-12.1 3.5s9.8 1.2 12.1 1.7m-12.1 3.5s9.8 1.2 12.1 1.7M16.5 11.4s-9.8 1.2-12.1 1.7m12.1 3.4s-9.8 1.2-12.1 1.7m12.1 3.5s-9.8 1.2-12.1 1.7m12.1 3.5s-9.8 1.2-12.1 1.7M20 7.9v25.9M39 7.9 23.5 6.2c-1 0-3.5.8-3.5 1.7 0-1-2.5-1.7-3.5-1.7L1 7.9v25.9l15.5-1.7c.9 0 3.5.8 3.5 1.7 0-.9 2.5-1.7 3.5-1.7L39 33.8V7.9z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.727"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        />
      </symbol>

      <symbol id="arrow-thick" viewBox="0 0 40 40">
        <path
          d="M32.8 20.6c.1-.2.1-.4.1-.6s0-.4-.1-.6c-.1-.2-.2-.4-.3-.5L21.8 8.2c-.6-.6-1.6-.6-2.3 0-.6.6-.6 1.6 0 2.3l7.9 7.9H8.7c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h18.7l-7.9 7.9c-.6.6-.6 1.6 0 2.3.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l10.6-10.6c.3-.2.4-.4.5-.6z"
          fill="currentColor"
          stroke="currentColor"
        />
      </symbol>

      <symbol version="1.1" id="calculator" x="0" y="0" viewBox="0 0 24 24" space="preserve">
        <style xmlns="">
          .calculator {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          id="calculator_2213_"
          class="calculator"
          d="M17.5 23.5h-11c-1.7 0-3-1.3-3-3v-17c0-1.7 1.3-3 3-3h11c1.7 0 3 1.3 3 3v17c0 1.7-1.3 3-3 3z"
          xmlns=""
        />
        <path
          id="calculator_2212_"
          class="calculator"
          d="M6.5 9.5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-11z"
          xmlns=""
        />
        <path id="calculator_2211_" class="calculator" d="M15.5 4.5h0" xmlns="" />
        <path id="calculator_2210_" class="calculator" d="M15.5 7.5h0" xmlns="" />
        <path id="calculator_2209_" class="calculator" d="M16.5 5.5v1" xmlns="" />
        <path id="calculator_2208_" class="calculator" d="M14.5 5.5v1" xmlns="" />
        <path
          id="calculator_2207_"
          class="calculator"
          d="M7.5 15.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
        <path
          id="calculator_2206_"
          class="calculator"
          d="M12.5 15.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
        <path
          id="calculator_2205_"
          class="calculator"
          d="M17.5 15.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
        <path
          id="calculator_2204_"
          class="calculator"
          d="M7.5 20.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
        <path
          id="calculator_2203_"
          class="calculator"
          d="M12.5 20.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
        <path
          id="calculator_2202_"
          class="calculator"
          d="M17.5 20.5h-1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"
          xmlns=""
        />
      </symbol>

      <symbol
        version="1.1"
        id="calendar"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .calendar {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="calendar"
          d="M6 3.5H3.5c-1.66 0-3 1.34-3 3v20c0 1.66 1.34 3 3 3h23c1.66 0 3-1.34 3-3v-20c0-1.66-1.34-3-3-3H6zM.5 9.5h29M8.5 5.5v-5M21.5 5.5v-5"
        />
        <path
          class="calendar"
          d="M8.5 17h0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5v.04c0 1.38-1.12 2.54-2.5 2.54H9.75 11c1.38 0 2.5 1.08 2.5 2.45v-.02c0 1.38-1.12 2.49-2.5 2.49v-.01a2.5 2.5 0 0 1-2.5-2.5v0M19.5 24v-9.5l-2 2M17.5 24.5h4"
        />
      </symbol>

      <symbol version="1.1" id="car" x="0" y="0" viewBox="0 0 24 24" space="preserve">
        <style xmlns="">
          .car {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="car_9537_">
          <path id="car_9542_" class="car" d="M15.5 10.5h-5v-2" />
          <circle id="car_9541_" class="car" cx="19" cy="15" r="2.5" />
          <circle id="car_9540_" class="car" cx="4" cy="15" r="2.5" />
          <path id="car_9539_" class="car" d="M6.5 15.5h10" />
          <path
            id="car_9538_"
            class="car"
            d="M21.5 15.5h1c.31 0 1-.41 1-1v-2c0-.69-1.5-3-5-3 0 0-3.44-3-9-3-1.48 0-3.69.22-5.55 1H1.5l.88.88C1.27 9.21.5 10.37.5 12c0 .79.02 3.5 1 3.5"
          />
        </g>
      </symbol>

      <symbol id="car-type-large" viewBox="0 0 125 62">
        <style>
          .car-type-large {
            fill: none;
            stroke: currentColor;
            stroke-width: 0.9932;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="car-type-large"
          d="M102.8 50h5.4c3.4 0 6.7-1.6 8.8-4.2l5.3-6.6c2.4-3 2.9-7.2 1.2-10.6-1.7-3.5-5.2-5.7-9.1-5.7M37.6 50h43.5M86.5 22.8L75.8 5.7c-1.8-2.9-4.9-4.6-8.3-4.6H24c-6.8 0-13 3.5-16.6 9.2l-4.9 7.9C.8 21.2.2 24.7.7 28.1L4 44.7c.6 3.1 3.4 5.3 6.5 5.3h5.4M.8 22.8h113.7"
        />
        <circle class="car-type-large" cx="91.9" cy="50" r="10.9" />
        <circle class="car-type-large" cx="26.7" cy="50" r="10.9" />
        <path
          class="car-type-large"
          d="M53.9 22.8V1.1M34.9 1.1l-8.2 21.7M64.8 33.7h-5.5M124.5 33.7h-10.9"
        />
      </symbol>

      <symbol id="car-type-regular" viewBox="0 0 125 62">
        <style>
          .car-type-regular {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="car-type-regular"
          d="M5.6 42.6V28.7c0-3 .8-6 2.4-8.6L19.3 1h27.4C52.5 1 58.1 3.5 62 7.8L76.4 24h16c5.4 0 10.1 3.7 11.4 9l2.4 9.5c0 5.1-4.1 9.2-9.1 9.2h-4.6M74.1 51.8H33M83.3 42.6h22.8"
        />
        <ellipse class="car-type-regular" cx="83.3" cy="51.8" rx="9.1" ry="9.2" />
        <path
          class="car-type-regular"
          d="M19.3 1h-9.2M76.4 24.1H6.2M33 1v23.1M23.8 42.6H5.6c-2.6 0-4.6 2-4.6 4.6 0 2.6 2 4.6 4.6 4.6h9.1"
        />
        <ellipse class="car-type-regular" cx="23.8" cy="51.8" rx="9.1" ry="9.2" />
        <path
          class="car-type-regular"
          d="M46.7 33.3h-4.6M12.4 33.3H5.6M103.8 33.3H97c-5 0-9.1-4.1-9.1-9.2"
        />
      </symbol>

      <symbol
        version="1.1"
        id="chat"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 40 40"
        xml:space="preserve"
      >
        <style>
          .chat {
            fill: none;
            stroke: currentColor;
            stroke-width: 1.3103;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="chat"
          d="M20.66 5.59H7.55C3.93 5.59 1 8.6 1 12.33v4.87c0 3.72 2.93 6.74 6.55 6.74h1.31v5.24l5.24-5.24h6.55c3.62 0 6.55-3.02 6.55-6.74v-4.87c.01-3.73-2.93-6.74-6.54-6.74z"
        />
        <path
          class="chat"
          d="M14.64 27.1c1.19 1.27 2.86 2.07 4.71 2.07h6.55l5.24 5.24v-5.24h1.31c3.62 0 6.55-3.02 6.55-6.74v-4.87c0-3.72-2.93-6.74-6.55-6.74H29.7"
        />
      </symbol>

      <symbol id="check-list" viewBox="0 0 40 40">
        <path
          d="M19.89 9.48c-.21-.58-.76-1-1.41-1-.65 0-1.2.42-1.41 1h-2.09c-.55 0-1 .45-1 1v1h9v-1c0-.55-.45-1-1-1h-2.09zm-5.91 1h-3c-.55 0-1 .45-1 1v19c0 .55.45 1 1 1h9.5m6.5-12v-8c0-.55-.45-1-1-1h-3m-.96 16.04l2 2 4-4m-8 2c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        />
      </symbol>

      <symbol id="check-mark" viewBox="0 0 40 40">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M8.5 19.5l8 8 15-15"
        />
      </symbol>

      <symbol id="chevron" viewBox="0 0 40 40">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.6 13.2l13.6 13.6 13.7-13.6"
        />
      </symbol>

      <symbol id="circle-cross" x="0" y="0" viewBox="0 0 30 30">
        <style>
          .circle-cross {
            stroke: currentColor;
          }
        </style>
        <path
          class="circle-cross"
          d="M10.4 19.6l9.2-9.2M20 10.8L10.8 20c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8l9.3-9.3c.2-.2.6-.2.8 0 .1.3.1.6-.1.9z"
        />
        <g>
          <path
            class="circle-cross"
            d="M19.6 19.6l-9.2-9.2M20 20c-.2.2-.6.2-.8 0L10 10.8c-.2-.2-.2-.6 0-.8s.6-.2.8 0l9.3 9.3c.1.2.1.5-.1.7z"
          />
        </g>
        <g>
          <path
            class="circle-cross"
            d="M15 3.5c6.3 0 11.5 5.2 11.5 11.5S21.3 26.5 15 26.5 3.5 21.3 3.5 15 8.7 3.5 15 3.5m0-1C8.1 2.5 2.5 8.1 2.5 15S8.1 27.5 15 27.5 27.5 21.9 27.5 15 21.9 2.5 15 2.5z"
          />
        </g>
      </symbol>

      <symbol id="close" viewBox="0 0 40 40">
        <style>
          .close {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path class="close" d="M9.1 9.1l21.8 21.8M9.1 30.9L30.9 9.1" />
      </symbol>

      <symbol
        version="1.1"
        id="close-thick"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 40 40"
        xml:space="preserve"
      >
        <style>
          .close-thick {
            fill: none;
            stroke: currentColor;
            stroke-width: 6.667;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path class="close-thick" d="m3.5 36.5 33-33M3.5 3.5l33 33" />
      </symbol>

      <symbol
        version="1.1"
        id="discount"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .discount {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="discount"
          d="m14 28.61 14.02-14.02a5.04 5.04 0 0 0 1.48-3.57v-8C29.5 1.63 28.37.5 26.98.5h-8c-1.34 0-2.62.53-3.57 1.48L1.39 16c-.57.57-.89 1.34-.89 2.15v0c0 .81.32 1.58.89 2.15l8.31 8.31c.57.57 1.34.89 2.15.89h0c.81 0 1.58-.32 2.15-.89z"
        />
        <circle class="discount" cx="23" cy="7" r="2.5" />
        <circle class="discount" cx="15.5" cy="18.5" r="1" />
        <circle class="discount" cx="9.5" cy="15.5" r="1" />
        <path class="discount" d="M12.5 11.5v10" />
      </symbol>

      <symbol
        version="1.1"
        id="email"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .email {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="email"
          d="M27.49 24.5H2.51c-1.1 0-2-.9-2-2v-15c0-1.1.9-2 2-2H27.5c1.1 0 2 .9 2 2v15c-.01 1.1-.9 2-2.01 2z"
        />
        <path
          class="email"
          d="m3.49 8.5 9.5 6.5c.98.67 2.52.67 3.5 0l10-6.5M3.49 21.5l7-6M26.49 21.5l-7-6"
        />
      </symbol>

      <symbol id="fdm-byline" viewBox="0 0 104 15">
        <path
          d="M5.216 7.592l.144-.888H.44l-.144.888h4.92zm13.332 3.528c.344 0 .644-.094.9-.282.256-.188.436-.362.54-.522l-.144-.312a2.074 2.074 0 01-.36.27.562.562 0 01-.264.078c-.112 0-.168-.108-.168-.324 0-.176.022-.408.066-.696a36.924 36.924 0 01.222-1.296l.072-.444c.144-.8.216-1.352.216-1.656 0-.608-.128-1.052-.384-1.332s-.604-.42-1.044-.42c-.448 0-.878.138-1.29.414a3.767 3.767 0 00-1.062 1.098c-.032-.528-.166-.912-.402-1.152-.236-.24-.57-.36-1.002-.36-.448 0-.888.146-1.32.438a4.434 4.434 0 00-1.128 1.11l.132-1.416-.252-.132-1.548.276-.096.456.6.3-.78 5.784h1.236l.6-4.356c.264-.432.586-.8.966-1.104.38-.304.718-.456 1.014-.456.272 0 .458.066.558.198.1.132.154.39.162.774 0 .544-.08 1.312-.24 2.304l-.36 2.64h1.272l.396-2.964c.088-.648.144-1.156.168-1.524.264-.416.566-.758.906-1.026.34-.268.646-.402.918-.402.24 0 .412.072.516.216.104.144.156.412.156.804 0 .352-.034.74-.102 1.164-.068.424-.11.676-.126.756a3.826 3.826 0 00-.06.312l-.084.528c-.128.72-.196 1.208-.204 1.464 0 .256.06.452.18.588.12.136.328.204.624.204zm4.932.012c.568 0 1.082-.136 1.542-.408.46-.272.794-.564 1.002-.876l-.276-.468c-.28.296-.59.53-.93.702a2.3 2.3 0 01-1.05.258c-.48 0-.83-.2-1.05-.6-.22-.4-.314-.884-.282-1.452.496-.008 1.052-.108 1.668-.3a4.407 4.407 0 001.596-.87c.448-.388.672-.87.672-1.446 0-.448-.146-.808-.438-1.08-.292-.272-.726-.408-1.302-.408a3.01 3.01 0 00-1.8.588c-.544.392-.972.922-1.284 1.59a5.054 5.054 0 00-.468 2.166c0 .456.084.882.252 1.278.168.396.432.716.792.96.36.244.812.366 1.356.366zM22.448 7.7c.032-.432.128-.87.288-1.314.16-.444.378-.814.654-1.11.276-.296.594-.444.954-.444.248 0 .44.08.576.24.136.16.204.392.204.696 0 .376-.14.71-.42 1.002a2.76 2.76 0 01-1.05.672c-.42.156-.822.242-1.206.258zm9.48 3.42c.312 0 .584-.084.816-.252.232-.168.412-.332.54-.492l-.168-.312c-.24.192-.424.288-.552.288-.12 0-.18-.096-.18-.288 0-.056.004-.104.012-.144l1.236-8.436-.276-.156-1.788.216-.096.432.804.216-.312 2.124a3.528 3.528 0 00-.876-.132c-.792 0-1.478.222-2.058.666a4.236 4.236 0 00-1.32 1.692c-.3.684-.45 1.374-.45 2.07 0 .752.164 1.358.492 1.818.328.46.82.69 1.476.69.416 0 .792-.1 1.128-.3.336-.2.612-.444.828-.732v.252c.008.52.256.78.744.78zm-2.316-.792c-.336 0-.594-.158-.774-.474-.18-.316-.27-.754-.27-1.314s.086-1.124.258-1.692c.172-.568.436-1.044.792-1.428a1.735 1.735 0 011.326-.576c.368 0 .668.08.9.24l-.648 4.26c-.16.256-.384.484-.672.684-.288.2-.592.3-.912.3zm12.216.792c.312 0 .584-.084.816-.252.232-.168.412-.332.54-.492l-.168-.312c-.24.192-.424.288-.552.288-.12 0-.18-.096-.18-.288 0-.056.004-.104.012-.144l1.236-8.436-.276-.156-1.788.216-.096.432.804.216-.312 2.124a3.528 3.528 0 00-.876-.132c-.792 0-1.478.222-2.058.666a4.236 4.236 0 00-1.32 1.692c-.3.684-.45 1.374-.45 2.07 0 .752.164 1.358.492 1.818.328.46.82.69 1.476.69.416 0 .792-.1 1.128-.3.336-.2.612-.444.828-.732v.252c.008.52.256.78.744.78zm-2.316-.792c-.336 0-.594-.158-.774-.474-.18-.316-.27-.754-.27-1.314s.086-1.124.258-1.692c.172-.568.436-1.044.792-1.428a1.735 1.735 0 011.326-.576c.368 0 .668.08.9.24l-.648 4.26c-.16.256-.384.484-.672.684-.288.2-.592.3-.912.3zm6.768-7.404a.804.804 0 00.624-.264.976.976 0 00.252-.648.696.696 0 00-.18-.486c-.12-.132-.288-.198-.504-.198a.82.82 0 00-.606.264.877.877 0 00-.258.636.68.68 0 00.198.492c.132.136.29.204.474.204zm-.804 8.196c.336 0 .628-.092.876-.276.248-.184.432-.36.552-.528l-.156-.312c-.136.128-.25.218-.342.27a.547.547 0 01-.27.078c-.056 0-.102-.026-.138-.078a.387.387 0 01-.054-.222l.012-.12.804-5.604-.276-.132-1.776.276-.084.42.744.288c-.048.392-.184 1.364-.408 2.916a97.169 97.169 0 00-.312 2.268c-.024.248.038.436.186.564.148.128.362.192.642.192zM49.604 14c.48 0 .954-.084 1.422-.252a2.982 2.982 0 001.218-.822c.344-.38.556-.87.636-1.47l1.08-7.272-.78.264a3.732 3.732 0 00-.63-.186 3.317 3.317 0 00-.69-.078c-.784 0-1.468.224-2.052.672a4.361 4.361 0 00-1.338 1.698 4.974 4.974 0 00-.462 2.058c0 .752.166 1.358.498 1.818.332.46.83.69 1.494.69.368 0 .706-.082 1.014-.246.308-.164.574-.374.798-.63l-.216 1.56c-.072.528-.228.89-.468 1.086-.24.196-.612.294-1.116.294a2.79 2.79 0 01-.852-.138 4.073 4.073 0 01-.696-.282l-.252 1.008c.128.056.33.108.606.156.276.048.538.072.786.072zm.78-3.672c-.336 0-.598-.158-.786-.474-.188-.316-.282-.754-.282-1.314 0-.552.088-1.114.264-1.686.176-.572.444-1.05.804-1.434.36-.384.804-.576 1.332-.576.36 0 .644.076.852.228l-.636 4.332c-.168.24-.392.454-.672.642s-.572.282-.876.282zm8.292 3.72l.42-3.036c.416.072.696.108.84.108.752 0 1.418-.216 1.998-.648a4.253 4.253 0 001.338-1.668c.312-.68.468-1.372.468-2.076 0-.784-.17-1.404-.51-1.86-.34-.456-.842-.684-1.506-.684-.376 0-.722.09-1.038.27-.316.18-.578.402-.786.666l.096-.804-.252-.132-1.62.276-.084.42.636.276-1.212 8.892h1.212zm1.404-3.588c-.36 0-.652-.072-.876-.216l.6-4.296c.168-.256.388-.48.66-.672a1.49 1.49 0 01.876-.288c.336 0 .598.158.786.474.188.316.282.75.282 1.302 0 .584-.088 1.16-.264 1.728-.176.568-.44 1.038-.792 1.41a1.688 1.688 0 01-1.272.558zm8.556-7.248c.36 0 .696-.066 1.008-.198.312-.132.566-.334.762-.606.196-.272.294-.604.294-.996 0-.416-.148-.744-.444-.984-.296-.24-.696-.36-1.2-.36a2.78 2.78 0 00-1.002.186c-.324.124-.59.318-.798.582-.208.264-.312.596-.312.996 0 .432.148.77.444 1.014.296.244.712.366 1.248.366zm.084-.54a.975.975 0 01-.702-.27.886.886 0 01-.282-.666c0-.376.12-.658.36-.846.24-.188.528-.282.864-.282.28 0 .512.088.696.264a.89.89 0 01.276.672c0 .4-.116.688-.348.864-.232.176-.52.264-.864.264zm.6 8.448c.304 0 .578-.09.822-.27.244-.18.41-.342.498-.486l-.168-.312c-.224.2-.4.3-.528.3a.21.21 0 01-.174-.084c-.044-.056-.066-.144-.066-.264 0-.056.004-.1.012-.132l.768-5.676-.732.204a6.815 6.815 0 00-.636-.15 3.385 3.385 0 00-.624-.066c-.784 0-1.468.224-2.052.672a4.31 4.31 0 00-1.332 1.698 5.03 5.03 0 00-.456 2.058c0 .752.16 1.358.48 1.818.32.46.804.69 1.452.69a2.01 2.01 0 001.098-.324c.34-.216.638-.48.894-.792l-.048.348c-.008.264.06.458.204.582.144.124.34.186.588.186zm-2.328-.792c-.336 0-.59-.158-.762-.474-.172-.316-.258-.762-.258-1.338 0-.568.09-1.134.27-1.698.18-.564.45-1.034.81-1.41.36-.376.796-.564 1.308-.564.304 0 .56.064.768.192l-.564 4.248a3.47 3.47 0 01-.726.726c-.284.212-.566.318-.846.318zm8.964.792l.888-.072 1.14-1.512c.6-.776 1.094-1.532 1.482-2.268.388-.736.578-1.372.57-1.908 0-.352-.066-.634-.198-.846a.643.643 0 00-.582-.318.58.58 0 00-.438.168c-.108.112-.162.264-.162.456 0 .104.028.24.084.408.008.016.028.09.06.222s.044.266.036.402a5.908 5.908 0 01-.42 1.638 9.51 9.51 0 01-.888 1.614l-.684.9-.156-1.284L76.196 5c-.032-.264-.112-.464-.24-.6-.128-.136-.332-.204-.612-.204-.28 0-.534.076-.762.228-.228.152-.382.288-.462.408l.156.36c.072-.064.136-.112.192-.144A.38.38 0 0174.66 5c.144.008.236.136.276.384l.636 3.552.384 2.184zm7.176.012c.568 0 1.082-.136 1.542-.408.46-.272.794-.564 1.002-.876L85.4 9.38c-.28.296-.59.53-.93.702a2.3 2.3 0 01-1.05.258c-.48 0-.83-.2-1.05-.6-.22-.4-.314-.884-.282-1.452.496-.008 1.052-.108 1.668-.3a4.407 4.407 0 001.596-.87c.448-.388.672-.87.672-1.446 0-.448-.146-.808-.438-1.08-.292-.272-.726-.408-1.302-.408a3.01 3.01 0 00-1.8.588c-.544.392-.972.922-1.284 1.59a5.054 5.054 0 00-.468 2.166c0 .456.084.882.252 1.278.168.396.432.716.792.96.36.244.812.366 1.356.366zM82.1 7.7c.032-.432.128-.87.288-1.314.16-.444.378-.814.654-1.11.276-.296.594-.444.954-.444.248 0 .44.08.576.24.136.16.204.392.204.696 0 .376-.14.71-.42 1.002a2.76 2.76 0 01-1.05.672c-.42.156-.822.242-1.206.258zm6.864-4.776a.804.804 0 00.624-.264.976.976 0 00.252-.648.696.696 0 00-.18-.486c-.12-.132-.288-.198-.504-.198a.82.82 0 00-.606.264.877.877 0 00-.258.636.68.68 0 00.198.492c.132.136.29.204.474.204zM86.108 14.06c.696 0 1.278-.27 1.746-.81.468-.54.758-1.294.87-2.262l.792-6.66-.264-.132-1.908.276-.096.408.876.252-.624 5.52c-.104.864-.274 1.538-.51 2.022-.236.484-.606.726-1.11.726a1.84 1.84 0 01-.276-.024 1.632 1.632 0 01-.264-.06l-.192.528c.072.064.198.116.378.156.18.04.374.06.582.06zm7.044-2.928c.568 0 1.082-.136 1.542-.408.46-.272.794-.564 1.002-.876l-.276-.468c-.28.296-.59.53-.93.702a2.3 2.3 0 01-1.05.258c-.48 0-.83-.2-1.05-.6-.22-.4-.314-.884-.282-1.452.496-.008 1.052-.108 1.668-.3a4.407 4.407 0 001.596-.87c.448-.388.672-.87.672-1.446 0-.448-.146-.808-.438-1.08-.292-.272-.726-.408-1.302-.408a3.01 3.01 0 00-1.8.588c-.544.392-.972.922-1.284 1.59a5.054 5.054 0 00-.468 2.166c0 .456.084.882.252 1.278.168.396.432.716.792.96.36.244.812.366 1.356.366zM92.12 7.7c.032-.432.128-.87.288-1.314.16-.444.378-.814.654-1.11.276-.296.594-.444.954-.444.248 0 .44.08.576.24.136.16.204.392.204.696 0 .376-.14.71-.42 1.002a2.76 2.76 0 01-1.05.672c-.42.156-.822.242-1.206.258zm9.768 3.42c.328 0 .62-.088.876-.264.256-.176.432-.332.528-.468l-.156-.324c-.216.192-.404.288-.564.288-.104 0-.156-.104-.156-.312v-.072c.008-.36.084-.888.228-1.584l.06-.348.072-.432c.152-.824.228-1.384.228-1.68 0-.616-.122-1.06-.366-1.332s-.594-.408-1.05-.408c-.456 0-.9.144-1.332.432-.432.288-.812.66-1.14 1.116l.144-1.416-.252-.132-1.56.276-.096.456.6.3L97.184 11h1.236l.576-4.32c.272-.448.598-.826.978-1.134.38-.308.722-.462 1.026-.462.256 0 .436.068.54.204.104.136.16.388.168.756 0 .416-.088 1.092-.264 2.028l-.048.288-.084.444c-.152.792-.228 1.312-.228 1.56 0 .504.268.756.804.756z"
          fill="currentColor"
          fill-rule="nonzero"
        />
      </symbol>

      <symbol
        version="1.1"
        id="drop"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .drop {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="drop_4643_">
          <path
            id="drop_4644_"
            class="drop"
            d="M12 23.5c-3.86 0-7-3.14-7-7 0-3.46 7-16 7-16s7 12.54 7 16c0 3.86-3.14 7-7 7z"
          />
          <path id="drop_4645_" class="drop" d="M12 20.5c-2.21 0-4-1.79-4-4" />
        </g>
      </symbol>

      <symbol
        version="1.1"
        id="exclamation-circle"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 60 60"
        xml:space="preserve"
      >
        <style>
          .exclamation-circle {
            fill: #fff;
          }
        </style>
        <circle fill="currentColor" cx="30" cy="30" r="30" />
        <path class="exclamation-circle" d="M26.5 25.2h7v20h-7z" />
        <circle class="exclamation-circle" cx="30" cy="18.8" r="4" />
      </symbol>

      <symbol id="fdm-logo" viewBox="0 0 85 30" preserveAspectRatio="xMinYMin">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M25.44 26.94c0 1.56-1.257 2.82-2.813 2.82H2.813A2.813 2.813 0 010 26.94V2.82C0 1.26 1.257 0 2.813 0h19.784a2.82 2.82 0 012.843 2.82v24.12zM55.13 26.94c0 1.56-1.257 2.82-2.813 2.82H32.533a2.813 2.813 0 01-2.813-2.82V2.82c0-1.56 1.257-2.82 2.813-2.82h19.784a2.813 2.813 0 012.813 2.82v24.12zM84.85 26.94c0 1.56-1.257 2.82-2.813 2.82H62.254a2.813 2.813 0 01-2.814-2.82V2.82c0-1.56 1.257-2.82 2.814-2.82h19.753a2.813 2.813 0 012.813 2.82v24.12h.03z"
            fill="currentColor"
          />
          <path
            d="M80.032 25.14c0 .18-.18.36-.36.36H76.92c-.18 0-.36-.18-.36-.36s.12-7.86.12-7.86c-.359.72-1.167 2.16-3.082 5.7-.18.33-.27.39-.718.39h-1.467c-.449 0-.569-.09-.718-.39-1.976-3.6-2.514-4.59-3.083-5.67 0 0 .12 7.65.15 7.83 0 .18-.15.36-.36.36h-2.753c-.18 0-.36-.18-.36-.36V14.19c0-.18.18-.36.36-.36h3.502c.449 0 .508.06.718.39.15.27 3.292 6.09 3.322 6.15.06-.09 3.143-5.79 3.322-6.15.18-.36.27-.39.719-.39h3.501c.21 0 .36.18.36.36l-.06 10.95zM42.8 25.5h-7.453c-.18 0-.36-.18-.36-.36V14.19c0-.18.15-.36.36-.36h7.452c6.106 0 7.513 2.22 7.513 5.82 0 3.63-1.407 5.85-7.513 5.85zm-.27-9.57h-3.143v7.5h3.143c2.694 0 3.352-.9 3.352-3.75.03-2.88-.658-3.75-3.352-3.75zM19.245 16.08h-8.201v3h6.375c.21 0 .36.18.36.36v1.53c0 .18-.18.36-.36.36h-6.375v3.81c0 .21-.18.36-.36.36h-3.68c-.18 0-.36-.15-.36-.36V14.19c0-.18.18-.36.36-.36h12.24c.21 0 .36.15.36.36v1.53c.03.21-.15.36-.36.36z"
            fill="#FFF"
          />
        </g>
      </symbol>

      <symbol
        version="1.1"
        id="gear-check"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .gear-check {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="gear-check" cx="23" cy="23" r="6.5" />
        <path
          class="gear-check"
          d="m20.5 23.5 2 2 4-4M28.41 9.92l-2.88-4.84c-.17-.31-.56-.42-.88-.31l-3.58 1.4c-.75-.56-1.55-1.02-2.43-1.37l-.55-3.71c-.04-.34-.35-.59-.71-.59h-5.76c-.36 0-.66.25-.71.59l-.54 3.71c-.88.35-1.68.82-2.43 1.37l-3.58-1.4c-.33-.13-.71 0-.88.31L.6 9.92c-.19.31-.1.69.17.9l3.04 2.31c-.06.45-.1.91-.1 1.37s.04.92.1 1.37L.77 18.18c-.27.21-.35.59-.17.9l2.88 4.84c.17.31.56.42.88.31l3.58-1.4c.75.56 1.55 1.02 2.43 1.37l.55 3.71c.04.34.35.59.71.59h4.91a8.462 8.462 0 0 1-2.03-5.5c0-1.32.31-2.56.85-3.67h0A5.497 5.497 0 0 1 8.51 14c0-3.04 2.46-5.5 5.5-5.5a5.497 5.497 0 0 1 5.33 6.85h0c1.11-.54 2.36-.85 3.67-.85.79 0 1.55.11 2.28.32 0-.11.01-.21.01-.32 0-.48-.04-.92-.1-1.37l3.04-2.31c.27-.21.34-.59.17-.9z"
        />
      </symbol>

      <symbol id="headphones" x="5" y="5" viewBox="0 0 40 40" xml:space="preserve">
        <style>
          .headphones {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="_headset_2">
          <path
            class="headphones"
            d="M8.5 25.5c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1z"
          />
          <path id="XMLID_371_" class="headphones" d="M8.5 16.5c-2.5 0-5 2-5 4.5s2.5 4.5 5 4.5" />
          <path
            class="headphones"
            d="M21.5 25.5c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1s-1 .4-1 1v7c0 .6.4 1 1 1z"
          />
          <path id="XMLID_372_" class="headphones" d="M21.5 16.5c2.5 0 5 2 5 4.5s-2.5 4.5-5 4.5" />
          <path
            id="XMLID_373_"
            class="headphones"
            d="M4.5 18v-3C4.5 9.2 9.2 4.5 15 4.5S25.5 9.2 25.5 15v3"
          />
          <path
            id="XMLID_374_"
            class="headphones"
            d="M15 4.5c-2.3 0-4.4.7-6.1 2v2.6c1.5-1.6 3.7-2.6 6.1-2.6 2.4 0 4.6 1 6.1 2.6V6.5c-1.7-1.3-3.8-2-6.1-2z"
          />
        </g>
      </symbol>

      <symbol
        version="1.1"
        id="home"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .home {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path class="home" d="M12 .5.5 11.5h3v12h8v-7h5v7h4v-12h3z" />
        <circle class="home" cx="12" cy="7" r="1.5" />
        <path class="home" d="M3.5 11.5h17M18.5 6.5v-4h-2v2M5.5 14.5h4v4h-4zM11.5 16.5h5v7h-5z" />
      </symbol>

      <symbol id="hybrid" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
        <style>
          .hybrid {
            fill: none;
            stroke: currentColor;
            stroke-width: 0.6957;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="hybrid_4643_">
          <path
            id="hybrid_4644_"
            class="hybrid"
            d="M17.78 22.64c-2.68 0-4.87-2.18-4.87-4.87 0-2.4 4.87-11.13 4.87-11.13s4.87 8.73 4.87 11.13c0 2.68-2.19 4.87-4.87 4.87z"
          />
          <path id="hybrid_4645_" class="hybrid" d="M17.78 20.55c-1.53 0-2.78-1.25-2.78-2.78" />
        </g>
        <g id="hybrid_6343_">
          <path
            id="hybrid_6350_"
            class="hybrid"
            d="M2.79 8.71.56 11a.694.694 0 0 0 .98.98l2.29-2.23"
          />
          <path
            id="hybrid_6349_"
            class="hybrid"
            d="m6.97 12.88-2.23 2.29a.694.694 0 0 0 .98.98l2.29-2.23"
          />
          <path
            id="hybrid_6348_"
            class="hybrid"
            d="m2.24 7.81 6.67 6.67c.27.27.71.27.98 0L11 13.37c.27-.27.27-.71 0-.98L4.33 5.72a.694.694 0 0 0-.98 0L2.24 6.83c-.27.27-.27.71 0 .98z"
          />
          <path
            id="hybrid_6347_"
            class="hybrid"
            d="m4.53 5.92 2.21-2.21a2.782 2.782 0 0 1 3.94 0L13 6.04a2.782 2.782 0 0 1 0 3.94l-2.21 2.21"
          />
          <circle id="hybrid_6346_" class="hybrid" cx="9.75" cy="6.97" r="1.04" />
          <path
            id="hybrid_6345_"
            class="hybrid"
            d="m10.79 3.84 1.61-1.08c.28-.18.64-.15.88.09l.59.59c.23.23.27.6.09.88l-1.08 1.61"
          />
          <path id="hybrid_6344_" class="hybrid" d="M13.58 3.14 16.36.36" />
        </g>
      </symbol>
      <symbol id="icon-membership-fullcircle" viewBox="0 0 32 32">
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g stroke="currentColor" transform="translate(1.500000, 1.500000)">
            <path
              d="M24.5,25 C24.298,24.909 23.212,24.574 23,24.5 L21.5,24 C21.055,23.845 20.357,23.308 20,23 L19,22"
              id="Stroke-1"
            ></path>
            <path
              d="M4.5,25 C4.702,24.909 5.788,24.574 6,24.5 L7.5,24 C7.945,23.845 8.643,23.308 9,23 L10,22"
              id="Stroke-3"
            ></path>
            <path
              d="M6,14 C6.875,14 8,14.5 8,14.5 C8,14.5 8.102,12 9,12 C9.898,12 13,11.243 13,9 C13,9.971 16.172,12 20,12 C20,12.938 21,14.5 21,14.5 C21,14.5 22.096,14 23,14"
              id="Stroke-5"
            ></path>
            <path
              d="M14.5,5 C10.013,5 6,9.192 6,14 C6,14.384 6.125,14.67 6.125,14.67 C6.125,14.67 6,15.703 6,16.009 C6,17.488 6.56,18.688 7.25,18.688 C7.454,18.688 7.644,18.572 7.814,18.387 C8.67,21.083 10.756,23.057 12.896,23.733 C12.99,23.766 13.084,23.796 13.181,23.822 C13.312,23.855 13.443,23.888 13.577,23.911 C13.863,23.964 14.152,24 14.448,24"
              id="Stroke-7"
            ></path>
            <path
              d="M14.5,5 C18.987,5 23,9.192 23,14 C23,14.384 22.875,14.67 22.875,14.67 C22.875,14.67 23,15.703 23,16.009 C23,17.488 22.44,18.688 21.75,18.688 C21.546,18.688 21.356,18.572 21.186,18.387 C20.33,21.083 18.14,23.057 16,23.733 C15.906,23.766 15.811,23.796 15.715,23.822 C15.584,23.855 15.453,23.888 15.319,23.911 C15.033,23.964 14.744,24 14.448,24"
              id="Stroke-9"
            ></path>
            <line x1="11" y1="15" x2="12" y2="15" id="Stroke-11"></line>
            <line x1="17" y1="15" x2="18" y2="15" id="Stroke-13"></line>
            <path
              d="M29,14.5 C29,22.508 22.508,29 14.5,29 C6.492,29 0,22.508 0,14.5 C0,6.492 6.492,0 14.5,0 C22.508,0 29,6.492 29,14.5 Z"
              id="Stroke-15"
              stroke-width="2"
            ></path>
          </g>
        </g>
      </symbol>
      <symbol id="info" viewBox="0 0 40 40">
        <style>
          .info {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="info" cx="20" cy="20" r="12.7" />
        <path
          class="info"
          d="M23.9 28.3h-6.6c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h1.1v-4.4h-1.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h4.4c.6 0 1.1.5 1.1 1.1v5.5h1.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
        />
        <circle class="info" cx="20" cy="14.5" r="2.8" />
      </symbol>

      <symbol id="info-inverted-24" x="0" y="0" viewBox="0 0 24 24">
        <style>
          .info-inverted-24 {
            fill: #fff;
          }
        </style>
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
          class="info-inverted-24"
          d="M15.7 19.8H9.4c-.6 0-1-.5-1-1 0-.6.5-1 1-1h1v-4.2h-1c-.6 0-1-.5-1-1 0-.6.5-1 1-1h4.2c.6 0 1 .5 1 1v5.2h1c.6 0 1 .5 1 1 .1.6-.4 1-.9 1z"
        />
        <circle class="info-inverted-24" cx="12" cy="6.8" r="2.6" />
      </symbol>

      <symbol id="inspection" width="102" height="83">
        <g fill="none" fill-rule="evenodd" stroke="currentColor">
          <path
            d="M54.55 59.157c0-8.752 7.042-15.844 15.725-15.844S86 50.405 86 59.157C86 67.909 78.958 75 70.275 75s-15.724-7.091-15.724-15.843z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M60.84 59.157l6.29 6.337 12.58-12.675"
          />
          <path
            d="M76.464 37.855V12.506c0-1.752-1.409-3.169-3.145-3.169h-7.435M33.726 9.337h-7.581c-1.736 0-3.145 1.417-3.145 3.169v60.205c0 1.752 1.409 3.168 3.145 3.168h29.877"
            stroke-width="4"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M54.16 4.169C53.51 2.328 51.784 1 49.734 1c-2.054 0-3.78 1.328-4.428 3.169h-6.58c-1.736 0-3.145 1.416-3.145 3.168v3.169h28.305V7.337c0-1.752-1.41-3.168-3.145-3.168h-6.58z"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
      </symbol>

      <symbol id="loading-spinner" viewBox="0 0 76 76" enable-background="new 0 0 76 76">
        <defs>
          <filter id="a" filterUnits="userSpaceOnUse" x=".5" y=".5" width="75" height="75">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          </filter>
        </defs>
        <path
          d="M70.2 51.6C64.9 64.2 52.5 73 38 73 18.7 73 3 57.3 3 38S18.7 3 38 3"
          fill="none"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <mask maskUnits="userSpaceOnUse" x=".5" y=".5" width="75" height="75" id="c">
          <g filter="url(#a)">
            <linearGradient
              id="b"
              gradientUnits="userSpaceOnUse"
              x1="71.485"
              y1="52.886"
              x2="71.485"
              y2="13.5"
            >
              <stop offset=".1" stop-color="#fff" />
              <stop offset=".9" />
            </linearGradient>
            <path d="M62 22s-1-8.5 8.5-8.5L81 35l-5 17s-8 4-11-5l-3-25z" fill="url(#b)" />
          </g>
        </mask>
        <path
          d="M62.5 13C69 19.4 73 28.2 73 38c0 19.3-15.7 35-35 35S3 57.3 3 38 18.7 3 38 3"
          mask="url(#c)"
          fill="none"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </symbol>

      <symbol id="plus-inverted" x="0" y="0" viewBox="0 0 40 40" xml:space="preserve">
        <style>
          .plus-inverted {
            fill: #fff;
          }
        </style>
        <circle fill="currentColor" cx="20" cy="20" r="13.3" />
        <path
          class="plus-inverted"
          d="M26.9 20.6H13.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6H27c.3 0 .6.3.6.6s-.3.6-.7.6z"
        />
        <path
          class="plus-inverted"
          d="M20 27.5c-.3 0-.6-.3-.6-.6V13.1c0-.3.3-.6.6-.6s.6.3.6.6V27c0 .3-.3.5-.6.5z"
        />
      </symbol>

      <symbol id="circle-arrow" viewBox="0 0 40 40">
        <style>
          .icon-search-stroke {
            fill: currentColor;
          }
        </style>
        <path
          class="icon-circle-arrow"
          d="M32.8 20.6c.1-.2.1-.4.1-.6s0-.4-.1-.6c-.1-.2-.2-.4-.3-.5L21.8 8.2c-.6-.6-1.6-.6-2.3 0-.6.6-.6 1.6 0 2.3l7.9 7.9H8.7c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h18.7l-7.9 7.9c-.6.6-.6 1.6 0 2.3.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l10.6-10.6c.3-.2.4-.4.5-.6z"
        />
      </symbol>

      <symbol id="search" viewBox="0 0 40 40">
        <style>
          .icon-search-stroke {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="icon-search-stroke" cx="17.5" cy="17.5" r="9" />
        <path class="icon-search-stroke" d="M31.5 31.5L24 24" />
      </symbol>

      <symbol
        version="1.1"
        id="spanner"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .spanner {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path class="spanner" d="M15.5 1c-1.7.6-3.1 2.2-3.7 4h3.7V1z" />
        <path
          class="spanner"
          d="M20.5 1.5V5c0 1.1-.9 2-2 2h-7c0 .6.1 1.2.3 1.7L1.1 19.4c-.4.4-.6.9-.6 1.5 0 1.2.9 2.1 2.1 2.1.6 0 1.1-.2 1.5-.6l7.9-7.9c.9-.9 2.2-1.5 3.5-1.5h1.9c3.3 0 6-2.7 6-6 .1-2.2-1.1-4.5-2.9-5.5z"
        />
        <circle cx="3" cy="20.5" r=".5" fill="none" stroke="#000" stroke-miterlimit="10" />
        <path class="spanner" d="m15.5 9-1 2M17.5 9l-1 2M19.5 9l-1 2" />
      </symbol>

      <symbol
        version="1.1"
        id="phone"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        style="enable-background: new 0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .phone {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="XMLID_49_">
          <path
            id="XMLID_279_phone"
            class="phone"
            d="M20.5 29.5h-11c-1.66 0-3-1.34-3-3v-23c0-1.66 1.34-3 3-3h11c1.66 0 3 1.34 3 3v23c0 1.66-1.34 3-3 3z"
          />
          <path id="XMLID_161_phone" class="phone" d="M6.5 4.5h17" />
          <path id="XMLID_51_phone" class="phone" d="M7 24.5h16" />
          <path id="XMLID_53_phone" class="phone" d="M12.5 2.5h5" />
          <circle id="XMLID_50_phone" class="phone" cx="15" cy="27" r=".5" />
        </g>
      </symbol>

      <symbol version="1.1" id="power" x="0" y="0" viewBox="0 0 24 24" space="preserve">
        <style xmlns="">
          .power {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="power_6343_" xmlns="">
          <path
            id="power_6350_"
            class="power"
            d="M4 12.5.79 15.79A.996.996 0 1 0 2.2 17.2L5.5 14"
          />
          <path
            id="power_6349_"
            class="power"
            d="m10 18.5-3.21 3.29A.996.996 0 1 0 8.2 23.2l3.3-3.2"
          />
          <path
            id="power_6348_"
            class="power"
            d="m3.21 11.21 9.59 9.59c.39.39 1.02.39 1.41 0l1.59-1.59a.996.996 0 0 0 0-1.41L6.21 8.21a.996.996 0 0 0-1.41 0L3.21 9.79c-.39.39-.39 1.03 0 1.42z"
          />
          <path
            id="power_6347_"
            class="power"
            d="m6.5 8.5 3.17-3.17a4.008 4.008 0 0 1 5.66 0l3.34 3.34a4.008 4.008 0 0 1 0 5.66L15.5 17.5"
          />
          <circle id="power_6346_" class="power" cx="14" cy="10" r="1.5" />
          <path
            id="power_6345_"
            class="power"
            d="m15.5 5.5 2.32-1.55c.4-.26.92-.21 1.26.12l.84.84c.34.34.39.86.12 1.26L18.5 8.5"
          />
          <path id="power_6344_" class="power" d="m19.5 4.5 4-4" />
        </g>
      </symbol>

      <symbol
        id="ticket"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        xml:space="preserve"
      >
        <path
          d="M34 20c0-2.7 2.2-5 5-5V8.4H1V15c2.7 0 5 2.2 5 5s-2.2 5-5 5v6.6h38V25c-2.7 0-5-2.3-5-5zm-23.1-1.7v3.3m0-6.6v-3.3m0 13.3v3.3m18.2-10v3.3m0-6.6v-3.3m0 13.3v3.3"
          fill="none"
          stroke="currentColor"
          stroke-width="1.652"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        />
      </symbol>

      <symbol
        version="1.1"
        id="truck"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .truck {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="truck" cx="5.5" cy="19.5" r="2" />
        <circle class="truck" cx="19.5" cy="19.5" r="2" />
        <path
          class="truck"
          d="M21.5 19.5h1c.6 0 1-.4 1-1v-5l-2-5.7c-.3-.8-1-1.3-1.9-1.3h-4.1v9H.5v3c0 .6.4 1 1 1h2M7.5 19.5h10M.5 15.5v-11c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v2"
        />
        <path class="truck" d="M17.5 8.5v4H21" />
      </symbol>

      <symbol
        version="1.1"
        id="user"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 30 30"
        style="enable-background: new 0 0 30 30"
        xml:space="preserve"
      >
        <style>
          .user {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="user"
          d="m24 26-3.71-1.61c-1.7-.69-2.27-3.37-2.27-3.89.81-.66 1.7-1.81 1.7-2.78 0-.97.57-1.11.57-1.11s.57-1.39.57-2.22c0 0-.14-.56-.57-.56V10.5c0-2.73-1.42-2.5-1.13-2.78 0-.65-.8-2.22-3.97-2.22-3.22 0-5.1 3.01-5.1 5v3.33c-.43 0-.57.56-.57.56 0 .83.57 2.22.57 2.22s.57.14.57 1.11c0 .97.89 2.12 1.7 2.78 0 .52-.57 3.19-2.27 3.89L6 26"
        />
        <circle class="user" cx="15" cy="15" r="14.5" />
      </symbol>

      <symbol
        version="1.1"
        id="user-thick"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .user-thick {
            fill: currentColor;
            fill-rule: evenodd;
            clip-rule: evenodd;
          }
        </style>
        <path
          class="user-thick"
          d="M15.21 17.53c.15-.15.4-.15.55 0l.76.76c.13.11.32.26.51.4.21.15.39.25.51.29l1.16.39c.05.02.16.05.31.1.08.03.17.06.27.09.24.08.51.17.62.21.19.09.28.32.19.51-.09.19-.32.28-.51.19-.05-.02-.27-.1-.54-.18-.08-.03-.17-.05-.24-.08-.15-.05-.29-.09-.35-.11l-1.16-.39c-.23-.08-.48-.24-.7-.39-.22-.16-.44-.33-.59-.46l-.02-.02-.77-.77a.38.38 0 0 1 0-.54zM8.79 17.53c.15.15.15.4 0 .55l-.77.77-.02.02c-.15.13-.36.3-.59.46-.22.15-.47.31-.7.39l-1.16.39c-.06.02-.19.06-.35.11-.08.03-.16.05-.24.08-.26.09-.48.16-.54.18-.19.09-.42 0-.51-.19-.09-.19 0-.42.19-.51.1-.05.38-.14.62-.21l.27-.09c.14-.05.26-.08.31-.1h.01l1.16-.39c.12-.04.3-.15.51-.29.2-.14.38-.29.51-.4l.76-.76c.14-.16.39-.16.54-.01zM10.84 7.36c.21 0 .39.17.39.39 0 0 0 .03.05.11s.13.17.25.29c.24.22.61.47 1.08.7.94.46 2.23.84 3.65.84.21 0 .39.17.39.39 0 .12.03.29.1.49.07.19.15.4.25.58.07.14.14.28.2.38.07-.03.15-.05.23-.08.31-.1.75-.21 1.16-.21a.39.39 0 0 1 0 .78c-.29 0-.63.08-.92.17-.14.05-.26.09-.34.12-.04.02-.07.03-.1.04l-.02.01h-.01c-.18.08-.38.02-.49-.14l.32-.22-.33.21-.01-.01a.138.138 0 0 1-.03-.04c-.02-.04-.05-.09-.09-.15-.08-.13-.18-.31-.28-.52-.1-.21-.21-.44-.29-.68-.04-.11-.07-.23-.1-.35a9.191 9.191 0 0 1-3.65-.91c-.52-.25-.95-.54-1.26-.82 0 0-.01 0-.01-.01-.28.55-.78.94-1.27 1.2-.71.37-1.54.53-1.96.53-.01.01-.04.03-.09.11-.08.13-.14.33-.19.55-.05.22-.08.45-.1.62-.01.09-.01.16-.02.21V12.01c-.01.13-.07.25-.18.31-.11.07-.24.08-.36.03H6.8l-.03-.01c-.02-.01-.06-.02-.1-.04-.09-.03-.21-.08-.35-.12-.28-.1-.62-.18-.9-.18a.39.39 0 0 1 0-.78c.4 0 .83.11 1.15.21.02.01.04.01.06.02.02-.15.05-.33.09-.51.06-.26.14-.54.28-.78.13-.22.37-.5.75-.5.28 0 .99-.13 1.63-.47.63-.34 1.08-.81 1.08-1.47-.01-.19.17-.36.38-.36zm-3.08 3.09s-.01 0 0 0c-.01 0 0 0 0 0z"
        />
        <path
          class="user-thick"
          d="M5.03 11.61c0-3.92 3.26-7.35 6.97-7.35.21 0 .39.17.39.39s-.18.38-.39.38c-3.24 0-6.19 3.05-6.19 6.58 0 .11.02.2.04.27.01.03.02.06.02.08 0 .01 0 .01.01.02m-.01 0zm0 0c.03.06.04.13.03.2v.03l-.01.09c-.01.08-.02.18-.03.3-.02.24-.05.47-.05.57 0 .53.1.99.25 1.3.16.35.31.38.33.38 0 0 .05 0 .15-.11.09-.1.23-.15.37-.12.13.03.24.13.29.26.63 1.97 2.15 3.4 3.68 3.89h.01c.06.02.13.04.19.06.1.03.19.05.27.06h.01c.21.04.41.06.6.06a.39.39 0 0 1 0 .78c-.26 0-.51-.03-.74-.07-.12-.02-.23-.05-.33-.07h-.01c-.08-.02-.16-.05-.24-.08-1.65-.52-3.24-1.96-4.01-3.92-.07.02-.15.03-.23.03-.51 0-.85-.43-1.03-.83-.2-.44-.32-1.01-.32-1.63 0-.14.03-.43.05-.65.01-.12.02-.23.03-.3v-.04c-.01-.03-.02-.06-.03-.1-.03-.12-.06-.28-.06-.47"
        />
        <path
          class="user-thick"
          d="M18.97 11.61c0-3.92-3.26-7.35-6.97-7.35-.21 0-.39.17-.39.39s.18.38.39.38c3.24 0 6.19 3.05 6.19 6.58 0 .11-.02.2-.04.27a.31.31 0 0 0-.02.08c0 .01 0 .01-.01.02m.01 0zm0 0a.34.34 0 0 0-.03.2v.03l.01.09c.01.08.02.18.03.3.03.24.05.47.05.57 0 .53-.1.99-.25 1.3-.16.35-.31.38-.33.38 0 0-.05 0-.15-.11a.389.389 0 0 0-.37-.12.42.42 0 0 0-.29.26c-.63 1.97-2.15 3.4-3.68 3.89h-.01c-.06.02-.13.04-.19.06-.1.03-.19.05-.27.06h-.01c-.21.04-.41.06-.6.06a.39.39 0 0 0 0 .78c.26 0 .51-.03.74-.07.12-.02.23-.05.33-.07h.01c.08-.02.16-.05.24-.08 1.65-.52 3.24-1.96 4.01-3.92.07.02.15.03.23.03.51 0 .85-.43 1.03-.83.2-.44.32-1.01.32-1.63 0-.14-.03-.43-.05-.65-.01-.12-.02-.23-.03-.3v-.04c.01-.03.02-.06.03-.1.03-.12.06-.28.06-.47M8.9 12.39c0-.22.18-.39.39-.39h.77a.39.39 0 0 1 0 .78h-.77c-.21-.01-.39-.18-.39-.39zM13.55 12.39c0-.21.17-.39.39-.39h.77a.39.39 0 0 1 0 .78h-.77a.397.397 0 0 1-.39-.39z"
        />
        <path
          class="user-thick"
          d="M12 1.55C6.23 1.55 1.55 6.23 1.55 12S6.23 22.45 12 22.45 22.45 17.77 22.45 12 17.77 1.55 12 1.55zM0 12C0 5.37 5.37 0 12 0s12 5.37 12 12-5.37 12-12 12S0 18.63 0 12z"
        />
      </symbol>

      <symbol id="warning" viewBox="0 0 40 40" xml:space="preserve">
        <style>
          .warning {
            fill: none;
            stroke: currentColor;
            stroke-width: 0.9232;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="warning"
          d="M8.4 28.3l8.8-19.8c1.3-2.3 4.2-2.3 5.5 0l8.8 19.8c1.5 3.1-.6 5.1-3.2 5.1H11.7c-2.6-.1-4.7-1.8-3.3-5.1z"
        />
        <path
          class="warning"
          d="M21.8 15.1l-.9 10H19l-.9-10v-.2c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8l.1.2z"
        />
        <circle class="warning" cx="20" cy="27.8" r=".9" />
      </symbol>

      <symbol
        version="1.1"
        id="wifi"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .wifi {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="wifi" cx="12" cy="19" r="1" />
        <path
          class="wifi"
          d="M15.8 15.4c-1-.9-2.4-1.4-3.8-1.4s-2.8.5-3.8 1.4M19.4 11.9C17.5 10.1 14.9 9 12 9s-5.5 1.1-7.4 2.9M23 8.4C20.1 5.7 16.3 4 12 4S3.9 5.7 1 8.4"
        />
      </symbol>

      <symbol id="lock" viewBox="0 0 16 16">
        <g
          stroke="currentColor"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9.063 6.563h-7.5c-.69 0-1.25.56-1.25 1.25v5.625c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25V7.811c0-.69-.56-1.25-1.25-1.25z"
            transform="translate(-889 -1675) translate(409 1130) translate(60 490) translate(420 55) translate(2.5 .5)"
          />
          <path
            d="M5.313.313h0c-2.071 0-3.75 1.679-3.75 3.75v2.5h7.5v-2.5c0-2.071-1.68-3.75-3.75-3.75z"
            transform="translate(-889 -1675) translate(409 1130) translate(60 490) translate(420 55) translate(2.5 .5)"
          />
          <path
            stroke-width=".5"
            d="M5.313 10.938L5.313 12.813M6.563 9.688c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
            transform="translate(-889 -1675) translate(409 1130) translate(60 490) translate(420 55) translate(2.5 .5)"
          />
        </g>
      </symbol>

      <symbol
        version="1.1"
        id="list-price"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .list-price {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="list-price_XMLID_00000021838759355431984710000010020955607564213671_">
          <path
            id="list-price_XMLID_00000039114656601819521330000008988664800184999600_"
            class="list-price"
            d="M12.94 16.51a7.778 7.778 0 0 0 3.43-6.45c0-4.29-3.48-7.78-7.78-7.78C4.3 2.28.81 5.76.81 10.06c0 3.2 1.93 5.94 4.69 7.14"
          />
          <path
            id="list-price_XMLID_00000120550658423184009380000009024808728563940510_"
            class="list-price"
            d="m20.75 12.49-7.29 7.29-3.89-3.89-5.83 5.83"
          />
          <path
            id="list-price_XMLID_00000021832473617356942480000003439660076592728192_"
            class="list-price"
            d="M23.18 10.06h-4.86l4.86 4.86z"
          />
          <path
            d="M6.52 10.05c0 .27-.05.53-.14.76-.09.23-.23.43-.4.6-.17.17-.38.3-.62.4-.24.1-.51.14-.81.14H3.07v-3.8h1.48c.3 0 .56.05.81.14.24.11.44.24.62.41.17.17.31.37.4.6.09.23.14.48.14.75zm-.9 0c0-.19-.02-.36-.07-.51-.05-.14-.12-.27-.22-.38a1.003 1.003 0 0 0-.78-.33h-.59v2.44h.59c.17 0 .32-.03.45-.08.13-.06.24-.14.33-.24.09-.11.16-.23.21-.38.05-.16.08-.33.08-.52zM7.92 9.69h.14c.13 0 .22-.04.28-.12l.86-1.24c.05-.07.1-.11.16-.14.06-.03.13-.04.22-.04h.77L9.22 9.69c-.08.11-.17.18-.26.23.07.02.13.06.18.1.05.04.1.1.15.17l1.15 1.76h-.79c-.05 0-.09 0-.13-.01a.465.465 0 0 1-.09-.03c-.03-.01-.05-.03-.07-.05a.18.18 0 0 1-.05-.07l-.86-1.32a.234.234 0 0 0-.12-.1.504.504 0 0 0-.19-.03h-.22v1.62h-.88v-3.8h.88v1.53zM11.6 9.69h.14c.13 0 .22-.04.28-.12l.86-1.24c.05-.07.1-.11.16-.14.06-.03.13-.04.22-.04h.77L12.9 9.69c-.08.11-.17.18-.26.23.07.02.13.06.18.1.05.04.1.1.15.17l1.15 1.76h-.79c-.05 0-.09 0-.13-.01a.465.465 0 0 1-.09-.03c-.03-.01-.05-.03-.07-.05a.18.18 0 0 1-.05-.07l-.86-1.32a.234.234 0 0 0-.12-.1.504.504 0 0 0-.19-.03h-.22v1.62h-.88v-3.8h.88v1.53z"
          />
        </g>
      </symbol>
      <symbol
        version="1.1"
        id="mileage"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .mileage {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="mileage"
          d="m16.79 4.9 6.12 14.2M1.09 19.1l6.1-14.2M11.99 9.47v2.6M11.99 4.9v1.49M12 15.19v3.91"
        />
      </symbol>

      <symbol
        id="handshake"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <path
          d="M21.51 12.19c1.2-1.19 1.5-2.6 1.26-3.96-.24-1.36-1.01-2.69-1.98-3.72-.64-.68-1.36-1.27-2.11-1.7-.98-.55-4.05-1.35-6.05.6L8.47 7.56c-1.12 1.12 1.71 2.2 3.15.79l1.05-1.03c1.55-1.4 3.5 1.41 5.92-.5M2.54 11.54c-1.1-1.1-1.48-2.38-1.37-3.64.12-1.26.73-2.5 1.64-3.49.9-.99 2.09-1.75 3.35-2.05 1.26-.3 2.58-.15 3.77.66m5.86 6.25 4.45 4.66c1.09 1.15-.53 3.33-1.93 1.88l-2.51-2.59m-2.19 1.75 2.76 2.84c1.11 1.14 3.34-.54 1.94-1.99l-2.7-2.79m-.36 6.74c.96-.21 1.48-1.57.74-2.35M5.48 15.8c-.5.5-1.35.36-1.84-.14l-.15-.15c-.5-.5-.5-1.31 0-1.81l1.91-1.91c.5-.5 1.32-.5 1.81 0l.15.15c.5.5.56 1.42.06 1.91m.25 3.85c-.5.5-1.45.46-1.95-.04l-.15-.15c-.5-.5-.5-1.31 0-1.81l3.04-3.04c.5-.5 1.31-.5 1.81 0l.15.15c.71.71.37 1.6-.55 2.55m-.17 4.2c-.5.5-1.44.48-1.93-.01l-.15-.15c-.5-.5-.5-1.31 0-1.81l2.08-2.08c.5-.5 1.31-.5 1.81 0l.15.15c.67.67.4 1.53-.45 2.42m1.65.13.15.15c.5.5.5 1.32 0 1.81l-1.28 1.28c-.5.5-1.32.5-1.81 0l-.16-.15c-.5-.5-.5-1.31 0-1.81l1.28-1.28c.5-.5 1.32-.5 1.82 0h0z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>

      <symbol
        version="1.1"
        id="insurance-excess"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .insurance-excess {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <circle class="insurance-excess" cx="18.79" cy="8.66" r="4.35" />
        <path class="insurance-excess" d="m17.56 9.89 2.46-2.46M17.56 7.43l2.46 2.46" />
        <ellipse
          id="insurance-excess_XMLID_3715_"
          class="insurance-excess"
          cx="5.06"
          cy="5.28"
          rx="4.2"
          ry="1.26"
        />
        <path
          id="insurance-excess_XMLID_3714_"
          class="insurance-excess"
          d="M9.26 5.28v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26V5.28"
        />
        <path
          id="insurance-excess_XMLID_3713_"
          class="insurance-excess"
          d="M9.26 6.96v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26V6.96"
        />
        <ellipse
          id="insurance-excess_XMLID_3712_"
          class="insurance-excess"
          cx="13.74"
          cy="13.68"
          rx="4.2"
          ry="1.26"
        />
        <path
          id="insurance-excess_XMLID_3711_"
          class="insurance-excess"
          d="M17.94 13.68v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
        <path
          id="insurance-excess_XMLID_3710_"
          class="insurance-excess"
          d="M17.94 15.36v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
        <path
          id="insurance-excess_XMLID_3709_"
          class="insurance-excess"
          d="M17.94 17.04v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
        <path
          id="insurance-excess_XMLID_3708_"
          class="insurance-excess"
          d="M9.26 8.64v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26V8.64"
        />
        <path
          id="insurance-excess_XMLID_3699_"
          class="insurance-excess"
          d="M9.26 10.32V12c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
        <path
          id="insurance-excess_XMLID_3698_"
          class="insurance-excess"
          d="M9.26 12v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26V12"
        />
        <path
          id="insurance-excess_XMLID_3697_"
          class="insurance-excess"
          d="M9.26 13.68v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
        <path
          id="insurance-excess_XMLID_3696_"
          class="insurance-excess"
          d="M9.26 15.36v1.68c0 .7-1.88 1.26-4.2 1.26-2.32 0-4.2-.56-4.2-1.26v-1.68"
        />
      </symbol>

      <symbol
        version="1.1"
        id="car-insurance"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .car-insurance {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        </style>
        <path class="car-insurance" d="M15.3 12.77h-4.62v-1.54m-3.84 6.93h9.23" />
        <path
          class="car-insurance"
          d="M13.72 9.57c-1.4-.4-2.85-.62-4.31-.66-1.79-.1-3.58.16-5.26.76h-2.7l1.04 1.09a4.23 4.23 0 0 0-1.82 3.55c0 .77.33 3.85 1.54 3.85m18.48 0h1.34c.51-.07.91-.47.97-.98V14.8c.03-.46-.18-.9-.55-1.18"
        />
        <circle class="car-insurance" cx="18.38" cy="17.39" r="2.31" />
        <circle class="car-insurance" cx="4.53" cy="17.39" r="2.31" />
        <path class="car-insurance" d="m17.31 8.72 1.61 1.61 2.81-2.81" />
        <path
          class="car-insurance"
          d="M19.32 13.54c1.54-.47 4.02-2.01 4.02-3.62V5.51L19.32 4.3 15.3 5.51v4.42c0 1.6 2.51 3.14 4.02 3.61z"
        />
      </symbol>
      <symbol
        version="1.1"
        id="savings"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .savings {
            fill: none;
          }
          .savings,
          .savings1,
          .savings2 {
            stroke: currentColor;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }
          .savings1 {
            fill: none;
            stroke-linejoin: round;
          }
          .savings2 {
            fill: #fff;
          }
        </style>
        <path class="savings" d="M9.5 21.06c1.03.33 2.15.51 3.34.51 1.41 0 2.66-.22 3.75-.56h.01" />
        <path
          class="savings1"
          d="M19.14 19.85c2.55-1.57 3.67-3.64 3.67-3.64l.19-2.69-1.58-.33c-.31-1.07-.94-2.05-1.8-2.87"
        />
        <path
          class="savings"
          d="M6.03 19.05c-1.24-1.18-1.99-2.7-1.99-4.35 0-3.01 2.48-5.57 5.92-6.5.9-.24 1.86-.37 2.87-.37.43 0 .85.02 1.25.07 1.18.13 2.29.45 3.26.91h0"
        />
        <path class="savings1" d="m19.14 19.85.24 2.81h-1.56l-1.22-1.65" />
        <path
          class="savings1"
          d="m19.14 19.85.24 2.84h-1.56l-1.23-1.67M9.5 21.06l-1.01 1.63H6.74l-.71-3.64M16.21 10.34c.29-.7.7-1.19 1.15-1.53 1.53-1.16 3.6-.6 3.6-.6s-.75.84-1.34 2.12"
        />
        <path
          class="savings2"
          d="M18.59 12.62h-.51M14.44 10.32h0a6.81 6.81 0 0 0-5.03.49l-.11.06"
        />
        <path
          d="M11.31 2.31c.86 0 1.57.7 1.57 1.57s-.7 1.57-1.57 1.57-1.57-.7-1.57-1.57.71-1.57 1.57-1.57m0-1a2.57 2.57 0 1 0 0 5.14 2.57 2.57 0 1 0 0-5.14z"
        />
        <path
          class="savings"
          d="M2.47 14.18a.626.626 0 0 0-.57-.43.881.881 0 0 0-.9.86c-.02.69.53 1.27 1.23 1.29.99.02 1.81-.76 1.84-1.75"
        />
      </symbol>
      <symbol
        version="1.1"
        id="location-pin"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .location-pin {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="location_pin_00000041275806724820483280000005820235213770576831_">
          <path
            id="location_pin_5944_"
            class="location-pin"
            d="M9.92 19.39c-3.29.23-5.72.98-5.72 1.88 0 1.08 3.49 1.95 7.8 1.95s7.8-.87 7.8-1.95c0-.9-2.42-1.65-5.72-1.88"
          />
          <g id="location_pin_00000101079732646376104890000011076508698225792385_">
            <circle id="location_pin_5943_" class="location-pin" cx="12" cy="6.64" r="2.93" />
            <path
              id="location_pin_5942_"
              class="location-pin"
              d="M17.85 6.64c0 3.23-5.85 13.65-5.85 13.65S6.15 9.87 6.15 6.64a5.851 5.851 0 0 1 11.7 0z"
            />
          </g>
        </g>
      </symbol>
      <symbol
        version="1.1"
        id="time"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <style>
          .time {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <g id="time_XMLID_8800_">
          <circle id="time_XMLID_8802_" class="time" cx="12" cy="12" r="11" />
          <path id="time_XMLID_8801_" class="time" d="M12 4v8h6" />
        </g>
      </symbol>
      <symbol
        version="1.1"
        id="spanner-and-nut"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 40 40"
        xml:space="preserve"
      >
        <g clip-path="url(#clip0_22_2)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.63881 1.86927C8.93026 1.41553 11.2042 1 15.25 1C19.489 1 22.2839 2.73476 24.006 4.87129C25.6982 6.97057 26.3333 9.43087 26.3333 10.913C26.3333 11.2665 26.3231 11.6367 26.3126 12.0194C26.2408 14.6313 26.1531 17.8196 29.18 20.1626C31.1138 21.6595 33.4905 23.5195 35.3829 25.0046C36.3293 25.7473 37.1549 26.3966 37.7439 26.8601L38.6845 27.6009L38.2083 28.2608L37.731 28.9199L36.7905 28.1792C36.2019 27.716 35.3769 27.0672 34.4312 26.325C32.5395 24.8404 30.1661 22.9831 28.2366 21.4895C24.4946 18.593 24.6373 14.4609 24.7265 11.8814C24.7387 11.5268 24.75 11.2017 24.75 10.913C24.75 9.81779 24.2451 7.73462 22.7943 5.93477C21.3736 4.17219 19.0226 2.65217 15.25 2.65217C11.3874 2.65217 9.31361 3.04159 8.22905 3.40587C8.64193 3.61389 9.12911 3.86066 9.66081 4.13252C11.2465 4.94327 13.237 5.98165 14.8345 6.8818C15.7521 7.39888 16.3862 8.07742 16.7722 8.86638C17.1549 9.64852 17.2679 10.4857 17.2302 11.2861C17.1559 12.8615 16.4923 14.4076 15.9425 15.4436C15.3986 16.4688 14.5752 17.7968 13.3871 18.6667C12.144 19.5769 10.5401 19.9534 8.61067 19.1097L8.60817 19.1086C6.95332 18.378 5.16573 17.549 3.79374 16.9035C3.42507 16.73 3.08615 16.5697 2.78758 16.428C2.88962 16.9455 3.0402 17.5733 3.26104 18.2639C3.86741 20.1602 4.99021 22.4894 7.05473 24.3274C9.02216 26.0697 11.913 26.6086 16.0416 26.6086C18.304 26.6086 20.4189 27.5044 21.9328 28.3606C22.6968 28.7927 23.3247 29.2244 23.763 29.5492C23.9825 29.7118 24.1553 29.8483 24.2748 29.9454C24.3346 29.994 24.3811 30.0328 24.4135 30.0602L24.4485 30.0901L33.9333 37.513C34.2831 37.7867 34.354 38.3045 34.0916 38.6695C33.8293 39.0345 33.3331 39.1084 32.9833 38.8347L23.4833 31.3999C23.4773 31.3953 23.4714 31.3905 23.4656 31.3857C23.4602 31.3812 23.4548 31.3766 23.4495 31.3719C23.4494 31.3718 23.4495 31.372 23.4495 31.3719L23.4433 31.3666L23.4165 31.3437C23.3916 31.3227 23.3531 31.2905 23.3017 31.2487C23.1989 31.1652 23.045 31.0435 22.8463 30.8963C22.4485 30.6015 21.875 30.2072 21.1784 29.8132C19.771 29.0172 17.9277 28.2608 16.0416 28.2608C11.8742 28.2608 8.46352 27.7425 6.02929 25.5862L6.02785 25.585C3.67531 23.4909 2.4233 20.8639 1.75911 18.7869C1.42614 17.7456 1.23757 16.8325 1.13189 16.1763C1.079 15.8479 1.0467 15.5827 1.02746 15.3968C1.01784 15.3038 1.01147 15.2306 1.00742 15.179L1.00297 15.1182L1.00183 15.1004L1.00149 15.0947L1.00138 15.0927C1.00136 15.0924 1.0013 15.0913 1.79164 15.0434L2.12417 14.2938L2.29386 14.3755C2.40457 14.4287 2.56658 14.5064 2.77134 14.6042C3.1809 14.7998 3.76137 15.0759 4.44453 15.3973C5.81137 16.0404 7.58574 16.8632 9.22389 17.5865C10.6188 18.196 11.6507 17.9198 12.4776 17.3143C13.3597 16.6684 14.0405 15.6173 14.5574 14.6433C15.0684 13.6802 15.5924 12.401 15.6487 11.2049C15.6763 10.6196 15.5904 10.0844 15.362 9.61764C15.137 9.15766 14.7478 8.71065 14.0821 8.33556C12.513 7.45137 10.5452 6.42454 8.96412 5.61616C8.17477 5.21256 7.48403 4.86453 6.99072 4.61745C6.7441 4.49392 6.54689 4.39566 6.41146 4.32834L6.2037 4.2253L6.54164 3.47826C5.81701 3.14556 5.81768 3.14399 5.81835 3.14241L5.81971 3.13923L5.82252 3.13278L5.82851 3.11949C5.83266 3.11046 5.83714 3.10112 5.84196 3.09147C5.85161 3.07216 5.86262 3.0517 5.87517 3.0302C5.90029 2.98713 5.9313 2.94033 5.96946 2.89065C6.04591 2.79111 6.14946 2.68201 6.28907 2.56849C6.56668 2.34276 6.98929 2.09747 7.63881 1.86927ZM6.54164 3.47826L5.81701 3.14556C5.64435 3.55504 5.8162 4.03391 6.2037 4.2253L6.54164 3.47826ZM1.79164 15.0434L2.12417 14.2938C1.87162 14.1718 1.57622 14.1972 1.34617 14.3606C1.11612 14.524 0.985263 14.8028 1.00138 15.0927L1.79164 15.0434ZM38.8399 28.7588C38.5763 29.1228 38.0798 29.1949 37.731 28.9199L38.2083 28.2608L38.6845 27.6009C39.0334 27.876 39.1035 28.3948 38.8399 28.7588Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.92432 5.41644L3.64002 7.76739C3.17508 8.09083 2.91845 8.65778 2.96108 9.24806L3.26131 13.3866C3.3171 13.9786 3.6598 14.4942 4.16044 14.7446L7.7546 16.5454C8.25248 16.7942 8.85487 16.7441 9.3247 16.4103L12.61 14.0587C13.0749 13.7352 13.3316 13.1683 13.2889 12.578L12.9887 8.43939C12.9329 7.84749 12.5902 7.33181 12.0896 7.08149L8.49541 5.28062C7.9975 5.03182 7.39415 5.08263 6.92432 5.41644ZM2.47251 13.4574L1.6831 13.5197L1.38227 9.37277C1.29843 8.21371 1.80005 7.06422 2.75702 6.3959L6.03236 4.05137C6.95564 3.3945 7.89496 3.7935 8.91669 4.30436L12.0834 5.95651C13.1004 6.46532 14.4611 7.1348 14.5657 8.29109L14.5671 8.30632L14.8678 12.4533C14.9516 13.6123 14.45 14.7618 13.493 15.4301L10.2195 17.7733L10.2176 17.7747C9.29438 18.4315 8.09214 18.5462 7.07041 18.0354L3.47625 16.2345C2.45915 15.7257 1.78888 14.6912 1.68434 13.535L2.47251 13.4574Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.125 9.26085C7.25054 9.26085 6.54166 10.0006 6.54166 10.913C6.54166 11.8255 7.25054 12.5652 8.125 12.5652C8.99945 12.5652 9.70833 11.8255 9.70833 10.913C9.70833 10.0006 8.99945 9.26085 8.125 9.26085ZM4.95833 10.913C4.95833 9.08808 6.37609 7.60868 8.125 7.60868C9.8739 7.60868 11.2917 9.08808 11.2917 10.913C11.2917 12.738 9.8739 14.2174 8.125 14.2174C6.37609 14.2174 4.95833 12.738 4.95833 10.913Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_2">
            <rect width="38" height="38" transform="translate(1 1)" />
          </clipPath>
        </defs>
      </symbol>
      <symbol
        version="1.1"
        id="furniture"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 80 59"
        xml:space="preserve"
      >
        <path
          fill="currentColor"
          d="M52.842 29.5c-.416 0-.831.049-1.223.122v-1.345a6.118 6.118 0 0 0-6.115-6.116H16.15c-2.935 0-8.562 2.373-8.562 6.116v1.345A6.118 6.118 0 0 0 .25 35.615c0 2.006.954 3.767 2.446 4.893V57.63c0 .685.538 1.223 1.223 1.223h7.339c.685 0 1.223-.538 1.223-1.223v-1.223h34.246v1.223c0 .685.538 1.223 1.223 1.223h7.338c.685 0 1.224-.538 1.224-1.223V40.508a6.093 6.093 0 0 0 2.446-4.893 6.118 6.118 0 0 0-6.116-6.115ZM10.035 56.408H5.142v-14.8c.392.074.808.123 1.223.123.685 0 1.223-.538 1.223-1.223s-.538-1.223-1.223-1.223a3.664 3.664 0 0 1-3.669-3.67c0-2.03 1.64-3.669 3.67-3.669 2.03 0 3.669 1.639 3.669 3.67v20.792Zm36.692-2.447H12.48V49.07h34.246v4.892Zm0-7.338H12.48v-2.446h34.246v2.446Zm0-11.008v6.116H12.48v-6.116c0-1.981-.979-3.742-2.446-4.868v-2.47c0-1.712 3.693-3.67 6.115-3.67h29.354c2.03 0 3.67 1.64 3.67 3.67v2.47c-1.469 1.126-2.447 2.887-2.447 4.868Zm6.115 3.67c-.685 0-1.223.538-1.223 1.223s.538 1.223 1.223 1.223c.416 0 .832-.05 1.223-.123v14.8h-4.892V35.615c0-2.03 1.639-3.669 3.67-3.669 2.03 0 3.668 1.639 3.668 3.67 0 2.03-1.638 3.669-3.669 3.669Z"
        />
        <path
          fill="currentColor"
          d="M79.701 20.645 74.81 1.075A1.227 1.227 0 0 0 73.61.147H58.934a1.22 1.22 0 0 0-1.175.93l-4.892 19.569c-.098.367 0 .758.22 1.052.245.293.587.465.954.465H65.05V51.54c-2.69.122-7.339.905-7.339 6.09 0 .686.563 1.224 1.224 1.224H73.61c.685 0 1.224-.538 1.224-1.223 0-5.186-4.624-5.969-7.339-6.091V22.162h4.892v10.004c-1.418.514-2.446 1.86-2.446 3.45a3.68 3.68 0 0 0 3.67 3.669 3.68 3.68 0 0 0 3.669-3.67 3.649 3.649 0 0 0-2.447-3.449V22.162h3.67c.391 0 .734-.172.978-.465.22-.294.318-.685.22-1.052Zm-7.46 35.763H60.328c.416-1.517 1.883-2.447 5.944-2.447 4.06 0 5.553.93 5.969 2.447Zm1.37-19.57c-.661 0-1.224-.562-1.224-1.223 0-.66.563-1.223 1.223-1.223.66 0 1.224.538 1.224 1.223s-.539 1.223-1.224 1.223ZM55.63 19.715l4.281-17.123h12.744l4.281 17.123H55.631Z"
        />
      </symbol>
    </svg>`,Q0=le({name:"IconLoader",render(){return $r("div",{innerHTML:Z0,style:{position:"absolute",opacity:0,width:0,height:0,pointerEvents:"none"}})}}),ep={class:"fdm-widget"},tp=le({__name:"App",setup(e){const{loadingStates:t}=En(),n=st(),r=zr.getContainer(),s=r==null?void 0:r.dataset,o=G0(s);return Jt(async()=>{o.disableScripts||Y0()}),(i,a)=>{var l,d,u;const c=yn("router-view");return I(),H("div",ep,[G($(Q0)),$(t).length?(I(),Ce(yl,{key:0,"loading-text":"Vent venligst"})):Q("",!0),$(o).hideHeader?Q("",!0):(I(),Ce(fl,{key:1})),G($(sl),{icon:(l=$(n).appContent)==null?void 0:l.heroIcon,header:(d=$(n).appContent)==null?void 0:d.heroHeading,subheader:(u=$(n).appContent)==null?void 0:u.heroSubheading},null,8,["icon","header","subheader"]),G(c)])}}});const Yi="%[a-f0-9]{2}",Io=new RegExp("("+Yi+")|([^%]+?)","gi"),Lo=new RegExp("("+Yi+")+","gi");function Fr(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;const n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],Fr(n),Fr(r))}function np(e){try{return decodeURIComponent(e)}catch{let t=e.match(Io)||[];for(let n=1;n<t.length;n++)e=Fr(t,n).join(""),t=e.match(Io)||[];return e}}function rp(e){const t={"%FE%FF":"��","%FF%FE":"��"};let n=Lo.exec(e);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{const s=np(n[0]);s!==n[0]&&(t[n[0]]=s)}n=Lo.exec(e)}t["%C2"]="�";const r=Object.keys(t);for(const s of r)e=e.replace(new RegExp(s,"g"),t[s]);return e}function sp(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return rp(e)}}function Zi(e,t){if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||t==="")return[];const n=e.indexOf(t);return n===-1?[]:[e.slice(0,n),e.slice(n+t.length)]}function op(e,t){const n={};if(Array.isArray(t))for(const r of t){const s=Object.getOwnPropertyDescriptor(e,r);s!=null&&s.enumerable&&Object.defineProperty(n,r,s)}else for(const r of Reflect.ownKeys(e)){const s=Object.getOwnPropertyDescriptor(e,r);if(s.enumerable){const o=e[r];t(r,o,e)&&Object.defineProperty(n,r,s)}}return n}const ip=e=>e==null,ap=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),jr=Symbol("encodeFragmentIdentifier");function lp(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const s=n.length;return r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[pe(t,e),"[",s,"]"].join("")]:[...n,[pe(t,e),"[",pe(s,e),"]=",pe(r,e)].join("")]};case"bracket":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[pe(t,e),"[]"].join("")]:[...n,[pe(t,e),"[]=",pe(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[pe(t,e),":list="].join("")]:[...n,[pe(t,e),":list=",pe(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t=e.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(r,s)=>s===void 0||e.skipNull&&s===null||e.skipEmptyString&&s===""?r:(s=s===null?"":s,r.length===0?[[pe(n,e),t,pe(s,e)].join("")]:[[r,pe(s,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,pe(t,e)]:[...n,[pe(t,e),"=",pe(r,e)].join("")]}}function cp(e){let t;switch(e.arrayFormat){case"index":return(n,r,s)=>{if(t=/\[(\d*)]$/.exec(n),n=n.replace(/\[\d*]$/,""),!t){s[n]=r;return}s[n]===void 0&&(s[n]={}),s[n][t[1]]=r};case"bracket":return(n,r,s)=>{if(t=/(\[])$/.exec(n),n=n.replace(/\[]$/,""),!t){s[n]=r;return}if(s[n]===void 0){s[n]=[r];return}s[n]=[...s[n],r]};case"colon-list-separator":return(n,r,s)=>{if(t=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!t){s[n]=r;return}if(s[n]===void 0){s[n]=[r];return}s[n]=[...s[n],r]};case"comma":case"separator":return(n,r,s)=>{const o=typeof r=="string"&&r.includes(e.arrayFormatSeparator),i=typeof r=="string"&&!o&&Ue(r,e).includes(e.arrayFormatSeparator);r=i?Ue(r,e):r;const a=o||i?r.split(e.arrayFormatSeparator).map(c=>Ue(c,e)):r===null?r:Ue(r,e);s[n]=a};case"bracket-separator":return(n,r,s)=>{const o=/(\[])$/.test(n);if(n=n.replace(/\[]$/,""),!o){s[n]=r&&Ue(r,e);return}const i=r===null?[]:r.split(e.arrayFormatSeparator).map(a=>Ue(a,e));if(s[n]===void 0){s[n]=i;return}s[n]=[...s[n],...i]};default:return(n,r,s)=>{if(s[n]===void 0){s[n]=r;return}s[n]=[...[s[n]].flat(),r]}}}function Qi(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function pe(e,t){return t.encode?t.strict?ap(e):encodeURIComponent(e):e}function Ue(e,t){return t.decode?sp(e):e}function ea(e){return Array.isArray(e)?e.sort():typeof e=="object"?ea(Object.keys(e)).sort((t,n)=>Number(t)-Number(n)).map(t=>e[t]):e}function ta(e){const t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function dp(e){let t="";const n=e.indexOf("#");return n!==-1&&(t=e.slice(n)),t}function No(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function cs(e){e=ta(e);const t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function ds(e,t){t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t},Qi(t.arrayFormatSeparator);const n=cp(t),r=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return r;for(const s of e.split("&")){if(s==="")continue;const o=t.decode?s.replace(/\+/g," "):s;let[i,a]=Zi(o,"=");i===void 0&&(i=o),a=a===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:Ue(a,t),n(Ue(i,t),a,r)}for(const[s,o]of Object.entries(r))if(typeof o=="object"&&o!==null)for(const[i,a]of Object.entries(o))o[i]=No(a,t);else r[s]=No(o,t);return t.sort===!1?r:(t.sort===!0?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((s,o)=>{const i=r[o];return Boolean(i)&&typeof i=="object"&&!Array.isArray(i)?s[o]=ea(i):s[o]=i,s},Object.create(null))}function na(e,t){if(!e)return"";t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t},Qi(t.arrayFormatSeparator);const n=i=>t.skipNull&&ip(e[i])||t.skipEmptyString&&e[i]==="",r=lp(t),s={};for(const[i,a]of Object.entries(e))n(i)||(s[i]=a);const o=Object.keys(s);return t.sort!==!1&&o.sort(t.sort),o.map(i=>{const a=e[i];return a===void 0?"":a===null?pe(i,t):Array.isArray(a)?a.length===0&&t.arrayFormat==="bracket-separator"?pe(i,t)+"[]":a.reduce(r(i),[]).join("&"):pe(i,t)+"="+pe(a,t)}).filter(i=>i.length>0).join("&")}function ra(e,t){var s;t={decode:!0,...t};let[n,r]=Zi(e,"#");return n===void 0&&(n=e),{url:((s=n==null?void 0:n.split("?"))==null?void 0:s[0])??"",query:ds(cs(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:Ue(r,t)}:{}}}function sa(e,t){t={encode:!0,strict:!0,[jr]:!0,...t};const n=ta(e.url).split("?")[0]||"",r=cs(e.url),s={...ds(r,{sort:!1}),...e.query};let o=na(s,t);o&&(o=`?${o}`);let i=dp(e.url);if(e.fragmentIdentifier){const a=new URL(n);a.hash=e.fragmentIdentifier,i=t[jr]?a.hash:`#${e.fragmentIdentifier}`}return`${n}${o}${i}`}function oa(e,t,n){n={parseFragmentIdentifier:!0,[jr]:!1,...n};const{url:r,query:s,fragmentIdentifier:o}=ra(e,n);return sa({url:r,query:op(s,t),fragmentIdentifier:o},n)}function up(e,t,n){const r=Array.isArray(t)?s=>!t.includes(s):(s,o)=>!t(s,o);return oa(e,r,n)}const fp=Object.freeze(Object.defineProperty({__proto__:null,exclude:up,extract:cs,parse:ds,parseUrl:ra,pick:oa,stringify:na,stringifyUrl:sa},Symbol.toStringTag,{value:"Module"})),pp=()=>{if(document.getElementById("lato-fonts"))return;const e=`
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: url(https://styleguide.fdm.dk/fonts/lato/Lato-Regular.woff2) format('woff2'),
           url(https://styleguide.fdm.dk/fonts/lato/Lato-Regular.woff) format('woff');
      font-display: swap;
    }
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: bold;
      src: url(https://styleguide.fdm.dk/fonts/lato/Lato-Bold.woff2) format('woff2'),
           url(https://styleguide.fdm.dk/fonts/lato/Lato-Bold.woff) format('woff');
      font-display: swap;
    }
    @font-face {
      font-family: 'Lato';
      font-style: italic;
      font-weight: 400;
      src: url(https://styleguide.fdm.dk/fonts/lato/Lato-Italic.woff2) format('woff2'),
           url(https://styleguide.fdm.dk/fonts/lato/Lato-Italic.woff) format('woff');
      font-display: swap;
    }
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 900;
      src: url(https://styleguide.fdm.dk/fonts/lato/Lato-Black.woff2) format('woff2'),
           url(https://styleguide.fdm.dk/fonts/lato/Lato-Black.woff) format('woff');
      font-display: swap;
    }
  `,t=document.createElement("style");t.id="lato-fonts",t.textContent=e,document.head.appendChild(t)},Do=fp.parse(location.search);Do.basketId&&G2(Do.basketId);zr.createApp(()=>{const e=za(tp);return e.use(Ml()),e.use(en),e},{beforeMount:pp}).init();
