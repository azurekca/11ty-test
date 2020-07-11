// From the Rick and Morty API
const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://rickandmortyapi.com/api/character');

  // returns an array of characters
  const characters = result.data.results;
  // console.log(characters);
  return characters;
}