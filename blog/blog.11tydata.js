// In one version we added teh image fetching into this module and each blog post made it's own request and there were three different dogs.
// Having moved the data get request into the _data/dog.js module, it's only making one request and the same dog shows on all the pages

// so to redo it to make three we could import that here... but that kinda makes no sense because the puppers in _data will make a pointless call
const puppers = require('../_data/dog');

module.exports = async () => {
  const image = await puppers();
  return { 
    layout: "layout.liquid",
    tags: "blog",
    puppers: image
  };
};