app.controller("mainCtrl", function($scope, $http, $location, appService) {
  

console.log('main') ;

var today = new Date();
var weekday = today.getDay();
$scope.dd = today.getDate();

  
   var month = today.getMonth();
    if (month == 0) print2='เดือนมกราคม';
    if (month == 1) print2='เดือนกุมภาพันธ์';
    if (month == 2) print2='เดือนมีนาคม';
    if (month == 3) print2='เดือนเมษายน';
    if (month == 4) print2='เดือนพฤษภาคม';
    if (month == 5) print2='เดือนมิถุนายน';
    if (month == 6) print2='เดือนกรกฎาคม';
    if (month == 7) print2='เดือนสิงหาคม';
    if (month == 8) print2='เดือนกันยายน';
    if (month == 9) print2='เดือนตุลาคม';
    if (month == 10) print2='เดือนพฤศจิกายน';
    if (month == 11) print2='เดือนธันวาคม';
  
$scope.mon = print2 ;
$scope.yy = today.getFullYear() + 543 ;
$scope.hh = today.getHours();
$scope.mm = today.getMinutes() ;
console.log($scope.mm)

})


.directive('myCustomer', function() {
    return {
      templateUrl: './directives/chart/chart.html'
    };
  })

  .directive('visitChart', function() {
    return {
      templateUrl: './directives/visitchart/visitchart.html'
    };
  });

  