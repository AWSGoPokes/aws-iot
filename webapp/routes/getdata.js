var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //console.log("Get Data");
    var lastID = req.params.lastID;
    var id = 0;
    if(lastID != null){
        id = parseInt(lastID) + 1;
    }
    var dataJSON = {"lastID": id,
                    "sensorData": []
                   };
    
    //console.log(dataJSON);
    for(var i = 0; i < 250; i++){
        //console.log('Creating fake point...');
        
        var pointJSON = {"ID": new Date().getTime(),
                         "ecgValue": Math.floor(7*Math.random()-2) ,
                        "resVlaue": Math.floor(420*Math.random()-20),
                        "spo2Value": 100 * Math.random(),
                        "bpmValue": 100 * Math.random()
                        };
        //console.log(pointJSON);
        dataJSON.sensorData.push(pointJSON);
    }
    //console.log("Send Data");
    res.send(dataJSON);
});

module.exports = router;