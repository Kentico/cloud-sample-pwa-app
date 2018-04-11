if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  
  workbox.routing.registerRoute(
    /https:\/\/deliver\.kenticocloud\.com\/66ab95de-6599-0018-f141-3c9dc08fe797\/items/,
    workbox.strategies.networkFirst()
  );

  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}