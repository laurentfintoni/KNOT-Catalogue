var root = am5.Root.new("chartdiv_3");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalLayout
  }) 
);

var data = [{
  uni: "Database",
  number: 24
}, {
  uni: "Digital Edition",
  number: 15
},{
  uni: "Digital Platform",
  number: 13
}, {
  uni: "Digital Library",
  number: 9
}, {
  uni: "Digital Catalogue",
  number: 6
}, {
  uni: "Digital Archive",
  number: 5
}, {
  uni: "Storytelling Platform",
  number: 5
}, {
  uni: "Endpoint",
  number: 3
}, {
  uni: "Research Platform",
  number: 3
}, {
  uni: "Software",
  number: 3
}, {
  uni: "Corpus",
  number: 2
}, {
  uni: "Crowdsourcing Platform",
  number: 2
}, {
  uni: "Digital Repository",
  number: 2
}, {
  uni: "Knowledge Base",
  number: 2
}, {
  uni: "Image Database",
  number: 1
}, {
  uni: "Semantic Digital Edition",
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
