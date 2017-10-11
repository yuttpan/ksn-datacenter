<?php
header('Access-Control-Allow-Origin: * ' );
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
include_once 'DB.php' ;

$_POST = json_decode(file_get_contents('php://input'),TRUE);
$bgyear = $_POST['bgyear'] ;

$dataArray = array();  


 


 

    $sql1="select * from dw_hospcode where hospcode != '10892'";
 
 $rs1 = mysqli_query($linkdw, $sql1) ;
 
    while ($row1 = mysqli_fetch_assoc($rs1)) {
             
        $server = $row1["server"] ;
        $user = $row1["user"] ;
        $password = $row1["password"] ;
        $db = $row1["db"] ;

        $query = "select (select hospitalcode from opdconfig) hospcode,
        (select hospitalname from opdconfig) hospname,
 SUM(CASE WHEN house_regist_type_id = '1' and sex = '1' THEN 1 ELSE 0 END ) AS 'm1',
SUM(CASE WHEN house_regist_type_id = '1' and sex = '2' THEN 1 ELSE 0 END ) AS 'w1',
SUM(CASE WHEN house_regist_type_id = '1'  THEN 1 ELSE 0 END ) AS 's1',
SUM(CASE WHEN house_regist_type_id = '2' and sex = '1' THEN 1 ELSE 0 END ) AS 'm2',
SUM(CASE WHEN house_regist_type_id = '2' and sex = '2' THEN 1 ELSE 0 END ) AS 'w2',
SUM(CASE WHEN house_regist_type_id = '2'  THEN 1 ELSE 0 END ) AS 's2',
SUM(CASE WHEN house_regist_type_id = '3' and sex = '1' THEN 1 ELSE 0 END ) AS 'm3',
SUM(CASE WHEN house_regist_type_id = '3' and sex = '2' THEN 1 ELSE 0 END ) AS 'w3',
SUM(CASE WHEN house_regist_type_id = '3'  THEN 1 ELSE 0 END ) AS 's3',
SUM(CASE WHEN house_regist_type_id = '4' and sex = '1' THEN 1 ELSE 0 END ) AS 'm4',
SUM(CASE WHEN house_regist_type_id = '4' and sex = '2' THEN 1 ELSE 0 END ) AS 'w4',
SUM(CASE WHEN house_regist_type_id = '4'  THEN 1 ELSE 0 END ) AS 's4'

from person where death = 'N' 
        
         " ;

        $con=mysqli_connect($row1["server"],$row1["user"],$row1["password"],$row1["db"]);
 mysqli_set_charset($con,"utf8");
 // Check connection
 if (mysqli_connect_errno())
   {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }else{
  $result1 = mysqli_query($con, $query) ;


     
    while ($rows = mysqli_fetch_assoc($result1)) {
         $dataArray[] = $rows;
    }

}
}



echo json_encode($dataArray);

?>