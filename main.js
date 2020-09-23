var mymap = L.map('mymap', {center: [42.3612, -71.0669], zoom: 15,});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);

var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
	"Stamen Watercolor" : Stadia_OSMBright,
	"Open Topo Map" : OpenTopoMap
};
  
var overlays = {
	"Beers, 1874" : Beers_1874,
	"Sanborn, 1867" : Sanborn_1867
};
  
L.control.layers(basemaps, overlays).addTo(mymap);

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

function removeFeatures() {
	$( "#sidebar-content" ).replaceWith("<h2>Sidebar for popup content</h2> <p>One idea is to populate the data from the popups over here</p> <li>Data data data</li> <li>Data data data</li> <li>Data data data</li>");
};

function addFeature() {
	$( "#sidebar-content" ).replaceWith("<h2>Updated sidebar for popup content</h2><br><strong>Name: </strong></br><br><strong>Address: </strong></br>");
};

$( "#addButton1" ).click(function() {
	addFeature();
});

// Use $( "elementID") and the jQuery click listener method to remove on the remove button
$( "#removeButton" ).click(function() {
	removeFeatures();
});


/* function whenClicked(e) {
  // e = event
  console.log(e);
  // You can make your ajax call declaration here
  //$.ajax(... 
}

function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: whenClicked
    });
}

geojson = L.geoJson(your_data, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map); */