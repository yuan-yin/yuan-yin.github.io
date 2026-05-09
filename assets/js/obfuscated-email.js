(() => {
  const decodeCodes = (codes) =>
    codes
      .split(",")
      .filter(Boolean)
      .map((code) => String.fromCharCode(Number.parseInt(code, 10)))
      .join("");

  const openEmail = (event) => {
    const link = event.currentTarget;
    const user = decodeCodes(link.dataset.userCodes || "");
    const domain = decodeCodes(link.dataset.domainCodes || "");

    if (!user || !domain) {
      return;
    }

    event.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  const initObfuscatedEmail = () => {
    document.querySelectorAll(".js-obfuscated-email").forEach((link) => {
      if (link.dataset.emailInitialized === "true") {
        return;
      }

      link.dataset.emailInitialized = "true";
      link.addEventListener("click", openEmail);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initObfuscatedEmail);
  } else {
    initObfuscatedEmail();
  }
})();
