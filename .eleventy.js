module.exports = () => {
  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy('jpg');

  return {
    templateFormats: ["html", "liquid", "yml", "pug"]
  }
};