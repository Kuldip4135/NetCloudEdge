(function () {
  document.querySelectorAll("[data-accordion-trigger]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var item = trigger.closest("[data-accordion-item]");
      var panel = item.querySelector("[data-accordion-panel]");
      var icon = item.querySelector("[data-accordion-icon]");
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });
})();
