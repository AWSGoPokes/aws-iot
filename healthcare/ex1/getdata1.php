<?php
$lastID = intval($_GET['lastID']);
//$lastID=0;
$endID=$lastID+250+1;
//die($endID);
$con = mysqli_connect('atrc-cloud10.atrc-ecen.okstate.edu','admin','Admin1234','Test');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$data = array();
mysqli_select_db($con,"ajax_demo");


if ($lastID==-1){
$sql = "SELECT id, ECG, Respiration,Spo2,BPM FROM ecg ORDER BY id DESC LIMIT 2000";
}
else{
$sql = "SELECT id, ECG, Respiration,Spo2,BPM FROM ecg WHERE id > " . $lastID . " and  id < " . $endID;
}
$result = mysqli_query($con,$sql);
//$result = $con->query($sql);

//while($row = mysqli_fetch_array($result)) {
//    echo $row["ECG"];
//}

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		array_push($data, array('ID'        => $row["id"],'ecgValue'=> $row["ECG"],'resValue'=> $row["Respiration"],'spo2Value'=> $row["Spo2"],'bpmValue'=> $row["BPM"]));
      //  echo "id: " . $row["id"].", ECGvalue: " . $row["ECG"]. "<br>";
    }
} else {
    echo "0 results";
}
if ($lastID==-1){
$json = array(
	'lastID'    => $data[0]['ID'],
    'sensorData'      => $data
);
}
else {
$json = array(
	'lastID'    => $data[count($data) - 1]['ID'],
    'sensorData'      => $data
);
}
echo json_encode($json);
//$conn->close();
mysqli_close($con);
?>
