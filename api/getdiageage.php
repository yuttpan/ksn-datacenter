<?php
header('Access-Control-Allow-Origin: * ' );
include_once 'DB.php' ;
$_POST = json_decode(file_get_contents('php://input'),TRUE);
$bgyear = $_POST['bgyear'] ;
$hospcode = $_POST['hospcode'];
$agegroup = $_POST['agegroup'];


$dataArray = array();

 



 $sql="select * from dw_hospcode where hospcode = '$hospcode'";

$sql_age = "select * from dw_age_group where age_id = '$agegroup'" ;

        $rs_age = mysqli_query($linkdw, $sql_age) ;

        $row_age =mysqli_fetch_assoc($rs_age);

        $age_begin = $row_age["age_y_begin"] ;
        $age_end = $row_age["age_y_end"] ;
        
$sql_bgyear = "select * from bgyear where bg_id = '$bgyear'" ;

$rs_bgyear = mysqli_query($linkdw, $sql_bgyear) ;

        $row_bgyear =mysqli_fetch_assoc($rs_bgyear);

        $bdate = $row_bgyear["bgdate"] ;
        $edate= $row_bgyear["bgend"] ;

$rs = mysqli_query($linkdw, $sql) ;

while ($row = mysqli_fetch_assoc($rs)) {
      

//echo $age_end ;

 $server = $row["server"] ;
 $user = $row["user"] ;
 $password = $row["password"] ;
 $db = $row["db"] ;

 $sql1="
select icd10,count(o.vn) as vn,name from ovstdiag o
LEFT OUTER JOIN vn_stat v on o.vn = v.vn
LEFT OUTER JOIN icd101 i on o.icd10 = i.code
where o.vstdate BETWEEN '$bdate' and '$edate'
and age_y between '$age_begin' and '$age_end' and left(icd10,1)REGEXP'[A-Za-z]' 
and icd10 not like 'z%'

GROUP BY icd10
ORDER BY vn desc limit 10";

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
}

    echo json_encode($dataArray);
    
    //mysqli_close($link02832);

?>