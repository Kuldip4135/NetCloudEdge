/* If an employer logo fails to load, swap it for the plain company name so the
   wall never shows a broken-image icon. */
(function () {
  var logos = document.querySelectorAll("[data-logo-fallback]");
  logos.forEach(function (img) {
    img.addEventListener(
      "error",
      function () {
        var span = document.createElement("span");
        span.className = img.dataset.fallbackClass || "";
        span.textContent = img.dataset.name;
        img.replaceWith(span);
      },
      { once: true }
    );
  });
})();
