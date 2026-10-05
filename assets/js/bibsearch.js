import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  // actual bibsearch logic
  // Entries can also be found by their bib key (the id on .publication-card__body)
  const matchesBibKey = (element, searchTerm) => {
    if (!searchTerm) return false;
    const body = element.querySelector(".publication-card__body[id]");
    return body != null && body.id.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  };

  const filterItems = (searchTerm) => {
    document.querySelectorAll(".bibliography, .unloaded").forEach((element) => element.classList.remove("unloaded"));

    // highlight-search-term
    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
      if (nonMatchingElements == null) {
        return;
      }
      nonMatchingElements.forEach((element) => {
        if (matchesBibKey(element, searchTerm)) {
          return;
        }
        element.classList.add("unloaded");
      });
    } else {
      // Simply add unloaded class to all non-matching items if Browser does not support CSS highlights
      document.querySelectorAll(".bibliography > li").forEach((element, index) => {
        const text = element.innerText.toLowerCase();
        if (text.indexOf(searchTerm) == -1 && !matchesBibKey(element, searchTerm)) {
          element.classList.add("unloaded");
        }
      });
    }

    document.querySelectorAll("h2.bibliography").forEach(function (element) {
      let iterator = element.nextElementSibling; // get next sibling element after h2, which can be h3 or ol
      let hideFirstGroupingElement = true;
      // iterate until next group element (h2), which is already selected by the querySelectorAll(-).forEach(-)
      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const ol = iterator;
          const unloadedSiblings = ol.querySelectorAll(":scope > li.unloaded");
          const totalSiblings = ol.querySelectorAll(":scope > li");

          if (unloadedSiblings.length === totalSiblings.length) {
            ol.previousElementSibling.classList.add("unloaded"); // Add the '.unloaded' class to the previous grouping element (e.g. year)
            ol.classList.add("unloaded"); // Add the '.unloaded' class to the OL itself
          } else {
            hideFirstGroupingElement = false; // there is at least some visible entry, don't hide the first grouping element
          }
        }
        iterator = iterator.nextElementSibling;
      }
      // Add unloaded class to first grouping element (e.g. year) if no item left in this group
      if (hideFirstGroupingElement) {
        element.classList.add("unloaded");
      }
    });
  };

  const input = document.getElementById("bibsearch");
  const filterRoot = document.querySelector("[data-pub-filter]");
  const countEl = document.querySelector("[data-pub-filter-count]");
  const emptyEl = document.querySelector("[data-pub-filter-empty]");
  const emptyTermEl = document.querySelector("[data-pub-filter-term]");
  const fieldClearBtn = filterRoot?.querySelector(".pub-filter__clear");
  const listRoot = document.querySelector(".publications");

  // Reflect the filter state: match count, clear button, empty message, and
  // the pinned state (the bar sticks under the navbar only while a query is
  // narrowing the list, so the reason the list is shorter stays visible)
  const updateFilterUi = (searchTerm) => {
    if (!filterRoot) return;
    const active = searchTerm.trim() !== "";
    const items = document.querySelectorAll(".publications ol.bibliography > li");
    const visible = Array.from(items).filter((item) => !item.classList.contains("unloaded")).length;

    filterRoot.classList.toggle("pub-filter--active", active);
    listRoot?.classList.toggle("publications--filtering", active);
    if (fieldClearBtn) fieldClearBtn.hidden = !active;
    if (countEl) countEl.textContent = active ? `${visible} of ${items.length}` : "";
    if (emptyEl) emptyEl.hidden = !active || visible > 0;
    if (emptyTermEl) emptyTermEl.textContent = searchTerm.trim();
  };

  const applyFilter = (searchTerm) => {
    filterItems(searchTerm.toLowerCase());
    updateFilterUi(searchTerm);
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
    input.value = hashValue;
    applyFilter(hashValue);
  };

  // Only filter once typing pauses for 300 ms
  let timeoutId;
  input.addEventListener("input", function () {
    clearTimeout(timeoutId);
    const searchTerm = this.value;
    // Clearing the field restores the list at once rather than after the pause
    if (searchTerm === "") {
      applyFilter("");
      return;
    }
    timeoutId = setTimeout(() => applyFilter(searchTerm), 300);
  });

  const clearFilter = ({ focus = false } = {}) => {
    clearTimeout(timeoutId);
    input.value = "";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    applyFilter("");
    if (focus) input.focus();
  };

  document.querySelectorAll("[data-pub-filter-clear]").forEach((button) => {
    button.addEventListener("click", () => clearFilter({ focus: true }));
  });

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (input.value) {
      clearFilter();
    } else {
      input.blur();
    }
  });

  // "/" jumps to the filter from anywhere on the page, unless already typing
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target.closest("input, textarea, select, [contenteditable]")) return;
    event.preventDefault();
    input.focus();
    input.select();
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  updateInputField(); // Update filter when page loads
});
