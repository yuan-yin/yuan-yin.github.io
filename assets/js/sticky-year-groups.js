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
});
