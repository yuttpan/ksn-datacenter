<?php
header('Access-Control-Allow-Origin: * ' );
$_POST = json_decode(file_get_contents('php://input'),TRUE);
include_once 'DB.php' ;
 $hospcode = $_POST['hospcode'] ;
$dataArray = array();

 $sql="select hospcode,hospname from dw_hospcode where hospcode = '$hospcode'";

$rs = mysqli_query($linkdw, $sql) ;

while ($row = mysqli_fetch_assoc($rs)) {

    $dataArray[] = $row;

}

echo json_encode($dataArray);
?>