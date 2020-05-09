// Use D3 fetch to read the JSON file
d3.json("samples.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;


//Create a horizontal bar chart with a dropdown menu to display 
//the top 10 OTUs found in that individual.


//Create the Trace
var trace1 = {
    x: importedData,
    y: importedData,
    type: "bar"

};

})

var layout = {

    title: "bargraph",
    xaxis: { title: "who knows" },
    yaxis: { title: "okay this the title" }

};

//Plot the graph
Plotly.newPlot("bar-plot", data, layout);



////var barchart = object.values(importedData)

