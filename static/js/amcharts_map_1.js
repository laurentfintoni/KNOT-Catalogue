/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(
  am5map.MapChart.new(root, {
   panX: "translateX", 
    panY: "translateY", 
    wheelY: "zoom",
    minZoomLevel: 3.5 ,
    homeZoomLevel: 3.5,
    homeGeoPoint: { longitude: 12.5, latitude: 41.9 }
  })
);

var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
zoomControl.homeButton.set("visible", true);



// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_italyLow,
    fill: am5.color(0xbbbbbb)
  })
);

polygonSeries.events.on("datavalidated", function() {
  chart.goHome();
});


// Create point series for markers
// https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
var pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {groupIdField: "region"}));


// Set clustered bullet
// https://www.amcharts.com/docs/v5/charts/map-chart/clustered-point-series/#Group_bullet
pointSeries.set("clusteredBullet", function(root) {
  var container = am5.Container.new(root, {
    cursorOverStyle:"pointer"
  });

  var circle1 = container.children.push(am5.Circle.new(root, {
    radius: 8,
    tooltipY: 0,
    fill: am5.color(0xff8c00)
  }));

  var circle2 = container.children.push(am5.Circle.new(root, {
    radius: 12,
    fillOpacity: 0.3,
    tooltipY: 0,
    fill: am5.color(0xff8c00)
  }));

  var circle3 = container.children.push(am5.Circle.new(root, {
    radius: 16,
    fillOpacity: 0.3,
    tooltipY: 0,
    fill: am5.color(0xff0000)
  }));

  var label = container.children.push(am5.Label.new(root, {
    centerX: am5.p50,
    centerY: am5.p50,
    fill: am5.color(0xffffff),
    populateText: true,
    fontSize: "8",
    text: "{value}"
  }));

  container.events.on("click", function(e) {
    pointSeries.zoomToCluster(e.target.dataItem);
  });

  return am5.Bullet.new(root, {
    sprite: container
  });
});

// Create regular bullets

var colorSet = am5.ColorSet.new(root, {step:2});

pointSeries.bullets.push(function() {
  var color = colorSet.next();
  var circle = am5.Circle.new(root, {
    radius: 6,
    tooltipY: 0,
    fill: color,
    tooltipText: "{title}"
  });

  return am5.Bullet.new(root, {
    sprite: circle
  });
});


