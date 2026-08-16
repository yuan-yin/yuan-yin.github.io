// The publications controls ride the bottom of the viewport on a sticky
// anchor. While they are pinned there the list scrolls underneath, so the
// progressive blur behind them does real work. Once the anchor reaches its
// place in the flow at the end of the list there is nothing left behind it but
// the ambient page background, and the blur+tint just paints a flat band over
// it. Mark that resting state so the stylesheet can fade the backdrop out.
document.addEventListener("DOMContentLoaded", () => {
  const anchor = document.querySelector(".pub-controls-anchor");

  if (!anchor) {
    return;
  }

  const restingClass = "pub-controls-anchor--resting";
  let queued = false;

  const update = () => {
    const rect = anchor.getBoundingClientRect();
    // Sticky bottom: 0 keeps the bar flush with the viewport bottom while
    // pinned; anywhere above that means it has settled into the flow.
    const pinned = rect.bottom >= window.innerHeight - 1;
    anchor.classList.toggle(restingClass, !pinned);
  };

  const schedule = () => {
    if (queued) {
      return;
    }

    queued = true;
    window.requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  update();
});
