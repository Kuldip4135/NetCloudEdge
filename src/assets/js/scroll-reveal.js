(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var pathEls = document.querySelectorAll("[data-path-draw]");
  var countEls = document.querySelectorAll("[data-count-up]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    pathEls.forEach(function (el) { el.classList.add("is-drawn"); });
    countEls.forEach(function (el) { renderCount(el, el.dataset.target); });
    return;
  }

  var drawObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-drawn");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  pathEls.forEach(function (el) { drawObserver.observe(el); });

  function renderCount(el, value) {
    el.textContent = value + (el.dataset.suffix || "");
  }

  function animateCount(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || "";
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var countObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  countEls.forEach(function (el) { countObserver.observe(el); });
})();
