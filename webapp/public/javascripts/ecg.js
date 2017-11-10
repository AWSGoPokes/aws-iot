$(function () {

    'use strict';
    var lastID = -1; // set 0 as default to ensure we get the data from the start

	var ecgDps = [];
	var resDps = [];
	var spo2Dps =[];
	var bpmDps = [];
	var chartLen=1000;
	var xVal=0;
	var stepLen=250;

	var ecgChart = new CanvasJS.Chart("ecgChartContainer",{
		title :{
		text: "Live ECG Data"
				},
		axisX: {						
		title: "Time"
				},
		axisY: {	
		minimum: -2,
		maximum: 5,
		title: "ECG"
				},
		data: [{
			type: "line",
			dataPoints : ecgDps
		}]
	});
    ecgChart.render();
	var resChart = new CanvasJS.Chart("resChartContainer",{
		title :{
		text: "Live Respiration Data"
				},
		axisX: {						
		title: "Time"
				},
		axisY: {	
		minimum: -20,
		maximum: 400,		
		title: "Respiration"
				},
		data: [{
			type: "line",
			dataPoints : resDps
		}]
	});

	var updateInterval = 400;
	var spo2Value = [];
	var bpmValue = [];
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
        console.log(ecgDps);
		ecgChart.render();		
		resChart.render();		
		document.getElementById("Spo2Value").innerHTML = Math.max.apply(null, spo2Dps).toString();
		document.getElementById("bpmValue").innerHTML = Math.max.apply(null, bpmDps).toString();
	};
	setInterval(function(){updateChart()}, updateInterval); 
});