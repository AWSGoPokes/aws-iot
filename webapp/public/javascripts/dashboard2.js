$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  // -----------------------
  // - MONTHLY SALES CHART -
  // -----------------------
  var lastID = -1; // set 0 as default to ensure we get the data from the start
    
    var ecgDps = [];
    var resDps = [];
    var spo2Dps =[];
    var bpmDps = [];
    var chartLen=100
    var xVal=0;
    var stepLen=25;

  
  // Get context with jQuery - using jQuery's .get() method.
  var ecgChartCanvas = $('#ecgChartContainer').get(0).getContext('2d');
  // This will get the first returned node in the jQuery collection.
  var ecgChart       = new Chart(ecgChartCanvas);

  var ecgChartData = {
    datasets: [
      {
        label               : 'Live ECG Data',
        fillColor           : 'rgb(210, 214, 222)',
        strokeColor         : 'rgb(210, 214, 222)',
        pointColor          : 'rgb(210, 214, 222)',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data                : ecgDps
      }]
  };

  var ecgChartOptions = {
    // Boolean - If we should show the scale at all
    showScale               : true,
    // Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : false,
    // String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    // Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    // Boolean - Whether the line is curved between points
    bezierCurve             : true,
    // Number - Tension of the bezier curve between points
    bezierCurveTension      : 0.3,
    // Boolean - Whether to show a dot for each point
    pointDot                : false,
    // Number - Radius of each point dot in pixels
    pointDotRadius          : 4,
    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth     : 1,
    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
    // Boolean - Whether to show a stroke for datasets
    datasetStroke           : true,
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth      : 2,
    // Boolean - Whether to fill the dataset with a color
    datasetFill             : true,
    // String - A legend template
    legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio     : true,
    // Boolean - whether to make the chart responsive to window resizing
    responsive              : true
  };

  var updateInterval = 4000;
	
	var updateChart = function () {
		var url = '/getdata'; 
		var data = {'lastID': lastID}; // input for the PHP file

		//$.getJSON(url, data, requestCallback);
		$.getJSON(url, data, function(data, textStatus, xhr){
			lastID = data.lastID; // save lastID
			
			// loop through data
			$.each(data.sensorData, function(index, value) {
				
				ecgDps.push({x: parseInt(value.ID),y: parseFloat(value.ecgValue)});
				resDps.push({x: parseInt(value.ID),y: parseFloat(value.resValue)});
				spo2Dps[bpmDps.length]=(parseInt(value.spo2Value));
				bpmDps[bpmDps.length]=(parseInt(value.bpmValue));
			});
			
		});
		// send request
		if (ecgDps.length >  chartLen + stepLen-1)
		{
			//console.log(ecgDps);
			ecgDps.splice(0,stepLen);
			resDps.splice(0,stepLen);
			spo2Dps.splice(0,stepLen);
			bpmDps.splice(0,stepLen);
		}
		// Create the line chart
        ecgChart.Line(ecgChartData, ecgChartOptions);
  
        //ecgChart.render();		
		//resChart.render();		
		document.getElementById("Spo2Value").innerHTML = Math.max.apply(null, spo2Dps).toString();
		document.getElementById("bpmValue").innerHTML = Math.max.apply(null, bpmDps).toString();
	};
	setInterval(function(){updateChart()}, updateInterval); 
  
});
