'use strict';

importScripts('lib/sw-toolbox.js');

toolbox.precache(['index.html']);

// TODO precache images? Or cache on fetch?
toolbox.router.get('images/*', toolbox.cacheFirst);

toolbox.router.get('*', toolbox.networkFirst, {
  networkTimeoutSeconds: 2
});
