document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-sticky-year-groups]").forEach((container) => {
    Array.from(container.children).forEach((child) => {
      if (!child.matches("h2.bibliography")) {
        return;
      }

      const section = document.createElement("section");
      section.className = "publication-year-section";
      container.insertBefore(section, child);
      section.appendChild(child);

      let next = section.nextElementSibling;
      while (next && !next.matches("h2.bibliography")) {
        const current = next;
        next = next.nextElementSibling;
        section.appendChild(current);
      }
    });
  });

  const floatingYearContainers = document.querySelectorAll("[data-floating-year-container], [data-sticky-year-groups]");

  if (!floatingYearContainers.length) {
    return;
  }

  let hideTimer;
  const floatingClass = "sticky-year--floating";
  const activeClass = "sticky-year--active";
  const revealDuration = 2000;
  // The marker sits just below the pill's pin line, which CSS sets from the
  // navbar's height and the status-bar inset, so read it instead of assuming it.
  const markerOffset = 15;
  const nearOriginalThreshold = 72;

  const isVisible = (container) => {
    const rect = container.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };

  const updateFloatingStates = (showFloatingYears) => {
    floatingYearContainers.forEach((container) => {
      const containerVisible = isVisible(container);
      const sections = container.querySelectorAll(".publication-year-section, .course-year-section");

      sections.forEach((section) => {
        const heading = section.querySelector("h2.bibliography, .year");
        if (!heading) {
          return;
        }

        const markerTop = parseFloat(getComputedStyle(heading).top) + markerOffset;
        const rect = section.getBoundingClientRect();
        const distanceFromOriginalPosition = markerTop - rect.top;
        const isFarFromOriginalPosition = distanceFromOriginalPosition > nearOriginalThreshold;
        const isFloating = isFarFromOriginalPosition && rect.bottom > markerTop + heading.offsetHeight;

        heading.classList.toggle(floatingClass, isFloating);
        heading.classList.toggle(activeClass, Boolean(isFloating && showFloatingYears && containerVisible));
      });
    });
  };

  const hideYears = () => {
    updateFloatingStates(false);
  };

  const revealYears = () => {
    window.clearTimeout(hideTimer);
    updateFloatingStates(true);
    hideTimer = window.setTimeout(hideYears, revealDuration);
  };

  floatingYearContainers.forEach((container) => {
    const sections = container.querySelectorAll(".publication-year-section, .course-year-section");
    sections.forEach((section) => {
      const heading = section.querySelector("h2.bibliography, .year");
      heading?.classList.add("sticky-year");
    });
  });

  window.addEventListener("scroll", revealYears, { passive: true });
  window.addEventListener("resize", hideYears);
});
