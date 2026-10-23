'use strict';
const PREFIX='danuri-topik-';
const CACHE=PREFIX+'d5bd8d305dd7';
const ASSETS=['./','./index.html','./styles.css?v=ja-install-3','./app.js?v=ja-install-3','./core.js?v=ja-install-3','./site-config.js','./analytics.js','./manifest.webmanifest','./data/topik-data.js','./data/catalogue.js?v=ja-install-3','./data/ja-catalogue.js?v=ja-install-3','./data/ja-project.js?v=ja-install-3','./i18n-ui.js?v=ja-install-3','./i18n.js?v=ja-install-3','./pwa-install.js?v=ja-install-3','./data/ATTRIBUTION.md','./assets/bomi.svg','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin || !url.href.startsWith(self.registration.scope))return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}return response;}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}return response;}).catch(()=>new Response('This file is not cached yet. Reconnect and reload Danuri.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))));
});

