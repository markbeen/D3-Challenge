// @TODO: YOUR CODE HERE!

var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth) ;
//   .attr("style", border:1px solid black) ;

// load in data  
d3.csv("./assets/data/data.csv").then(function(healthData) {
    healthData.forEach(function(data) {
        data.poverty = +data.poverty ;
        data.age = +data.age ;
        // console.log(data.age)
        }) ;
    console.log(healthData.poverty)

    const xScale = d3.scaleLinear()
    .domain([9.2,21.5])
    .range([0 , svgWidth]) //scope of data going out / pixels 

    const yScale = d3.scaleLinear()
    .domain([30.5, 44.1])
    .range([0, svgHeight])

    const circle = svg.selectAll('.healthCircle') //select all elements with class healthCircle.
    .data(healthData) //attach the data
    .enter().append('circle') //append one circle for each data point. 
    .attr('class', 'healthCircle') //give each circle class healthCircle
    .attr('r', 10) //assign radius
    // Position the circles based on their x and y attributes. 
    .attr("cx", function(d) { return xScale(d.poverty); })
    .attr("cy", function(d) { return yScale(d.age); });

    const text = svg.selectAll('text') //select all elements with class healthCircle. 
    .data(healthData) //attach the data
    .enter().append('text')
    .attr("x", function(d) { return xScale(d.poverty); })
    .attr("y", function(d) { return yScale(d.age); })   
    .text( function (d) { return d.age; }) 
    .attr('dx', -15) //moves text 10px right
    .attr('dy', -15); //moves text -10px up

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const xAxisGroup = svg.append("g")
    .attr("class", "x axis") //gives group the classes 'x' and 'axis'
    .call(xAxis);

    const yAxisGroup = svg.append("g")
    .attr("class", "y axis") //gives group the classes 'y' and 'axis'
    .call(yAxis);

    }) ;





    // for (var i = 0; i < healthData.length; i++) {
    //     // console.log(data[i].id);
    //     // console.log(data[i].state);
    // // console.log(data)
    // }


var healthData = d3.csv("./assets/data/data.csv") ;

function getCol(matrix, col) {
    var newCol = [];
    for(var i=0; i<matrix.length; i++){
        newCol.push(matrix[i][col]);
    }
    return newCol; // return column data..
    // console.log(column)
 }

 var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array

 getCol(array, 0); //Get first column
// var testX = healthData.filter("Texas");
