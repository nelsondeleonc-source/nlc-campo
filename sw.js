/* Service worker de la app de campo NLC — versión 2026-10-17-u.
- Abre sin internet: responde con lo guardado y, si hay internet, actualiza la copia en segundo plano.
- Toda apertura de la app (…/, …/index.html, …/index.html?x=1) usa la MISMA copia "index.html", así que también
se actualiza cuando se entra por la dirección de la carpeta.
- Las peticiones con cache:"no-store" (la comprobación de versión nueva que hace la página) van directo a la red.
- Al cambiar CACHE (cada versión) se borran las copias viejas. */
const VERSION = "2026-10-18-v";
const CACHE = "nlc-form-" + VERSION;
const BASE = ["./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];
self.addEventListener("install", e => {
e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
const req = e.request; if (req.method !== "GET") return;
const url = new URL(req.url); if (url.origin !== location.origin) return;
if (req.cache === "no-store") return;
const nav = req.mode === "navigate";
const key = nav ? new URL("./index.html", self.registration.scope).href : req;
e.respondWith((async () => {
const c = await caches.open(CACHE);
const hit = await c.match(key, { ignoreSearch: true });
/* una petición "navigate" no se puede copiar con otras opciones: se pide index.html directamente, sin la caché HTTP del navegador */
const pedido = nav ? new Request(key, { cache: "no-cache", credentials: "same-origin" }) : new Request(req, { cache: "no-cache" });
const red = fetch(pedido).then(r => { if (r && r.ok) return c.put(key, r.clone()).then(() => r, () => r); return r; }).catch(() => null);
if (hit) { e.waitUntil(red); return hit; }
return (await red) || new Response("Sin internet y esta página aún no está guardada en el teléfono.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
})());
});
