(function () {
  /* Vertical roll for the hero's audience word.

     The whole animation is CSS: the track's transform is derived from a single
     --roll-index custom property, and all this script does is increment it. That is
     the entire reason this reads as smooth — one compositor-driven transform on one
     element, no fades, no filters, nothing re-rasterised per frame.

     The markup already renders the first word in place, so the hero is correct before
     this file runs and if it never does. The slot is aria-hidden and the <h1> carries
     the full sentence in a visually hidden span, so assistive tech reads one coherent
     heading rather than a word mutating underneath it. No live region: announcing each
     roll would be noise, not information.

     Motion stops in four situations, per WCAG 2.2.2 and general good manners:
       - prefers-reduced-motion is set          -> never starts
       - pointer or keyboard focus is inside    -> pauses
       - the slot scrolls out of view           -> pauses
       - the tab is hidden                      -> pauses */

  var mask = document.querySelector("[data-rotator]");
  if (!mask) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var track = mask.querySelector("[data-rotator-track]");
  if (!track) return;

  /* Real words only — the trailing duplicate of the first word is marked and excluded,
     since it exists purely to make the wrap seamless. */
  var count = track.querySelectorAll("[data-rotator-word]:not([data-rotator-clone])").length;
  if (count < 2) return;

  /* How long a word sits still, in milliseconds — the transition itself is NOT
     included, so a word is on screen for HOLD + the .roll-track transition (560ms by
     default, set in input.css). Authored in the markup as data-hold on [data-rotator]
     (see partials/home-hero.njk) so the pacing is editable next to the words it paces;
     2800 is the fallback if the attribute is missing or not a number. */
  var HOLD = parseInt(mask.getAttribute("data-hold"), 10);
  if (!(HOLD > 0)) HOLD = 2800;

  var index = 0;
  /* Pointer and focus are tracked separately: sharing one flag lets a focusout clear
     a hover that is still active (hover the hero, click a button, tab away, and the
     rotation would resume with the pointer still sitting on it). */
  var pointerIn = false;
  var focusIn = false;
  var visible = true;
  var onScreen = true;
  var timer = null;

  function running() {
    return !pointerIn && !focusIn && visible && onScreen;
  }

  function setIndex(i) {
    track.style.setProperty("--roll-index", i);
  }

  /* On reaching the trailing duplicate, snap back to the real first word with
     transitions suppressed. Both frames show the same word, so the reset is invisible.
     Driven off transitionend rather than a timeout so the duration lives in exactly one
     place — the stylesheet. */
  track.addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform" || index !== count) return;
    track.classList.add("no-anim");
    index = 0;
    setIndex(0);
    void track.offsetWidth; // flush before transitions come back
    track.classList.remove("no-anim");
  });

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (running()) setIndex(++index);
      schedule();
    }, HOLD);
  }

  var scope = mask.closest("[data-rotator-scope]") || mask;
  scope.addEventListener("mouseenter", function () { pointerIn = true; });
  scope.addEventListener("mouseleave", function () { pointerIn = false; });
  scope.addEventListener("focusin", function () { focusIn = true; });
  scope.addEventListener("focusout", function () { focusIn = false; });

  document.addEventListener("visibilitychange", function () {
    visible = !document.hidden;
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
    }).observe(mask);
  }

  schedule();
})();
