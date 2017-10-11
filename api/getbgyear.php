<?php
header('Access-Control-Allow-Origin: * ' );

include_once 'DB.php' ;
$dataArray = array();

$sql="select bg_id from bgyear";

$rs = mysqli_query($linkdw, $sql) ;

while ($row = mysqli_fetch_assoc($rs)) {

    $dataArray[] = $row;

}

echo json_encode($dataArray);
?>