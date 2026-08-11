/* Counts a [data-count-up] figure from zero to data-target when it scrolls into view.
   The final value is rendered immediately under reduced motion or without
   IntersectionObserver, so the number is never missing. */
(function () {
  var els = document.querySelectorAll("[data-count-up]");
  if (!els.length) return;

  function render(el, value) {
    el.textContent = value + (el.dataset.suffix || "");
  }

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    els.forEach(function (el) { render(el, el.dataset.target); });
    return;
  }

  function animate(el) {
    var target = parseFloat(el.dataset.target);
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      render(el, Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  els.forEach(function (el) { observer.observe(el); });
})();
