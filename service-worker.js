"use strict";var precacheConfig=[["/bank-app/index.html","93f46bfe9f95f3ea1c6fc771ac306b2d"],["/bank-app/static/css/main.abbb9e94.css","13ebb780b8be186dd6e3be4a89662ca1"],["/bank-app/static/js/0.6ba09034.chunk.js","e56f89a966dbb29b527a99359f52507b"],["/bank-app/static/js/1.7ff5f9d5.chunk.js","b8e5cece93132a3687db4ba948852079"],["/bank-app/static/js/2.d213cc0a.chunk.js","ab7160c7766c1c93314320ed659b38fb"],["/bank-app/static/js/3.28c8b79f.chunk.js","9e1517679f543b28996124b10d26d795"],["/bank-app/static/js/4.a9de26df.chunk.js","a425ff61d7409f5f13673aa1e9bd835a"],["/bank-app/static/js/5.ea3e87e1.chunk.js","8ac541829fe8b19865a2d2140aa4339b"],["/bank-app/static/js/6.147a1c9a.chunk.js","4b3d4b7cb468f303a7be59564d44fc62"],["/bank-app/static/js/7.a8aadd66.chunk.js","80389ef44bc3d3db423703c7d45dc289"],["/bank-app/static/js/8.c92b7bda.chunk.js","404d0cef94e5cbcc0a19a1575361f21e"],["/bank-app/static/js/9.40e8269c.chunk.js","e68133f273adeb01ececeb2219dc567c"],["/bank-app/static/js/main.c7767120.js","99053f77409fc02029eb3290b4edaaa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,a;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n)),a="/bank-app/index.html",!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});