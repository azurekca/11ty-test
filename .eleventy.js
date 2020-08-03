module.exports = (eleventyConfig) => {
  
  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  eleventyConfig.addPassthroughCopy("./src/admin");
  
  return {
    dir: {
      input: "src"
    }
  };
};