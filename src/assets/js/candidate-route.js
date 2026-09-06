(function () {
  /* Job Placement — the candidate route made behavioural.

     Four small IntersectionObservers, no scroll hijacking: each only toggles a
     class as a section crosses the middle of the viewport. Every section renders
     complete and legible with this file absent — the classes add the route
     highlight, they are not load-bearing for content. Under prefers-reduced-motion
     the CSS transitions collapse to nothing (global @layer base rule), so the
     states still resolve, they just snap. */

  if (!("IntersectionObserver" in window)) return;

  var mid = { rootMargin: "-45% 0px -45% 0px" };

  /* --- 1. The hero candidate route no longer advances on scroll. It runs a
     static, looping pulse instead (see .candidate-route[data-progress] in
     input.css) — one node glows at a time, then settles. No JS needed. --- */

  /* --- 2. "What's included" — active benefit node ------------------------- */
  var items = document.querySelectorAll("[data-jp-item]");
  if (items.length) {
    var obs2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        items.forEach(function (i) { i.classList.remove("is-active"); });
        entry.target.classList.add("is-active");
      });
    }, mid);
    items.forEach(function (i) { obs2.observe(i); });
  }

  /* --- 3. "What changes" — draw the link as each row arrives -------------- */
  var rows = document.querySelectorAll("[data-jp-row]");
  if (rows.length) {
    var obs3 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        obs3.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -20% 0px" });
    rows.forEach(function (r) { obs3.observe(r); });
  }

  /* --- 4. Process journey — current / completed nodes -------------------- */
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-jp-node]"));
  if (nodes.length) {
    var obs4 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var currentIndex = nodes.indexOf(entry.target);
        nodes.forEach(function (n, i) {
          n.classList.toggle("is-done", i < currentIndex);
          n.classList.toggle("is-current", i === currentIndex);
        });
      });
    }, mid);
    nodes.forEach(function (n) { obs4.observe(n); });
  }
})();
