<?php
header('Access-Control-Allow-Origin: * ' );
include_once 'DB.php' ;
$dataArray = array();


$sql="select * from dw_hospcode";

$rs = mysqli_query($linkdw, $sql) ;

while ($row = mysqli_fetch_assoc($rs)) {


 $server = $row["server"] ;
 $user = $row["user"] ;
 $password = $row["password"] ;
 $db = $row["db"] ;

$sql1="
select (select hospitalcode from opdconfig)hcode,count(vn) vn from vn_stat 
where vstdate = CURDATE()";

 $con=mysqli_connect($row["server"],$row["user"],$row["password"],$row["db"]);
 mysqli_set_charset($con,"utf8");
 // Check connection
 if (mysqli_connect_errno())
   {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }else{
  $result1 = mysqli_query($con, $sql1) ;


     
    while ($rows = mysqli_fetch_assoc($result1)) {
         $dataArray[] = $rows;
    }

}
}

    echo json_encode($dataArray);
    
    //mysqli_close($link02832);

?>