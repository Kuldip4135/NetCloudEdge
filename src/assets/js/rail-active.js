/* Marks the sticky section rail's current link while the reader moves down the document
   column. Progressive enhancement only: without it the rail still navigates by anchor. */
(function () {
  var links = document.querySelectorAll("[data-rail-link]");
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  var sections = [];

  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (!section) return;
    byId[id] = link;
    sections.push(section);
  });

  function activate(id) {
    links.forEach(function (link) { link.classList.remove("is-active"); });
    if (byId[id]) byId[id].classList.add("is-active");
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) activate(entry.target.id);
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(function (section) { observer.observe(section); });
})();
