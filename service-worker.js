/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "882df6b34a3a64f910c36b829decd23e"
  },
  {
    "url": "assets/css/0.styles.118d8378.css",
    "revision": "a7a17a28864017b4423c685afa6bae6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.422e6ebd.js",
    "revision": "93e74dd6b423dc526aceddbfd4999f6d"
  },
  {
    "url": "assets/js/11.8347aef4.js",
    "revision": "c9e6e72bb4362bfd6cad9c94ca9a1ccf"
  },
  {
    "url": "assets/js/12.83f63c88.js",
    "revision": "59a60c271444dd4275dc5a064864bd10"
  },
  {
    "url": "assets/js/13.b7863755.js",
    "revision": "15df84068bf9c89c2271987a4f1be9f1"
  },
  {
    "url": "assets/js/14.13adbcc9.js",
    "revision": "3c6fa52e176df95ff210cf79158ec885"
  },
  {
    "url": "assets/js/3.0c852ced.js",
    "revision": "79d2c3ed0e8961b397530d49cc20a2d3"
  },
  {
    "url": "assets/js/4.be30d8ec.js",
    "revision": "c74c0262957da47b75abef7ba384f775"
  },
  {
    "url": "assets/js/5.5e260e2e.js",
    "revision": "0a7c69ed6a06ff075cdb02bf664a012f"
  },
  {
    "url": "assets/js/6.0ad8cbd7.js",
    "revision": "bc18785f2af68105a00cbd759ff8391a"
  },
  {
    "url": "assets/js/7.3f0745db.js",
    "revision": "fa73eaf846e114e56d50330b107340ea"
  },
  {
    "url": "assets/js/8.0c694775.js",
    "revision": "65f7c1bdc847723b8adbe69dab992a77"
  },
  {
    "url": "assets/js/9.61171042.js",
    "revision": "5553879e800d24568b90197f8dbc96e7"
  },
  {
    "url": "assets/js/app.1f096498.js",
    "revision": "e930931d3c641a7e9ebd3529ad469467"
  },
  {
    "url": "assets/js/vendors~flowchart.fb394e02.js",
    "revision": "3412236862cb643d45f0768e898915eb"
  },
  {
    "url": "index.html",
    "revision": "53ff7d77f74140fa0532c2d7c8e7b0ec"
  },
  {
    "url": "logo_bw.png",
    "revision": "8237ed80fabb4576ba5e5f0c7675e8ed"
  },
  {
    "url": "logo_color.png",
    "revision": "6149f70e4be5a02515543d568ac682b2"
  },
  {
    "url": "package/index.html",
    "revision": "925ad64d20c792fc792c38f4645a9ac4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
