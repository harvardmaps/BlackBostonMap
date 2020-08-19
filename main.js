var mymap = L.map('map', {
      center: [42.3612, -71.0669],
      zoom: 15,
  });
  
  var controlLayers = L.control.layers( null, null, {
    position: "topright",
    collapsed: false
  }).addTo(mymap);
  
  var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
     maxZoom: 17,
     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  controlLayers.addBaseLayer(OpenTopoMap, 'Open Topo Map');
  
  var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
     attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
     subdomains: 'abcd',
     minZoom: 1,
     maxZoom: 16,
     ext: 'jpg'
  });
  
  controlLayers.addBaseLayer(Stamen_Watercolor, 'Stamen Watercolor basemap');
  
  var Sanborn_1867 = L.tileLayer(
      'https://s3.us-east-2.wasabisys.com/urbanatlases/39999059012052/tiles/{z}/{x}/{-y}.png', {
          tms: true, 
          attribution: 'Leventhal Map & Education Center'
      }
  ).addTo(mymap);
  
  controlLayers.addBaseLayer(Sanborn_1867, '1867 Sanborn');

  var Beers_1874 = L.tileLayer(
	'https://s3.us-east-2.wasabisys.com/urbanatlases/39999059015410/tiles/{z}/{x}/{-y}.png', {
		tms: true, 
		attribution: 'Leventhal Map & Education Center'
	}
);

controlLayers.addBaseLayer(Beers_1874, '1874 F.W. Beers & Co');

var latlng = (42.3554, -71.0762)

var popup = L.popup()
 	.setLatLng(latlng)
 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 	.addTo(mymap);
  