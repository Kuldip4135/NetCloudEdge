(function () {
  /* Tabs, per the WAI-ARIA tabs pattern. Selection lives in aria-selected on the
     button and `hidden` on the panel — the accessible state is the only state, so
     nothing here has to be kept in sync with a parallel class.

     Only the selected tab is in the tab sequence (roving tabindex); arrow keys move
     between tabs, Home/End jump to the ends. That's the pattern's requirement, and
     it's why this needs JS at all — the markup ships with the first tab selected, so
     the section still reads correctly if this file never loads. */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var buttons = Array.prototype.slice.call(group.querySelectorAll("[data-tab]"));
    if (buttons.length < 2) return;

    function select(index, moveFocus) {
      buttons.forEach(function (button, i) {
        var isSelected = i === index;
        var panel = document.getElementById(button.getAttribute("aria-controls"));
        button.setAttribute("aria-selected", String(isSelected));
        button.tabIndex = isSelected ? 0 : -1;
        if (panel) panel.hidden = !isSelected;
      });
      if (moveFocus) buttons[index].focus();
    }

    buttons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        select(i, false);
      });

      button.addEventListener("keydown", function (e) {
        var last = buttons.length - 1;
        var next =
          e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
          : e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
          : e.key === "Home" ? 0
          : e.key === "End" ? last
          : -1;
        if (next === -1) return;
        e.preventDefault();
        select(next, true);
      });
    });

    /* Normalise from whatever the markup shipped with, so the roving tabindex is
       correct even though the server-rendered default was already valid. */
    var initial = buttons.findIndex(function (b) {
      return b.getAttribute("aria-selected") === "true";
    });
    select(initial === -1 ? 0 : initial, false);
  });
})();
