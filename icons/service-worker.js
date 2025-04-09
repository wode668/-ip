const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '',                  缓存首页
  'index.html',        缓存HTML文件（替换为你的路径）
  'styles.css',        缓存CSS
  'script.js',         缓存JS
  'iconsicon-192.png'  缓存图标
];

 安装阶段：缓存资源
self.addEventListener('install', event = {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache = cache.addAll(urlsToCache))
  );
});

 拦截请求：优先返回缓存
self.addEventListener('fetch', event = {
  event.respondWith(
    caches.match(event.request)
      .then(response = response  fetch(event.request))
  );
});