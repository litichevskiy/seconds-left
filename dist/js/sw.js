!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){const n=["v-1-1543438082393"],s=["/","/manifest.json","/dist/js/bundle.js","/dist/css/bundle.css"];self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(-1===n.indexOf(e))return caches.delete(e)}))))}),self.addEventListener("install",e=>{self.skipWaiting(),e.waitUntil(caches.open(n[0]).then(e=>e.addAll(s)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))})}]);