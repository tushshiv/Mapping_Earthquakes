console.log("working");


var myMap = L.map("mapid", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
  // Get data from cities.js
let cityData = cities;

 // Loop through the cities array and create one circle maker for each city.
 //for (let i = 0; i < cities.length; i++)
 cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
     radius : city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
.addTo(myMap);
});

  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
 L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
      }).addTo(myMap);