// Set data
var cities = [
 {
  "title": "Università di Bologna",
  "latitude": 44.4971271766666,
  "longitude": 11.35238672883541,
  "region": "Emilia"
}, {
  "title": "Università Ca' Foscari Venezia",
  "latitude": 45.43479447448787, 
  "longitude": 12.326353613493778,
  "region": "Veneto"
}, {
  "title": "Università di Padova",
  "latitude": 45.40708578870481, 
  "longitude": 11.877140171164594,
  "region": "Veneto"
}, {
  "title": "Università di Roma La Sapienza",
  "latitude": 41.906964998422296,  
  "longitude": 12.509991752127243,
  "region": "Lazio"
}, {
  "title": "Università di Trento",
  "latitude": 46.06720961666436,
  "longitude":  11.12309837116459,
  "region": "Trentino"
}, {
  "title": "Università di Pisa",
  "latitude": 43.71725511321654, 
  "longitude":  10.399004872947359,
  "region": "Toscana"
}, {
  "title": "Università di Torino",
  "latitude": 45.0698649613288,  
  "longitude":  7.688976598152142,
  "region": "Piemonte"
}, {
  "title": "Universitá Cattolica del Sacro Cuore",
  "latitude": 45.46232814956517,   
  "longitude":  9.177060482810512,
  "region": "Lombardia"
}, {
  "title": "Università di Milano",
  "latitude": 45.43637826392055,    
  "longitude":  9.191160620240664,
  "region": "Lombardia"
}, {
  "title": "Università di Verona",
  "latitude": 45.43661402613678,     
  "longitude":  11.003214435582295,
  "region": "Veneto"
}, {
  "title": "Scuola normale superiore",
  "latitude": 43.67978709714129,      
  "longitude":  10.400324635582297,
  "region": "Toscana"
}, {
  "title": "Università Roma Tre",
  "latitude": 41.85597125624873,       
  "longitude":  12.47141241718949,
  "region": "Lazio"
}, {
  "title": "Università di Bergamo",
  "latitude": 45.68682298408542,        
  "longitude":  9.661383293253113,
  "region": "Lombardia"
}, {
  "title": "Università di Genova",
  "latitude": 44.41507899552772,         
  "longitude":  8.926680793253114,
  "region": "Liguria"
}, {
  "title": "Università di Siena",
  "latitude": 43.31949017240497,          
  "longitude":  11.33313177855602,
  "region": "Toscana"
}, {
  "title": "Libera università di Bolzano",
  "latitude": 46.49879312979143,           
  "longitude":  11.35089259020194,
  "region": "Trentino"
}, {
  "title": "Università di Bari Aldo Moro",
  "latitude": 41.12089405686596,            
  "longitude":  16.868592517189487,
  "region": "Apulia"
}, {
  "title": "Università di Firenze",
  "latitude": 43.777954630273825,             
  "longitude":  11.259358549076072,
  "region": "Toscana"
}, {
  "title": "Università di Napoli Federico II",
  "latitude": 40.845643847578366,              
  "longitude":  14.277806744177037,
  "region": "Campania"
}, {
  "title": "Università di Parma",
  "latitude": 44.80091050409369,               
  "longitude":  10.325863649076071,
  "region": "Emilia"
}, {
  "title": "Università di Pavia",
  "latitude": 45.18699184277801,                
  "longitude":  9.156976382810509,
  "region": "Lombardia"
}, {
  "title": "Libera università internazionale degli studi sociali",
  "latitude": 41.924673097998586,                 
  "longitude":  12.49404072393638,
  "region": "Lazio"
}, {
  "title": "Libera università di lingue e comunicazione IULM",
  "latitude": 45.443278601299134,                  
  "longitude":  9.165390932531123,
  "region": "Lombardia"
}, {
  "title": "Politecnico di Milano",
  "latitude": 45.47836852249405,                   
  "longitude":  9.227266928835407,
  "region": "Lombardia"
}, {
  "title": "Università degli Studi G. D'Annunzio",
  "latitude": 42.373611869670455,                    
  "longitude":  14.137254104899032,
  "region": "Abruzzo"
}, {
  "title": "Università della Campania Luigi Vanvitelli",
  "latitude": 40.86081024026368,                     
  "longitude":  14.253239844177042,
  "region": "Campania"
}, {
  "title": "Università di Catania",
  "latitude": 37.503666836146856,                      
  "longitude":  15.086503464417703,
  "region": "Sicilia"
}, {
  "title": "Università di Salerno",
  "latitude": 40.77147290350126,                       
  "longitude":  14.79080669510097,
  "region": "Campania"
}, {
  "title": "Università di Macerata",
  "latitude": 43.299309565062934,                       
  "longitude":  13.449935766265558 ,
  "region": "Marche"
}, {
  "title": "Università di Urbino Carlo Bo",
  "latitude": 43.723418593042666,                        
  "longitude":  12.636946966265564,
  "region": "Marche"
}, {
  "title": "Università di Suor Orsola Benincasa",
  "latitude": 40.844274748828404,                         
  "longitude": 14.24437472883541,
  "region": "Campania"
}, {
  "title": "Università del Piemonte Orientale",
  "latitude": 45.32771057267147,                          
  "longitude": 8.424665323936377,
  "region": "Piemonte"
}, {
  "title": "Università degli studi della Basilicata",
  "latitude": 40.633275209268504,                           
  "longitude": 15.807362455822958,
  "region": "Basilicata"
}, {
  "title": "Università della Calabria",
  "latitude": 39.361956506156645,                            
  "longitude": 16.22616725092393,
  "region": "Calabria"
}, {
  "title": "Università degli studi della Tuscia",
  "latitude": 42.41354567429015,                             
  "longitude": 12.11428841718949,
  "region": "Lazio"
}, {
  "title": "Università di Napoli L'Orientale",
  "latitude": 40.84950415981684,                              
  "longitude": 14.26525958650622,
  "region": "Campania"
}, {
  "title": "Università di Palermo",
  "latitude": 38.117822979532534,                               
  "longitude": 13.37014871718949,
  "region": "Sicilia"
}, {
  "title": "Università di Perugia",
  "latitude": 43.116559938570795,                                
  "longitude": 12.386807204899032,
  "region": "Umbria"
}, {
  "title": "Università di Roma Tor Vergata",
  "latitude": 41.85379992762584,                                 
  "longitude": 12.628724479759338,
  "region": "Lazio"
}, {
  "title": "Università di Trieste",
  "latitude": 45.659762959054106,                                  
  "longitude": 13.794817537430152,
  "region": "Friuli"
}, {
  "title": "Università di Udine",
  "latitude": 46.06610431562926,                                   
  "longitude": 13.232531577911475,
  "region": "Friuli"
}, {
  "title": "Università del Salento",
  "latitude": 40.349821648704136,                                    
  "longitude": 18.167363659518674,
  "region": "Puglia"
}, {
  "title": "Università della Vale d'Aosta",
  "latitude": 45.74300123599924,                                    
  "longitude": 7.318571908594744 ,
  "region": "Aosta"
}, {
  "title": "Università di Cagliari",
  "latitude": 39.21812067954741,                                     
  "longitude": 9.115063859518674,
  "region": "Sardinia"
}, {
  "title": "Università degli Studi di Modena e Reggio Emilia",
  "latitude": 44.654048256068414,                                   
  "longitude": 10.92507074609841,
  "region": "Emilia"
}
];

for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  addCity(city.longitude, city.latitude, city.title);
}

function addCity(longitude, latitude, title) {
  pointSeries.data.push({
    geometry: { type: "Point", coordinates: [longitude, latitude] },
    title: title
  });
}

// Make stuff animate on load
chart.appear(1000, 100);