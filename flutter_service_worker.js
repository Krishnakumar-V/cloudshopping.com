'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c56edfd2c9b986c3ff9a5ae60b256b6f",
"assets/assets/CLOUDS.png": "e3ca61281597cbe2771fc8510f49f6e8",
"assets/assets/ICONS/ALL.jpg": "5a5314a1f58cbb5ca86de6c67565c183",
"assets/assets/ICONS/APPLIANCES.png": "10ef9a2855b57ea4b3535268062fc806",
"assets/assets/ICONS/ELECTRONICS.png": "4bf8b184d1a4d02ca0c6260f2ef4e273",
"assets/assets/ICONS/FASHION.png": "78c868560bf8afecd8209c1d189bb815",
"assets/assets/ICONS/FOOD.png": "62194157b686114a751e3d4c0081bb0b",
"assets/assets/ICONS/FURNITURE.png": "d8bf93269d071cdbeec96950adacf586",
"assets/assets/ICONS/GROCERIES.jpg": "fc5d96737181b7f5054701679f929383",
"assets/assets/ICONS/VEG.png": "fd7286f5e8695de9798a1e3a61c59046",
"assets/assets/ICONS/VEG2.jpg": "22904fd190b872ea10a9b21e44697c4a",
"assets/assets/IMAGES/ac.jpg": "8c541338679e1c20fa4c9f15b6280c10",
"assets/assets/IMAGES/addphotos.png": "f9975b29148e8fbc86e654acf12019f0",
"assets/assets/IMAGES/apple.jpg": "c072ed2995e1e28622aa29e671b94863",
"assets/assets/IMAGES/APPLIANCE.png": "52d691bf2b4cdf80eb79ee3c18ee2afb",
"assets/assets/IMAGES/appliancepic.jpg": "01e4c9918506186656dd1fe2a453daf7",
"assets/assets/IMAGES/BAKERY.png": "7e3410b91d8fa7f14b66dbb9ea7d1b0e",
"assets/assets/IMAGES/banana.jpg": "51fa4324a2805f5c6fe54528b84318fd",
"assets/assets/IMAGES/biriyani.jpg": "a441de7aa8d05f446e195e392b31edd2",
"assets/assets/IMAGES/CART2.png": "193925939019863c438e998b7d904975",
"assets/assets/IMAGES/CART3.iix": "6a646c9fabd0a4eb341273ed2cbad1e2",
"assets/assets/IMAGES/CHAIR.jpg": "f978ecfcf6f0e8348048745b190c1914",
"assets/assets/IMAGES/DRESS.png": "7b2864decc03e10ba16345bbb6a103cc",
"assets/assets/IMAGES/elecronicspic.jpg": "9fb31ee75c92840ba98158dfe1f0b807",
"assets/assets/IMAGES/EMPTY.png": "0f9c82736b8a04691ec76c86224384e8",
"assets/assets/IMAGES/FOOD.png": "7e41e8d340bc2af140563f7fe107d321",
"assets/assets/IMAGES/food2.png": "038310a902a6cf0b91a025dd0c06dd6d",
"assets/assets/IMAGES/fried%2520rice.jpg": "545ef08b9c41f196351df2a944d2afdd",
"assets/assets/IMAGES/GROCERY.png": "748ff49d53a332e3d55b1ae7e3d28aa0",
"assets/assets/IMAGES/headphone.jpg": "ac2b35e54ac78751010240a72cdc1a1e",
"assets/assets/IMAGES/laptop.jpg": "215ce049f47e5adab52cbcb055ba5ef5",
"assets/assets/IMAGES/meals.jpg": "c58faf921ace6fda3176a6f8dde21300",
"assets/assets/IMAGES/milk.jpg": "2daef0b923a2e4a3bf446f04c43f8e59",
"assets/assets/IMAGES/mobile.png": "526abfec18a0084d88807873127e786c",
"assets/assets/IMAGES/offer1.jpg.crdownload": "6deae59e1270f6b360977aa05d56f9e8",
"assets/assets/IMAGES/offer2.jpg": "d97497006bb5caeafd82f1666ba64131",
"assets/assets/IMAGES/offer2.webp": "5aa65b45acb30aa7904c0cf6c6aa7ead",
"assets/assets/IMAGES/offer3.jpg": "9f823840e4abe4a7ec178c79bdccd620",
"assets/assets/IMAGES/offer4.jpg_large": "db7027a5fb43c3b6727d29c4acf532e9",
"assets/assets/IMAGES/orange.jpg": "ea67cce3d25683342abef3d671e13f85",
"assets/assets/IMAGES/ORDERS.png": "70c9a52830e3d1b0285fa69f30784db3",
"assets/assets/IMAGES/res1.png": "6d44783ab8dc0059bf15e205bdd8d14c",
"assets/assets/IMAGES/res2.png": "6901f67096172844b27c03aa96c990fd",
"assets/assets/IMAGES/rice.png": "bdf755cf50dc5ba412dff9c3c813af20",
"assets/assets/IMAGES/Screenshot%2520(81).png": "571a06c8059c98a1f4dd074044b17a1f",
"assets/assets/IMAGES/Screenshot%2520(82).png": "64867b4752d5883b227345521568cc60",
"assets/assets/IMAGES/shop1.jpg": "e0282f708f4b48ef116bb96ae9cdc95b",
"assets/assets/IMAGES/shop2.png": "f833e070a363500bbc224fee42b45c1b",
"assets/assets/IMAGES/shop3.png": "bceb6caf8cb5ba9c41135834d1c2579e",
"assets/assets/IMAGES/shop4.jpg": "ad1cfd37b297e1e6db8426659ea41aa1",
"assets/assets/IMAGES/shop5.jpg": "2923edb0532c1ec80e6a9dc0a8f30d83",
"assets/assets/IMAGES/SOFA.jpg": "dde44f53eafee318e7f4e5176ce91059",
"assets/assets/IMAGES/TABLE.jpg": "16199c8f4afb0b97ba6bd8c18d2a2776",
"assets/assets/IMAGES/tv.jpg": "48fd3f7c9a95a8d3f6888f39c98b1bd8",
"assets/assets/IMAGES/washingmachine.jpg": "146d1da2bf7761e4a56093a1193eb938",
"assets/assets/IMAGES/wheat.png": "e8ec0d69b94e65ef2a8a4cc9cb965041",
"assets/assets/LOGO.png": "70b5c48da6b375d96db9ce5cb94a79fb",
"assets/assets/LOGO1.png": "a4aa728f8e4a4036cbe71d19853c520b",
"assets/assets/LOGO2.png": "a76f9f7a6b191a7c1891be1c8a49b4ed",
"assets/assets/SHOPS/65.jpg": "7d6164f27657202f62c54329023f9e63",
"assets/assets/SHOPS/ac.jpg": "5640c23996239e574e6789b367f837e1",
"assets/assets/SHOPS/apple.jpg": "44021295e4a855a395377e7bd40b6728",
"assets/assets/SHOPS/boxers.jpg": "a300361382256bcd4ed6c987fd7dfbe2",
"assets/assets/SHOPS/bulb.jpg": "b7941d7ad8379af42299a68712437aa2",
"assets/assets/SHOPS/camera.jpg": "1f6861e8850a70a0f6aacbacbb6739a1",
"assets/assets/SHOPS/cap.jpg": "97b137f6b3b5b02afa274aa3ad5a1b63",
"assets/assets/SHOPS/chair.jpg": "560ea62b6efb044a942aae9be21e9102",
"assets/assets/SHOPS/cherry.jpg": "1ecdcdfb0f9ca37298446af75390ddc1",
"assets/assets/SHOPS/chickenbiryani.jpg": "2d27bc6bd4b04102d50178d030c668e2",
"assets/assets/SHOPS/chudidhar.jpg": "97ebf94594dd6cb2466fbcc569966968",
"assets/assets/SHOPS/date.jpg": "f75ab764b8c762fbcccd30c8c4f805b3",
"assets/assets/SHOPS/dosa.jpg": "b3a1c94dd73f1152decf952375434bae",
"assets/assets/SHOPS/Dustbin.jpg": "711610cfed48fe5b1ebd79807a45a352",
"assets/assets/SHOPS/eggbiryani.jpg": "a5deabd33c0fc87592e4f559113ccee5",
"assets/assets/SHOPS/fan.jpg": "fa571822be70844aebb29bf72e78f79b",
"assets/assets/SHOPS/fridge.jpg": "b0d3218e75e2e231317f52f4e31dbc42",
"assets/assets/SHOPS/ghee.jpg": "c7b34ffa40bf63057d9f5e47071fd993",
"assets/assets/SHOPS/grill.jpg": "947c90374c76f4938354e83cda272cd0",
"assets/assets/SHOPS/grinder.jpg": "1e2325d5c8c90f8b6a8b7cc224b47ff8",
"assets/assets/SHOPS/headphone.jpg": "ae067a47c0839b8cd0d6f28f6bb44e3c",
"assets/assets/SHOPS/jeans.jpg": "480918de83e4d388e228b01512b42037",
"assets/assets/SHOPS/juicer.jpg": "406570c87840b51cad76331bf7356583",
"assets/assets/SHOPS/kichdi.jpg": "a569e72d005287992523d650a228d32f",
"assets/assets/SHOPS/kidshirt.jpg": "a094c9af4e204096722540642ed4c7b6",
"assets/assets/SHOPS/laptop.jpg": "f8bf70c8c94b66157047caeaf9caff05",
"assets/assets/SHOPS/lemon.jpg": "8b0e96212c6c5887369315a59c5823eb",
"assets/assets/SHOPS/maida.jpg": "53be296016fe3f577249026c8504d7af",
"assets/assets/SHOPS/mango.jpg": "81264eb863133fd408fb0d990a2095f3",
"assets/assets/SHOPS/menshirt.jpg": "7cb5041ade8d0f3be494c6119aa21271",
"assets/assets/SHOPS/monitor.jpg": "915db1c2181ba7d78599423484b8955f",
"assets/assets/SHOPS/muttonbiryani.jpg": "78121c70352c8bb7924e74ff0a12d887",
"assets/assets/SHOPS/noodles.jpg": "9ec26cc609794c065f729efbf39bbef0",
"assets/assets/SHOPS/Notebook.jpg": "2d2f2a4546ae002a7cd26bb8ca05a49f",
"assets/assets/SHOPS/pasta.jpg": "eb93ebdc21be13d0d19448ed7aebdaaf",
"assets/assets/SHOPS/pear.jpg": "97fc022d2502f724d36e15dbdcc06db0",
"assets/assets/SHOPS/Pen.jpg": "02de5654316e2bacf51caf2977363a1f",
"assets/assets/SHOPS/pendrive.jpg": "95d16a55c8f0f2ad947090e55f785e83",
"assets/assets/SHOPS/phone.jpg": "f985f73795f01b3cb969142ccb3b6f76",
"assets/assets/SHOPS/plum.jpg": "048989a9c98da9bb4ee7258099d30405",
"assets/assets/SHOPS/Pouch.jpg": "523cb39bddbe2d40ac0d1269d91a0ad5",
"assets/assets/SHOPS/printer.jpg": "d9e7634f909932e1fe07bc7b8c0ed794",
"assets/assets/SHOPS/rice.jpg": "77200541ef103519555917232bd26ac6",
"assets/assets/SHOPS/riceeat.jpg": "28ddb0ab47ed38ba9401f4cf5e3cb704",
"assets/assets/SHOPS/salt.jpg": "a99f0175a119b8eecdeec2d560f2001d",
"assets/assets/SHOPS/sapota.jpg": "6df8ee854eb579713f8a2ccca4b3f779",
"assets/assets/SHOPS/saree.jpg": "5f44910f6f66ddf39184ddd186f8cad3",
"assets/assets/SHOPS/shop1.jpg": "e0282f708f4b48ef116bb96ae9cdc95b",
"assets/assets/SHOPS/shop10.jpg": "7199114b73aa3492cd4c7c33219f7867",
"assets/assets/SHOPS/shop11.jpg": "04fb7e96a7fc03f20996bb87d398d1b6",
"assets/assets/SHOPS/shop12.jpg": "7e4490a34bb2eb3e8f951f03de36a6e6",
"assets/assets/SHOPS/shop13.jpg": "0d3471a2678f20dec33b91c1c2ed57b9",
"assets/assets/SHOPS/shop14.jpg": "647e9612264facd35428e4642b58a68c",
"assets/assets/SHOPS/shop15.jpg": "7e90e1e3da5da61cf55c2e47f6300d9c",
"assets/assets/SHOPS/shop16.jpg": "595cc7d0a92b6ab0c214fdffa3d7f7ba",
"assets/assets/SHOPS/shop17.jpg": "17b90c9eb194a3ca1900f2386efcf973",
"assets/assets/SHOPS/shop18.jpg": "8791eb707dbff8fa7eb7bd0ff50e0138",
"assets/assets/SHOPS/shop19.jpg": "dc497a840243c5e7d2652102a4ddffec",
"assets/assets/SHOPS/shop2.jpg": "e48ac13400364a1e87c4fd175a71647d",
"assets/assets/SHOPS/shop20.jpg": "eb76298e41be838d7279155acf86f4e0",
"assets/assets/SHOPS/shop21.jpg": "f7693ecc41c089a78dfc2334b464570f",
"assets/assets/SHOPS/shop22.jpg": "06a3af5c7c57b662d184295772a2749d",
"assets/assets/SHOPS/shop23.jpg": "2163237ee48063ddff5b66dbbaa0e60e",
"assets/assets/SHOPS/shop24.jpg": "30751e6bf3db9200f854e909e104a5a1",
"assets/assets/SHOPS/shop25.jpg": "51705db2c0c1c4d05798b039c2b2682b",
"assets/assets/SHOPS/shop26.jpg": "cd59fff72b6754886cb3eb0edb328e29",
"assets/assets/SHOPS/shop27.jpg": "fc1270766d708686037bc0c9dad0f7cf",
"assets/assets/SHOPS/shop28.jpg": "e97aeb222ed43a00e146d5c30edfd794",
"assets/assets/SHOPS/shop29.jpg": "d537e0117273af98a31cc148873bd95f",
"assets/assets/SHOPS/shop3.jpg": "18172ea6698afdcf8acb9d96545b56d1",
"assets/assets/SHOPS/shop30.jpg": "9d4b37030b686ffd32d2fb78dbbd889f",
"assets/assets/SHOPS/shop31.jpg": "80e8a83fe05ba89d209950e9d9c3b69b",
"assets/assets/SHOPS/shop32.jpg": "eb25bd9cfaa6ba45e6cd646c10f1106f",
"assets/assets/SHOPS/shop33.jpg": "9926b608c497fbe0ee686dba830ca504",
"assets/assets/SHOPS/shop34.jpg": "d8da1101d23481645cd436c0b400d090",
"assets/assets/SHOPS/shop35.jpg": "1900fe54db26f763b283af9950577410",
"assets/assets/SHOPS/shop4.jpg": "13e9818fa8c0207e1297e091d679ed25",
"assets/assets/SHOPS/shop5.png": "f833e070a363500bbc224fee42b45c1b",
"assets/assets/SHOPS/shop6.png": "bceb6caf8cb5ba9c41135834d1c2579e",
"assets/assets/SHOPS/shop7.jpg": "166c366f4daeb0f7a94014fcf286b0d7",
"assets/assets/SHOPS/shop8.jpg": "ba76dde060e10d7e7038c34556fd98fc",
"assets/assets/SHOPS/shop9.jpg": "f094f2e2171476aa7ba24f9ff7a80abb",
"assets/assets/SHOPS/Sofa.jpg": "b2a5f6487adb4c6dae46b38f9edff5e8",
"assets/assets/SHOPS/sugar.jpg": "5490c325e8fea188fe444d9472fb3448",
"assets/assets/SHOPS/Suitcase.jpg": "d1a230bc2241de2e2ced3890d19f7198",
"assets/assets/SHOPS/table.jpg": "220073ea5726b0c7ac3fc1efb1706696",
"assets/assets/SHOPS/tshirt.jpg": "b131bf1afdbfb05d1c42e4f82816e6a8",
"assets/assets/SHOPS/tv.jpg": "4ab767890883f209e4e3f2c9c9b5151f",
"assets/assets/SHOPS/washing.jpg": "28fe52911778c02e603b848b24d5bde1",
"assets/assets/SHOPS/watch.jpg": "a28d2372b089c623f698dbc5e5085272",
"assets/assets/SHOPS/wheat.jpg": "31a2e65e1dff0e0c071bae4d6c04b43e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2163a8712432c81a5e5d54c87d49d50d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "5f15fcff998ac635f96ab4d36135dc7d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27b6e6ab0645f6327dd5a8921828fe1b",
"/": "27b6e6ab0645f6327dd5a8921828fe1b",
"main.dart.js": "35a86c8b38c7f5e71fea708f177944bf",
"manifest.json": "794a978920a0082c52eb645f3c6c6d1a",
"version.json": "02f7a9d56852139fc2b326d0064254f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
