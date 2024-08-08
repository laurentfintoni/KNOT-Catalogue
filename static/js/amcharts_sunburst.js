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
var root = am5.Root.new("chartdiv_1");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create wrapper container
var container = root.container.children.push(am5.Container.new(root, {
  width: am5.percent(100),
  height: am5.percent(100),
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = container.children.push(am5hierarchy.Sunburst.new(root, {
  singleBranchOnly: true,
  downDepth: 10,
  initialDepth: 10,
  topDepth: 1,
  innerRadius:am5.percent(30),
  valueField: "value",
  categoryField: "name",
  childDataField: "children"
}));

series.labels.template.setAll({
  text: "{shortname}"
});

series.nodes.template.set("tooltipText", "{category}: [bold]{sum}[/] projects");

series.data.setAll([{
  name: "root",
  children: [{
    name: "Università di Bologna", shortname: "Unibo", 
    children: [
      { name: "Dipartimento di Beni Culturali", value: 4, shortname: "DBC" },
      { name: "Dipartimento di Filologia Classica e Italianistica", value: 3, shortname: "FICLIT"  }, 
      { name: "Digital Humanities Advanced Research Centre", value: 11, shortname: "/DH.arc"  }, 
      { name: "Not specified", value: 5, shortname: "Not specified" }, 
    ]
  },
  {
    name: "Consiglio Nazionale delle Ricerche", shortname: "CNR",
    children: [
      { name: "Istituto di linguistica computazionale A. Zampolli", value: 10, shortname: "ILC" },
      { name: "Istituto di scienze e tecnologie della cognizione", value: 4, shortname: "ISTC" },
      { name: "Istituto di scienze del patrimonio culturale", value: 2, shortname: "ISPC" },
      { name: "STLab", value: 2, shortname: "STLab" },
      { name: "CNR-ISTI Visual Computing Lab (VCL)", value: 1, shortname: "VCL" },
    ]
  },
  {
    name: "Università di Pisa", shortname: "UniPi",
    children: [
      { name: "Dipartimento di Filologia, Letteratura e Linguistica", value: 6, shortname: "FiLeLi" },
      { name: "Laboratorio di Cultura Digitale", value: 4, shortname: "LabCD" },
      { name: "COmputational LINGuistics Laboratory", value: 1, shortname: "CoLing Lab" },
      { name: "Dipartimento di Civiltà e Forme del Sapere", value: 1, shortname: "CFS" },
      { name: "Dipartimento di Ingegneria dell'Informazione", value: 1, shortname: "DII" },
      { name: "Not specified", value: 5, shortname: "Not specified" }
    ]
  },
  {
    name: "Università degli studi di Roma \"La Sapienza\"", shortname: "Uniroma1",
    children: [
      { name: "Centro di Ricerca DigiLab", value: 1, shortname: "DigiLab" },
      { name: "Dipartimento di Lettere e Culture Moderne", value: 1, shortname: "LCM" },
      { name: "Dipartimento di scienze dell'antichità", value: 1, shortname: "DSA" },
      { name: "Dipartimento di scienze giuridiche", value: 1, shortname: "DSG" },
      { name: "Dipartimento di storia, antropologia, religioni, arte, spettacolo", value: 1, shortname: "SARAS" },
      { name: "Facoltà di Lettere e Filosofia", value: 1, shortname: "Lettere" },
      { name: "Laboratorio di Archeologia Digitale alla Sapienza", value: 1, shortname: "LAD" },
      { name: "Not specified", value: 5, shortname: "Not specified" }
    ]
  },
  {
    name: "Università Ca' Foscari Venezia", shortname: "UniVe",
    children: [
      { name: "Venice Centre for Digital and Public Humanities", value: 2, shortname: "VeDPH" },
      { name: "Not specified", value: 9, shortname: "Not specified" }
    ]
  },
  {
    name: "Università degli studi di Torino", shortname: "UniTo",
    children: [
      { name: "Dipartimento di studi umanistici", value: 3, shortname: "DSU" },
      { name: "Centro \"Digital Scholarship for the Humanities\"", value: 1, shortname: "DISH" },
      { name: "Not specified", value: 7, shortname: "Not specified" }
    ]
  }]
}]);

series.selectDataItem(series.dataItems[0]);

// Make stuff animate on load
series.appear(1000, 100);