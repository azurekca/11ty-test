module.exports = (eleventyConfig) => {
  
  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  
  return {
    dir: {
      input: "src"
    }
  };
};