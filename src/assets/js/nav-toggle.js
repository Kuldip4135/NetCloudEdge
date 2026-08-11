(function () {
  var toggle = document.querySelector("[data-mobile-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;

  var label = toggle.querySelector("[data-mobile-menu-label]");

  /* Open/closed is carried by aria-expanded on the button and .is-open on the panel;
     the CSS animates off both. Nothing here touches `hidden` — display:none would kill
     the transition. */
  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
    if (label) label.textContent = "Open menu";
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
    if (label) label.textContent = "Close menu";
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
