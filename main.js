var mymap = L.map('mymap', {center: [42.3612, -71.0669], zoom: 15,});

var sidebar = L.control.sidebar('sidebar', {
	closeButton: false,
	position: 'left'
});
mymap.addControl(sidebar);

setTimeout(function () {
	sidebar.show();
}, 500);

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);

var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

var Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
	attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
	minZoom: 1,
	maxZoom: 19
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
	"Stamen Light" : Stamen_TonerLite,
	"Open Topo Map" : OpenTopoMap,
	"Wikimedia" : Wikimedia
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
		"ORIG_ADDRESS": "Not Given",
	  },
	  "geometry": {
		"type": "Point",
		"coordinates": [-71.06505, 42.36049]
	  }
	 }
	]
};

/*
function removeFeatures() {
	
};


function buildLabel(feature) {
	$( "#sidebar-content" ).html("<h2>Updated sidebar with content</h2><br><strong>Name: " 
	+ feature.properties.NAME_2 + " " + feature.properties.NAME_1 
	+ "</strong><br><strong>Address: " + feature.properties.ORIG_ADDRESS + "</strong>");
};


var dynamicButton = jQuery('#controls').clone(true)

// Use $( "elementID") and the jQuery click listener method to remove on the remove button
$( "#reset-button" ).click(function() {
	sidebar.setContent('<h1>Sidebar for popup content</h1>' + 
  dynamicButton + 
  '<h2>Click on a place to learn more</h2>')
});


$(document).on('click', 'reset-button', function(){
	sidebar.setContent('<h1>Sidebar for popup content</h1>' + 
  	'<h2>Click on a place to learn more</h2>')
});
*/

$( "#reset-button" ).click(function() {
	sidebar.setContent('<h1>Sidebar for popup content</h1>' + 
	'<h2>Click on a place to learn more</h2>');
});

function whenClicked(e) {
  // e = event
  var feature = e.target;
  sidebar.setContent('<h1>Sidebar for popup content</h1>' + 
  '<h2>Information about this place</h2><br><strong>Name: ' + 
  feature.feature.properties.NAME_2 + " " + feature.feature.properties.NAME_1 +
  "</strong><br><strong>Address: " + feature.feature.properties.ORIG_ADDRESS + "</strong>");
};

function whenReturned(e) {
	if(e.originalEvent.keyCode === 13) {
		whenClicked(e);
	};
};

function onEach(feature, layer) {
    layer.on({
		click: whenClicked
		});
};

//function for popup
function onEachPopup(feature, layer){
	// I have this stuff commented out because your data is ... XML? 
	// But if the features were formatted as GeoJSON, you could use this syntax to grab properties
	var sidebarPopup = L.popup({className: 'fakePopUp'});
	
	name2 = feature.properties.NAME_2
	name1 = feature.properties.NAME_1 
	address = feature.properties.ORIG_ADDRESS 
	content = ("<h2>Updated sidebar with content</h2><br><strong>Name: " 
	+ name2 + " " + name1 + "</strong><br><strong>Address: " + address + "</strong>")
	//content = "<strong>Name: </strong>" + name + "<br>" + "<strong>Address: </strong>" + address + "<br>" + "<strong>School type: </strong>" + type;
	sidebarPopup.setPopupContent(content)
	layer.bindPopup(sidebarPopup);
};

var geojsonMarkerOptions = {
	radius : 4,
	fillColor : "#0000ff",
	color : "000",
	weight : 1, 
	opacity : 1,
	fillOpacity : .8
};

var marker = L.marker([42.36, -71.06]).addTo(mymap);
var marker_2 = L.marker([42.35, -71.05]).addTo(mymap);

marker_2.bindPopup("<b>Hello</b>");

L.geoJson(geodata, {
	onEachFeature: onEach,
	pointToLayer : function (feature, latlng) {
		return L.marker(latlng);
	} 
}).addTo(mymap);