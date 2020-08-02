
module.exports = () => {
  return { 
    layout: "blog.liquid",
    tags: "blog",
    eleventyComputed: {
      geo: data => JSON.parse(data.geometry)
    }
  };
};