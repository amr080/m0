import{H as p,al as k,P as x,b0 as T,b1 as D,b2 as _,b3 as I,T as R,m as M,a as S,_ as N,d as P,u as z,t as U,Y as L,f as $,h as B,i as H,o as V,j as q,l as F,v as J,x as Y,q as G,b4 as X,aO as K}from"./BRjJx-e3.js";function Q(e,o){if(typeof e!="string")throw new TypeError("argument str must be a string");const r={},t=o||{},a=t.decode||Z;let n=0;for(;n<e.length;){const i=e.indexOf("=",n);if(i===-1)break;let s=e.indexOf(";",n);if(s===-1)s=e.length;else if(s<i){n=e.lastIndexOf(";",i-1)+1;continue}const l=e.slice(n,i).trim();if(t!=null&&t.filter&&!(t!=null&&t.filter(l))){n=s+1;continue}if(r[l]===void 0){let c=e.slice(i+1,s).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),r[l]=W(c,a)}n=s+1}return r}function Z(e){return e.includes("%")?decodeURIComponent(e):e}function W(e,o){try{return o(e)}catch{return e}}const v=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function C(e,o,r){const t=r||{},a=t.encode||encodeURIComponent;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!v.test(e))throw new TypeError("argument name is invalid");const n=a(o);if(n&&!v.test(n))throw new TypeError("argument val is invalid");let i=e+"="+n;if(t.maxAge!==void 0&&t.maxAge!==null){const s=t.maxAge-0;if(Number.isNaN(s)||!Number.isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(t.domain){if(!v.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!v.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(!ee(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":{i+="; Priority=Low";break}case"medium":{i+="; Priority=Medium";break}case"high":{i+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:{i+="; SameSite=Strict";break}case"lax":{i+="; SameSite=Lax";break}case"strict":{i+="; SameSite=Strict";break}case"none":{i+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return t.partitioned&&(i+="; Partitioned"),i}function ee(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function u(e){if(typeof e!="object")return e;var o,r,t=Object.prototype.toString.call(e);if(t==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){r=new e.constructor;for(o in e)e.hasOwnProperty(o)&&r[o]!==e[o]&&(r[o]=u(e[o]))}else{r={};for(o in e)o==="__proto__"?Object.defineProperty(r,o,{value:u(e[o]),configurable:!0,enumerable:!0,writable:!0}):r[o]=u(e[o])}return r}if(t==="[object Array]"){for(o=e.length,r=Array(o);o--;)r[o]=u(e[o]);return r}return t==="[object Set]"?(r=new Set,e.forEach(function(a){r.add(u(a))}),r):t==="[object Map]"?(r=new Map,e.forEach(function(a,n){r.set(u(n),u(a))}),r):t==="[object Date]"?new Date(+e):t==="[object RegExp]"?(r=new RegExp(e.source,e.flags),r.lastIndex=e.lastIndex,r):t==="[object DataView]"?new e.constructor(u(e.buffer)):t==="[object ArrayBuffer]"?e.slice(0):t.slice(-6)==="Array]"?new e.constructor(e):e}const te={path:"/",watch:!0,decode:e=>_(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))},w=window.cookieStore;function ue(e,o){var l;const r={...te,...o},t=j(r)||{};let a;r.maxAge!==void 0?a=r.maxAge*1e3:r.expires&&(a=r.expires.getTime()-Date.now());const n=a!==void 0&&a<=0,i=u(n?void 0:t[e]??((l=r.default)==null?void 0:l.call(r))),s=a&&!n?ie(i,a,r.watch&&r.watch!=="shallow"):p(i);{let c=null;try{!w&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${e}`))}catch{}const d=()=>{r.readonly||I(s.value,t[e])||(oe(e,s.value,r),t[e]=u(s.value),c==null||c.postMessage({value:r.encode(s.value)}))},y=g=>{var b;const h=g.refresh?(b=j(r))==null?void 0:b[e]:r.decode(g.value);m=!0,s.value=h,t[e]=u(h),R(()=>{m=!1})};let m=!1;const O=!!T();if(O&&k(()=>{m=!0,d(),c==null||c.close()}),w){const g=h=>{const b=h.changed.find(A=>A.name===e);b&&y({value:b.value})};w.addEventListener("change",g),O&&k(()=>w.removeEventListener("change",g))}else c&&(c.onmessage=({data:g})=>y(g));r.watch?x(s,()=>{m||d()},{deep:r.watch!=="shallow"}):d()}return s}function j(e={}){return Q(document.cookie,e)}function re(e,o,r={}){return o==null?C(e,o,{...r,maxAge:-1}):C(e,o,r)}function oe(e,o,r={}){document.cookie=re(e,o,r)}const E=2147483647;function ie(e,o,r){let t,a,n=0;const i=r?p(e):{value:e};return T()&&k(()=>{a==null||a(),clearTimeout(t)}),D((s,l)=>{r&&(a=x(i,l));function c(){n=0,clearTimeout(t);const d=o-n,y=d<E?d:E;t=setTimeout(()=>{if(n+=y,n<o)return c();i.value=void 0,l()},y)}return{get(){return s(),i.value},set(d){c(),i.value=d,l()}}})}const ae={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},f=M(S.ui.strategy,S.ui.badge,ae),ne=P({inheritAttrs:!1,props:{size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},color:{type:String,default:()=>f.default.color,validator(e){return[...S.ui.colors,...Object.keys(f.color)].includes(e)}},variant:{type:String,default:()=>f.default.variant,validator(e){return[...Object.keys(f.variant),...Object.values(f.color).flatMap(o=>Object.keys(o))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:r}=z("badge",U(e,"ui"),f),{size:t,rounded:a}=L({ui:o,props:e}),n=$(()=>{var s,l;const i=((l=(s=o.value.color)==null?void 0:s[e.color])==null?void 0:l[e.variant])||o.value.variant[e.variant];return B(H(o.value.base,o.value.font,a.value,o.value.size[t.value],i==null?void 0:i.replaceAll("{color}",e.color)),e.class)});return{attrs:r,badgeClass:n}}});function se(e,o,r,t,a,n){return V(),q("span",G({class:e.badgeClass},e.attrs),[F(e.$slots,"default",{},()=>[J(Y(e.label),1)])],16)}const de=N(ne,[["render",se]]),ce=()=>{const e=K(),o=p(!1),r=p(!1),t=p(!1),a=p(!1);function n(){if(o.value){o.value=!1,setTimeout(()=>{r.value=!r.value},0);return}r.value=!r.value}function i(){if(t.value){t.value=!1,setTimeout(()=>{a.value=!a.value},200);return}a.value=!a.value}return x(()=>e.path,()=>{t.value=!1}),{isHeaderDialogOpen:o,isContentSearchModalOpen:r,isDashboardSidebarSlidoverOpen:t,isDashboardSidebarSlideoverOpen:t,isDashboardSearchModalOpen:a,toggleContentSearch:n,toggleDashboardSearch:i}},fe=X(ce);export{de as _,fe as a,ue as u};
