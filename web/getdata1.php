<?php
$lastID = intval($_GET['lastID']);

$endID=$lastID+250+1;

$con = mysqli_connect('localhost','Minh','Minh1234','test');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$data = array();
//mysqli_select_db($con,"ajax_demo");


if ($lastID==-1){

$sql = "SELECT id, ECG, Respiration,Spo2,BPM,Emotion FROM ecg ORDER BY id DESC LIMIT 2000";
}
else{

$sql = "SELECT id, ECG, Respiration,Spo2,BPM,Emotion FROM ecg WHERE id > " . $lastID . " and  id < " . $endID;
}
$result = mysqli_query($con,$sql);

//$result = $con->query($sql);

//while($row = mysqli_fetch_array($result)) {
//    echo $row["ECG"];
//}

if ($result->num_rows > 0) {

    // output data of each row
    while($row = $result->fetch_assoc()) {
		array_push($data, array('ID'        => $row["id"],'ecgValue'=> $row["ECG"],'resValue'=> $row["Respiration"],'spo2Value'=> $row["Spo2"],'bpmValue'=> $row["BPM"],'emotionValue'=> $row["Emotion"]));
      //  echo "id: " . $row["id"].", ECGvalue: " . $row["ECG"]. "<br>";
    }
} else {

    echo "0 results";
}

// get the emotionDetected

$sql1 = "select Emotion from (Select Emotion from ecg order by id DESC limit 5) as Emotion order by Emotion DESC limit 1";
$result1 = mysqli_query($con,$sql1);


if ($lastID==-1){

$json = array(
	'lastID'    => $data[0]['ID'],
	'emotionDetected'      => $result1->fetch_assoc()["negativeEmotion"],
    'sensorData'      => $data
);
}
else {


$json = array(
	'lastID'    => $data[count($data) - 1]['ID'],
	'emotionDetected'      => $result1->fetch_assoc()["negativeEmotion"],
    'sensorData'      => $data
);
}

echo json_encode($json);
//$conn->close();
mysqli_close($con);
?>
