(() => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const initializeCarousel = (root) => {
    if (root.dataset.carouselInitialized === "true") return;

    const viewport = root.querySelector("[data-carousel-viewport]");
    const dots = root.querySelector("[data-carousel-dots]");
    const itemSelector = root.dataset.carouselItems || "ol.bibliography > li";
    const itemClass = root.dataset.carouselItemClass;
    const items = Array.from(root.querySelectorAll(itemSelector));
    const interval = Number.parseInt(root.dataset.carouselInterval || "0", 10);

    if (!viewport || !dots || items.length === 0) return;

    root.dataset.carouselInitialized = "true";

    let activeIndex = 0;
    let timer = null;
    let paused = false;
    let isVisible = true;

    const setHeight = () => {
      const activeItem = items[activeIndex];
      if (!activeItem) return;
      viewport.style.height = `${activeItem.offsetHeight}px`;
    };

    const setActive = (nextIndex, shouldResetTimer = true) => {
      if (nextIndex < 0 || nextIndex >= items.length) return;
      activeIndex = nextIndex;

      items.forEach((item, index) => {
        const isActive = index === activeIndex;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-hidden", String(!isActive));
      });

      dots.querySelectorAll("button").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-selected", String(index === activeIndex));
      });

      setHeight();

      if (shouldResetTimer) {
        restartTimer();
      }
    };

    const advance = () => {
      if (paused) return;
      setActive((activeIndex + 1) % items.length, false);
    };

    const stopTimer = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    function restartTimer() {
      stopTimer();
      if (document.hidden || !isVisible || motionQuery.matches || items.length <= 1 || !Number.isFinite(interval) || interval <= 0) return;
      timer = window.setInterval(advance, interval);
    }

    dots.textContent = "";
    items.forEach((item, index) => {
      if (itemClass) {
        item.classList.add(itemClass);
      }
      const title = item.querySelector(".title, .about-news-card__text, .news-title")?.textContent?.trim() || `Slide ${index + 1}`;
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "about-selected-publications__dot";
      dot.setAttribute("aria-label", title);
      dot.addEventListener("click", () => setActive(index));
      dots.appendChild(dot);
    });

    if (items.length <= 1) {
      dots.hidden = true;
    }

    root.addEventListener("mouseenter", () => {
      paused = true;
    });
    root.addEventListener("mouseleave", () => {
      paused = false;
    });
    root.addEventListener("focusin", () => {
      paused = true;
    });
    root.addEventListener("focusout", () => {
      paused = false;
    });

    const observer = new MutationObserver(setHeight);
    items.forEach((item) => observer.observe(item, { attributes: true, subtree: true, childList: true }));
    items.forEach((item) => item.addEventListener("transitionend", setHeight));
    root.querySelectorAll("img").forEach((image) => image.addEventListener("load", setHeight, { once: true }));
    window.addEventListener("resize", setHeight);
    document.addEventListener("visibilitychange", restartTimer);
    if ("IntersectionObserver" in window) {
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        restartTimer();
      });
      visibilityObserver.observe(root);
    }
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", restartTimer);
    } else {
      motionQuery.addListener(restartTimer);
    }

    setActive(0);
  };

  document.querySelectorAll("[data-home-carousel]").forEach(initializeCarousel);
})();
