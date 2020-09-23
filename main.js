var mymap = L.map('map', {
      center: [42.3612, -71.0669],
      zoom: 15,
  });

/*
var geodata =  {
  "type": "FeatureCollection",
  "features": [{
		"type": "Feature",
		"properties": {
			"NAME_1": "Hayden",
			"NAME_2": "Harriet",
			"DESC_OCC": null,
			"RACE": "Black",
			"TYPE": "Person",
			"ACTION": "lived",
			"START_LOC": 1850.0,
			"END_LOC": 1889.0,
			"LAT": 42.360223,
			"LONG": -71.069049,
			"ORIG_ADDRESS": "66 Southac St",
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-71.069049, 42.360223]
		}
	},
	{
		"type": "Feature",
		"properties": {
			"NAME_1": "Henry",
			"NAME_2": "John",
			"DESC_OCC": "mariner",
			"RACE": "Black",
			"TYPE": "Person",
			"ACTION": "lived",
			"START_LOC": 1837.0,
			"END_LOC": 1865.0,
			"LAT": 42.36049,
			"LONG": -71.06505,
			"ORIG_ADDRESS": null,
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-71.06505, 42.36049]
		}
   }
  ]
};

L.geoJson(geodata).addTo(mymap);
*/

var OpenTopoMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 0,
  maxZoom: 21,
  ext: 'png'
}).addTo(mymap);
  
  /*
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});
  
var Sanborn_1867 = L.tileLayer(
  'https://s3.us-east-2.wasabisys.com/urbanatlases/39999059012052/tiles/{z}/{x}/{-y}.png', {
      tms: true, 
      attribution: 'Leventhal Map & Education Center'
  }
);

var Beers_1874 = L.tileLayer(
  'https://s3.us-east-2.wasabisys.com/urbanatlases/39999059015410/tiles/{z}/{x}/{-y}.png', {
	  tms: true, 
	  attribution: 'Leventhal Map & Education Center'
	}
);

var basemaps = {
  "Stamen Watercolor" : Stamen_Watercolor,
  "Open Topo Map" : OpenTopoMap
};

var overlays = {
	"Beers, 1874" : Beers_1874,
	"Sanborn, 1867" : Sanborn_1867
};

L.control.layers(basemaps, overlays).addTo(mymap);


var latlng = (42.3554, -71.0762)

var popup = L.popup()
 	.setLatLng(latlng)
 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
  .addTo(mymap);
*/