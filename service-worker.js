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
    "revision": "b04184486f6ab369e1df087ea8e6b5a2"
  },
  {
    "url": "assets/css/0.styles.5112a2dd.css",
    "revision": "0e88cd6b83bcc2ab08743d67148686fc"
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
    "url": "assets/js/3.00b88541.js",
    "revision": "79d2c3ed0e8961b397530d49cc20a2d3"
  },
  {
    "url": "assets/js/4.be30d8ec.js",
    "revision": "c74c0262957da47b75abef7ba384f775"
  },
  {
    "url": "assets/js/5.9a48c9c2.js",
    "revision": "6b41c8981fc27f612318146efc1f197f"
  },
  {
    "url": "assets/js/6.3b0b8f30.js",
    "revision": "d75efa1f119b8e0ac1ead13d74b0829c"
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
    "url": "assets/js/app.409b589f.js",
    "revision": "8f1147b01bf681bc383f57fb89e8be96"
  },
  {
    "url": "assets/js/vendors~flowchart.fb394e02.js",
    "revision": "3412236862cb643d45f0768e898915eb"
  },
  {
    "url": "index.html",
    "revision": "d6d8e3e60d7cc7003d4095ccf111df59"
  },
  {
    "url": "logo_bw.png",
    "revision": "66e754382f79e3649deac5acb7d3c4c6"
  },
  {
    "url": "logo_color.png",
    "revision": "6149f70e4be5a02515543d568ac682b2"
  },
  {
    "url": "package/index.html",
    "revision": "c81d4d659a2ce436cf50f9f72cf29e45"
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
