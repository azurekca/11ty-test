module.exports = (eleventyConfig) => {
  
  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  eleventyConfig.addPassthroughCopy("./src/static/js");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};