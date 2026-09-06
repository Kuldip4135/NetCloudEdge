(function () {
  /* Lights the chapter the reader is level with in the Recruiter Desk section, while
     the photo beside it stays pinned. Progressive enhancement: without it every
     chapter simply reads at rest, and the section is a plain image-plus-list. No
     scroll-jacking — the observer only toggles a class, it never moves the page. */
  var chapters = document.querySelectorAll("[data-desk-chapter]");
  if (!chapters.length || !("IntersectionObserver" in window)) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    chapters[0].classList.add("is-active");
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      chapters.forEach(function (c) { c.classList.remove("is-active"); });
      entry.target.classList.add("is-active");
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  chapters.forEach(function (chapter) { observer.observe(chapter); });
})();
