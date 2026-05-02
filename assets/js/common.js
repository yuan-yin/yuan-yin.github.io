$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  function togglePublicationPanel(button, panelSelector) {
    var panelGroup = $(button).parent().parent();
    var target = panelGroup.find(panelSelector + ".hidden").first();
    var openPanels = panelGroup.find(".abstract.hidden.open, .award.hidden.open, .bibtex.hidden.open").not(target);

    if (target.hasClass("open") && openPanels.length === 0) {
      target.removeClass("open");
      return;
    }

    if (openPanels.length > 0) {
      openPanels.removeClass("open");
      window.setTimeout(function () {
        target.addClass("open");
      }, 120);
      return;
    }

    target.addClass("open");
  }

  $("a.abstract").click(function () {
    togglePublicationPanel(this, ".abstract");
  });
  $("a.award").click(function () {
    togglePublicationPanel(this, ".award");
  });
  $("a.bibtex").click(function () {
    togglePublicationPanel(this, ".bibtex");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
