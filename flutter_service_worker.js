'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "72626f096c45670a874905ead0a858a9",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/images/backend.png": "b6f97a0bb77c12636d32a57efacd1d10",
"assets/assets/images/background.jpg": "0ac11025c95fce995b0edb7bfc70184a",
"assets/assets/images/bag.jpg": "1ad87ee06f6e570393edc831569464d0",
"assets/assets/images/banner-bg.png": "5f3ca49706055342e92708c7dd31849f",
"assets/assets/images/BG.png": "c74b31e8c9bf8f23be3409c8fef239d5",
"assets/assets/images/bk.jpg": "40ea2aabbf261929c2de65eca40ff83c",
"assets/assets/images/carrent.png": "de7775e7e769abcd0478a0f32554addf",
"assets/assets/images/cgt.png": "d05f7bd05f15f4f73e4a6453ab1f09ad",
"assets/assets/images/close.svg": "333c66a5dff1d7cc3968f6e7af4c5b2c",
"assets/assets/images/code.jpg": "a02e7774ec40b4db4874e60a66bd7e5e",
"assets/assets/images/company/Chetu_Inc_Logo.png": "1beb3154234f2527b02cfcef375bd499",
"assets/assets/images/company/ct.jpg": "726bb6c22a44523e31870ebec531fec8",
"assets/assets/images/company/meta.png": "c39c206e11ef45ddc19167e6c167e1d8",
"assets/assets/images/company/schrocken.png": "5af17d1cc778ea993a363d50238e6806",
"assets/assets/images/company/shopify.png": "7d0c465185ea1aa651737aedf2e889f9",
"assets/assets/images/company/starbucks.png": "739125c98702ba3575a572618abc82f6",
"assets/assets/images/company/tesla.png": "00f12a1675ac2554f83449c254abfc66",
"assets/assets/images/creator.png": "2fb53dc768e9f2b21e8eba0b31c50f1d",
"assets/assets/images/CrossSell.jpg": "dfd4a2f608e9de3ee7ff4ccf55cca4f8",
"assets/assets/images/education/gniot.jpg": "053a8c0700217ddfb3658a3cf3d888cb",
"assets/assets/images/education/jnv.png": "490ce71ce2f878cece4719340012b2b0",
"assets/assets/images/education/JNV_Logo.jpg": "0f013618ee69ca75cda9d342639c2337",
"assets/assets/images/facebook.png": "03c3adf6ffcb6c0e3825aa635bd3cbac",
"assets/assets/images/fincare.png": "8f80ac20cdcc044889035f788ff14d7d",
"assets/assets/images/flutter.jpg": "6fb86d3d799b24b115dbb6d8dd0f2d42",
"assets/assets/images/footer-bg.png": "e9228c17c13a87653f1b8ed01a3ff306",
"assets/assets/images/github.png": "69b7e397e348747e802b90e5eb0bfbd4",
"assets/assets/images/herobg.png": "823cad50e07bcea74f9dee734ce3819a",
"assets/assets/images/html.svg": "5d0c9cc6b2910deb8ad0a52f0bc36ea3",
"assets/assets/images/imgback.png": "304063aab4cbf2b7c666e80d9668fb83",
"assets/assets/images/index.js": "c43a33d0d95e036f42b626598aafcbb2",
"assets/assets/images/ins.jpg": "b3aa979d341ca18bc327e50cf18e9da6",
"assets/assets/images/instagram.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/images/jobit.png": "261dcd8d434a22a8ce067dcfe77160b8",
"assets/assets/images/ln.png": "d054a7ea427a0dd7830bd05929adcbc0",
"assets/assets/images/logo.png": "611e4e09839777f47c63da7d274defda",
"assets/assets/images/logo.svg": "f28ac65a62b2857d2b29eb0b0adec427",
"assets/assets/images/menu.svg": "d4926d3f2dc6c41bdcb19909d4ae93c8",
"assets/assets/images/mobile.png": "9537758db1d756949a924fcd4404895f",
"assets/assets/images/mylogo.svg": "ab920971676e425a9b1dba7b2afd6b4b",
"assets/assets/images/net.jpg": "f5dde267df2a8b431a4adab0ecb99363",
"assets/assets/images/nodeM.png": "44c51c70f5b73ff115988327c7ad8e2b",
"assets/assets/images/plogo.png": "ec5e9ded47e441bf2fbbb16620a0ff9c",
"assets/assets/images/portfolio.png": "21692a332e85b04314ffd45238f7a8f3",
"assets/assets/images/profile.jpg": "b4e1ce26e572c468a749571f0d4561b3",
"assets/assets/images/profile_pic.png": "0b34363d07a108da6ba54d9fa3bf52c5",
"assets/assets/images/qem.png": "e7a76842bbc2d7fd0382a3a4c898310d",
"assets/assets/images/react.png": "8493fc6ec318162616db8cc95ab30a47",
"assets/assets/images/tech/css.png": "562320553594c7fc047b9d0cf55233ab",
"assets/assets/images/tech/css.svg": "b364a20597cf48a69de82b9a47e24d9f",
"assets/assets/images/tech/dialogflow.png": "afb77d9d1dec97f437e494c3a9cb5b97",
"assets/assets/images/tech/docker.png": "48daa53dc2e75aa18777f55eb610c4f1",
"assets/assets/images/tech/figma.png": "897539713a3105b6ee3b797851459130",
"assets/assets/images/tech/git.png": "91e38c1fb4b2410c06d56542d09086d0",
"assets/assets/images/tech/html.png": "ff5aca29bd447b791c743ad0075e5aa3",
"assets/assets/images/tech/html.svg": "5d0c9cc6b2910deb8ad0a52f0bc36ea3",
"assets/assets/images/tech/icons8-react.svg": "bb3e76d3246e96dad42e55e699374956",
"assets/assets/images/tech/javascript.png": "c1f39577de277de6ff5f654e996f1028",
"assets/assets/images/tech/jira.jfif": "95384341933d2f0c906fbecfb5a8d358",
"assets/assets/images/tech/jira_logo.jpg.png": "cc94dea6e64a9975579d986c939a1bad",
"assets/assets/images/tech/js.svg": "b724e6d6d858ba1fe341cd6ba404d6c1",
"assets/assets/images/tech/jwt.png": "fdd91750bb177b13eb8bd3ff694035b4",
"assets/assets/images/tech/MI.png": "d2b1e19091a3530dfb8bec06b5a926dc",
"assets/assets/images/tech/mongodb.png": "1fb83876d8f00b2f67374b05838d09d2",
"assets/assets/images/tech/nodejs.png": "9e79e8c3cdcccfc06c9840883f15b2c1",
"assets/assets/images/tech/nodejs.svg": "fd3e1613fc6b2e1282022260fea5be62",
"assets/assets/images/tech/react.svg": "f68e897e605b530964c74eb2549854a8",
"assets/assets/images/tech/reactjs.png": "f70556624353bdc24ec1e69a2d979630",
"assets/assets/images/tech/redux.png": "31f3e54c7d49efed1b6a03edc4476ba2",
"assets/assets/images/tech/redux.svg": "5487bb14a7eaa0527bb43851895f4c1e",
"assets/assets/images/tech/ror.png": "60b914b1c0bd5893bb4e70a354feda52",
"assets/assets/images/tech/ruby.jpg": "d695115632b17bbd400f4f28a4c39dc1",
"assets/assets/images/tech/ruby.svg": "34f24be9e6f9cf42b5b38c51b8c78418",
"assets/assets/images/tech/sql.png": "1eb67b8b25d3241c3a739d2eca761430",
"assets/assets/images/tech/tailwind.png": "c73f9afce409c73a75bb36ce9da84a94",
"assets/assets/images/tech/tailwind.svg": "18d7a31351491a3efa16c4de31286523",
"assets/assets/images/tech/threejs.svg": "d75c09a5a967d4425a175b6bfe5ca4e5",
"assets/assets/images/tech/typescript.png": "6a41ab01fd39f8bae6bad97ef7109cf9",
"assets/assets/images/tripguide.png": "5eb0d3c9dd99525d0aa2b584dd573133",
"assets/assets/images/web.png": "f59df0f5b55cde9fc8e02c3dfe1e3540",
"assets/assets/images/webLogo.svg": "66bbefdeaf39e296103728663707d852",
"assets/assets/pdf/test.pdf": "6cfeb4056245df66ee4b98ad6ca7f03a",
"assets/FontManifest.json": "e7fa278f02a4aeb83baf08eafa27a400",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "964369a980e458e6461ab7ed3e44dc67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d80e4ca9c06c995eee2aced28d4c02e9",
"/": "d80e4ca9c06c995eee2aced28d4c02e9",
"main.dart.js": "eb02c1ae7840567535f5dbd2ec3fcece",
"manifest.json": "9cc5002128a3005bf4b0f4c1afba1651",
"version.json": "2a4bdd3370ee966319e180d97d91e050"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
