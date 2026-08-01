module.exports = function (eleventyConfig) {
  // Assets are copied verbatim — never treat files in there as templates
  // (e.g. the image CREDITS.md would otherwise render as its own page).
  eleventyConfig.ignores.add("src/assets/**");

  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
