var root = am5.Root.new("chartdiv_2");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout
  }) 
);

var data = [{
  uni: "Dataset",
  number: 9
}, {
  uni: "Software",
  number: 9
},{
  uni: "Corpus",
  number: 7
}, {
  uni: "Knowledge Graph",
  number: 4
}, {
  uni: "Ontology",
  number: 3
}, {
  uni: "Controlled Vocabulary",
  number: 2
}, {
  uni: "Database",
  number: 1
}];

 
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "number",
    categoryField: "uni",
    legendLabelText: "{category}",
    legendValueText: "{value}"
  })
);
series.slices.template.set('tooltipText', '{category}: {value}');
series.labels.template.set('text', '{category}: {value}');
series.labels.template.set("forceHidden", false);
series.ticks.template.set("forceHidden", false);

series.data.setAll(data);

var legend = chart.children.push(am5.Legend.new(root, {

  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15
}));
 
legend.data.setAll(series.dataItems);