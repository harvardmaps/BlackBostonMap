var mymap = L.map('map', {
    center: [42.3612, -71.0669],
    zoom: 13,
});

/*
var controlLayers = L.control.layers( null, null, {
  position: "topright",
  collapsed: false
}).addTo(mymap);
*/

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFydmFyZG1hcHMiLCJhIjoiY2tkMG91YjBvMGQ3YjJxcDB2a3l2M3lvOCJ9.PDmYUq9MgJwq3JlWAlg3wA'
}).addTo(mymap);
/*
controlLayers.addBaseLayer(norm, 'OSM basemap');
var light = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
});
controlLayers.addBaseLayer(light, 'Carto Light basemap');
var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
});
controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');
*/
