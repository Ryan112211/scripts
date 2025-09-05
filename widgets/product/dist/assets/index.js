import{g as wn,r as O,m as He,h as ur,i as de,t as kn,j as Ce,k as Rt,l as dr,w as Pt,n as Mt,p as fr,q as pr,s as _n,x as hr,y as j,d as X,e as V,f as W,z as q,B as mr,C as gr,D as Y,F as En,G as me,H as xn,I as yr,T as vr,u as N,J as br,K as wr,L as kr,M as Ot,b as _r,N as Le,v as Tt,O as Er,P as xr,Q as ot,R as it,A as Be,S as Sr}from"./embedder.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Cr=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Sn;const Ke=e=>Sn=e,Cn=Symbol();function gt(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xe||(xe={}));function Rr(){const e=wn(!0),t=e.run(()=>O({}));let n=[],r=[];const s=He({install(o){Ke(s),s._a=o,o.provide(Cn,s),o.config.globalProperties.$pinia=s,r.forEach(i=>n.push(i)),r=[]},use(o){return!this._a&&!Cr?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Rn=()=>{};function Kt(e,t,n,r=Rn){e.push(t);const s=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&fr()&&pr(s),s}function fe(e,...t){e.slice().forEach(n=>{n(...t)})}function yt(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];gt(s)&&gt(r)&&e.hasOwnProperty(n)&&!Ce(r)&&!Rt(r)?e[n]=yt(s,r):e[n]=r}return e}const Pr=Symbol();function Mr(e){return!gt(e)||!e.hasOwnProperty(Pr)}const{assign:ie}=Object;function Or(e){return!!(Ce(e)&&e.effect)}function Tr(e,t,n,r){const{state:s,actions:o,getters:i}=t,a=n.state.value[e];let u;function c(){a||(n.state.value[e]=s?s():{});const l=hr(n.state.value[e]);return ie(l,o,Object.keys(i||{}).reduce((d,h)=>(d[h]=He(j(()=>{Ke(n);const g=n._s.get(e);return i[h].call(g,g)})),d),{}))}return u=Pn(e,c,t,n,r,!0),u}function Pn(e,t,n={},r,s,o){let i;const a=ie({actions:{}},n),u={deep:!0};let c,l,d=He([]),h=He([]),g;const m=r.state.value[e];!o&&!m&&(r.state.value[e]={}),O({});let v;function C(w){let _;c=l=!1,typeof w=="function"?(w(r.state.value[e]),_={type:xe.patchFunction,storeId:e,events:g}):(yt(r.state.value[e],w),_={type:xe.patchObject,payload:w,storeId:e,events:g});const L=v=Symbol();_n().then(()=>{v===L&&(c=!0)}),l=!0,fe(d,_,r.state.value[e])}const E=o?function(){const{state:_}=n,L=_?_():{};this.$patch(B=>{ie(B,L)})}:Rn;function x(){i.stop(),d=[],h=[],r._s.delete(e)}function A(w,_){return function(){Ke(r);const L=Array.from(arguments),B=[],G=[];function J($){B.push($)}function Ze($){G.push($)}fe(h,{args:L,name:w,store:D,after:J,onError:Ze});let ee;try{ee=_.apply(this&&this.$id===e?this:D,L)}catch($){throw fe(G,$),$}return ee instanceof Promise?ee.then($=>(fe(B,$),$)).catch($=>(fe(G,$),Promise.reject($))):(fe(B,ee),ee)}}const F={_p:r,$id:e,$onAction:Kt.bind(null,h),$patch:C,$reset:E,$subscribe(w,_={}){const L=Kt(d,w,_.detached,()=>B()),B=i.run(()=>Pt(()=>r.state.value[e],G=>{(_.flush==="sync"?l:c)&&w({storeId:e,type:xe.direct,events:g},G)},ie({},u,_)));return L},$dispose:x},D=Mt(F);r._s.set(e,D);const U=r._e.run(()=>(i=wn(),i.run(()=>t())));for(const w in U){const _=U[w];if(Ce(_)&&!Or(_)||Rt(_))o||(m&&Mr(_)&&(Ce(_)?_.value=m[w]:yt(_,m[w])),r.state.value[e][w]=_);else if(typeof _=="function"){const L=A(w,_);U[w]=L,a.actions[w]=_}}return ie(D,U),ie(kn(D),U),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:w=>{C(_=>{ie(_,w)})}}),r._p.forEach(w=>{ie(D,i.run(()=>w({store:D,app:r._a,pinia:r,options:a})))}),m&&o&&n.hydrate&&n.hydrate(D.$state,m),c=!0,l=!0,D}function At(e,t,n){let r,s;const o=typeof t=="function";typeof e=="string"?(r=e,s=o?n:t):(s=e,r=e.id);function i(a,u){const c=ur();return a=a||c&&de(Cn,null),a&&Ke(a),a=Sn,a._s.has(r)||(o?Pn(r,t,s,a):Tr(r,s,a)),a._s.get(r)}return i.$id=r,i}function Ar(e){{e=kn(e);const t={};for(const n in e){const r=e[n];(Ce(r)||Rt(r))&&(t[n]=dr(e,n))}return t}}const Lr=["xlink:href"],Br=X({__name:"UISvg",props:{icon:{}},setup(e){return(t,n)=>(V(),W("svg",null,[q("use",{"xlink:href":"#"+t.icon},null,8,Lr)]))}}),Mn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Dr={},Nr=e=>(mr("data-v-1430c1d4"),e=e(),gr(),e),jr={class:"menu"},Ir=Nr(()=>q("a",{href:"https://fdm.dk/",class:"menu__logo-link"},[q("img",{src:"https://fdm.dk/themes/common/fdmmotus/images/logo.svg",alt:"logo",class:"menu__logo"})],-1)),zr=[Ir];function Hr(e,t){return V(),W("div",jr,zr)}const Fr=Mn(Dr,[["render",Hr],["__scopeId","data-v-1430c1d4"]]),Ur={class:"hero"},Vr={class:"hero__inner-wrapper"},$r={class:"flex flex-col sm:items-center text-center"},qr={class:"mt-4"},Kr=["innerHTML"],Gr=X({__name:"UIHero",props:{header:{},subheader:{},icon:{}},setup(e){return(t,n)=>(V(),W("section",Ur,[q("div",Vr,[Y(Br,{class:"w-10 h-10 sm:w-16 sm:h-16",icon:t.icon},null,8,["icon"]),q("div",$r,[q("h1",qr,En(t.header),1),t.subheader?(V(),W("div",{key:0,class:"mt-2 sm:mt-4 rich-text",innerHTML:t.subheader},null,8,Kr)):me("",!0)])])]))}}),Jr=Mn(Gr,[["__scopeId","data-v-9f264c61"]]),Wr=["xlink:href"],Fe=X({__name:"UISvg",props:{icon:String},setup(e){return(t,n)=>(V(),W("svg",null,[q("use",{"xlink:href":"#"+e.icon},null,8,Wr)]))}}),Xr={class:"flex flex-col items-center m-auto"},Yr={key:0,class:"text-white font-bold"},Qr=X({__name:"UILoadingSpinner",props:{loadingText:{},size:{default:"w-20 h-20"},color:{default:"text-fdm-blue-400"}},setup(e){const t=e;return(n,r)=>(V(),W("div",Xr,[Y(Fe,{class:xn(`${t.size} ${t.color} loading-spinner`),icon:"loading-spinner"},null,8,["class"]),n.loadingText&&n.loadingText!==""?(V(),W("p",Yr,En(n.loadingText),1)):me("",!0)]))}});const Ge=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Zr=Ge(Qr,[["__scopeId","data-v-44fd911d"]]),es={class:"bg-opacity-50 bg-black absolute inset-0 flex justify-center items-center z-50 min-h-screen"},ts=X({__name:"UILoadingScreen",props:{loadingText:{}},setup(e){const t=e;return(n,r)=>(V(),W("div",null,[Y(vr,{name:"fade"},{default:yr(()=>[q("div",es,[Y(Zr,{loadingText:t.loadingText},null,8,["loadingText"])])]),_:1})]))}}),ns={class:"header"},rs=X({__name:"ProductHeader",setup(e){return(t,n)=>(V(),W("header",ns,[Y(N(Fr))]))}});const ss=Ge(rs,[["__scopeId","data-v-53b2c41b"]]),os={class:"h-full text-left px-8 py-10 md:p-20 overflow-auto"},is=["innerHTML"],as=X({__name:"UIPopoverSlide",props:{content:{},slideHeight:{},show:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,s=()=>{r("close")};return(o,i)=>(V(),W("div",{style:br({height:n.slideHeight+"px"}),class:xn(["absolute top-0 left-0 w-full bg-white transform ease-in-out duration-300 z-20",[n.show?"":"translate-x-full",""]])},[q("button",{class:"absolute bg-white right-0 mr-4 mt-4",onClick:s},[Y(Fe,{class:"w-8 h-8 close-icon",icon:"circle-arrow"})]),q("div",os,[Y(Fe,{class:"popover__slide-icon",icon:"exclamation-circle"}),q("div",{innerHTML:n.content},null,8,is)])],6))}});const cs=Ge(as,[["__scopeId","data-v-e06ee2c8"]]),ls={class:"popover",style:{"background-color":"rgba(0, 0, 0, 0.3)"}},us={class:"popover__container flex bg-white relative mx-auto max-w-2xl overflow-hidden"},ds=["innerHTML"],fs=X({__name:"UIPopover",props:{content:{},slideContent:{},showSlide:{type:Boolean}},emits:["close","close:slide"],setup(e,{emit:t}){const n=e,r=t,s=O(0),o=O();return Pt(()=>n.showSlide,i=>{i&&(s.value=o.value.clientHeight)}),(i,a)=>(V(),W("div",ls,[q("div",us,[q("button",{onClick:a[0]||(a[0]=wr(u=>r("close"),["prevent"])),class:"popover__close-button",title:"close-popover"},[Y(Fe,{class:"popover__close-icon",icon:"close-thick"})]),Y(cs,{slideHeight:s.value,content:i.slideContent,show:i.showSlide,onClose:a[1]||(a[1]=u=>r("close:slide"))},null,8,["slideHeight","content","show"]),q("div",{ref_key:"popoverContentElement",ref:o,class:"popover__content"},[q("div",{innerHTML:i.content,class:"rich-text"},null,8,ds),kr(i.$slots,"default",{},void 0,!0)],512)])]))}});const ps=Ge(fs,[["__scopeId","data-v-8526ddbc"]]);var le=(e=>(e.GET_ORDER_BASKET="get-order-basket",e.UPDATE_ORDER_BASKET="update-order-basket",e.APP_CONTENT="app-content",e.PRODUCT_PACKAGE_CONFIG="product-package-config",e.FETCH_TERMS="fetch-terms",e.FETCH_CAR_MAKES="fetch-car-makes",e.FETCH_CAR_MODELS="fetch-car-models",e.VALIDATE_ORDER="validate-order",e))(le||{}),Lt=(e=>(e.ACCESS_TOKEN="accessToken",e.REFRESH_TOKEN="refreshToken",e.BASKET_ID="basket-id",e))(Lt||{});function On(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tn}=Object.prototype,{getPrototypeOf:Bt}=Object,Dt=(e=>t=>{const n=Tn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),re=e=>(e=e.toLowerCase(),t=>Dt(t)===e),Je=e=>t=>typeof t===e,{isArray:be}=Array,Re=Je("undefined");function hs(e){return e!==null&&!Re(e)&&e.constructor!==null&&!Re(e.constructor)&&ce(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const An=re("ArrayBuffer");function ms(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&An(e.buffer),t}const gs=Je("string"),ce=Je("function"),Ln=Je("number"),Nt=e=>e!==null&&typeof e=="object",ys=e=>e===!0||e===!1,De=e=>{if(Dt(e)!=="object")return!1;const t=Bt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},vs=re("Date"),bs=re("File"),ws=re("Blob"),ks=re("FileList"),_s=e=>Nt(e)&&ce(e.pipe),Es=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Tn.call(e)===t||ce(e.toString)&&e.toString()===t)},xs=re("URLSearchParams"),Ss=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Oe(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),be(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function Bn(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Dn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Nn=e=>!Re(e)&&e!==Dn;function vt(){const{caseless:e}=Nn(this)&&this||{},t={},n=(r,s)=>{const o=e&&Bn(t,s)||s;De(t[o])&&De(r)?t[o]=vt(t[o],r):De(r)?t[o]=vt({},r):be(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Oe(arguments[r],n);return t}const Cs=(e,t,n,{allOwnKeys:r}={})=>(Oe(t,(s,o)=>{n&&ce(s)?e[o]=On(s,n):e[o]=s},{allOwnKeys:r}),e),Rs=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ps=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ms=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Bt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Os=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ts=e=>{if(!e)return null;if(be(e))return e;let t=e.length;if(!Ln(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},As=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Bt(Uint8Array)),Ls=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Bs=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ds=re("HTMLFormElement"),Ns=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Gt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),js=re("RegExp"),jn=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Oe(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Is=e=>{jn(e,(t,n)=>{if(ce(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ce(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zs=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return be(e)?r(e):r(String(e).split(t)),n},Hs=()=>{},Fs=(e,t)=>(e=+e,Number.isFinite(e)?e:t),at="abcdefghijklmnopqrstuvwxyz",Jt="0123456789",In={DIGIT:Jt,ALPHA:at,ALPHA_DIGIT:at+at.toUpperCase()+Jt},Us=(e=16,t=In.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Vs(e){return!!(e&&ce(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $s=e=>{const t=new Array(10),n=(r,s)=>{if(Nt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=be(r)?[]:{};return Oe(r,(i,a)=>{const u=n(i,s+1);!Re(u)&&(o[a]=u)}),t[s]=void 0,o}}return r};return n(e,0)},f={isArray:be,isArrayBuffer:An,isBuffer:hs,isFormData:Es,isArrayBufferView:ms,isString:gs,isNumber:Ln,isBoolean:ys,isObject:Nt,isPlainObject:De,isUndefined:Re,isDate:vs,isFile:bs,isBlob:ws,isRegExp:js,isFunction:ce,isStream:_s,isURLSearchParams:xs,isTypedArray:As,isFileList:ks,forEach:Oe,merge:vt,extend:Cs,trim:Ss,stripBOM:Rs,inherits:Ps,toFlatObject:Ms,kindOf:Dt,kindOfTest:re,endsWith:Os,toArray:Ts,forEachEntry:Ls,matchAll:Bs,isHTMLForm:Ds,hasOwnProperty:Gt,hasOwnProp:Gt,reduceDescriptors:jn,freezeMethods:Is,toObjectSet:zs,toCamelCase:Ns,noop:Hs,toFiniteNumber:Fs,findKey:Bn,global:Dn,isContextDefined:Nn,ALPHABET:In,generateString:Us,isSpecCompliantForm:Vs,toJSONObject:$s};function P(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}f.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zn=P.prototype,Hn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Hn[e]={value:e}});Object.defineProperties(P,Hn);Object.defineProperty(zn,"isAxiosError",{value:!0});P.from=(e,t,n,r,s,o)=>{const i=Object.create(zn);return f.toFlatObject(e,i,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),P.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const qs=null;function bt(e){return f.isPlainObject(e)||f.isArray(e)}function Fn(e){return f.endsWith(e,"[]")?e.slice(0,-2):e}function Wt(e,t,n){return e?e.concat(t).map(function(s,o){return s=Fn(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ks(e){return f.isArray(e)&&!e.some(bt)}const Gs=f.toFlatObject(f,{},null,function(t){return/^is[A-Z]/.test(t)});function We(e,t,n){if(!f.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,C){return!f.isUndefined(C[v])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(t);if(!f.isFunction(s))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(f.isDate(m))return m.toISOString();if(!u&&f.isBlob(m))throw new P("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(m)||f.isTypedArray(m)?u&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function l(m,v,C){let E=m;if(m&&!C&&typeof m=="object"){if(f.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(f.isArray(m)&&Ks(m)||(f.isFileList(m)||f.endsWith(v,"[]"))&&(E=f.toArray(m)))return v=Fn(v),E.forEach(function(A,F){!(f.isUndefined(A)||A===null)&&t.append(i===!0?Wt([v],F,o):i===null?v:v+"[]",c(A))}),!1}return bt(m)?!0:(t.append(Wt(C,v,o),c(m)),!1)}const d=[],h=Object.assign(Gs,{defaultVisitor:l,convertValue:c,isVisitable:bt});function g(m,v){if(!f.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),f.forEach(m,function(E,x){(!(f.isUndefined(E)||E===null)&&s.call(t,E,f.isString(x)?x.trim():x,v,h))===!0&&g(E,v?v.concat(x):[x])}),d.pop()}}if(!f.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Xt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function jt(e,t){this._pairs=[],e&&We(e,this,t)}const Un=jt.prototype;Un.append=function(t,n){this._pairs.push([t,n])};Un.toString=function(t){const n=t?function(r){return t.call(this,r,Xt)}:Xt;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Js(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vn(e,t,n){if(!t)return e;const r=n&&n.encode||Js,s=n&&n.serialize;let o;if(s?o=s(t,n):o=f.isURLSearchParams(t)?t.toString():new jt(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ws{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){f.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Yt=Ws,$n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xs=typeof URLSearchParams<"u"?URLSearchParams:jt,Ys=typeof FormData<"u"?FormData:null,Qs=typeof Blob<"u"?Blob:null,Zs=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),eo=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Z={isBrowser:!0,classes:{URLSearchParams:Xs,FormData:Ys,Blob:Qs},isStandardBrowserEnv:Zs,isStandardBrowserWebWorkerEnv:eo,protocols:["http","https","file","blob","url","data"]};function to(e,t){return We(e,new Z.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return Z.isNode&&f.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function no(e){return f.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ro(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qn(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),u=o>=n.length;return i=!i&&f.isArray(s)?s.length:i,u?(f.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!f.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&f.isArray(s[i])&&(s[i]=ro(s[i])),!a)}if(f.isFormData(e)&&f.isFunction(e.entries)){const n={};return f.forEachEntry(e,(r,s)=>{t(no(r),s,n,0)}),n}return null}const so={"Content-Type":void 0};function oo(e,t,n){if(f.isString(e))try{return(t||JSON.parse)(e),f.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Xe={transitional:$n,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=f.isObject(t);if(o&&f.isHTMLForm(t)&&(t=new FormData(t)),f.isFormData(t))return s&&s?JSON.stringify(qn(t)):t;if(f.isArrayBuffer(t)||f.isBuffer(t)||f.isStream(t)||f.isFile(t)||f.isBlob(t))return t;if(f.isArrayBufferView(t))return t.buffer;if(f.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return to(t,this.formSerializer).toString();if((a=f.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return We(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),oo(t)):t}],transformResponse:[function(t){const n=this.transitional||Xe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&f.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?P.from(a,P.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Z.classes.FormData,Blob:Z.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(t){Xe.headers[t]={}});f.forEach(["post","put","patch"],function(t){Xe.headers[t]=f.merge(so)});const It=Xe,io=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ao=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&io[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qt=Symbol("internals");function _e(e){return e&&String(e).trim().toLowerCase()}function Ne(e){return e===!1||e==null?e:f.isArray(e)?e.map(Ne):String(e)}function co(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function lo(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ct(e,t,n,r,s){if(f.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!f.isString(t)){if(f.isString(r))return t.indexOf(r)!==-1;if(f.isRegExp(r))return r.test(t)}}function uo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fo(e,t){const n=f.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Ye{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,u,c){const l=_e(u);if(!l)throw new Error("header name must be a non-empty string");const d=f.findKey(s,l);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||u]=Ne(a))}const i=(a,u)=>f.forEach(a,(c,l)=>o(c,l,u));return f.isPlainObject(t)||t instanceof this.constructor?i(t,n):f.isString(t)&&(t=t.trim())&&!lo(t)?i(ao(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_e(t),t){const r=f.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return co(s);if(f.isFunction(n))return n.call(this,s,r);if(f.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_e(t),t){const r=f.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ct(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_e(i),i){const a=f.findKey(r,i);a&&(!n||ct(r,r[a],a,n))&&(delete r[a],s=!0)}}return f.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ct(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return f.forEach(this,(s,o)=>{const i=f.findKey(r,o);if(i){n[i]=Ne(s),delete n[o];return}const a=t?uo(o):String(o).trim();a!==o&&delete n[o],n[a]=Ne(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return f.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&f.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Qt]=this[Qt]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=_e(i);r[a]||(fo(s,i),r[a]=!0)}return f.isArray(t)?t.forEach(o):o(t),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.freezeMethods(Ye.prototype);f.freezeMethods(Ye);const ne=Ye;function lt(e,t){const n=this||It,r=t||n,s=ne.from(r.headers);let o=r.data;return f.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Kn(e){return!!(e&&e.__CANCEL__)}function Te(e,t,n){P.call(this,e??"canceled",P.ERR_CANCELED,t,n),this.name="CanceledError"}f.inherits(Te,P,{__CANCEL__:!0});function po(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ho=Z.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const u=[];u.push(n+"="+encodeURIComponent(r)),f.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),f.isString(o)&&u.push("path="+o),f.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mo(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function go(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Gn(e,t){return e&&!mo(t)?go(e,t):t}const yo=Z.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=f.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function vo(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bo(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),l=r[o];i||(i=c),n[s]=u,r[s]=c;let d=o,h=0;for(;d!==s;)h+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const g=l&&c-l;return g?Math.round(h*1e3/g):void 0}}function Zt(e,t){let n=0;const r=bo(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,u=r(a),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:u||void 0,estimated:u&&i&&c?(i-o)/u:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const wo=typeof XMLHttpRequest<"u",ko=wo&&function(e){return new Promise(function(n,r){let s=e.data;const o=ne.from(e.headers).normalize(),i=e.responseType;let a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}f.isFormData(s)&&(Z.isStandardBrowserEnv||Z.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+m))}const l=Gn(e.baseURL,e.url);c.open(e.method.toUpperCase(),Vn(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const g=ne.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};po(function(E){n(E),u()},function(E){r(E),u()},v),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new P("Request aborted",P.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new P("Network Error",P.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||$n;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new P(m,v.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,c)),c=null},Z.isStandardBrowserEnv){const g=(e.withCredentials||yo(l))&&e.xsrfCookieName&&ho.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&f.forEach(o.toJSON(),function(m,v){c.setRequestHeader(v,m)}),f.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Zt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Zt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{c&&(r(!g||g.type?new Te(null,e,c):g),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const h=vo(l);if(h&&Z.protocols.indexOf(h)===-1){r(new P("Unsupported protocol "+h+":",P.ERR_BAD_REQUEST,e));return}c.send(s||null)})},je={http:qs,xhr:ko};f.forEach(je,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _o={getAdapter:e=>{e=f.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=f.isString(n)?je[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new P(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(f.hasOwnProp(je,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!f.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:je};function ut(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function en(e){return ut(e),e.headers=ne.from(e.headers),e.data=lt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_o.getAdapter(e.adapter||It.adapter)(e).then(function(r){return ut(e),r.data=lt.call(e,e.transformResponse,r),r.headers=ne.from(r.headers),r},function(r){return Kn(r)||(ut(e),r&&r.response&&(r.response.data=lt.call(e,e.transformResponse,r.response),r.response.headers=ne.from(r.response.headers))),Promise.reject(r)})}const tn=e=>e instanceof ne?e.toJSON():e;function ge(e,t){t=t||{};const n={};function r(c,l,d){return f.isPlainObject(c)&&f.isPlainObject(l)?f.merge.call({caseless:d},c,l):f.isPlainObject(l)?f.merge({},l):f.isArray(l)?l.slice():l}function s(c,l,d){if(f.isUndefined(l)){if(!f.isUndefined(c))return r(void 0,c,d)}else return r(c,l,d)}function o(c,l){if(!f.isUndefined(l))return r(void 0,l)}function i(c,l){if(f.isUndefined(l)){if(!f.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function a(c,l,d){if(d in t)return r(c,l);if(d in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(c,l)=>s(tn(c),tn(l),!0)};return f.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const d=u[l]||s,h=d(e[l],t[l],l);f.isUndefined(h)&&d!==a||(n[l]=h)}),n}const Jn="1.3.4",zt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{zt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const nn={};zt.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Jn+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new P(s(i," has been removed"+(n?" in "+n:"")),P.ERR_DEPRECATED);return n&&!nn[i]&&(nn[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function Eo(e,t,n){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],u=a===void 0||i(a,o,e);if(u!==!0)throw new P("option "+o+" must be "+u,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}const wt={assertOptions:Eo,validators:zt},se=wt.validators;class Ue{constructor(t){this.defaults=t,this.interceptors={request:new Yt,response:new Yt}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ge(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&wt.assertOptions(r,{silentJSONParsing:se.transitional(se.boolean),forcedJSONParsing:se.transitional(se.boolean),clarifyTimeoutError:se.transitional(se.boolean)},!1),s!==void 0&&wt.assertOptions(s,{encode:se.function,serialize:se.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&f.merge(o.common,o[n.method]),i&&f.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=ne.concat(i,o);const a=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let l,d=0,h;if(!u){const m=[en.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,l=Promise.resolve(n);d<h;)l=l.then(m[d++],m[d++]);return l}h=a.length;let g=n;for(d=0;d<h;){const m=a[d++],v=a[d++];try{g=m(g)}catch(C){v.call(this,C);break}}try{l=en.call(this,g)}catch(m){return Promise.reject(m)}for(d=0,h=c.length;d<h;)l=l.then(c[d++],c[d++]);return l}getUri(t){t=ge(this.defaults,t);const n=Gn(t.baseURL,t.url);return Vn(n,t.params,t.paramsSerializer)}}f.forEach(["delete","get","head","options"],function(t){Ue.prototype[t]=function(n,r){return this.request(ge(r||{},{method:t,url:n,data:(r||{}).data}))}});f.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(ge(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Ue.prototype[t]=n(),Ue.prototype[t+"Form"]=n(!0)});const Ie=Ue;class Ht{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new Te(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ht(function(s){t=s}),cancel:t}}}const xo=Ht;function So(e){return function(n){return e.apply(null,n)}}function Co(e){return f.isObject(e)&&e.isAxiosError===!0}const kt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(kt).forEach(([e,t])=>{kt[t]=e});const Ro=kt;function Wn(e){const t=new Ie(e),n=On(Ie.prototype.request,t);return f.extend(n,Ie.prototype,t,{allOwnKeys:!0}),f.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Wn(ge(e,s))},n}const H=Wn(It);H.Axios=Ie;H.CanceledError=Te;H.CancelToken=xo;H.isCancel=Kn;H.VERSION=Jn;H.toFormData=We;H.AxiosError=P;H.Cancel=H.CanceledError;H.all=function(t){return Promise.all(t)};H.spread=So;H.isAxiosError=Co;H.mergeConfig=ge;H.AxiosHeaders=ne;H.formToJSON=e=>qn(f.isHTMLForm(e)?new FormData(e):e);H.HttpStatusCode=Ro;H.default=H;const Po=H,we=Po.create({baseURL:"https://nexus-api.pre.fdm.dk/",headers:{"Ocp-Apim-Subscription-Key":"579d5b006a244d96a880f1bb59cfcf22"}});we.interceptors.request.use(e=>{const t=localStorage.getItem(Lt.ACCESS_TOKEN);return t&&(e.headers.Authorization="Bearer "+t),e});var Ft=(e=>(e.CRM="CRM",e.FDMDK="FDMDK",e))(Ft||{});const Mo=e=>{var t;return(e==null?void 0:e.salesType)===Ft.CRM&&((t=e==null?void 0:e.customer)!=null&&t.fdmNumber)?{"X-MemberId":e.customer.fdmNumber}:{}},Xn=Lt.BASKET_ID,Oo=e=>{sessionStorage.setItem(Xn,e)},Ut=()=>sessionStorage.getItem(Xn),To=async()=>{const e=Ut(),t=await we.get(`/asl-orderbaskets-api/v1/orderbaskets-api/baskets/${e}`);return Promise.resolve(t.data)},pa=async e=>{const t=await we.patch("/asl-orderbaskets-api/v1/orderbaskets-api/baskets",{order:e});return Promise.resolve(t.data)},ha=async e=>{const t=await we.post(`/asl-orderbaskets-api/v1/orderbaskets-api/baskets/${e.orderId}/validate`,void 0,{headers:Mo(e)});return Promise.resolve(t.status===204)},Ao=async e=>{try{const t=await we.get(`asl-productpackages-api/v1/productpackage/${e}`);return Promise.resolve(t.data)}catch(t){return Promise.reject(t)}};function Lo(){const e=O([]),t=O("");function n(s){var i;if(!((i=e.value)==null?void 0:i.find(a=>a===s))){const a=[...e.value];a.push(s),e.value=a}}function r(s){const i=[...e.value].filter(a=>a!==s);e.value=i}return{loadingStates:e,loadingMessage:t,addLoadingState:n,removeLoadingState:r}}function Bo(){const e=O(!1),t=O(!1),n=O(""),r=O({}),s=O("");return{showPopover:e,showPopoverSlide:t,popoverContent:n,popoverComponent:r,popoverSlideContent:s}}const Pe=At("app",()=>{const e=O(2),t=O(!1),{showPopover:n,showPopoverSlide:r,popoverContent:s,popoverComponent:o,popoverSlideContent:i}=Bo(),{loadingMessage:a,loadingStates:u,addLoadingState:c,removeLoadingState:l}=Lo();return{showPopover:n,showPopoverSlide:r,popoverContent:s,popoverComponent:o,popoverSlideContent:i,loadingMessage:a,loadingStates:u,progressStepValue:e,existingMember:t,addLoadingState:c,removeLoadingState:l,closePopover:()=>{n.value=!1,r.value=!1,s.value="",i.value=""}}}),Do="Bliv medlem",No="Du har valgt ePlus i samarbejde med Clever",jo="power",Io=[{id:"membershipInfo",text:"Personlige oplysninger"},{id:"addons",text:"Valg og tilvalg"},{id:"accept",text:"Accept"},{id:"checkout",text:"Bestillingsoversigt"}],zo={yourCar:"Din bil",ChoicesAndOptions:"Valg og tilvalg",next:"Næste",back:"Tilbage",search:"Søg",dkk:"kr.",ok:"Ok",orderLoadingMessage:"Vent venligst. Din ordre bliver behandlet...",carNotFoundError:"Bilen kunne ikke findes",addVehicle:"Tilføj køretøj",removeVehicle:"Fjern køretøj",changeVehicle:"Skift køretøj",registrationNumber:"Indtast nummerplade",noLicensePlate:"Jeg kender ikke nummerpladen",required:"Skal udfyldes",partnerName:"clever",oneTimeBenefit:"Engangsydelse",addOnSelectionError:"Du kan maks vælge et af Clevers tillægsprodukter",yearly:"årligt",monthly:"måned",year:"år",month:"md.",months:"mdr.",firstYear:"Første år pris",concurrent:"Herefter",minimumPrice:"Mindstepris",minimumBindingPeriod:"bindingsperiode"},Ho={},Fo=[{id:"productPage",selectedProductText:"Du har valgt ePlus",registrationNumberLabel:"Indtast nummerplade",registrationNumberBtnLabel:"Hent",registrationNumberDecription:`<p>Indtast din nummerplade, så vi kan give dig den bedste service.</p>\r
`,registrationNumberInfoText:`<p><strong>Indtastning af nummerplade</strong></p>\r
\r
<p>Ved at indtaste din nummerplade, kan vi give dig en hurtigere service og en mere præcis rådgivning, når du henvender dig til os.</p>\r
`,unknownRegistrationNumberText:"Jeg kender ikke nummerpladen",AddOnTitle:"Tilvalg og ændringer",AddOnText:"Herunder kan du tilvælge produkter eller foretage ændringer til dit abonemment",motorClassic:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
`,vejhjaelpMotorcykel:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
`,vejhjaelpFritPaahaeng:`<p>Frit påhæng over 750 kg.</p>\r
`,motorTilsendtText:`<p>Du kan til hver en tid læse Motor digitalt. Hvis du ønsker at modtage Motor-magasinet i papirudgave, skal du tilvælge det her.</p>\r
`,motorTilsendt:"Magasinet Motor tilsendt med post"},{id:"termsPage",heading:"Accept",coverageConditionsHeading:"Vær opmærksom på",consentHeading:"Samtykke og vilkår",uncoveredConditions:"",promotionHeader:"Tilmeld dig vores nyhedsbreve",membershipTerm:`<p>Alle FDM-medlemskaber er løbende abonnementer, der opkr…ves på årsbasis. Efter 5 måneder har du 1 måneds opsigelse til udgangen af en måned. Din fortrydelsesret er på 14 dage fra bestillingsdato. Medlemskabet træder i kraft ved betaling.</p>\r
`,NewsletterTitle:"Tilmeld dig vores nyhedsbreve",marketingDisclaimer:`<p>Ja tak, jeg vil gerne modtage så relevant markedsføring som muligt omkring <a href="https://fdm.dk/om-fdm/persondatapolitik/service-produkter" rel=" noopener" target="_blank">services og produkter</a> fra FDM (Forenede Danske Motorejere) og FDM’s <a href="https://fdm.dk/fordelspartneroversigt" rel=" noopener" target="_blank">fordels- og samarbejdspartnere</a>. Disse kan løbende ændres og altid ses i oversigten. Jeg giver derfor FDM lov til at kontakte mig via e-mail, sms, telefon og <a href="https://fdm.dk/om-fdm/persondatapolitik/sociale-medier" rel=" noopener" target="_blank">sociale medier</a> ved at sætte kryds her. Jeg kan altid tilbagekalde mit samtykke ved at kontakte FDM på fx <a href="mailto:kontaktfdm@fdm.dk" rel=" noopener" target="_blank">kontaktfdm@fdm.dk</a>, og jeg kan læse i FDMs <a href="https://fdm.dk/om-fdm/persondatapolitik" rel=" noopener" target="_blank">privatlivspolitik</a>, hvordan mine oplysninger behandles.</p>\r
`,YourTotalOrder:"Din samlede bestilling",coverageGuideLines:[{mainText:"Du skal færdiggøre din bestilling hos Clever, hvorefter ePlus træder i kraft. Du modtager en mail fra Clever med yderligere information.",subText:[]},{mainText:"Den månedlige betaling for ePlus opkræves via Clever.",subText:[]},{mainText:"Opkrævningen starter, når du lader første gang.",subText:[]},{mainText:"Et energitillæg kan blive tillagt, hvis den gns. indkøbspris på strøm for måneden overstiger 0,89 kr./kWh.",subText:[]},{mainText:"Ved leje af Clever ladeboks:",subText:["Du betaler selv for din husstands strømforbrug til din el-leverandør, inkl. forbruget på Clevers ladeboks.","Hver md. tilbagebetaler Clever et beløb for strømforbruget på din ladeboks samt oplyser om tilbagebetalingssatsen."]}],coverageGuideLineNote:"Har du et Kombi- eller Komplet medlemskab, skal du være opmærksom på, at din vejhjælp og/eller hjulskifte og -opbevaring ophører. Du har mulighed for at tilkøbe ydelserne f.eks. via FDM Forsikringer.",coverages:[],benefits:[{icon:"discount",text:"Fokus på rabatter"},{icon:"car",text:"Nyeste test"},{icon:"archive",text:"Relevante artikler"}],chargeChip:{heading:"Til dig der allerede er Clever-kunde og vil skifte til ePlus",text:"For at skifte til medlemskabet ePlus er det vigtigt, at du indtaster dit ladebriksnummer nedenfor. Ellers risikerer du at blive opkrævet for både dit nuværende Clever-abonnement og ePlus. Nummeret starter med DK-007. Du finder det på din ladebrik eller i Clevers app."},carInfo:{heading:"Indtast dine biloplysninger",make:"Bilmærke",model:"Model"}}],Uo=[{code:12,type:"Subscription"},{code:13,type:"Data"}],Vo={flowCompleted:"<h3>Du er nu færdig med at forberede tilbuddet</h3><p>Luk vinduet og fortsæt til CRM for at sende tilbuddet til kunden.</p>"},$o={heroHeading:Do,heroSubheading:No,heroIcon:jo,progressionSteps:Io,labels:zo,defaultValues:Ho,pages:Fo,termCodes:Uo,crmFlowMessages:Vo},qo={green:$o};var ue=(e=>(e.HOME="Home",e.ERROR="Error",e.TERMS="Terms",e))(ue||{}),_t=(e=>(e.COMBI="Kombi",e.GREEN="Green",e))(_t||{}),ze=(e=>(e.BASE_PRODUCT="BaseProduct",e.ADD_ON="AddOn",e.PARTNER_PRODUCT="PartnerProduct",e))(ze||{}),Ko=(e=>(e.MONTHLY="Monthly",e.YEARLY="Yearly",e.ONE_TIME="One-time",e))(Ko||{}),Go=(e=>(e.KKLAR_EPLUS_UBOKS="FDM-KKLAR-EPLUS-UBOKS",e.KKLAR_EPLUS="FDM-KKLAR-EPLUS",e))(Go||{});const Yn=At("product",()=>{const{addLoadingState:e,removeLoadingState:t}=Pe(),n=O(),r=O(),s=O(Ut()),o=O([""]),i=O(),a=O(!1),u=O(""),c=O(""),l=O(""),d=j(()=>{var w;return(w=r==null?void 0:r.value)==null?void 0:w.salesType}),h=j(()=>d.value===Ft.CRM),g=j(()=>{var L;const w=((L=r==null?void 0:r.value)==null?void 0:L.productPackageType)??_t.GREEN,_=qo[w.toLowerCase()];return _?(o.value=_.progressionSteps.map(B=>B.text),_):null}),m=async()=>{try{e(le.GET_ORDER_BASKET);const w=await To();return r.value=w.order,r.value&&(s.value=r.value.orderId),Promise.resolve(r.value)}catch(w){return Promise.reject({type:"getOrderbasketsAPIError",axios:w})}finally{t(le.GET_ORDER_BASKET)}},v=async w=>{var _;try{if(e(le.PRODUCT_PACKAGE_CONFIG),!i.value||!n.value){const L=await Ao(w);n.value=L;const B=(_=n.value)==null?void 0:_.ProductPackages;return B==null||B.forEach(G=>{G.products.forEach(J=>{J.priceFloat=J.price,J.monthlyPrice=J.price/12})}),i.value=B,Promise.resolve(B)}else return Promise.resolve(i.value)}catch(L){return Promise.reject({type:"productPackageConfigAPIError",axios:L})}finally{t(le.PRODUCT_PACKAGE_CONFIG)}},C=w=>i.value?i.value.find(_=>_.productPackageId===w):null,E=j(()=>{var w;if((w=r.value)!=null&&w.productPackageType){const _=C(r.value.productPackageId);if(_&&_.products.length)return _.products.find(L=>L.type===ze.BASE_PRODUCT)??null}return null}),x=j(()=>{var w;if((w=r.value)!=null&&w.productPackageType){const _=C(r.value.productPackageId);if(_)return _.products.filter(B=>B.type===D.value).sort((B,G)=>Number(B.sortOrder)-Number(G.sortOrder))}return[]}),A=j(()=>{var _;return C((_=r.value)==null?void 0:_.productPackageId)??!1}),F=(w,_)=>{_.push({name:ue.ERROR})},D=j(()=>{var w;return((w=r.value)==null?void 0:w.productPackageType)===_t.GREEN?ze.PARTNER_PRODUCT:ze.ADD_ON});return{appContent:g,progressionSteps:o,config:n,order:r,orderSalesType:d,offlineSalesMode:h,orderId:s,errorHeader:u,errorMessage:c,errorCode:l,currentProduct:E,optionalProducts:x,motorMagasin:a,showOptionalLicensePlateOption:A,getOrderBasket:m,getCatalog:v,handlerAPIErrors:F,getOptionalProductType:D,fetchBaseContent:async()=>{try{return r.value||await m(),!n.value&&r.value&&await v(r.value.productPackageConfigurationId),Promise.resolve(!0)}catch(w){return Promise.reject(w)}}}}),Jo=e=>{if(!document)return;const t={development:"33345678-1234-1234-1234-123456789333",staging:"22245678-1234-1234-1234-123456789222",production:"11145678-1234-1234-1234-123456789111"},n={development:"https://trackbr.dev.fdm.dk",staging:"https://trackbr.pre.fdm.dk",production:"https://trackbr.fdm.dk"},r={development:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",staging:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",production:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js"};[{name:"googleConsentModeV2",attributes:null,text:`
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
      `}].forEach(o=>{const i=document.createElement("script");if(o.attributes)for(const[a,u]of Object.entries(o.attributes))u&&i.setAttribute(a,u);i.text=o.text,document.head.appendChild(i)})},Wo=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-0">
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
    </svg> `,Xo=X({name:"IconLoader",render(){return Ot("div",{innerHTML:Wo,style:{position:"absolute",opacity:0,width:0,height:0,pointerEvents:"none"}})}}),Yo=e=>{if(!e)return{};const t={};for(const[n,r]of Object.entries(e))if(r!==void 0){const s=n,o=Qo(r);o!==void 0&&(t[s]=o)}return t},Qo=e=>{if(!(!e||e==="undefined"||e==="null"||e===""))return e==="true"?!0:e==="false"?!1:/^\d+(\.\d+)?$/.test(e)?Number(e):e},Zo={class:"min-h-screen relative"},ei=X({__name:"App",setup(e){const{appContent:t}=Ar(Yn()),n=Pe(),r=Tt.getContainer(),s=r==null?void 0:r.dataset,o=Yo(s);return _r(()=>{o!=null&&o.disableScripts||Jo("development")}),(i,a)=>{var c,l;const u=Er("RouterView");return V(),W("div",Zo,[N(n).loadingStates.length?(V(),Le(ts,{key:0,loadingText:((c=N(t))==null?void 0:c.loadingText)||"Vent venligst"},null,8,["loadingText"])):me("",!0),Y(N(Xo)),N(o).hideHeader?me("",!0):(V(),Le(ss,{key:1})),N(n).showPopover?(V(),Le(ps,{key:2,content:N(n).popoverContent,slideContent:N(n).popoverSlideContent,showSlide:N(n).showPopoverSlide,onClose:N(n).closePopover,"onClose:slide":N(n).closePopover},null,8,["content","slideContent","showSlide","onClose","onClose:slide"])):me("",!0),N(t)?(V(),Le(N(Jr),{key:3,icon:(l=N(t))==null?void 0:l.heroIcon,header:N(t).heroHeading,subheader:N(t).heroSubheading},null,8,["icon","header","subheader"])):me("",!0),Y(u)])}}});const ti="modulepreload",ni=function(e){return"/"+e},rn={},dt=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=ni(o),o in rn)return;rn[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const d=s[l];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":ti,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const he=typeof window<"u";function ri(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const T=Object.assign;function ft(e,t){const n={};for(const r in t){const s=t[r];n[r]=Q(s)?s.map(e):e(s)}return n}const Se=()=>{},Q=Array.isArray,si=/\/$/,oi=e=>e.replace(si,"");function pt(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let u=t.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=t.slice(0,u),o=t.slice(u+1,a>-1?a:t.length),s=e(o)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=li(r??t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:i}}function ii(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ai(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ye(t.matched[r],n.matched[s])&&Qn(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ye(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ci(e[n],t[n]))return!1;return!0}function ci(e,t){return Q(e)?sn(e,t):Q(t)?sn(t,e):e===t}function sn(e,t){return Q(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function li(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Me;(function(e){e.pop="pop",e.push="push"})(Me||(Me={}));var Ve;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ve||(Ve={}));const ht="";function ui(e){if(!e)if(he){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),oi(e)}const di=/^[^#]+#/;function fi(e,t){return e.replace(di,"#")+t}function pi(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const hi=()=>({left:window.pageXOffset,top:window.pageYOffset});function mi(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=pi(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function on(e,t){return(history.state?history.state.position-t:-1)+e}const Et=new Map;function gi(e,t){Et.set(e,t)}function yi(e){const t=Et.get(e);return Et.delete(e),t}function vi(e=""){let t=[],n=[ht],r=0;e=ui(e);function s(a){r++,r===n.length||n.splice(r),n.push(a)}function o(a,u,{direction:c,delta:l}){const d={direction:c,delta:l,type:Me.pop};for(const h of t)h(a,u,d)}const i={location:ht,state:{},base:e,createHref:fi.bind(null,e),replace(a){n.splice(r--,1),s(a)},push(a,u){s(a)},listen(a){return t.push(a),()=>{const u=t.indexOf(a);u>-1&&t.splice(u,1)}},destroy(){t=[],n=[ht],r=0},go(a,u=!0){const c=this.location,l=a<0?Ve.back:Ve.forward;r=Math.max(0,Math.min(r+a,n.length-1)),u&&o(this.location,c,{direction:l,delta:a})}};return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n[r]}),i}function bi(e){return typeof e=="string"||e&&typeof e=="object"}function Zn(e){return typeof e=="string"||typeof e=="symbol"}const oe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},er=Symbol("");var an;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(an||(an={}));function ve(e,t){return T(new Error,{type:e,[er]:!0},t)}function te(e,t){return e instanceof Error&&er in e&&(t==null||!!(e.type&t))}const cn="[^/]+?",wi={sensitive:!1,strict:!1,start:!0,end:!0},ki=/[.+*?^${}()[\]/\\]/g;function _i(e,t){const n=T({},wi,t),r=[];let s=n.start?"^":"";const o=[];for(const c of e){const l=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(ki,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:v,optional:C,regexp:E}=h;o.push({name:m,repeatable:v,optional:C});const x=E||cn;if(x!==cn){g+=10;try{new RegExp(`(${x})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${x}): `+F.message)}}let A=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(A=C&&c.length<2?`(?:/${A})`:"/"+A),C&&(A+="?"),s+=A,g+=20,C&&(g+=-8),v&&(g+=-20),x===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(c){const l=c.match(i),d={};if(!l)return null;for(let h=1;h<l.length;h++){const g=l[h]||"",m=o[h-1];d[m.name]=g&&m.repeatable?g.split("/"):g}return d}function u(c){let l="",d=!1;for(const h of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const g of h)if(g.type===0)l+=g.value;else if(g.type===1){const{value:m,repeatable:v,optional:C}=g,E=m in c?c[m]:"";if(Q(E)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const x=Q(E)?E.join("/"):E;if(!x)if(C)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);l+=x}}return l||"/"}return{re:i,score:r,keys:o,parse:a,stringify:u}}function Ei(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function xi(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Ei(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(ln(r))return 1;if(ln(s))return-1}return s.length-r.length}function ln(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Si={type:0,value:""},Ci=/[a-zA-Z0-9_]/;function Ri(e){if(!e)return[[]];if(e==="/")return[[Si]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,u,c="",l="";function d(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:l,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=u}for(;a<e.length;){if(u=e[a++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(c&&d(),i()):u===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:u==="("?n=2:Ci.test(u)?h():(d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--);break;case 2:u===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+u:n=3:l+=u;break;case 3:d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),i(),s}function Pi(e,t,n){const r=_i(Ri(e.path),n),s=T(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Mi(e,t){const n=[],r=new Map;t=fn({strict:!1,end:!0,sensitive:!1},t);function s(l){return r.get(l)}function o(l,d,h){const g=!h,m=Oi(l);m.aliasOf=h&&h.record;const v=fn(t,l),C=[m];if("alias"in l){const A=typeof l.alias=="string"?[l.alias]:l.alias;for(const F of A)C.push(T({},m,{components:h?h.record.components:m.components,path:F,aliasOf:h?h.record:m}))}let E,x;for(const A of C){const{path:F}=A;if(d&&F[0]!=="/"){const D=d.record.path,U=D[D.length-1]==="/"?"":"/";A.path=d.record.path+(F&&U+F)}if(E=Pi(A,d,v),h?h.alias.push(E):(x=x||E,x!==E&&x.alias.push(E),g&&l.name&&!dn(E)&&i(l.name)),m.children){const D=m.children;for(let U=0;U<D.length;U++)o(D[U],E,h&&h.children[U])}h=h||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&u(E)}return x?()=>{i(x)}:Se}function i(l){if(Zn(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function a(){return n}function u(l){let d=0;for(;d<n.length&&xi(l,n[d])>=0&&(l.record.path!==n[d].record.path||!tr(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!dn(l)&&r.set(l.record.name,l)}function c(l,d){let h,g={},m,v;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw ve(1,{location:l});v=h.record.name,g=T(un(d.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),l.params&&un(l.params,h.keys.map(x=>x.name))),m=h.stringify(g)}else if("path"in l)m=l.path,h=n.find(x=>x.re.test(m)),h&&(g=h.parse(m),v=h.record.name);else{if(h=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw ve(1,{location:l,currentLocation:d});v=h.record.name,g=T({},d.params,l.params),m=h.stringify(g)}const C=[];let E=h;for(;E;)C.unshift(E.record),E=E.parent;return{name:v,path:m,params:g,matched:C,meta:Ai(C)}}return e.forEach(l=>o(l)),{addRoute:o,resolve:c,removeRoute:i,getRoutes:a,getRecordMatcher:s}}function un(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Oi(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ti(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ti(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function dn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ai(e){return e.reduce((t,n)=>T(t,n.meta),{})}function fn(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function tr(e,t){return t.children.some(n=>n===e||tr(e,n))}const nr=/#/g,Li=/&/g,Bi=/\//g,Di=/=/g,Ni=/\?/g,rr=/\+/g,ji=/%5B/g,Ii=/%5D/g,sr=/%5E/g,zi=/%60/g,or=/%7B/g,Hi=/%7C/g,ir=/%7D/g,Fi=/%20/g;function Vt(e){return encodeURI(""+e).replace(Hi,"|").replace(ji,"[").replace(Ii,"]")}function Ui(e){return Vt(e).replace(or,"{").replace(ir,"}").replace(sr,"^")}function xt(e){return Vt(e).replace(rr,"%2B").replace(Fi,"+").replace(nr,"%23").replace(Li,"%26").replace(zi,"`").replace(or,"{").replace(ir,"}").replace(sr,"^")}function Vi(e){return xt(e).replace(Di,"%3D")}function $i(e){return Vt(e).replace(nr,"%23").replace(Ni,"%3F")}function qi(e){return e==null?"":$i(e).replace(Bi,"%2F")}function $e(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ki(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(rr," "),i=o.indexOf("="),a=$e(i<0?o:o.slice(0,i)),u=i<0?null:$e(o.slice(i+1));if(a in t){let c=t[a];Q(c)||(c=t[a]=[c]),c.push(u)}else t[a]=u}return t}function pn(e){let t="";for(let n in e){const r=e[n];if(n=Vi(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Q(r)?r.map(o=>o&&xt(o)):[r&&xt(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Gi(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Q(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Ji=Symbol(""),hn=Symbol(""),Qe=Symbol(""),ar=Symbol(""),St=Symbol("");function Ee(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ae(e,t,n,r,s){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,a)=>{const u=d=>{d===!1?a(ve(4,{from:n,to:t})):d instanceof Error?a(d):bi(d)?a(ve(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),i())},c=e.call(r&&r.instances[s],t,n,u);let l=Promise.resolve(c);e.length<3&&(l=l.then(u)),l.catch(d=>a(d))})}function mt(e,t,n,r){const s=[];for(const o of e)for(const i in o.components){let a=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Wi(a)){const c=(a.__vccOpts||a)[t];c&&s.push(ae(c,n,r,o,i))}else{let u=a();s.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const l=ri(c)?c.default:c;o.components[i]=l;const h=(l.__vccOpts||l)[t];return h&&ae(h,n,r,o,i)()}))}}return s}function Wi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mn(e){const t=de(Qe),n=de(ar),r=j(()=>t.resolve(N(e.to))),s=j(()=>{const{matched:u}=r.value,{length:c}=u,l=u[c-1],d=n.matched;if(!l||!d.length)return-1;const h=d.findIndex(ye.bind(null,l));if(h>-1)return h;const g=gn(u[c-2]);return c>1&&gn(l)===g&&d[d.length-1].path!==g?d.findIndex(ye.bind(null,u[c-2])):h}),o=j(()=>s.value>-1&&Zi(n.params,r.value.params)),i=j(()=>s.value>-1&&s.value===n.matched.length-1&&Qn(n.params,r.value.params));function a(u={}){return Qi(u)?t[N(e.replace)?"replace":"push"](N(e.to)).catch(Se):Promise.resolve()}return{route:r,href:j(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}const Xi=X({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mn,setup(e,{slots:t}){const n=Mt(mn(e)),{options:r}=de(Qe),s=j(()=>({[yn(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yn(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Yi=Xi;function Qi(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zi(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Q(s)||s.length!==r.length||r.some((o,i)=>o!==s[i]))return!1}return!0}function gn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yn=(e,t,n)=>e??t??n,ea=X({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=de(St),s=j(()=>e.route||r.value),o=de(hn,0),i=j(()=>{let c=N(o);const{matched:l}=s.value;let d;for(;(d=l[c])&&!d.components;)c++;return c}),a=j(()=>s.value.matched[i.value]);ot(hn,j(()=>i.value+1)),ot(Ji,a),ot(St,s);const u=O();return Pt(()=>[u.value,a.value,e.name],([c,l,d],[h,g,m])=>{l&&(l.instances[d]=c,g&&g!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),c&&l&&(!g||!ye(l,g)||!h)&&(l.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,l=e.name,d=a.value,h=d&&d.components[l];if(!h)return vn(n.default,{Component:h,route:c});const g=d.props[l],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=Ot(h,T({},m,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(d.instances[l]=null)},ref:u}));return vn(n.default,{Component:C,route:c})||C}}});function vn(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ta=ea;function na(e){const t=Mi(e.routes,e),n=e.parseQuery||Ki,r=e.stringifyQuery||pn,s=e.history,o=Ee(),i=Ee(),a=Ee(),u=xr(oe);let c=oe;he&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ft.bind(null,p=>""+p),d=ft.bind(null,qi),h=ft.bind(null,$e);function g(p,b){let y,k;return Zn(p)?(y=t.getRecordMatcher(p),k=b):k=p,t.addRoute(k,y)}function m(p){const b=t.getRecordMatcher(p);b&&t.removeRoute(b)}function v(){return t.getRoutes().map(p=>p.record)}function C(p){return!!t.getRecordMatcher(p)}function E(p,b){if(b=T({},b||u.value),typeof p=="string"){const S=pt(n,p,b.path),z=t.resolve({path:S.path},b),ke=s.createHref(S.fullPath);return T(S,z,{params:h(z.params),hash:$e(S.hash),redirectedFrom:void 0,href:ke})}let y;if("path"in p)y=T({},p,{path:pt(n,p.path,b.path).path});else{const S=T({},p.params);for(const z in S)S[z]==null&&delete S[z];y=T({},p,{params:d(p.params)}),b.params=d(b.params)}const k=t.resolve(y,b),M=p.hash||"";k.params=l(h(k.params));const I=ii(r,T({},p,{hash:Ui(M),path:k.path})),R=s.createHref(I);return T({fullPath:I,hash:M,query:r===pn?Gi(p.query):p.query||{}},k,{redirectedFrom:void 0,href:R})}function x(p){return typeof p=="string"?pt(n,p,u.value.path):T({},p)}function A(p,b){if(c!==p)return ve(8,{from:b,to:p})}function F(p){return w(p)}function D(p){return F(T(x(p),{replace:!0}))}function U(p){const b=p.matched[p.matched.length-1];if(b&&b.redirect){const{redirect:y}=b;let k=typeof y=="function"?y(p):y;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),T({query:p.query,hash:p.hash,params:"path"in k?{}:p.params},k)}}function w(p,b){const y=c=E(p),k=u.value,M=p.state,I=p.force,R=p.replace===!0,S=U(y);if(S)return w(T(x(S),{state:typeof S=="object"?T({},M,S.state):M,force:I,replace:R}),b||y);const z=y;z.redirectedFrom=b;let ke;return!I&&ai(r,k,y)&&(ke=ve(16,{to:z,from:k}),$t(k,k,!0,!1)),(ke?Promise.resolve(ke):L(z,k)).catch(K=>te(K)?te(K,2)?K:tt(K):et(K,z,k)).then(K=>{if(K){if(te(K,2))return w(T({replace:R},x(K.to),{state:typeof K.to=="object"?T({},M,K.to.state):M,force:I}),b||z)}else K=G(z,k,!0,R,M);return B(z,k,K),K})}function _(p,b){const y=A(p,b);return y?Promise.reject(y):Promise.resolve()}function L(p,b){let y;const[k,M,I]=ra(p,b);y=mt(k.reverse(),"beforeRouteLeave",p,b);for(const S of k)S.leaveGuards.forEach(z=>{y.push(ae(z,p,b))});const R=_.bind(null,p,b);return y.push(R),pe(y).then(()=>{y=[];for(const S of o.list())y.push(ae(S,p,b));return y.push(R),pe(y)}).then(()=>{y=mt(M,"beforeRouteUpdate",p,b);for(const S of M)S.updateGuards.forEach(z=>{y.push(ae(z,p,b))});return y.push(R),pe(y)}).then(()=>{y=[];for(const S of p.matched)if(S.beforeEnter&&!b.matched.includes(S))if(Q(S.beforeEnter))for(const z of S.beforeEnter)y.push(ae(z,p,b));else y.push(ae(S.beforeEnter,p,b));return y.push(R),pe(y)}).then(()=>(p.matched.forEach(S=>S.enterCallbacks={}),y=mt(I,"beforeRouteEnter",p,b),y.push(R),pe(y))).then(()=>{y=[];for(const S of i.list())y.push(ae(S,p,b));return y.push(R),pe(y)}).catch(S=>te(S,8)?S:Promise.reject(S))}function B(p,b,y){for(const k of a.list())k(p,b,y)}function G(p,b,y,k,M){const I=A(p,b);if(I)return I;const R=b===oe,S=he?history.state:{};y&&(k||R?s.replace(p.fullPath,T({scroll:R&&S&&S.scroll},M)):s.push(p.fullPath,M)),u.value=p,$t(p,b,y,R),tt()}let J;function Ze(){J||(J=s.listen((p,b,y)=>{if(!qt.listening)return;const k=E(p),M=U(k);if(M){w(T(M,{replace:!0}),k).catch(Se);return}c=k;const I=u.value;he&&gi(on(I.fullPath,y.delta),hi()),L(k,I).catch(R=>te(R,12)?R:te(R,2)?(w(R.to,k).then(S=>{te(S,20)&&!y.delta&&y.type===Me.pop&&s.go(-1,!1)}).catch(Se),Promise.reject()):(y.delta&&s.go(-y.delta,!1),et(R,k,I))).then(R=>{R=R||G(k,I,!1),R&&(y.delta&&!te(R,8)?s.go(-y.delta,!1):y.type===Me.pop&&te(R,20)&&s.go(-1,!1)),B(k,I,R)}).catch(Se)}))}let ee=Ee(),$=Ee(),Ae;function et(p,b,y){tt(p);const k=$.list();return k.length?k.forEach(M=>M(p,b,y)):console.error(p),Promise.reject(p)}function lr(){return Ae&&u.value!==oe?Promise.resolve():new Promise((p,b)=>{ee.add([p,b])})}function tt(p){return Ae||(Ae=!p,Ze(),ee.list().forEach(([b,y])=>p?y(p):b()),ee.reset()),p}function $t(p,b,y,k){const{scrollBehavior:M}=e;if(!he||!M)return Promise.resolve();const I=!y&&yi(on(p.fullPath,0))||(k||!y)&&history.state&&history.state.scroll||null;return _n().then(()=>M(p,b,I)).then(R=>R&&mi(R)).catch(R=>et(R,p,b))}const nt=p=>s.go(p);let rt;const st=new Set,qt={currentRoute:u,listening:!0,addRoute:g,removeRoute:m,hasRoute:C,getRoutes:v,resolve:E,options:e,push:F,replace:D,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:$.add,isReady:lr,install(p){const b=this;p.component("RouterLink",Yi),p.component("RouterView",ta),p.config.globalProperties.$router=b,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>N(u)}),he&&!rt&&u.value===oe&&(rt=!0,F(s.location).catch(M=>{}));const y={};for(const M in oe)y[M]=j(()=>u.value[M]);p.provide(Qe,b),p.provide(ar,Mt(y)),p.provide(St,u);const k=p.unmount;st.add(p),p.unmount=function(){st.delete(p),st.size<1&&(c=oe,J&&J(),J=null,u.value=oe,rt=!1,Ae=!1),k()}}};return qt}function pe(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ra(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(c=>ye(c,a))?r.push(a):n.push(a));const u=e.matched[i];u&&(t.matched.find(c=>ye(c,u))||s.push(u))}return[n,r,s]}function ma(){return de(Qe)}const sa=async e=>{try{const t=await we.get(`/asl-terms-api/V1/definitions/${e}`);return Promise.resolve(t.data)}catch(t){return Promise.reject(t)}};var cr=(e=>(e.SUSBCRIPTION="Subscription",e.DATA_EXCHANGE="Data",e))(cr||{});const oa=At("term",()=>{const{addLoadingState:e,removeLoadingState:t}=Pe(),n=O([]),r=j(()=>n.value),s=O("");return{getTerms:async i=>{var a;try{if(n.value.length===0){e(le.FETCH_TERMS);const u=await Promise.all(i.map(c=>sa(c.code).then(l=>(l.type=c.type,l))));n.value=u,s.value=((a=u.find(c=>c.type===cr.DATA_EXCHANGE))==null?void 0:a.text)??""}return Promise.resolve(n.value)}catch(u){return Promise.reject({type:"getTermsAPIError",axios:u})}finally{t(le.FETCH_TERMS)}},terms:r,dataExchangeConsentText:s}});let bn=!0;const ia=()=>{if(bn){bn=!1;return}const e=aa();if(!e)return;const t=e.getBoundingClientRect(),n=window.scrollY,o=t.top+n-40;window.scrollTo({top:o,behavior:"smooth"})},aa=()=>{let e=document.querySelector(it);if(e||(e=document.querySelector(Be),e))return e;const t=Tt.getContainer();return t?(e=t.querySelector(it),e||(e=t.querySelector(Be),e)?e:t.shadowRoot?(e=t.shadowRoot.querySelector(it),e||t.shadowRoot.querySelector(Be)):null):null};function ca(e){const{widgetId:t,eventName:n="widget:navigation",postMessageSource:r="embedded-widget",excludedRoutes:s=["/"]}=e;return{emitRouteChange:(i,a)=>{var c,l;if(s.includes(i.path)||typeof window>"u")return;const u={widgetId:t,type:"route_change",currentRoute:{name:typeof i.name=="string"?i.name:((c=i.name)==null?void 0:c.toString())||null,path:i.path,fullPath:i.fullPath,params:i.params,query:i.query},previousRoute:a?{name:typeof a.name=="string"?a.name:((l=a.name)==null?void 0:l.toString())||null,path:a.path,fullPath:a.fullPath,params:a.params,query:a.query}:null,timestamp:new Date().toISOString()};if(window.parent&&window.parent!==window)try{window.parent.postMessage({source:r,event:"route_change",data:u},"*")}catch(d){console.error("PostMessage failed:",d)}try{const d=new CustomEvent(n,{detail:u,bubbles:!0,composed:!0});window.dispatchEvent(d)}catch(d){console.error("Custom event failed:",d)}}}}const{emitRouteChange:la}=ca({widgetId:Be,eventName:"fdm:widget:navigation",postMessageSource:"fdm-embedded-widget",excludedRoutes:["/"]}),Ct=new URLSearchParams(window.location.search),ua=[{path:"/",name:ue.HOME,component:()=>dt(()=>import("./HomeView.js"),["assets/HomeView.js","assets/embedder.js","assets/navigation.js"]),beforeEnter:async(e,t,n)=>{const r=Pe();r.progressStepValue=2;const s=e.query.existing||Ct.get("existing");r.existingMember=s==="1",n()}},{path:"/samtykke",name:ue.TERMS,component:()=>dt(()=>import("./TermsView.js"),["assets/TermsView.js","assets/navigation.js","assets/embedder.js"]),beforeEnter:(e,t,n)=>{const r=Pe();r.progressStepValue=3;const s=e.query.existing||Ct.get("existing");r.existingMember=s==="1",n()}},{path:"/fejl",name:ue.ERROR,component:()=>dt(()=>import("./ErrorView.js"),["assets/ErrorView.js","assets/embedder.js"])}],qe=na({routes:ua,history:vi("/")});qe.beforeEach(async(e,t,n)=>{if(ia(),e.name===ue.ERROR){n();return}try{const r=e.query.basketId||Ct.get("basketId")||Ut();if(r)Oo(r);else throw"no basket id";const s=Yn();await s.fetchBaseContent(),await oa().getTerms(s.appContent.termCodes),n()}catch{n("/fejl")}});qe.afterEach((e,t)=>{la(e,t)});const da=()=>{if(document.getElementById("lato-fonts"))return;const e=`
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
  `,t=document.createElement("style");t.id="lato-fonts",t.textContent=e,document.head.appendChild(t)};Tt.createApp(()=>{const e=Sr(ei);return e.use(Rr()),e.use(qe),qe.push({name:ue.HOME}),e},{beforeMount:da}).init();export{Go as B,cr as C,le as L,_t as P,Ko as R,Zr as U,Ge as _,ma as a,Pe as b,we as c,At as d,ue as e,oa as f,Br as g,Mn as h,Fe as i,pa as j,To as k,Ar as s,Yn as u,ha as v};
