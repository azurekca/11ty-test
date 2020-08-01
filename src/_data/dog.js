const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://dog.ceo/api/breeds/image/random');
  const dog = result.data.message;
  
  return  dog; // doesn't matter what you name the return value, 11ty will access what is being returned from this module.exports by the file name minus the extension, so as "dog". This is default because it's in the default data folder "_data"
}
