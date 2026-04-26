// Mark macOS early enough that CSS can show the correct search shortcut
// without swapping text after the navbar has already painted.
(() => {
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  if (/mac/i.test(platform)) {
    document.documentElement.classList.add("shortcut-is-mac");
  }
})();
