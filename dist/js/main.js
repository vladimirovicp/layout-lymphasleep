(()=>{var e={370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},268:()=>{let e=document.querySelector(".popup__bg"),t=document.querySelector(".popup");document.querySelectorAll(".setting__link").forEach((r=>{r.addEventListener("click",(r=>{r.preventDefault(),e.classList.add("active"),t.classList.add("active")}))})),document.addEventListener("click",(r=>{r.target===e&&(e.classList.remove("active"),t.classList.remove("active"))}))},418:(e,t,r)=>{"use strict";e.exports=r.p+"assets/favicon.ico"},923:(e,t,r)=>{"use strict";e.exports=r.p+"img/footer/sponsors/10-year.png"},394:(e,t,r)=>{"use strict";e.exports=r.p+"img/footer/sponsors/logo-mational-projects.svg"},716:(e,t,r)=>{"use strict";e.exports=r.p+"img/footer/sponsors/logo-nauka.png"},494:(e,t,r)=>{"use strict";e.exports=r.p+"img/hero/hero-bg-mobile.jpg"},783:(e,t,r)=>{"use strict";e.exports=r.p+"img/hero/hero-bg.avif"},79:(e,t,r)=>{"use strict";e.exports=r.p+"img/hero/hero-bg.jpg"},544:(e,t,r)=>{"use strict";e.exports=r.p+"img/hero/hero-bg.webp"},470:(e,t,r)=>{"use strict";e.exports=r.p+"img/hero/sitename.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(370),t=r.n(e),o=new URL(r(418),r.b),n=new URL(r(783),r.b),s=new URL(r(544),r.b),c=new URL(r(79),r.b),a=new URL(r(494),r.b),i=new URL(r(470),r.b),p=new URL(r(394),r.b),l=new URL(r(923),r.b),u=new URL(r(716),r.b);t()(o),t()(n),t()(s),t()(c),t()(a),t()(i),t()(p),t()(l),t()(u),r(268);const g=document.querySelector(".hero");if(g){const e=g.querySelectorAll(".planet__anima .planet__text-up");e.length>0&&e.forEach((e=>{e.innerHTML=e.textContent.replace(/\S/g,"<span>$&</span>");const t=e.querySelectorAll("span");for(let e=0;e<t.length;e++)t[e].style.transform="rotate("+18*(e-(t.length-1)/2)+"deg)"}));const t=g.querySelectorAll(".planet__anima .planet__text-down");t.length>0&&t.forEach((e=>{e.innerHTML=e.textContent.replace(/\S/g,"<span>$&</span>");const t=e.querySelectorAll("span");for(let e=0;e<t.length;e++)t[t.length-e-1].style.transform="rotate("+18*(e-(t.length-1)/2)+"deg)"}))}})()})();