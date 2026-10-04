(() => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowQuery = window.matchMedia("(max-width: 767.98px)");

  const initializeCarousel = (root) => {
    if (root.dataset.carouselInitialized === "true") return;

    const viewport = root.querySelector("[data-carousel-viewport]");
    const dots = root.querySelector("[data-carousel-dots]");
    const itemSelector = root.dataset.carouselItems || "ol.bibliography > li";
    const itemClass = root.dataset.carouselItemClass;
    const items = Array.from(root.querySelectorAll(itemSelector));
    const interval = Number.parseInt(root.dataset.carouselInterval || "0", 10);
    const uniformHeight = root.dataset.carouselUniformHeight !== "false";

    if (!viewport || !dots || items.length === 0) return;

    root.dataset.carouselInitialized = "true";

    const list = items[0].parentElement;
    let pages = [];
    let activePage = 0;
    let timer = null;
    let paused = false;
    let isVisible = true;

    const readCount = (value) => {
      const count = Number.parseInt(value || "", 10);
      return Number.isFinite(count) && count > 0 ? count : null;
    };

    // Items per slide, with an optional smaller count on narrow screens
    const getPerPage = () => {
      const wide = readCount(root.dataset.carouselPerPage) || 1;
      return narrowQuery.matches ? readCount(root.dataset.carouselPerPageNarrow) || wide : wide;
    };

    // Split items into as few slides as perPage allows, balanced so the last
    // slide isn't left with a lone item (13 by 3 -> 3, 3, 3, 2, 2)
    const buildPages = (perPage) => {
      const count = Math.ceil(items.length / perPage);
      const base = Math.floor(items.length / count);
      const extra = items.length % count;
      const result = [];
      let start = 0;
      for (let page = 0; page < count; page += 1) {
        const size = base + (page < extra ? 1 : 0);
        result.push(items.slice(start, start + size));
        start += size;
      }
      return result;
    };

    let measuringHeight = false;
    const setHeight = () => {
      // Uniform card height: every card reserves the tallest card's height,
      // so nothing inside a slide reflows when switching
      if (measuringHeight) return; // our own style writes re-trigger observers
      measuringHeight = true;
      const cards = items.map((item) => item.querySelector(".publication-card") || item);
      cards.forEach((card) => {
        card.style.height = "";
      });
      let max = 0;
      items.forEach((item) => {
        max = Math.max(max, item.offsetHeight);
      });
      if (max && uniformHeight) {
        const px = `${max}px`;
        // Explicit height, not min-height: Safari doesn't stretch grid rows
        // into min-height space, which left the button row un-pinned
        cards.forEach((card) => {
          card.style.height = px;
        });
      }
      // The viewport follows the active slide (its height transitions), so a
      // shorter last slide doesn't leave an empty band
      const height = list.getBoundingClientRect().bottom - viewport.getBoundingClientRect().top;
      if (height > 0) {
        viewport.style.height = `${Math.ceil(height)}px`;
      }
      window.requestAnimationFrame(() => {
        measuringHeight = false;
      });
    };

    const setActive = (nextPage, shouldResetTimer = true) => {
      if (nextPage < 0 || nextPage >= pages.length) return;
      activePage = nextPage;

      pages.forEach((pageItems, pageIndex) => {
        const isActive = pageIndex === activePage;
        pageItems.forEach((item) => {
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-hidden", String(!isActive));
        });
      });

      dots.querySelectorAll("button").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activePage);
        dot.setAttribute("aria-selected", String(index === activePage));
      });

      setHeight();

      if (shouldResetTimer) {
        restartTimer();
      }
    };

    const advance = () => {
      if (paused) return;
      setActive((activePage + 1) % pages.length, false);
    };

    const stopTimer = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    function restartTimer() {
      stopTimer();
      if (document.hidden || !isVisible || motionQuery.matches || pages.length <= 1 || !Number.isFinite(interval) || interval <= 0) return;
      timer = window.setInterval(advance, interval);
    }

    const getTitle = (item, index) => item.querySelector(".title, .about-news-card__text, .news-title")?.textContent?.trim() || `Item ${index + 1}`;

    // (Re)build slides and dots for the current per-page count, keeping the
    // first item of the current slide in view
    const layoutPages = () => {
      const firstVisible = pages[activePage]?.[0] || items[0];
      pages = buildPages(getPerPage());

      dots.textContent = "";
      pages.forEach((pageItems, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "about-selected-publications__dot";
        const label = pageItems.length > 1 ? `Slide ${index + 1} of ${pages.length}` : getTitle(pageItems[0], items.indexOf(pageItems[0]));
        dot.setAttribute("aria-label", label);
        dot.addEventListener("click", () => setActive(index));
        dots.appendChild(dot);
      });
      dots.hidden = pages.length <= 1;

      const nextPage = pages.findIndex((pageItems) => pageItems.includes(firstVisible));
      setActive(Math.max(nextPage, 0));
    };

    if (itemClass) {
      items.forEach((item) => item.classList.add(itemClass));
    }

    // Whole-row interaction: the dots are tiny, so clicks anywhere on the
    // row (gaps and padding included) jump to the nearest dot's slide.
    // Direct dot clicks and keyboard activation are handled by the buttons.
    dots.addEventListener("click", (event) => {
      if (event.target !== dots) return;
      const buttons = Array.from(dots.querySelectorAll("button"));
      if (buttons.length === 0) return;
      let nearestIndex = 0;
      let nearestDistance = Infinity;
      buttons.forEach((button, index) => {
        const rect = button.getBoundingClientRect();
        const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActive(nearestIndex);
    });

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
    if (narrowQuery.addEventListener) {
      narrowQuery.addEventListener("change", layoutPages);
    } else {
      narrowQuery.addListener(layoutPages);
    }
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

    layoutPages();
  };

  document.querySelectorAll("[data-home-carousel]").forEach(initializeCarousel);
})();
