(function () {
  try {
    var url = new URL(window.location.href);
    // If theme already present, do nothing (don't override user choice)
    if (url.searchParams.has('theme')) return;
    url.searchParams.set('theme', 'dark');
    if (url.href !== window.location.href) {
      // Replace to avoid polluting history
      window.location.replace(url.href);
    }
  } catch (e) {
    // Silently ignore in case of URL parsing issues
  }
})();
