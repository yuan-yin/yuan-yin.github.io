// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: 96,
  });

  var publicationLightbox = null;
  var publicationLightboxCloseTimer = null;

  function removePublicationLightbox() {
    if (!publicationLightbox) return;

    publicationLightbox.remove();
    publicationLightbox = null;
    publicationLightboxCloseTimer = null;
  }

  function closePublicationLightbox() {
    if (!publicationLightbox || publicationLightbox.classList.contains("publication-preview-lightbox--closing")) return;

    publicationLightbox.classList.add("publication-preview-lightbox--closing");
    publicationLightboxCloseTimer = window.setTimeout(removePublicationLightbox, 150);
  }

  function openPublicationLightbox(image) {
    if (publicationLightboxCloseTimer) {
      window.clearTimeout(publicationLightboxCloseTimer);
    }
    removePublicationLightbox();

    publicationLightbox = document.createElement("div");
    publicationLightbox.className = "publication-preview-lightbox";
    publicationLightbox.setAttribute("role", "dialog");
    publicationLightbox.setAttribute("aria-modal", "true");

    var openedImage = document.createElement("img");
    openedImage.className = "publication-preview-lightbox__image";
    openedImage.src = image.getAttribute("src");
    openedImage.alt = image.getAttribute("alt") || "";
    openedImage.decoding = "async";

    publicationLightbox.appendChild(openedImage);
    document.body.appendChild(publicationLightbox);
  }

  $(".publication-card__preview")
    .attr("role", "button")
    .attr("tabindex", "0")
    .on("click", function () {
      openPublicationLightbox(this);
    })
    .on("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPublicationLightbox(this);
      }
    });

  $(document)
    .on("click", ".publication-preview-lightbox", closePublicationLightbox)
    .on("wheel touchmove scroll", closePublicationLightbox)
    .on("keydown", function (event) {
      if (event.key === "Escape") {
        closePublicationLightbox();
      }
    });

  $(window).on("scroll", closePublicationLightbox);
});
