module.exports = (eleventyConfig) => {
  
  // tell 11ty what types of files we're using
  eleventyConfig.setTemplateFormats([
    "html",
    "liquid",
    "yml"
  ]);

  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("static/images");
};