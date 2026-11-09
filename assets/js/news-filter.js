document.addEventListener("DOMContentLoaded", () => {
  const chips = Array.from(document.querySelectorAll("[data-news-filters] [data-news-type]"));
  const years = Array.from(document.querySelectorAll("[data-news-year]"));

  const applyFilter = (type) => {
    chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.newsType === type)));
    years.forEach((year) => {
      const items = Array.from(year.querySelectorAll("[data-news-item]"));
      let visible = 0;
      items.forEach((item) => {
        const matches = type === "" || item.dataset.newsItem === type;
        item.hidden = !matches;
        if (matches) visible += 1;
      });
      // A year with nothing left would otherwise show as a lone heading
      year.hidden = visible === 0;
    });
  };

  chips.forEach((chip) => chip.addEventListener("click", () => applyFilter(chip.dataset.newsType)));
});
