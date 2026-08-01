(function () {
  var toggle = document.querySelector("[data-mobile-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
  }

  function openMenu() {
    menu.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  menu.querySelectorAll("[data-mobile-accordion-trigger]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = trigger.nextElementSibling;
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      trigger.querySelector("svg").classList.toggle("rotate-180");
      panel.classList.toggle("hidden");
    });
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();
