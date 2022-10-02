console.log("working");


var myMap = L.map("mapid").setView([34.0522, -118.2437], 14);
  
  //  Add a marker to the map for Los Angeles, California.
  //let marker = L.marker([34.0522, -118.2437]).addTo(myMap);
  
  //Add Circle to the map of LA
  L.circle([34.0522, -118.2437], {
    radius: 300
 }).addTo(myMap);

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

    