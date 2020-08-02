

const map = L.map('mapid').setView([49.479076, -117.393192], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: 'pk.eyJ1IjoiYXp1cmVrY2EiLCJhIjoiY2tkYnZkZWF1MHM5cjM0anF3OTQ0ZXh4eiJ9.g8mci0gNIvygdaSwYrg3Rw'
// }).addTo(map);

L.marker([49.479076, -117.393192]).addTo(map)
  .bindPopup("Agata's pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();

// console.log()