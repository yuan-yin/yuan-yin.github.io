(() => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const startRoller = (viewport) => {
    const items = Array.from(viewport.querySelectorAll(".about-news-card__item"));
    const visibleCount = Number.parseInt(viewport.dataset.visibleCount || "2", 10);
    const rollStep = Number.parseInt(viewport.dataset.rollStep || "1", 10);
    const interval = Number.parseInt(viewport.dataset.rollInterval || "4200", 10);

    if (motionQuery.matches || items.length <= visibleCount || visibleCount < 1 || rollStep < 1) return;

    let index = 0;
    let paused = false;

    const scrollToIndex = (nextIndex) => {
      const target = items[nextIndex];
      if (!target) return;

      viewport.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    };

    const advance = () => {
      if (paused) return;
      index = index + rollStep > items.length - visibleCount ? 0 : index + rollStep;
      scrollToIndex(index);
    };

    viewport.addEventListener("mouseenter", () => {
      paused = true;
    });
    viewport.addEventListener("mouseleave", () => {
      paused = false;
    });
    viewport.addEventListener("focusin", () => {
      paused = true;
    });
    viewport.addEventListener("focusout", () => {
      paused = false;
    });

    window.setInterval(advance, interval);
  };

  document.querySelectorAll("[data-about-news-roller]").forEach(startRoller);
})();
