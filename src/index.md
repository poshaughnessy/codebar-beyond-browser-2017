title: Beyond the Browser (Codebar)
output: public/index.html
theme: peter-theme
controls: false

-- bg-buzz1 bg-fade

# Beyond the Browser
## PWAs & the future of web apps
### Codebar, Feb 2017

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
</div>

<div class="credit">[Carlos](https://www.flickr.com/photos/armadillo444/) via [Flickr](https://www.flickr.com/photos/armadillo444/2901378790)</div>

-- align-top img-with-caption

![Samsung Internet icon on homescreen](images/samsung-internet-phone-blur.png)

[@samsunginternet](https://twitter.com/samsunginternet)

-- bg-iphone-nyt

<div class="credit">[Robert Scoble](https://www.flickr.com/photos/scobleizer/4697192856)</div>

--

![StatCounter mobile vs desktop graph](images/internet_usage_2009_2016_ww.png)

<!-- ![xkcd cartoon, Mac/PC](images/xkcd_mac_pc.png) -->
<!-- <div class="credit">[xkcd](http://xkcd.com/934/)</div> -->

<!-- img-with-caption -->

<!-- ![comScore time spent](images/comscore-time-spent.png) -->

<!-- <div class="caption">[Reports](http://venturebeat.com/2013/04/03/the-mobile-war-is-over-and-the-app-has-won-80-of-mobile-time-spent-in-apps/) [suggest](http://flurrymobile.tumblr.com/post/127638842745/seven-years-into-the-mobile-revolution-content-is) 80%-90% of time is spent in apps</div> -->

<!-- ![comScore app downloads](images/comscore-app-downloads.png) -->
<!-- <div class="credit">[comScore](http://www.comscore.com/Insights/Presentations-and-Whitepapers/2016/The-2016-US-Mobile-App-Report) via [recode.net](http://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore)</div> -->

--

![comScore mobile web reach](images/comscore-mobile-web-crop.png)

-- bg-best-of-both bg-fade

<div class="left">
<h2> Best of web 🌎</h2>
<ul>
<li>Multi-platform</li>
<li>Frictionless</li>
<li>Discoverable</li>
<li>Open</li>
</ul>
</div>

<div class="right">
<h2> Best of apps  📱</h2>
<ul>
<li>Add to Home Screen</li>
<li>Offline & instant load</li>
<li>Push notifications</li>
<li>Hardware integration</li>
</ul>
</div>

<!-- > &ldquo;PWAs combine the best of web & the best of apps&rdquo; 💯-->

<div class="credit">[Morris Quality Bakers](http://www.morrisqualitybakers.co.uk/goods/hovis-best-of-both-thick/)</div>

--

![Progressive Web Apps logo](images/pwa-logo.jpg)

<!-- > &ldquo;PWAs are all about removing friction&rdquo; 🏎-->

--

![Web nearing parity with native](images/web-native-parity.png)

<div class="credit">[What Comes Next For The Web? - Paul Kinlan](https://www.youtube.com/watch?v=YJwrBbze_Ec)</div>

-- bg-white

[![Browser representation at PWA Dev Summit](images/pwa-dev-summit.png)](https://twitter.com/nicoinch/status/745216197004754944)

-- bg-white

[![Twitter moved to a PWA](images/twitter-pwa.png)](https://twitter.com/necolas/status/829128165314306048)

-- img-with-caption

[![podle.audio](images/podle-samsunginternet5_2.png)](https://podle.audio)

<div class="caption">[podle.audio](https://podle.audio)</div>

-- img-with-caption

[![pwa.rocks](images/pwa-rocks.png)](https://pwa.rocks)

<div class="caption">[pwa.rocks](https://pwa.rocks)</div>

-- img-with-caption

[![outweb.io](images/outweb.png)](https://outweb.io)

<div class="caption">[outweb.io](https://outweb.io)</div>

-- bg-buzz-nasa bg-fade beyond beyond-small

## Beyond the browser tab
#### with
# Web App Manifest
#### &
# Add To Homescreen

-- manifest-code

```html
<link rel="manifest" href="/manifest.json">
```

```json
{
  "name": "Podle",
  "icons": [
    {
      "src": "/static/icon192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/icon512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "background_color": "white",
  "theme_color": "#4E3F30",
  ...
}
```

-- img-with-caption four-images

![Add to homescreen (1)](images/snapwat-android-a2h-1.png) ![Add to homescreen (2)](images/snapwat-android-a2h-2.png) ![Add to homescreen (3)](images/snapwat-android-a2h-3.png) ![Add to homescreen (4)](images/snapwat-android-a2h-4.png)

<div class="caption">[developers.google.com/web/updates/2017/02/improved-add-to-home-screen](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen)</div>

<!-- https://blog.chromium.org/2017/02/chrome-57-beta-css-grid-layout-improved.html -->

-- img-with-caption

<img src="images/snapwat-homescreen-icon.gif" style="min-width: 400px" alt="Samsung Internet PWA icons"/>

<div class="caption">[pwas.samsunginter.net](https://pwas.samsunginter.net)</div>

-- bg-buzz2 bg-fade beyond

## Beyond online
#### with
# Service Workers

<div class="credit">[Robert Mitchem](https://www.flickr.com/photos/29290711@N04/) via [Flickr](https://www.flickr.com/photos/29290711@N04/4299610660/in/photolist-7xWCsh-4p7WUc-c9SA1-4p7WUk-eekmjY-5wYXcL-eekpus-eTmXrz-qqcft4-eeeE7k-94caDx-FrAo5-c9RX3-c9Snm-nbYsTe-e3un1X-8fAVES-8fATZy-8fAVeE-8F2Rhe-8fAX5m-8fAUPU-bu5ZkE-8fxGyK-8fxGLk-8fxEvV-8fAVQN-8fAV2f-8fAUCJ-6JP7C2-c9Tti-c9T3i-c9TkX-PePL8-c9T9A-c9TfB-c9Stj-6LpjA7-c9THy-c9S9V-c9RAT-8vgbRB-8hBKqd-8uLTaQ-c9S3P-6LpjEb-72bsgt-c9SG9-c9TAV-c9SNK)</div>

-- img-with-caption

![Service worker diagram](images/service-worker-large-mod.png)

<div class="caption">From ["The (Not So) Secret Powers Of The Mobile Browser" by Stéphanie Walter](https://www.smashingmagazine.com/2016/12/the-not-so-secret-powers-of-the-mobile-browser/)</div>

--

```javascript
navigator.serviceWorker.register('/service-worker.js');

// Inside service-worker.js...

// Good for caching on install ("pre-cache")
self.addEventListener('install', ...);

// Good time to clear out old caches
self.addEventListener('activate', ...);

// Intercept network requests
self.addEventListener('fetch', ...);
```

<div class="caption">[Using Service Workers - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)</div>

-- highlight-code

## sw-toolbox

* `networkFirst` (fallback to cache)
* `cacheFirst` (fallback to network)
* `fastest` (serve whichever comes back first)
* `networkOnly`
* `cacheOnly`

<div class="caption">[github.com/GoogleChrome/sw-toolbox](https://github.com/GoogleChrome/sw-toolbox)</div>

<!-- ![Chrome service worker internals](images/chrome-service-worker-internals.png) -->

-- bg-buzz3 bg-fade beyond

## Beyond regular engagement
#### with
# Push Notifications

<div class="credit">[Brandon Serna](https://www.flickr.com/photos/54732806@N03/) via [Flickr](https://www.flickr.com/photos/54732806@N03/5378370232/)</div>

<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png) ![Firefox](images/firefox.png)</div>

-- img-with-caption

![Guardian live election web push notifications](images/guardian-push-notifications.jpg)

<div class="caption">[&ldquo;Building the Guardian’s Live Elections Notifications&rdquo;](https://medium.com/the-guardian-mobile-innovation-lab/building-the-guardians-live-elections-notifications-87bafbcf510)</div>

-- img-with-caption

![Podle push notification](images/podle-push-notification.png)

<div class="caption">[podle.audio](https://podle.audio)</div>

<!-- [bit.ly/web-fundamentals-push-notifications](http://bit.ly/web-fundamentals-push-notifications) -->

<!-- ![Podle push debugging](images/podle-push-debug.png) -->

<!-- ![Podle push debugging](images/podle-push-debug2.png) -->

<!-- img-with-caption -->
<!-- ![Push notification anti-pattern](images/push-bad.jpg) -->
<!-- <div class="caption">*Please* keep it [timely, relevant and precise!](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)</div> -->

-- bg-buzz4 bg-fade beyond

## Beyond the digital world
#### with
# Physical Web
#### &
# Web Bluetooth

<div class="credit">[Rafael Romero](https://www.flickr.com/photos/35663018@N03/) via [Flickr](https://www.flickr.com/photos/35663018@N03/3952278050/)</div>

<!-- <div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet beta](images/sbrowser5.2-beta.png) ![Firefox](images/firefox.png)</div> -->

-- three-images img-with-caption

![Physical Web](images/physical-web-google.png) ![Project Magnet](images/project-magnet.png) ![CloseBy](images/closeby.png)

<div class="caption">Google's [Physical Web](https://support.google.com/chrome/answer/6239299), Mozilla's [Project Magnet](https://github.com/mozilla-magnet/magnet), Samsung's [CloseBy](https://samsunginter.net/docs/closeby.html)</div>

-- img-with-caption

![Beacon toy app](images/beacon-toy-app.png)

<div class="caption">[Beacon Toy (Android)](https://play.google.com/store/apps/details?id=com.uriio)</div>

--

![CloseBy](images/closeby-notification.png)

-- 

## Web Bluetooth

```javascript
navigator.bluetooth.requestDevice({
  filters: [{
    name: 'SomeAmazingRobot'
  }],
  optionalServices: ['battery_service']
})
...
```

<div class="corner-logos">![Chrome](images/chrome.png)</div>

--

![Bluetooth pairing prompt](images/bluetooth-pairing-prompt.png)

<!-- ```javascript -->
<!--  ... -->
<!--  .then(device => device.gatt.connect()) -->
<!--  .then(server => server.getPrimaryService('battery_service')) -->
<!--  .then(service => service.getCharacteristic('battery_level')) -->
<!-- ``` -->

<!-- ```javascript -->
<!--  ... -->
<!--  .then(characteristic => { -->
<!--    // Read battery level -->
<!--    return characteristic.readValue(); -->
<!--  }) -->
<!--  .then(value => { -->
<!--    var batteryLevel = value.getUint8(0); -->
<!--    console.log('Battery level', batteryLevel); -->
<!--  }); -->
<!-- ``` -->

<!-- <div class="caption">[bit.ly/chrome-bluetooth-guide](http://bit.ly/chrome-bluetooth-guide)</div> -->

--

<video controls height="75%">
  <source src="videos/webdrone-v1-1.webm"/>
  <source src="videos/webdrone-v1-1.mp4"/>
</video>

<div class="caption">[bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)</div>

--

## How I'm controlling these slides

* Web Bluetooth
* Web Sockets
* [Bleno](https://github.com/sandeepmistry/bleno) (Node)

<!-- img-with-caption -->
<!-- ![puck.js](images/puckjs.jpg) -->
<!-- <div class="caption">[puck.js](http://www.puck-js.com/)</div> -->

<!-- TODO if time replace with my video! https://twitter.com/poshaughnessy/status/808065469001375744 -->

-- bg-buzz5 bg-fade beyond

## Beyond reality
#### with
# WebVR

<div class="credit">[Kevin Harber](https://www.flickr.com/photos/kevharb/) via [Flickr](https://www.flickr.com/photos/kevharb/3065077415/)</div>

-- bg-samsung-internet-for-gear-vr

-- iframe

<!-- TODO replace with local copy if time -->

<iframe width="90%" height="90%" style="margin-top:5vh" src="https://www.youtube.com/embed/mN9G6lQKVsI" frameborder="0" allowfullscreen></iframe>

-- img-with-caption

![Real and virtual audiences for Ada's WebVR talk](images/metaverse-tweet.png)

<div class="caption">[&ldquo;Wow that was some night in VR!&rdquo; - Ada Rose Edwards](https://medium.com/samsung-internet-dev/wow-that-was-some-night-in-vr-ba091be38794)</div>

<!-- And you can combine with WebRTC... -->

<!-- Remember to say it includes the polyfill for Cardboard -->

-- bg-lights-of-city

```html
<script src="aframe.js"></script>
...
<a-scene>
  <a-sphere position="0 1.25 -1" radius="1.25" 
            color="#EF2D5E"></a-sphere>
  <a-box position="-1 0.5 1" rotation="0 45 0" 
         color="#4CC3D9"></a-box>
  <a-cylinder position="1 0.75 1" radius="0.5" 
              color="#FFC65D"></a-cylinder>
  <a-plane rotation="-90 0 0" width="4" height="4" 
            color="#7BC8A4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```

<div class="caption">[aframe.io](https://aframe.io)</div>

-- iframe

<iframe src="demos/aframe-basic/index.html" scrolling="no" width="90%" height="90%" style="margin-top:5vh"></iframe>

<!-- ## Browser enthusiasm (so far) -->
<!-- ![WebVR browser interest](images/webvr-browser-enthusiasm.png) -->
<!-- <div class="caption">[iswebvrready.org](https://iswebvrready.org/)</div> -->

-- beyond-small

### Beyond clunky checkout forms
#### with
## Web Payments

<div class="left" style="width:58%; font-size:0.9em;">
<pre style="display:block;"><code class="lang-javascript"><span class="hljs-keyword">new</span> PaymentRequest(methodData, details)
  .show()
  .then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">uiResult</span>) </span>{
    processPayment(uiResult);
  })
  .catch(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error</span>) </span>{
    handlePaymentError(error);
  });</code></pre>
</div>
<div class="right" style="width:38%">
  <img alt="Payment Request example" src="images/payment-request-crop.png" style="margin:0 0 0 10px">
</div>

<div class="caption">[bit.ly/how-to-take-web-payments](http://bit.ly/how-to-take-web-payments)</div>

-- beyond-small

### Beyond network downtime
#### with
## Background sync

```javascript
// Register a one-off sync
navigator.serviceWorker.ready.then(function(swReg) {
    return swReg.sync.register('myLovelySync');
  });

// service-worker.js
self.addEventListener('sync', function(event) {
  if (event.tag == 'myLovelySync') {
    ...
```

<div class="corner-logos">![Chrome](images/chrome.png)</div>

-- beyond-small

### Beyond single origin caching
#### with
## Foreign fetch

```
Link: </service-worker.js>; rel="serviceworker"
Origin-Trial: token_obtained_from_signup
```

[bit.ly/foreign-fetch](http://bit.ly/foreign-fetch)

<div class="corner-logos">![Chrome](images/chrome.png)</div>

-- bg-buzz6 bg-fade beyond-browser-compare

## Beyond the *Browser*

<table>
  <tr>
    <td>
      <img src="images/iphone-safari-web-browser.png"/>      
    </td>
    <td>
      <img src="images/web-2017-annotated.png"/>
    </td>
  </tr>
  <tr>
    <td>2007</td>
    <td>2017</td>
  </tr>
</table>


<div class="caption">[bit.ly/is-browser-still-the-right-word](https://medium.com/samsung-internet-dev/is-browser-still-the-right-word-6815f93b866c)</div>

<div class="credit">[payayita](https://www.flickr.com/photos/payayita/) via [Flickr](https://www.flickr.com/photos/payayita/1129150332/)</div>

-- beyond get-involved bg-toy-story-alien bg-fade

## We can all help to shape
# the future of the web

#### Web Incubator Community Group — [wicg.io](https://wicg.io/)
#### Chromium contributions — [samsung.github.io/Chromium/](http://samsung.github.io/Chromium/)

-- bg-buzz-bye bg-fade

# Thanks! 🙏

#### **For a prize!** How many Buzz Lightyears were in this presentation? 

<!-- Shh! The secret answer is: 8 -->

### [@poshaughnessy](https://twitter.com/poshaughnessy)

### [@samsunginternet](https://twitter.com/samsunginternet)

<div class="credit">[Bridgette Wynn](https://www.flickr.com/photos/brwynn/) via [Flickr](https://www.flickr.com/photos/brwynn/4870133844/in/photolist-8qmH7U-a27zM3-7h1ntQ-FMpJ5V-8pVgfS-6fQV4k-8offGv-dLmtz1-cfnyyj-9pUG6t-7Q6mc8-dz82Ks-8AQuwa-95Zimm-8rDw4L-8AVpKL-9dhs6t-6FsRjV-8rDyvs-9qam69-8dBd7t-6FsRj6-92qxGP-4nkESf-8A1fhL-98ZQP6-bWpBQ8-95WfNF-6FwY8w-b7JpX2-ybecj-95WfRH-8efWsX-bRjj8e-9nesie-6FwY6N-oNMUh-a7CFuW-8AUEyj-qhHEZy-9cGQP9-qhGZcf-ortUC5-8C5CKb-7SynPk-8rDus3-95w2dP-8wsvSY-fFat1y-8KRKhJ)</div>
