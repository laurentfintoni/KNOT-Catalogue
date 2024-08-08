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
var root = am5.Root.new("chartdiv_5");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "none",
  wheelY: "none",
  paddingLeft: 0
}));

// We don't want zoom-out button to appear while animating, so we hide it
chart.zoomOutButton.set("forceHidden", true);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yRenderer = am5xy.AxisRendererY.new(root, {
  minGridDistance: 30,
  minorGridEnabled: true
});

yRenderer.grid.template.set("location", 1);

var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "subject",
  renderer: yRenderer,
}));

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0,
  min: 0,
  numberFormatter: am5.NumberFormatter.new(root, {
    "numberFormat": "#,###a"
  }),
  extraMax: 0.1,
  renderer: am5xy.AxisRendererX.new(root, {
    strokeOpacity: 0.1,
    minGridDistance: 80

  })
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueXField: "value",
  categoryYField: "subject",
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "left",
    labelText: "{valueX}"
  })
}));


// Rounded corners for columns
series.columns.template.setAll({
  cornerRadiusTR: 5,
  cornerRadiusBR: 5,
  strokeOpacity: 0
});



// Set data
var data = [
  {
    "subject": "Informatics",
    "value": 44
  },
  {
    "subject": "Archival science, bibliography and librarianship",
    "value": 33
  },
  {
    "subject": "Italian studies and comparative literature",
    "value": 17
  },
  {
    "subject": "Medieval latin and romance philologies and literatures",
    "value": 14
  },
  {
    "subject": "Historical and general linguistics",
    "value": 13
  },
  {
    "subject": "Archaeological sciences",
    "value": 13
  },
  {
    "subject": "Musicology and history of music",
    "value": 9
  },
  {
    "subject": "Italian linguistics and philology ",
    "value": 7
  },
  {
    "subject": "Libretto",
    "value": 6
  },
  {
    "subject": "Art History",
    "value": 5
  },
  {
    "subject": "Latin Epigraphy",
    "value": 4
  },
  {
    "subject": "Modern History",
    "value": 4
  },
  {
  "subject": "Opera",
  "value": 4
},
  {
  "subject": "Dante Alighieri",
  "value": 4
} 
];

yAxis.data.setAll(data);
series.data.setAll(data);
sortCategoryAxis();

// Get series item by category
function getSeriesItem(category) {
  for (var i = 0; i < series.dataItems.length; i++) {
    var dataItem = series.dataItems[i];
    if (dataItem.get("categoryY") == category) {
      return dataItem;
    }
  }
}

chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none",
  xAxis: xAxis,
  yAxis: yAxis
}));


// Axis sorting
function sortCategoryAxis() {

  // Sort by value
  series.dataItems.sort(function (x, y) {
    return x.get("valueX") - y.get("valueX"); // descending
    //return y.get("valueY") - x.get("valueX"); // ascending
  })

  // Go through each axis item
  am5.array.each(yAxis.dataItems, function (dataItem) {
    // get corresponding series item
    var seriesDataItem = getSeriesItem(dataItem.get("category"));

    if (seriesDataItem) {
      // get index of series data item
      var index = series.dataItems.indexOf(seriesDataItem);
      // calculate delta position
      var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
      // set index to be the same as series data item index
      dataItem.set("index", index);
      // set deltaPosition instanlty
      dataItem.set("deltaPosition", -deltaPosition);
      // animate delta position to 0
      dataItem.animate({
        key: "deltaPosition",
        to: 0,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      })
    }
  });

  // Sort axis items by index.
  // This changes the order instantly, but as deltaPosition is set,
  // they keep in the same places and then animate to true positions.
  yAxis.dataItems.sort(function (x, y) {
    return x.get("index") - y.get("index");
  });
}


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);