const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView.js","assets/embedder.js","assets/productConfig.js","assets/ErrorView.js"])))=>i.map(i=>d[i]);
import{t as Mn,g as G,i as Pe,h as Tt,j as Lr,k as fe,l as Ar,r as H,m as Ln,n as An,p as Pr,q as Tr,w as Ot,s as Pn,x as Or,y as Tn,z as Br,d as Q,u as D,B as zr,C as Bt,D as ut,F as $t,e as J,f as F,G as q,H as jr,I as Dr,J as Z,K as Me,L as On,M as Bn,N as Ir,O as Nr,P as Hr,v as zt,b as Ur,Q as He,R as Fr,S as $r,T as dt,A as Ue,U as Vr}from"./embedder.js";const qr=e=>{const t=new URLSearchParams(e),n={};for(const[r,s]of t.entries())n[r]=s;return n};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zn;const Je=e=>zn=e,jn=Symbol();function bt(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Le;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Le||(Le={}));function Kr(){const e=An(!0),t=e.run(()=>H({}));let n=[],r=[];const s=Tn({install(o){Je(s),s._a=o,o.provide(jn,s),o.config.globalProperties.$pinia=s,r.forEach(i=>n.push(i)),r=[]},use(o){return this._a?n.push(o):r.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Dn=()=>{};function Vt(e,t,n,r=Dn){e.push(t);const s=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&Pr()&&Tr(s),s}function me(e,...t){e.slice().forEach(n=>{n(...t)})}const Xr=e=>e(),qt=Symbol(),ft=Symbol();function _t(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];bt(s)&&bt(r)&&e.hasOwnProperty(n)&&!Pe(r)&&!Tt(r)?e[n]=_t(s,r):e[n]=r}return e}const Gr=Symbol();function Wr(e){return!bt(e)||!e.hasOwnProperty(Gr)}const{assign:ae}=Object;function Jr(e){return!!(Pe(e)&&e.effect)}function Qr(e,t,n,r){const{state:s,actions:o,getters:i}=t,c=n.state.value[e];let a;function l(){c||(n.state.value[e]=s?s():{});const d=Or(n.state.value[e]);return ae(d,o,Object.keys(i||{}).reduce((u,y)=>(u[y]=Tn(G(()=>{Je(n);const g=n._s.get(e);return i[y].call(g,g)})),u),{}))}return a=In(e,l,t,n,r,!0),a}function In(e,t,n={},r,s,o){let i;const c=ae({actions:{}},n),a={deep:!0};let l,d,u=[],y=[],g;const p=r.state.value[e];!o&&!p&&(r.state.value[e]={}),H({});let h;function v(T){let A;l=d=!1,typeof T=="function"?(T(r.state.value[e]),A={type:Le.patchFunction,storeId:e,events:g}):(_t(r.state.value[e],T),A={type:Le.patchObject,payload:T,storeId:e,events:g});const V=h=Symbol();Pn().then(()=>{h===V&&(l=!0)}),d=!0,me(u,A,r.state.value[e])}const k=o?function(){const{state:A}=n,V=A?A():{};this.$patch(ne=>{ae(ne,V)})}:Dn;function w(){i.stop(),u=[],y=[],r._s.delete(e)}const _=(T,A="")=>{if(qt in T)return T[ft]=A,T;const V=function(){Je(r);const ne=Array.from(arguments),oe=[],re=[];function ot(U){oe.push(U)}function _e(U){re.push(U)}me(y,{args:ne,name:V[ft],store:R,after:ot,onError:_e});let ie;try{ie=T.apply(this&&this.$id===e?this:R,ne)}catch(U){throw me(re,U),U}return ie instanceof Promise?ie.then(U=>(me(oe,U),U)).catch(U=>(me(re,U),Promise.reject(U))):(me(oe,ie),ie)};return V[qt]=!0,V[ft]=A,V},C={_p:r,$id:e,$onAction:Vt.bind(null,y),$patch:v,$reset:k,$subscribe(T,A={}){const V=Vt(u,T,A.detached,()=>ne()),ne=i.run(()=>Ot(()=>r.state.value[e],oe=>{(A.flush==="sync"?d:l)&&T({storeId:e,type:Le.direct,events:g},oe)},ae({},a,A)));return V},$dispose:w},R=Ln(C);r._s.set(e,R);const E=(r._a&&r._a.runWithContext||Xr)(()=>r._e.run(()=>(i=An()).run(()=>t({action:_}))));for(const T in E){const A=E[T];if(Pe(A)&&!Jr(A)||Tt(A))o||(p&&Wr(A)&&(Pe(A)?A.value=p[T]:_t(A,p[T])),r.state.value[e][T]=A);else if(typeof A=="function"){const V=_(A,T);E[T]=V,c.actions[T]=A}}return ae(R,E),ae(Mn(R),E),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:T=>{v(A=>{ae(A,T)})}}),r._p.forEach(T=>{ae(R,i.run(()=>T({store:R,app:r._a,pinia:r,options:c})))}),p&&o&&n.hydrate&&n.hydrate(R.$state,p),l=!0,d=!0,R}/*! #__NO_SIDE_EFFECTS__ */function Zr(e,t,n){let r,s;const o=typeof t=="function";typeof e=="string"?(r=e,s=o?n:t):(s=e,r=e.id);function i(c,a){const l=Ar();return c=c||(l?fe(jn,null):null),c&&Je(c),c=zn,c._s.has(r)||(o?In(r,t,s,c):Qr(r,s,c)),c._s.get(r)}return i.$id=r,i}function zi(e){{const t=Mn(e),n={};for(const r in t){const s=t[r];s.effect?n[r]=G({get:()=>e[r],set(o){e[r]=o}}):(Pe(s)||Tt(s))&&(n[r]=Lr(e,r))}return n}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ye=typeof document<"u";function Nn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yr(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Nn(e.default)}const z=Object.assign;function pt(e,t){const n={};for(const r in t){const s=t[r];n[r]=Y(s)?s.map(e):e(s)}return n}const Ae=()=>{},Y=Array.isArray,Hn=/#/g,es=/&/g,ts=/\//g,ns=/=/g,rs=/\?/g,Un=/\+/g,ss=/%5B/g,os=/%5D/g,Fn=/%5E/g,is=/%60/g,$n=/%7B/g,cs=/%7C/g,Vn=/%7D/g,as=/%20/g;function jt(e){return encodeURI(""+e).replace(cs,"|").replace(ss,"[").replace(os,"]")}function ls(e){return jt(e).replace($n,"{").replace(Vn,"}").replace(Fn,"^")}function xt(e){return jt(e).replace(Un,"%2B").replace(as,"+").replace(Hn,"%23").replace(es,"%26").replace(is,"`").replace($n,"{").replace(Vn,"}").replace(Fn,"^")}function us(e){return xt(e).replace(ns,"%3D")}function ds(e){return jt(e).replace(Hn,"%23").replace(rs,"%3F")}function fs(e){return e==null?"":ds(e).replace(ts,"%2F")}function Te(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const ps=/\/$/,hs=e=>e.replace(ps,"");function ht(e,t,n="/"){let r,s={},o="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),s=e(o)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=vs(r??t,n),{fullPath:r+(o&&"?")+o+i,path:r,query:s,hash:Te(i)}}function ms(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ys(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ge(t.matched[r],n.matched[s])&&qn(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ge(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gs(e[n],t[n]))return!1;return!0}function gs(e,t){return Y(e)?Kt(e,t):Y(t)?Kt(t,e):e===t}function Kt(e,t){return Y(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vs(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,c;for(i=0;i<r.length;i++)if(c=r[i],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const ce={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oe;(function(e){e.pop="pop",e.push="push"})(Oe||(Oe={}));var qe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qe||(qe={}));const mt="";function ws(e){if(!e)if(ye){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hs(e)}const bs=/^[^#]+#/;function _s(e,t){return e.replace(bs,"#")+t}function xs(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ks=()=>({left:window.scrollX,top:window.scrollY});function Cs(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=xs(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Xt(e,t){return(history.state?history.state.position-t:-1)+e}const kt=new Map;function Ss(e,t){kt.set(e,t)}function Es(e){const t=kt.get(e);return kt.delete(e),t}function Rs(e=""){let t=[],n=[mt],r=0;e=ws(e);function s(c){r++,r!==n.length&&n.splice(r),n.push(c)}function o(c,a,{direction:l,delta:d}){const u={direction:l,delta:d,type:Oe.pop};for(const y of t)y(c,a,u)}const i={location:mt,state:{},base:e,createHref:_s.bind(null,e),replace(c){n.splice(r--,1),s(c)},push(c,a){s(c)},listen(c){return t.push(c),()=>{const a=t.indexOf(c);a>-1&&t.splice(a,1)}},destroy(){t=[],n=[mt],r=0},go(c,a=!0){const l=this.location,d=c<0?qe.back:qe.forward;r=Math.max(0,Math.min(r+c,n.length-1)),a&&o(this.location,l,{direction:d,delta:c})}};return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n[r]}),i}function Ms(e){return typeof e=="string"||e&&typeof e=="object"}function Kn(e){return typeof e=="string"||typeof e=="symbol"}const Xn=Symbol("");var Gt;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Gt||(Gt={}));function ve(e,t){return z(new Error,{type:e,[Xn]:!0},t)}function se(e,t){return e instanceof Error&&Xn in e&&(t==null||!!(e.type&t))}const Wt="[^/]+?",Ls={sensitive:!1,strict:!1,start:!0,end:!0},As=/[.+*?^${}()[\]/\\]/g;function Ps(e,t){const n=z({},Ls,t),r=[];let s=n.start?"^":"";const o=[];for(const l of e){const d=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const y=l[u];let g=40+(n.sensitive?.25:0);if(y.type===0)u||(s+="/"),s+=y.value.replace(As,"\\$&"),g+=40;else if(y.type===1){const{value:p,repeatable:h,optional:v,regexp:k}=y;o.push({name:p,repeatable:h,optional:v});const w=k||Wt;if(w!==Wt){g+=10;try{new RegExp(`(${w})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+C.message)}}let _=h?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(_=v&&l.length<2?`(?:/${_})`:"/"+_),v&&(_+="?"),s+=_,g+=20,v&&(g+=-8),h&&(g+=-20),w===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function c(l){const d=l.match(i),u={};if(!d)return null;for(let y=1;y<d.length;y++){const g=d[y]||"",p=o[y-1];u[p.name]=g&&p.repeatable?g.split("/"):g}return u}function a(l){let d="",u=!1;for(const y of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const g of y)if(g.type===0)d+=g.value;else if(g.type===1){const{value:p,repeatable:h,optional:v}=g,k=p in l?l[p]:"";if(Y(k)&&!h)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Y(k)?k.join("/"):k;if(!w)if(v)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${p}"`);d+=w}}return d||"/"}return{re:i,score:r,keys:o,parse:c,stringify:a}}function Ts(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Gn(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Ts(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Jt(r))return 1;if(Jt(s))return-1}return s.length-r.length}function Jt(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Os={type:0,value:""},Bs=/[a-zA-Z0-9_]/;function zs(e){if(!e)return[[]];if(e==="/")return[[Os]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let c=0,a,l="",d="";function u(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function y(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&u(),i()):a===":"?(u(),n=1):y();break;case 4:y(),n=r;break;case 1:a==="("?n=2:Bs.test(a)?y():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}function js(e,t,n){const r=Ps(zs(e.path),n),s=z(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ds(e,t){const n=[],r=new Map;t=en({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function o(u,y,g){const p=!g,h=Zt(u);h.aliasOf=g&&g.record;const v=en(t,u),k=[h];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of C)k.push(Zt(z({},h,{components:g?g.record.components:h.components,path:R,aliasOf:g?g.record:h})))}let w,_;for(const C of k){const{path:R}=C;if(y&&R[0]!=="/"){const O=y.record.path,E=O[O.length-1]==="/"?"":"/";C.path=y.record.path+(R&&E+R)}if(w=js(C,y,v),g?g.alias.push(w):(_=_||w,_!==w&&_.alias.push(w),p&&u.name&&!Yt(w)&&i(u.name)),Wn(w)&&a(w),h.children){const O=h.children;for(let E=0;E<O.length;E++)o(O[E],w,g&&g.children[E])}g=g||w}return _?()=>{i(_)}:Ae}function i(u){if(Kn(u)){const y=r.get(u);y&&(r.delete(u),n.splice(n.indexOf(y),1),y.children.forEach(i),y.alias.forEach(i))}else{const y=n.indexOf(u);y>-1&&(n.splice(y,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function c(){return n}function a(u){const y=Hs(u,n);n.splice(y,0,u),u.record.name&&!Yt(u)&&r.set(u.record.name,u)}function l(u,y){let g,p={},h,v;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw ve(1,{location:u});v=g.record.name,p=z(Qt(y.params,g.keys.filter(_=>!_.optional).concat(g.parent?g.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&Qt(u.params,g.keys.map(_=>_.name))),h=g.stringify(p)}else if(u.path!=null)h=u.path,g=n.find(_=>_.re.test(h)),g&&(p=g.parse(h),v=g.record.name);else{if(g=y.name?r.get(y.name):n.find(_=>_.re.test(y.path)),!g)throw ve(1,{location:u,currentLocation:y});v=g.record.name,p=z({},y.params,u.params),h=g.stringify(p)}const k=[];let w=g;for(;w;)k.unshift(w.record),w=w.parent;return{name:v,path:h,params:p,matched:k,meta:Ns(k)}}e.forEach(u=>o(u));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:l,removeRoute:i,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Qt(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Zt(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Is(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Is(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Yt(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ns(e){return e.reduce((t,n)=>z(t,n.meta),{})}function en(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Hs(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;Gn(e,t[o])<0?r=o:n=o+1}const s=Us(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Us(e){let t=e;for(;t=t.parent;)if(Wn(t)&&Gn(e,t)===0)return t}function Wn({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fs(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Un," "),i=o.indexOf("="),c=Te(i<0?o:o.slice(0,i)),a=i<0?null:Te(o.slice(i+1));if(c in t){let l=t[c];Y(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function tn(e){let t="";for(let n in e){const r=e[n];if(n=us(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Y(r)?r.map(o=>o&&xt(o)):[r&&xt(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function $s(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Y(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Vs=Symbol(""),nn=Symbol(""),Qe=Symbol(""),Jn=Symbol(""),Ct=Symbol("");function ke(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function le(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=y=>{y===!1?a(ve(4,{from:n,to:t})):y instanceof Error?a(y):Ms(y)?a(ve(2,{from:t,to:y})):(i&&r.enterCallbacks[s]===i&&typeof y=="function"&&i.push(y),c())},d=o(()=>e.call(r&&r.instances[s],t,n,l));let u=Promise.resolve(d);e.length<3&&(u=u.then(l)),u.catch(y=>a(y))})}function yt(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Nn(a)){const d=(a.__vccOpts||a)[t];d&&o.push(le(d,n,r,i,c,s))}else{let l=a();o.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const u=Yr(d)?d.default:d;i.mods[c]=d,i.components[c]=u;const g=(u.__vccOpts||u)[t];return g&&le(g,n,r,i,c,s)()}))}}return o}function rn(e){const t=fe(Qe),n=fe(Jn),r=G(()=>{const a=D(e.to);return t.resolve(a)}),s=G(()=>{const{matched:a}=r.value,{length:l}=a,d=a[l-1],u=n.matched;if(!d||!u.length)return-1;const y=u.findIndex(ge.bind(null,d));if(y>-1)return y;const g=sn(a[l-2]);return l>1&&sn(d)===g&&u[u.length-1].path!==g?u.findIndex(ge.bind(null,a[l-2])):y}),o=G(()=>s.value>-1&&Ws(n.params,r.value.params)),i=G(()=>s.value>-1&&s.value===n.matched.length-1&&qn(n.params,r.value.params));function c(a={}){if(Gs(a)){const l=t[D(e.replace)?"replace":"push"](D(e.to)).catch(Ae);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:G(()=>r.value.href),isActive:o,isExactActive:i,navigate:c}}function qs(e){return e.length===1?e[0]:e}const Ks=Q({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rn,setup(e,{slots:t}){const n=Ln(rn(e)),{options:r}=fe(Qe),s=G(()=>({[on(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[on(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&qs(t.default(n));return e.custom?o:Bt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Xs=Ks;function Gs(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ws(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Y(s)||s.length!==r.length||r.some((o,i)=>o!==s[i]))return!1}return!0}function sn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const on=(e,t,n)=>e??t??n,Js=Q({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=fe(Ct),s=G(()=>e.route||r.value),o=fe(nn,0),i=G(()=>{let l=D(o);const{matched:d}=s.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),c=G(()=>s.value.matched[i.value]);ut(nn,G(()=>i.value+1)),ut(Vs,c),ut(Ct,s);const a=H();return Ot(()=>[a.value,c.value,e.name],([l,d,u],[y,g,p])=>{d&&(d.instances[u]=l,g&&g!==d&&l&&l===y&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),l&&d&&(!g||!ge(d,g)||!y)&&(d.enterCallbacks[u]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=s.value,d=e.name,u=c.value,y=u&&u.components[d];if(!y)return cn(n.default,{Component:y,route:l});const g=u.props[d],p=g?g===!0?l.params:typeof g=="function"?g(l):g:null,v=Bt(y,z({},p,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[d]=null)},ref:a}));return cn(n.default,{Component:v,route:l})||v}}});function cn(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qn=Js;function Qs(e){const t=Ds(e.routes,e),n=e.parseQuery||Fs,r=e.stringifyQuery||tn,s=e.history,o=ke(),i=ke(),c=ke(),a=Br(ce);let l=ce;ye&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=pt.bind(null,m=>""+m),u=pt.bind(null,fs),y=pt.bind(null,Te);function g(m,x){let b,S;return Kn(m)?(b=t.getRecordMatcher(m),S=x):S=m,t.addRoute(S,b)}function p(m){const x=t.getRecordMatcher(m);x&&t.removeRoute(x)}function h(){return t.getRoutes().map(m=>m.record)}function v(m){return!!t.getRecordMatcher(m)}function k(m,x){if(x=z({},x||a.value),typeof m=="string"){const L=ht(n,m,x.path),N=t.resolve({path:L.path},x),xe=s.createHref(L.fullPath);return z(L,N,{params:y(N.params),hash:Te(L.hash),redirectedFrom:void 0,href:xe})}let b;if(m.path!=null)b=z({},m,{path:ht(n,m.path,x.path).path});else{const L=z({},m.params);for(const N in L)L[N]==null&&delete L[N];b=z({},m,{params:u(L)}),x.params=u(x.params)}const S=t.resolve(b,x),B=m.hash||"";S.params=d(y(S.params));const I=ms(r,z({},m,{hash:ls(B),path:S.path})),P=s.createHref(I);return z({fullPath:I,hash:B,query:r===tn?$s(m.query):m.query||{}},S,{redirectedFrom:void 0,href:P})}function w(m){return typeof m=="string"?ht(n,m,a.value.path):z({},m)}function _(m,x){if(l!==m)return ve(8,{from:x,to:m})}function C(m){return E(m)}function R(m){return C(z(w(m),{replace:!0}))}function O(m){const x=m.matched[m.matched.length-1];if(x&&x.redirect){const{redirect:b}=x;let S=typeof b=="function"?b(m):b;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=w(S):{path:S},S.params={}),z({query:m.query,hash:m.hash,params:S.path!=null?{}:m.params},S)}}function E(m,x){const b=l=k(m),S=a.value,B=m.state,I=m.force,P=m.replace===!0,L=O(b);if(L)return E(z(w(L),{state:typeof L=="object"?z({},B,L.state):B,force:I,replace:P}),x||b);const N=b;N.redirectedFrom=x;let xe;return!I&&ys(r,S,b)&&(xe=ve(16,{to:N,from:S}),Ut(S,S,!0,!1)),(xe?Promise.resolve(xe):V(N,S)).catch(K=>se(K)?se(K,2)?K:ct(K):it(K,N,S)).then(K=>{if(K){if(se(K,2))return E(z({replace:P},w(K.to),{state:typeof K.to=="object"?z({},B,K.to.state):B,force:I}),x||N)}else K=oe(N,S,!0,P,B);return ne(N,S,K),K})}function T(m,x){const b=_(m,x);return b?Promise.reject(b):Promise.resolve()}function A(m){const x=Ne.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(m):m()}function V(m,x){let b;const[S,B,I]=Zs(m,x);b=yt(S.reverse(),"beforeRouteLeave",m,x);for(const L of S)L.leaveGuards.forEach(N=>{b.push(le(N,m,x))});const P=T.bind(null,m,x);return b.push(P),he(b).then(()=>{b=[];for(const L of o.list())b.push(le(L,m,x));return b.push(P),he(b)}).then(()=>{b=yt(B,"beforeRouteUpdate",m,x);for(const L of B)L.updateGuards.forEach(N=>{b.push(le(N,m,x))});return b.push(P),he(b)}).then(()=>{b=[];for(const L of I)if(L.beforeEnter)if(Y(L.beforeEnter))for(const N of L.beforeEnter)b.push(le(N,m,x));else b.push(le(L.beforeEnter,m,x));return b.push(P),he(b)}).then(()=>(m.matched.forEach(L=>L.enterCallbacks={}),b=yt(I,"beforeRouteEnter",m,x,A),b.push(P),he(b))).then(()=>{b=[];for(const L of i.list())b.push(le(L,m,x));return b.push(P),he(b)}).catch(L=>se(L,8)?L:Promise.reject(L))}function ne(m,x,b){c.list().forEach(S=>A(()=>S(m,x,b)))}function oe(m,x,b,S,B){const I=_(m,x);if(I)return I;const P=x===ce,L=ye?history.state:{};b&&(S||P?s.replace(m.fullPath,z({scroll:P&&L&&L.scroll},B)):s.push(m.fullPath,B)),a.value=m,Ut(m,x,b,P),ct()}let re;function ot(){re||(re=s.listen((m,x,b)=>{if(!Ft.listening)return;const S=k(m),B=O(S);if(B){E(z(B,{replace:!0,force:!0}),S).catch(Ae);return}l=S;const I=a.value;ye&&Ss(Xt(I.fullPath,b.delta),ks()),V(S,I).catch(P=>se(P,12)?P:se(P,2)?(E(z(w(P.to),{force:!0}),S).then(L=>{se(L,20)&&!b.delta&&b.type===Oe.pop&&s.go(-1,!1)}).catch(Ae),Promise.reject()):(b.delta&&s.go(-b.delta,!1),it(P,S,I))).then(P=>{P=P||oe(S,I,!1),P&&(b.delta&&!se(P,8)?s.go(-b.delta,!1):b.type===Oe.pop&&se(P,20)&&s.go(-1,!1)),ne(S,I,P)}).catch(Ae)}))}let _e=ke(),ie=ke(),U;function it(m,x,b){ct(m);const S=ie.list();return S.length?S.forEach(B=>B(m,x,b)):console.error(m),Promise.reject(m)}function Mr(){return U&&a.value!==ce?Promise.resolve():new Promise((m,x)=>{_e.add([m,x])})}function ct(m){return U||(U=!m,ot(),_e.list().forEach(([x,b])=>m?b(m):x()),_e.reset()),m}function Ut(m,x,b,S){const{scrollBehavior:B}=e;if(!ye||!B)return Promise.resolve();const I=!b&&Es(Xt(m.fullPath,0))||(S||!b)&&history.state&&history.state.scroll||null;return Pn().then(()=>B(m,x,I)).then(P=>P&&Cs(P)).catch(P=>it(P,m,x))}const at=m=>s.go(m);let lt;const Ne=new Set,Ft={currentRoute:a,listening:!0,addRoute:g,removeRoute:p,clearRoutes:t.clearRoutes,hasRoute:v,getRoutes:h,resolve:k,options:e,push:C,replace:R,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:ie.add,isReady:Mr,install(m){const x=this;m.component("RouterLink",Xs),m.component("RouterView",Qn),m.config.globalProperties.$router=x,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>D(a)}),ye&&!lt&&a.value===ce&&(lt=!0,C(s.location).catch(B=>{}));const b={};for(const B in ce)Object.defineProperty(b,B,{get:()=>a.value[B],enumerable:!0});m.provide(Qe,x),m.provide(Jn,zr(b)),m.provide(Ct,a);const S=m.unmount;Ne.add(m),m.unmount=function(){Ne.delete(m),Ne.size<1&&(l=ce,re&&re(),re=null,a.value=ce,lt=!1,U=!1),S()}}};function he(m){return m.reduce((x,b)=>x.then(()=>A(b)),Promise.resolve())}return Ft}function Zs(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=t.matched[i];c&&(e.matched.find(l=>ge(l,c))?r.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(l=>ge(l,a))||s.push(a))}return[n,r,s]}function ji(){return fe(Qe)}function Ys(){const e=H([]),t=H("");function n(s){var i;if(!((i=e.value)==null?void 0:i.find(c=>c===s))){const c=[...e.value];c.push(s),e.value=c}}function r(s){const i=[...e.value].filter(c=>c!==s);e.value=i}return{loadingStates:e,loadingMessage:t,addLoadingState:n,removeLoadingState:r}}function eo(){const e=H(!1),t=H(!1),n=H(""),r=H({}),s=H("");return{showPopover:e,showPopoverSlide:t,popoverContent:n,popoverComponent:r,popoverSlideContent:s}}var Zn=(e=>(e.APP_LOADING_TEXT="Vent venligst",e))(Zn||{}),Ke=(e=>(e.APP="app",e))(Ke||{}),St=(e=>(e.APP="app",e))(St||{});const Dt=()=>{const e=H([]),t=o=>e.value.find(c=>c.value.stateKey===o)??void 0,n=o=>{if(!t(o.stateKey)){const c=[...e.value];c.push(H(o)),e.value=c}return t(o.stateKey)},r=o=>(t(o.stateKey)||s(o),n(o),t(o.stateKey)),s=o=>{const c=[...e.value].filter(a=>o.stateKey!==a.value.stateKey);e.value=c};return{apiStates:e,getApiState:t,addApiState:n,upsertApiState:r,removeApiState:s}},Ce=e=>{const t={},n=r=>{if(r===void 0)return{};if(typeof r=="object")return r;if(typeof r=="function")return r();throw`Unhandled RequestHeaders type ${typeof r} ${r}`};return e.forEach(r=>Object.assign(t,n(r))),t},Se=e=>{const t={},n=r=>{if(r===void 0)return{};if(typeof r=="object")return r;if(typeof r=="function")return r();throw`Unhandled RequestParameters type ${typeof e} ${e}`};return e.forEach(r=>Object.assign(t,n(r))),t},to=e=>({data:e.data,response:e}),Ee=(e,t)=>{const n=to(e),r=t?t(n.data,n.response):n;return r?{data:r.data??n.data,response:r.response??n.response}:n},no=Dt(),ro=Dt(),Yn=e=>{const t=e.instance,n=e.baseUrl,r=e.baseHeaders,s=e.apiStateLoadingHandler??no,o=e.apiStateErrorHandler??ro;if(!t)throw`AxiosInstance of ${typeof Yn.name} is undefined.`;const i=p=>{let h=`${n}`;return p.forEach(v=>h+=v?`/${v}`:""),h??""},c=(p,h)=>({headers:p,params:h}),a=p=>{const h={stateKey:p.loadingKey??$t(),isLoading:!1},v={stateKey:p.errorKey??$t(),error:void 0},k=s.addApiState(h),w=o.addApiState(v),_=H(),C=G(()=>_.value?_.value.data:void 0);return{loading:k,response:_,data:C,error:w}};return{useGet:(p={})=>{const{loading:h,response:v,data:k,error:w}=a(p);return{loading:h,response:v,data:k,error:w,_get:async C=>{w.value.error=void 0,C=C??{};const R=i([p.url,C.url]),O=c(Ce([r,p.headers,C.headers]),Se([C.parameters]));try{h.value.isLoading=!0,s.upsertApiState(h.value);const E=t.get(R,O);return v.value=Ee(await E,p.transformer),Promise.resolve(v.value)}catch(E){return w.value.error=E,Promise.resolve(w.value.error)}finally{h.value.isLoading=!1,s.upsertApiState(h.value)}}}},usePost:(p={})=>{const{loading:h,response:v,data:k,error:w}=a(p);return{loading:h,response:v,data:k,error:w,_post:async C=>{w.value.error=void 0;const R=i([p.url,C.url]),O=c(Ce([r,p.headers,C.headers]),Se([C.parameters]));try{h.value.isLoading=!0,s.upsertApiState(h.value);const E=t.post(R,C.body,O);return v.value=Ee(await E,p.transformer),Promise.resolve(v.value)}catch(E){return w.value.error=E,Promise.resolve(w.value.error)}finally{h.value.isLoading=!1,s.upsertApiState(h.value)}}}},usePut:(p={})=>{const{loading:h,response:v,data:k,error:w}=a(p);return{loading:h,response:v,data:k,error:w,_put:async C=>{w.value.error=void 0;const R=i([p.url,C.url,C.key]),O=c(Ce([r,p.headers,C.headers]),Se([C.parameters]));try{h.value.isLoading=!0,s.upsertApiState(h.value);const E=t.put(R,C.body,O);return v.value=Ee(await E,p.transformer),Promise.resolve(v.value)}catch(E){return w.value.error=E,Promise.resolve(w.value.error)}finally{h.value.isLoading=!1,s.upsertApiState(h.value)}}}},usePatch:(p={})=>{const{loading:h,response:v,data:k,error:w}=a(p);return{loading:h,response:v,data:k,error:w,_patch:async C=>{w.value.error=void 0;const R=i([p.url,C.url,C.key]),O=c(Ce([r,p.headers,C.headers]),Se([C.parameters]));try{h.value.isLoading=!0,s.upsertApiState(h.value);const E=t.patch(R,C.body,O);return v.value=Ee(await E,p.transformer),Promise.resolve(v.value)}catch(E){return w.value.error=E,Promise.resolve(w.value.error)}finally{h.value.isLoading=!1,s.upsertApiState(h.value)}}}},useDelete:(p={})=>{const{loading:h,response:v,data:k,error:w}=a(p);return{loading:h,response:v,data:k,error:w,_delete:async C=>{w.value.error=void 0;const R=i([p.url,C.url,C.key]),O=c(Ce([r,p.headers,C.headers]),Se([C.parameters]));try{h.value.isLoading=!0,s.upsertApiState(h.value);const E=t.delete(R,O);return v.value=Ee(await E,p.transformer),Promise.resolve(v.value)}catch(E){return w.value.error=E,Promise.resolve(w.value.error)}finally{h.value.isLoading=!1,s.upsertApiState(h.value)}}}},apiStateLoadingHandler:s,apiStateErrorHandler:o}},an=Dt();function er(e,t){return function(){return e.apply(t,arguments)}}const{toString:so}=Object.prototype,{getPrototypeOf:It}=Object,Ze=(e=>t=>{const n=so.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ee=e=>(e=e.toLowerCase(),t=>Ze(t)===e),Ye=e=>t=>typeof t===e,{isArray:we}=Array,Be=Ye("undefined");function oo(e){return e!==null&&!Be(e)&&e.constructor!==null&&!Be(e.constructor)&&W(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tr=ee("ArrayBuffer");function io(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tr(e.buffer),t}const co=Ye("string"),W=Ye("function"),nr=Ye("number"),et=e=>e!==null&&typeof e=="object",ao=e=>e===!0||e===!1,Fe=e=>{if(Ze(e)!=="object")return!1;const t=It(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lo=ee("Date"),uo=ee("File"),fo=ee("Blob"),po=ee("FileList"),ho=e=>et(e)&&W(e.pipe),mo=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||W(e.append)&&((t=Ze(e))==="formdata"||t==="object"&&W(e.toString)&&e.toString()==="[object FormData]"))},yo=ee("URLSearchParams"),[go,vo,wo,bo]=["ReadableStream","Request","Response","Headers"].map(ee),_o=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function De(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),we(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function rr(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ue=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sr=e=>!Be(e)&&e!==ue;function Et(){const{caseless:e}=sr(this)&&this||{},t={},n=(r,s)=>{const o=e&&rr(t,s)||s;Fe(t[o])&&Fe(r)?t[o]=Et(t[o],r):Fe(r)?t[o]=Et({},r):we(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&De(arguments[r],n);return t}const xo=(e,t,n,{allOwnKeys:r}={})=>(De(t,(s,o)=>{n&&W(s)?e[o]=er(s,n):e[o]=s},{allOwnKeys:r}),e),ko=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Co=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},So=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&It(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Eo=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ro=e=>{if(!e)return null;if(we(e))return e;let t=e.length;if(!nr(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Mo=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&It(Uint8Array)),Lo=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ao=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Po=ee("HTMLFormElement"),To=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ln=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Oo=ee("RegExp"),or=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};De(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bo=e=>{or(e,(t,n)=>{if(W(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(W(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zo=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return we(e)?r(e):r(String(e).split(t)),n},jo=()=>{},Do=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Io(e){return!!(e&&W(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const No=e=>{const t=new Array(10),n=(r,s)=>{if(et(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=we(r)?[]:{};return De(r,(i,c)=>{const a=n(i,s+1);!Be(a)&&(o[c]=a)}),t[s]=void 0,o}}return r};return n(e,0)},Ho=ee("AsyncFunction"),Uo=e=>e&&(et(e)||W(e))&&W(e.then)&&W(e.catch),ir=((e,t)=>e?setImmediate:t?((n,r)=>(ue.addEventListener("message",({source:s,data:o})=>{s===ue&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),ue.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",W(ue.postMessage)),Fo=typeof queueMicrotask<"u"?queueMicrotask.bind(ue):typeof process<"u"&&process.nextTick||ir,f={isArray:we,isArrayBuffer:tr,isBuffer:oo,isFormData:mo,isArrayBufferView:io,isString:co,isNumber:nr,isBoolean:ao,isObject:et,isPlainObject:Fe,isReadableStream:go,isRequest:vo,isResponse:wo,isHeaders:bo,isUndefined:Be,isDate:lo,isFile:uo,isBlob:fo,isRegExp:Oo,isFunction:W,isStream:ho,isURLSearchParams:yo,isTypedArray:Mo,isFileList:po,forEach:De,merge:Et,extend:xo,trim:_o,stripBOM:ko,inherits:Co,toFlatObject:So,kindOf:Ze,kindOfTest:ee,endsWith:Eo,toArray:Ro,forEachEntry:Lo,matchAll:Ao,isHTMLForm:Po,hasOwnProperty:ln,hasOwnProp:ln,reduceDescriptors:or,freezeMethods:Bo,toObjectSet:zo,toCamelCase:To,noop:jo,toFiniteNumber:Do,findKey:rr,global:ue,isContextDefined:sr,isSpecCompliantForm:Io,toJSONObject:No,isAsyncFn:Ho,isThenable:Uo,setImmediate:ir,asap:Fo};function M(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}f.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.status}}});const cr=M.prototype,ar={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ar[e]={value:e}});Object.defineProperties(M,ar);Object.defineProperty(cr,"isAxiosError",{value:!0});M.from=(e,t,n,r,s,o)=>{const i=Object.create(cr);return f.toFlatObject(e,i,function(a){return a!==Error.prototype},c=>c!=="isAxiosError"),M.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const $o=null;function Rt(e){return f.isPlainObject(e)||f.isArray(e)}function lr(e){return f.endsWith(e,"[]")?e.slice(0,-2):e}function un(e,t,n){return e?e.concat(t).map(function(s,o){return s=lr(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Vo(e){return f.isArray(e)&&!e.some(Rt)}const qo=f.toFlatObject(f,{},null,function(t){return/^is[A-Z]/.test(t)});function tt(e,t,n){if(!f.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,v){return!f.isUndefined(v[h])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(t);if(!f.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(f.isDate(p))return p.toISOString();if(!a&&f.isBlob(p))throw new M("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(p)||f.isTypedArray(p)?a&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,h,v){let k=p;if(p&&!v&&typeof p=="object"){if(f.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(f.isArray(p)&&Vo(p)||(f.isFileList(p)||f.endsWith(h,"[]"))&&(k=f.toArray(p)))return h=lr(h),k.forEach(function(_,C){!(f.isUndefined(_)||_===null)&&t.append(i===!0?un([h],C,o):i===null?h:h+"[]",l(_))}),!1}return Rt(p)?!0:(t.append(un(v,h,o),l(p)),!1)}const u=[],y=Object.assign(qo,{defaultVisitor:d,convertValue:l,isVisitable:Rt});function g(p,h){if(!f.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));u.push(p),f.forEach(p,function(k,w){(!(f.isUndefined(k)||k===null)&&s.call(t,k,f.isString(w)?w.trim():w,h,y))===!0&&g(k,h?h.concat(w):[w])}),u.pop()}}if(!f.isObject(e))throw new TypeError("data must be an object");return g(e),t}function dn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nt(e,t){this._pairs=[],e&&tt(e,this,t)}const ur=Nt.prototype;ur.append=function(t,n){this._pairs.push([t,n])};ur.toString=function(t){const n=t?function(r){return t.call(this,r,dn)}:dn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ko(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dr(e,t,n){if(!t)return e;const r=n&&n.encode||Ko;f.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=f.isURLSearchParams(t)?t.toString():new Nt(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class fn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){f.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xo=typeof URLSearchParams<"u"?URLSearchParams:Nt,Go=typeof FormData<"u"?FormData:null,Wo=typeof Blob<"u"?Blob:null,Jo={isBrowser:!0,classes:{URLSearchParams:Xo,FormData:Go,Blob:Wo},protocols:["http","https","file","blob","url","data"]},Ht=typeof window<"u"&&typeof document<"u",Mt=typeof navigator=="object"&&navigator||void 0,Qo=Ht&&(!Mt||["ReactNative","NativeScript","NS"].indexOf(Mt.product)<0),Zo=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yo=Ht&&window.location.href||"http://localhost",e1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ht,hasStandardBrowserEnv:Qo,hasStandardBrowserWebWorkerEnv:Zo,navigator:Mt,origin:Yo},Symbol.toStringTag,{value:"Module"})),$={...e1,...Jo};function t1(e,t){return tt(e,new $.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return $.isNode&&f.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function n1(e){return f.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function r1(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function pr(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),a=o>=n.length;return i=!i&&f.isArray(s)?s.length:i,a?(f.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!f.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&f.isArray(s[i])&&(s[i]=r1(s[i])),!c)}if(f.isFormData(e)&&f.isFunction(e.entries)){const n={};return f.forEachEntry(e,(r,s)=>{t(n1(r),s,n,0)}),n}return null}function s1(e,t,n){if(f.isString(e))try{return(t||JSON.parse)(e),f.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ie={transitional:fr,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=f.isObject(t);if(o&&f.isHTMLForm(t)&&(t=new FormData(t)),f.isFormData(t))return s?JSON.stringify(pr(t)):t;if(f.isArrayBuffer(t)||f.isBuffer(t)||f.isStream(t)||f.isFile(t)||f.isBlob(t)||f.isReadableStream(t))return t;if(f.isArrayBufferView(t))return t.buffer;if(f.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return t1(t,this.formSerializer).toString();if((c=f.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return tt(c?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),s1(t)):t}],transformResponse:[function(t){const n=this.transitional||Ie.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(f.isResponse(t)||f.isReadableStream(t))return t;if(t&&f.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?M.from(c,M.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$.classes.FormData,Blob:$.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};f.forEach(["delete","get","head","post","put","patch"],e=>{Ie.headers[e]={}});const o1=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i1=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&o1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pn=Symbol("internals");function Re(e){return e&&String(e).trim().toLowerCase()}function $e(e){return e===!1||e==null?e:f.isArray(e)?e.map($e):String(e)}function c1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const a1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function gt(e,t,n,r,s){if(f.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!f.isString(t)){if(f.isString(r))return t.indexOf(r)!==-1;if(f.isRegExp(r))return r.test(t)}}function l1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function u1(e,t){const n=f.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let X=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,a,l){const d=Re(a);if(!d)throw new Error("header name must be a non-empty string");const u=f.findKey(s,d);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||a]=$e(c))}const i=(c,a)=>f.forEach(c,(l,d)=>o(l,d,a));if(f.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(f.isString(t)&&(t=t.trim())&&!a1(t))i(i1(t),n);else if(f.isHeaders(t))for(const[c,a]of t.entries())o(a,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Re(t),t){const r=f.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return c1(s);if(f.isFunction(n))return n.call(this,s,r);if(f.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Re(t),t){const r=f.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||gt(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=Re(i),i){const c=f.findKey(r,i);c&&(!n||gt(r,r[c],c,n))&&(delete r[c],s=!0)}}return f.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||gt(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return f.forEach(this,(s,o)=>{const i=f.findKey(r,o);if(i){n[i]=$e(s),delete n[o];return}const c=t?l1(o):String(o).trim();c!==o&&delete n[o],n[c]=$e(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return f.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&f.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pn]=this[pn]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=Re(i);r[c]||(u1(s,i),r[c]=!0)}return f.isArray(t)?t.forEach(o):o(t),this}};X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});f.freezeMethods(X);function vt(e,t){const n=this||Ie,r=t||n,s=X.from(r.headers);let o=r.data;return f.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function hr(e){return!!(e&&e.__CANCEL__)}function be(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}f.inherits(be,M,{__CANCEL__:!0});function mr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function d1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function f1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(a){const l=Date.now(),d=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,y=0;for(;u!==s;)y+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=d&&l-d;return g?Math.round(y*1e3/g):void 0}}function p1(e,t){let n=0,r=1e3/t,s,o;const i=(l,d=Date.now())=>{n=d,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const d=Date.now(),u=d-n;u>=r?i(l,d):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-u)))},()=>s&&i(s)]}const Xe=(e,t,n=3)=>{let r=0;const s=f1(50,250);return p1(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,a=i-r,l=s(a),d=i<=c;r=i;const u={loaded:i,total:c,progress:c?i/c:void 0,bytes:a,rate:l||void 0,estimated:l&&c&&d?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(u)},n)},hn=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},mn=e=>(...t)=>f.asap(()=>e(...t)),h1=$.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,$.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL($.origin),$.navigator&&/(msie|trident)/i.test($.navigator.userAgent)):()=>!0,m1=$.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];f.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),f.isString(r)&&i.push("path="+r),f.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function y1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function g1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function yr(e,t,n){let r=!y1(t);return e&&(r||n==!1)?g1(e,t):t}const yn=e=>e instanceof X?{...e}:e;function pe(e,t){t=t||{};const n={};function r(l,d,u,y){return f.isPlainObject(l)&&f.isPlainObject(d)?f.merge.call({caseless:y},l,d):f.isPlainObject(d)?f.merge({},d):f.isArray(d)?d.slice():d}function s(l,d,u,y){if(f.isUndefined(d)){if(!f.isUndefined(l))return r(void 0,l,u,y)}else return r(l,d,u,y)}function o(l,d){if(!f.isUndefined(d))return r(void 0,d)}function i(l,d){if(f.isUndefined(d)){if(!f.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function c(l,d,u){if(u in t)return r(l,d);if(u in e)return r(void 0,l)}const a={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,d,u)=>s(yn(l),yn(d),u,!0)};return f.forEach(Object.keys(Object.assign({},e,t)),function(d){const u=a[d]||s,y=u(e[d],t[d],d);f.isUndefined(y)&&u!==c||(n[d]=y)}),n}const gr=e=>{const t=pe({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=X.from(i),t.url=dr(yr(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let a;if(f.isFormData(n)){if($.hasStandardBrowserEnv||$.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((a=i.getContentType())!==!1){const[l,...d]=a?a.split(";").map(u=>u.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...d].join("; "))}}if($.hasStandardBrowserEnv&&(r&&f.isFunction(r)&&(r=r(t)),r||r!==!1&&h1(t.url))){const l=s&&o&&m1.read(o);l&&i.set(s,l)}return t},v1=typeof XMLHttpRequest<"u",w1=v1&&function(e){return new Promise(function(n,r){const s=gr(e);let o=s.data;const i=X.from(s.headers).normalize();let{responseType:c,onUploadProgress:a,onDownloadProgress:l}=s,d,u,y,g,p;function h(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let v=new XMLHttpRequest;v.open(s.method.toUpperCase(),s.url,!0),v.timeout=s.timeout;function k(){if(!v)return;const _=X.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),R={data:!c||c==="text"||c==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:_,config:e,request:v};mr(function(E){n(E),h()},function(E){r(E),h()},R),v=null}"onloadend"in v?v.onloadend=k:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(k)},v.onabort=function(){v&&(r(new M("Request aborted",M.ECONNABORTED,e,v)),v=null)},v.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,v)),v=null},v.ontimeout=function(){let C=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||fr;s.timeoutErrorMessage&&(C=s.timeoutErrorMessage),r(new M(C,R.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,v)),v=null},o===void 0&&i.setContentType(null),"setRequestHeader"in v&&f.forEach(i.toJSON(),function(C,R){v.setRequestHeader(R,C)}),f.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),c&&c!=="json"&&(v.responseType=s.responseType),l&&([y,p]=Xe(l,!0),v.addEventListener("progress",y)),a&&v.upload&&([u,g]=Xe(a),v.upload.addEventListener("progress",u),v.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(d=_=>{v&&(r(!_||_.type?new be(null,e,v):_),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const w=d1(s.url);if(w&&$.protocols.indexOf(w)===-1){r(new M("Unsupported protocol "+w+":",M.ERR_BAD_REQUEST,e));return}v.send(o||null)})},b1=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const d=l instanceof Error?l:this.reason;r.abort(d instanceof M?d:new be(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:a}=r;return a.unsubscribe=()=>f.asap(c),a}},_1=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},x1=async function*(e,t){for await(const n of k1(e))yield*_1(n,t)},k1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},gn=(e,t,n,r)=>{const s=x1(e,t);let o=0,i,c=a=>{i||(i=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:l,value:d}=await s.next();if(l){c(),a.close();return}let u=d.byteLength;if(n){let y=o+=u;n(y)}a.enqueue(new Uint8Array(d))}catch(l){throw c(l),l}},cancel(a){return c(a),s.return()}},{highWaterMark:2})},nt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",vr=nt&&typeof ReadableStream=="function",C1=nt&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),wr=(e,...t)=>{try{return!!e(...t)}catch{return!1}},S1=vr&&wr(()=>{let e=!1;const t=new Request($.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),vn=64*1024,Lt=vr&&wr(()=>f.isReadableStream(new Response("").body)),Ge={stream:Lt&&(e=>e.body)};nt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ge[t]&&(Ge[t]=f.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const E1=async e=>{if(e==null)return 0;if(f.isBlob(e))return e.size;if(f.isSpecCompliantForm(e))return(await new Request($.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(f.isArrayBufferView(e)||f.isArrayBuffer(e))return e.byteLength;if(f.isURLSearchParams(e)&&(e=e+""),f.isString(e))return(await C1(e)).byteLength},R1=async(e,t)=>{const n=f.toFiniteNumber(e.getContentLength());return n??E1(t)},M1=nt&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:a,responseType:l,headers:d,withCredentials:u="same-origin",fetchOptions:y}=gr(e);l=l?(l+"").toLowerCase():"text";let g=b1([s,o&&o.toAbortSignal()],i),p;const h=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let v;try{if(a&&S1&&n!=="get"&&n!=="head"&&(v=await R1(d,r))!==0){let R=new Request(t,{method:"POST",body:r,duplex:"half"}),O;if(f.isFormData(r)&&(O=R.headers.get("content-type"))&&d.setContentType(O),R.body){const[E,T]=hn(v,Xe(mn(a)));r=gn(R.body,vn,E,T)}}f.isString(u)||(u=u?"include":"omit");const k="credentials"in Request.prototype;p=new Request(t,{...y,signal:g,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:k?u:void 0});let w=await fetch(p);const _=Lt&&(l==="stream"||l==="response");if(Lt&&(c||_&&h)){const R={};["status","statusText","headers"].forEach(A=>{R[A]=w[A]});const O=f.toFiniteNumber(w.headers.get("content-length")),[E,T]=c&&hn(O,Xe(mn(c),!0))||[];w=new Response(gn(w.body,vn,E,()=>{T&&T(),h&&h()}),R)}l=l||"text";let C=await Ge[f.findKey(Ge,l)||"text"](w,e);return!_&&h&&h(),await new Promise((R,O)=>{mr(R,O,{data:C,headers:X.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:p})})}catch(k){throw h&&h(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,p),{cause:k.cause||k}):M.from(k,k&&k.code,e,p)}}),At={http:$o,xhr:w1,fetch:M1};f.forEach(At,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const wn=e=>`- ${e}`,L1=e=>f.isFunction(e)||e===null||e===!1,br={getAdapter:e=>{e=f.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!L1(n)&&(r=At[(i=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,a])=>`adapter ${c} `+(a===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(wn).join(`
`):" "+wn(o[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:At};function wt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new be(null,e)}function bn(e){return wt(e),e.headers=X.from(e.headers),e.data=vt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),br.getAdapter(e.adapter||Ie.adapter)(e).then(function(r){return wt(e),r.data=vt.call(e,e.transformResponse,r),r.headers=X.from(r.headers),r},function(r){return hr(r)||(wt(e),r&&r.response&&(r.response.data=vt.call(e,e.transformResponse,r.response),r.response.headers=X.from(r.response.headers))),Promise.reject(r)})}const _r="1.8.4",rt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{rt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _n={};rt.transitional=function(t,n,r){function s(o,i){return"[Axios v"+_r+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new M(s(i," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!_n[i]&&(_n[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};rt.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function A1(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],a=c===void 0||i(c,o,e);if(a!==!0)throw new M("option "+o+" must be "+a,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const Ve={assertOptions:A1,validators:rt},te=Ve.validators;let de=class{constructor(t){this.defaults=t,this.interceptors={request:new fn,response:new fn}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=pe(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Ve.assertOptions(r,{silentJSONParsing:te.transitional(te.boolean),forcedJSONParsing:te.transitional(te.boolean),clarifyTimeoutError:te.transitional(te.boolean)},!1),s!=null&&(f.isFunction(s)?n.paramsSerializer={serialize:s}:Ve.assertOptions(s,{encode:te.function,serialize:te.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ve.assertOptions(n,{baseUrl:te.spelling("baseURL"),withXsrfToken:te.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&f.merge(o.common,o[n.method]);o&&f.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=X.concat(i,o);const c=[];let a=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(a=a&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let d,u=0,y;if(!a){const p=[bn.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),y=p.length,d=Promise.resolve(n);u<y;)d=d.then(p[u++],p[u++]);return d}y=c.length;let g=n;for(u=0;u<y;){const p=c[u++],h=c[u++];try{g=p(g)}catch(v){h.call(this,v);break}}try{d=bn.call(this,g)}catch(p){return Promise.reject(p)}for(u=0,y=l.length;u<y;)d=d.then(l[u++],l[u++]);return d}getUri(t){t=pe(this.defaults,t);const n=yr(t.baseURL,t.url,t.allowAbsoluteUrls);return dr(n,t.params,t.paramsSerializer)}};f.forEach(["delete","get","head","options"],function(t){de.prototype[t]=function(n,r){return this.request(pe(r||{},{method:t,url:n,data:(r||{}).data}))}});f.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(pe(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}de.prototype[t]=n(),de.prototype[t+"Form"]=n(!0)});let P1=class xr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new be(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new xr(function(s){t=s}),cancel:t}}};function T1(e){return function(n){return e.apply(null,n)}}function O1(e){return f.isObject(e)&&e.isAxiosError===!0}const Pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pt).forEach(([e,t])=>{Pt[t]=e});function kr(e){const t=new de(e),n=er(de.prototype.request,t);return f.extend(n,de.prototype,t,{allOwnKeys:!0}),f.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return kr(pe(e,s))},n}const j=kr(Ie);j.Axios=de;j.CanceledError=be;j.CancelToken=P1;j.isCancel=hr;j.VERSION=_r;j.toFormData=tt;j.AxiosError=M;j.Cancel=j.CanceledError;j.all=function(t){return Promise.all(t)};j.spread=T1;j.isAxiosError=O1;j.mergeConfig=pe;j.AxiosHeaders=X;j.formToJSON=e=>pr(f.isHTMLForm(e)?new FormData(e):e);j.getAdapter=br.getAdapter;j.HttpStatusCode=Pt;j.default=j;const{Axios:Ni,AxiosError:Hi,CanceledError:Ui,isCancel:Fi,CancelToken:$i,VERSION:Vi,all:qi,Cancel:Ki,isAxiosError:Xi,spread:Gi,toFormData:Wi,AxiosHeaders:Ji,HttpStatusCode:Qi,formToJSON:Zi,getAdapter:Yi,mergeConfig:ec}=j;var Cr=(e=>(e.ACCESS_TOKEN="accessToken",e))(Cr||{});const xn=Cr.ACCESS_TOKEN,B1=()=>sessionStorage.getItem(xn)??localStorage.getItem(xn),z1=j.create({baseURL:"https://version2-develop.fdm.dk/"}),j1=j.create({baseURL:"https://nexus-api.pre.fdm.dk/",headers:{"Ocp-Apim-Subscription-Key":"7a73dd7754e54ac3a40f2e270db968d7"}});j1.interceptors.request.use(e=>{const t=B1();return t&&(e.headers.Authorization="Bearer "+t),e});const Sr=Zr("app",()=>{const{showPopover:e,showPopoverSlide:t,popoverContent:n,popoverComponent:r,popoverSlideContent:s}=eo(),o=H(Zn.APP_LOADING_TEXT),i=an.addApiState({stateKey:Ke.APP,isLoading:!1}),c=Yn({instance:z1,baseUrl:"api/V1/orderflow/insurance/carwarranty",apiStateLoadingHandler:an}),a=H(null),l=H(null),d=w=>{var _;return(_=a==null?void 0:a.value)==null?void 0:_.pages.find(C=>C.id===w)},u=w=>{var _;return(_=l==null?void 0:l.value)==null?void 0:_.pages.find(C=>C.id===w)},y=c.useGet,g=c.useGet,{loadingMessage:p,loadingStates:h,addLoadingState:v,removeLoadingState:k}=Ys();return{showPopover:e,showPopoverSlide:t,popoverContent:n,popoverComponent:r,drupalContent:a,sharedDrupalContent:l,popoverSlideContent:s,loadingMessage:p,loadingStates:h,appLoadingMessage:o,appLoadingState:i,getCwAppDrupalPage:d,getCwSharedDrupalPage:u,useFetchCwSharedDrupal:y,useFetchCwAppDrupal:g,addLoadingState:v,removeLoadingState:k}}),D1=["xlink:href"],I1=Q({__name:"UISvg",props:{icon:{}},setup(e){return(t,n)=>(F(),J("svg",null,[q("use",{"xlink:href":"#"+t.icon},null,8,D1)]))}}),Er=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},N1={},H1=e=>(jr("data-v-1430c1d4"),e=e(),Dr(),e),U1={class:"menu"},F1=H1(()=>q("a",{href:"https://fdm.dk/",class:"menu__logo-link"},[q("img",{src:"https://fdm.dk/themes/common/fdmmotus/images/logo.svg",alt:"logo",class:"menu__logo"})],-1)),$1=[F1];function V1(e,t){return F(),J("div",U1,$1)}const q1=Er(N1,[["render",V1],["__scopeId","data-v-1430c1d4"]]),K1={class:"hero"},X1={class:"hero__inner-wrapper"},G1={class:"flex flex-col sm:items-center text-center"},W1={class:"mt-4"},J1=["innerHTML"],Q1=Q({__name:"UIHero",props:{header:{},subheader:{},icon:{}},setup(e){return(t,n)=>(F(),J("section",K1,[q("div",X1,[Z(I1,{class:"w-10 h-10 sm:w-16 sm:h-16",icon:t.icon},null,8,["icon"]),q("div",G1,[q("h1",W1,On(t.header),1),t.subheader?(F(),J("div",{key:0,class:"mt-2 sm:mt-4 rich-text",innerHTML:t.subheader},null,8,J1)):Me("",!0)])])]))}}),Z1=Er(Q1,[["__scopeId","data-v-9f264c61"]]),Y1={class:"header"},ei=Q({__name:"CarWarrantyHeader",setup(e){return(t,n)=>(F(),J("header",Y1,[Z(D(q1))]))}}),st=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ti=st(ei,[["__scopeId","data-v-761d2038"]]),ni=["xlink:href"],We=Q({__name:"UISvg",props:{icon:String},setup(e){return(t,n)=>(F(),J("svg",null,[q("use",{"xlink:href":"#"+e.icon},null,8,ni)]))}}),ri={class:"h-full text-left px-8 py-10 md:p-20 overflow-auto"},si=["innerHTML"],oi=Q({__name:"UIPopoverSlide",props:{content:{},slideHeight:{},show:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,s=()=>{r("close")};return(o,i)=>(F(),J("div",{style:Ir({height:n.slideHeight+"px"}),class:Bn(["absolute top-0 left-0 w-full bg-white transform ease-in-out duration-300 z-20",[n.show?"":"translate-x-full",""]])},[q("button",{class:"absolute bg-white right-0 mr-4 mt-4",onClick:s},[Z(We,{class:"w-8 h-8 close-icon",icon:"circle-arrow"})]),q("div",ri,[Z(We,{class:"popover__slide-icon",icon:"exclamation-circle"}),q("div",{innerHTML:n.content},null,8,si)])],6))}}),ii=st(oi,[["__scopeId","data-v-9e75ca3c"]]),ci={class:"popover",style:{"background-color":"rgba(0, 0, 0, 0.3)"}},ai={class:"popover__container flex bg-white relative mx-auto max-w-2xl overflow-hidden"},li=["innerHTML"],ui=Q({__name:"UIPopover",props:{content:{},slideContent:{},showSlide:{type:Boolean}},emits:["close","close:slide"],setup(e,{emit:t}){const n=e,r=t,s=H(0),o=H(),i=()=>{r("close:slide"),r("close")};return Ot(()=>n.showSlide,c=>{c&&(s.value=o.value.clientHeight)}),(c,a)=>(F(),J("div",ci,[q("div",ai,[q("button",{onClick:Nr(i,["prevent"]),class:"popover__close-button",title:"close-popover"},[Z(We,{class:"popover__close-icon",icon:"close-thick"})]),Z(ii,{slideHeight:s.value,content:n.slideContent,show:n.showSlide,onClose:a[0]||(a[0]=l=>r("close:slide"))},null,8,["slideHeight","content","show"]),q("div",{ref_key:"popoverContentElement",ref:o,class:"popover__content"},[q("div",{innerHTML:n.content,class:"rich-text"},null,8,li),Hr(c.$slots,"default",{},void 0,!0)],512)])]))}}),di=st(ui,[["__scopeId","data-v-1ddf4000"]]),fi={class:"flex flex-col items-center m-auto"},pi={key:0},hi=Q({__name:"UILoadingSpinner",props:{loadingText:{},iconClass:{default:"w-20 h-20 m-4"}},setup(e){const t=e;return(n,r)=>(F(),J("div",fi,[Z(We,{class:Bn(`${t.iconClass} loading-spinner`),icon:"loading-spinner"},null,8,["class"]),t.loadingText&&t.loadingText!==""?(F(),J("p",pi,On(t.loadingText),1)):Me("",!0)]))}}),mi=st(hi,[["__scopeId","data-v-c267eaec"]]),yi={class:"absolute inset-0 z-50"},gi={class:"absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"},vi=Q({__name:"UILoadingScreen",props:{loadingText:{}},setup(e){const t=e;return(n,r)=>(F(),J("div",yi,[q("div",gi,[Z(mi,{"loading-text":t.loadingText},null,8,["loading-text"])])]))}}),wi=e=>{if(!document)return;const t={development:"33345678-1234-1234-1234-123456789333",staging:"22245678-1234-1234-1234-123456789222",production:"11145678-1234-1234-1234-123456789111"},n={development:"https://trackbr.dev.fdm.dk",staging:"https://trackbr.pre.fdm.dk",production:"https://trackbr.fdm.dk"},r={development:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",staging:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js",production:"https://fdm.dk/themes/common/fdmmotus/js/trackbr/exponea.min.js"};[{name:"googleConsentModeV2",attributes:null,text:`
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
      `}].forEach(o=>{const i=document.createElement("script");if(o.attributes)for(const[c,a]of Object.entries(o.attributes))a&&i.setAttribute(c,a);i.text=o.text,document.head.appendChild(i)})},bi=`<svg class="absolute opacity-0" aria-hidden="true">
   
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

      <symbol id="check-mark-thick" viewBox="0 0 40 40">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
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
    </svg> `,_i=Q({name:"IconSprite",render(){return Bt("div",{innerHTML:bi,style:{position:"absolute",opacity:0,width:0,height:0,pointerEvents:"none"}})}}),xi=e=>{if(!e)return{};const t={};for(const[n,r]of Object.entries(e))if(r!==void 0){const s=n,o=ki(r);o!==void 0&&(t[s]=o)}return t},ki=e=>{if(!(!e||e==="undefined"||e==="null"||e===""))return e==="true"?!0:e==="false"?!1:/^\d+(\.\d+)?$/.test(e)?Number(e):e},Ci=Q({__name:"App",setup(e){const t=Sr(),n=zt.getContainer(),r=n==null?void 0:n.dataset,s=xi(r);return Ur(async()=>{s.loadScripts&&wi()}),(o,i)=>{var c,a;return F(),J("div",null,[D(t).appLoadingState.isLoading?(F(),He(vi,{key:0,"loading-text":D(t).appLoadingMessage},null,8,["loading-text"])):Me("",!0),D(t).showPopover?(F(),He(di,{key:1,content:D(t).popoverContent,"show-slide":D(t).showPopoverSlide,"slide-content":D(t).popoverSlideContent,onClose:i[0]||(i[0]=l=>D(t).showPopover=!1),"onClose:slide":i[1]||(i[1]=l=>D(t).showPopoverSlide=!1)},{default:Fr(()=>[(F(),He($r(D(t).popoverComponent)))]),_:1},8,["content","show-slide","slide-content"])):Me("",!0),D(s).showHeader?(F(),He(ti,{key:2})):Me("",!0),Z(D(Z1),{icon:"spanner-and-nut",header:((c=D(t).sharedDrupalContent)==null?void 0:c.heroHeading)||"",subheader:((a=D(t).sharedDrupalContent)==null?void 0:a.heroSubheading)||""},null,8,["header","subheader"]),Z(D(_i)),Z(D(Qn))])}}}),Si="modulepreload",Ei=function(e){return"/"+e},kn={},Cn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=Ei(a),a in kn)return;kn[a]=!0;const l=a.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Si,l||(u.as="script"),u.crossOrigin="",u.href=a,c&&u.setAttribute("nonce",c),document.head.appendChild(u),l)return new Promise((y,g)=>{u.addEventListener("load",y),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function o(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return s.then(i=>{for(const c of i||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},Rr="basket-id",Ri=e=>{sessionStorage.setItem(Rr,e)},tc=()=>sessionStorage.getItem(Rr),Mi=()=>{const e=Sr();return{initialize:async()=>{if(e.drupalContent&&e.sharedDrupalContent)return!0;const{_get:n,error:r}=e.useFetchCwAppDrupal({url:"app",loadingKey:Ke.APP,errorKey:St.APP,transformer:i=>{e.drupalContent=i}}),{_get:s,error:o}=e.useFetchCwSharedDrupal({loadingKey:Ke.APP,errorKey:St.APP,transformer:i=>{e.sharedDrupalContent=i}});if(await Promise.all([n(),s()]),r.value.error||o.value.error)throw new Error("Failed to load Drupal content");return!0}}};var ze=(e=>(e.HOME="Home",e.ERROR="Error",e))(ze||{}),Sn;(function(e){e.ACCESS_TOKEN="accessToken",e.REFRESH_TOKEN="refreshToken",e.LOGIN_UUID="loginUUID",e.LOGIN_CHALLENGE="loginChallenge",e.LOGIN_VERIFIER="loginVerifier"})(Sn||(Sn={}));var En;(function(e){e.BASKET_ID="basket-id"})(En||(En={}));function Li(e){const{widgetId:t,eventName:n="widget:navigation",postMessageSource:r="embedded-widget",excludedRoutes:s=["/"]}=e;return{emitRouteChange:(i,c)=>{var l,d;if(s.includes(i.path)||typeof window>"u")return;const a={widgetId:t,type:"route_change",currentRoute:{name:typeof i.name=="string"?i.name:((l=i.name)==null?void 0:l.toString())||null,path:i.path,fullPath:i.fullPath,params:i.params,query:i.query},previousRoute:c?{name:typeof c.name=="string"?c.name:((d=c.name)==null?void 0:d.toString())||null,path:c.path,fullPath:c.fullPath,params:c.params,query:c.query}:null,timestamp:new Date().toISOString()};if(window.parent&&window.parent!==window)try{window.parent.postMessage({source:r,event:"route_change",data:a},"*")}catch(u){console.error("PostMessage failed:",u)}try{const u=new CustomEvent(n,{detail:a,bubbles:!0,composed:!0});window.dispatchEvent(u)}catch(u){console.error("Custom event failed:",u)}}}}let Rn=!0;const Ai=()=>{if(Rn){Rn=!1;return}const e=Pi();if(!e)return;const t=e.getBoundingClientRect(),n=window.scrollY,o=t.top+n-40;window.scrollTo({top:o,behavior:"smooth"})},Pi=()=>{let e=document.querySelector(dt);if(e||(e=document.querySelector(Ue),e))return e;const t=zt.getContainer();return t?(e=t.querySelector(dt),e||(e=t.querySelector(Ue),e)?e:t.shadowRoot?(e=t.shadowRoot.querySelector(dt),e||t.shadowRoot.querySelector(Ue)):null):null},{emitRouteChange:Ti}=Li({widgetId:Ue,eventName:"fdm:widget:navigation",postMessageSource:"fdm-embedded-widget",excludedRoutes:["/"]}),je=Qs({history:Rs("/"),routes:[{path:"/",name:ze.HOME,component:()=>Cn(()=>import("./HomeView.js"),__vite__mapDeps([0,1,2])),beforeEnter:(e,t,n)=>{const r=qr(location.search);r!=null&&r.basketId&&Ri(r==null?void 0:r.basketId),n()}},{path:"/fejl",name:ze.ERROR,component:()=>Cn(()=>import("./ErrorView.js"),__vite__mapDeps([3,2,1]))}]});je.beforeResolve(async(e,t,n)=>{try{const{initialize:r}=Mi();await r(),n()}catch{n({name:ze.ERROR})}});je.beforeEach(Ai);je.afterEach((e,t)=>{Ti(e,t)});const Oi=()=>{if(document.getElementById("lato-fonts"))return;const e=`
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
  `,t=document.createElement("style");t.id="lato-fonts",t.textContent=e,document.head.appendChild(t)};zt.createApp(()=>{const e=Vr(Ci);return e.use(Kr()),e.use(je),je.push({name:ze.HOME}),e},{beforeMount:Oi}).init();export{Ke as L,ze as R,I1 as _,st as a,We as b,Sr as c,zi as d,Ri as e,Zr as f,tc as g,Yn as h,j1 as i,an as j,je as r,Er as s,ji as u};
