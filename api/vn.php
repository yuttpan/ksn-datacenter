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
select (select hospitalcode from opdconfig)hcode,
(select hospitalname from opdconfig)hname
,SUM(CASE WHEN day(vstdate) = '1' THEN 1 ELSE 0 END ) AS 'a1',
SUM(CASE WHEN day(vstdate) = '2' THEN 1 ELSE 0 END ) AS 'a2',
SUM(CASE WHEN day(vstdate) = '3' THEN 1 ELSE 0 END ) AS 'a3',
SUM(CASE WHEN day(vstdate) = '4' THEN 1 ELSE 0 END ) AS 'a4',
SUM(CASE WHEN day(vstdate) = '5' THEN 1 ELSE 0 END ) AS 'a5',
SUM(CASE WHEN day(vstdate) = '6' THEN 1 ELSE 0 END ) AS 'a6',
SUM(CASE WHEN day(vstdate) = '7' THEN 1 ELSE 0 END ) AS 'a7',
SUM(CASE WHEN day(vstdate) = '8' THEN 1 ELSE 0 END ) AS 'a8',
SUM(CASE WHEN day(vstdate) = '9' THEN 1 ELSE 0 END ) AS 'a9',
SUM(CASE WHEN day(vstdate) = '10' THEN 1 ELSE 0 END ) AS 'a10',
SUM(CASE WHEN day(vstdate) = '11' THEN 1 ELSE 0 END ) AS 'a11',
SUM(CASE WHEN day(vstdate) = '12' THEN 1 ELSE 0 END ) AS 'a12',
SUM(CASE WHEN day(vstdate) = '13' THEN 1 ELSE 0 END ) AS 'a13',
SUM(CASE WHEN day(vstdate) = '14' THEN 1 ELSE 0 END ) AS 'a14',
SUM(CASE WHEN day(vstdate) = '15' THEN 1 ELSE 0 END ) AS 'a15',
SUM(CASE WHEN day(vstdate) = '16' THEN 1 ELSE 0 END ) AS 'a16',
SUM(CASE WHEN day(vstdate) = '17' THEN 1 ELSE 0 END ) AS 'a17',
SUM(CASE WHEN day(vstdate) = '18' THEN 1 ELSE 0 END ) AS 'a18',
SUM(CASE WHEN day(vstdate) = '19' THEN 1 ELSE 0 END ) AS 'a19',
SUM(CASE WHEN day(vstdate) = '20' THEN 1 ELSE 0 END ) AS 'a20',
SUM(CASE WHEN day(vstdate) = '21' THEN 1 ELSE 0 END ) AS 'a21',
SUM(CASE WHEN day(vstdate) = '22' THEN 1 ELSE 0 END ) AS 'a22',
SUM(CASE WHEN day(vstdate) = '23' THEN 1 ELSE 0 END ) AS 'a23',
SUM(CASE WHEN day(vstdate) = '24' THEN 1 ELSE 0 END ) AS 'a24',
SUM(CASE WHEN day(vstdate) = '25' THEN 1 ELSE 0 END ) AS 'a25',
SUM(CASE WHEN day(vstdate) = '26' THEN 1 ELSE 0 END ) AS 'a26',
SUM(CASE WHEN day(vstdate) = '27' THEN 1 ELSE 0 END ) AS 'a27',
SUM(CASE WHEN day(vstdate) = '28' THEN 1 ELSE 0 END ) AS 'a28',
SUM(CASE WHEN day(vstdate) = '29' THEN 1 ELSE 0 END ) AS 'a29',
SUM(CASE WHEN day(vstdate) = '30' THEN 1 ELSE 0 END ) AS 'a30',
SUM(CASE WHEN day(vstdate) = '31' THEN 1 ELSE 0 END ) AS 'a31'



from vn_stat where vstdate BETWEEN '2017-10-01' and '2017-10-31'";

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