<?php
header('Access-Control-Allow-Origin: * ' );
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
include_once 'DB.php' ;

$_POST = json_decode(file_get_contents('php://input'),TRUE);
$bgyear = $_POST['bgyear'] ;

$dataArray = array();  


 $sql="select * from bgyear where bg_id = '$bgyear'";

$rs = mysqli_query($linkdw, $sql) ;

while ($row = mysqli_fetch_assoc($rs)) {
 $bdate = $row['bgdate'] ;
 $edate = $row['bgend'] ;
  
 

    $sql1="select * from dw_hospcode";
 
 $rs1 = mysqli_query($linkdw, $sql1) ;
 
    while ($row1 = mysqli_fetch_assoc($rs1)) {
             
        $server = $row1["server"] ;
        $user = $row1["user"] ;
        $password = $row1["password"] ;
        $db = $row1["db"] ;

        $query = "select (select hospitalcode from opdconfig) hospcode,
        (select hospitalname from opdconfig) hospname,
        SUM(CASE WHEN month(vstdate) = '10' THEN 1 ELSE 0 END ) AS 'm10',
         SUM(CASE WHEN month(vstdate) = '11' THEN 1 ELSE 0 END ) AS 'm11',
        SUM(CASE WHEN month(vstdate) = '12' THEN 1 ELSE 0 END ) AS 'm12',
        SUM(CASE WHEN month(vstdate) = '1' THEN 1 ELSE 0 END ) AS 'm1',
        SUM(CASE WHEN month(vstdate) = '2' THEN 1 ELSE 0 END ) AS 'm2',
        SUM(CASE WHEN month(vstdate) = '3' THEN 1 ELSE 0 END ) AS 'm3',
        SUM(CASE WHEN month(vstdate) = '4' THEN 1 ELSE 0 END ) AS 'm4',
        SUM(CASE WHEN month(vstdate) = '5' THEN 1 ELSE 0 END ) AS 'm5',
        SUM(CASE WHEN month(vstdate) = '6' THEN 1 ELSE 0 END ) AS 'm6',
        SUM(CASE WHEN month(vstdate) = '7' THEN 1 ELSE 0 END ) AS 'm7',
        SUM(CASE WHEN month(vstdate) = '8' THEN 1 ELSE 0 END ) AS 'm8',
        SUM(CASE WHEN month(vstdate) = '9' THEN 1 ELSE 0 END ) AS 'm9'
        from vn_stat 
        
        
        where vstdate between '$bdate' and '$edate' 
        
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

}

echo json_encode($dataArray);

?>