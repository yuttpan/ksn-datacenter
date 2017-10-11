<?php
header('Access-Control-Allow-Origin: * ' );
include_once 'DB.php' ;
$_POST = json_decode(file_get_contents('php://input'),TRUE);

$hospcode = $_POST['hospcode'];


$dataArray = array();

 $sql="select * from dw_hospcode where hospcode = '$hospcode'";

$rs = mysqli_query($linkdw, $sql) ;
$row = mysqli_fetch_assoc($rs);

  $server = $row["server"] ;
 $user = $row["user"] ;
$password = $row["password"] ;
$db = $row["db"] ;

$sql1="
select name,pname,fname,lname,cid,start_date,sex,birth_date,d.provider_type_code,p.provider_type_name 
from doctor d 
LEFT OUTER JOIN provider_type p on d.provider_type_code = p.provider_type_code
where active = 'Y'";

 $con=mysqli_connect($row["server"],$row["user"],$row["password"],$row["db"]);
  mysqli_set_charset($con,"utf8");
   //Check connection
 if (mysqli_connect_errno())
   {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }else{
  $result1 = mysqli_query($con, $sql1) ;


     
    while ($rows = mysqli_fetch_assoc($result1)) {
         $dataArray[] = $rows;
    }

}

echo json_encode($dataArray);

?>