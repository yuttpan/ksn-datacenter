app.controller("chartCtrl", function($scope, $http, $location, appService) {
    

  appService.getvisitday().success(function($data) {
    var getdata = angular.extend($data);
    
    $scope.vData = getdata;
    console.log(getdata[1].hcode)
    
    $scope.myChartObject = {};
    $scope.myChartObject.type = "Gauge";

    $scope.myChartObject.options = {
      width: 800,
      height: 120,
      greenFrom: 0,
      greenTo: 30,
      yellowFrom : 31,
      yellowTo : 80,
      redFrom : 81,
      redTo : 100,
    
      minorTicks: 5
    };
$scope.a1 = Number(getdata[1].vn) ;
    $scope.myChartObject.data = [
      ['Label', 'Value'],
      [getdata[0].hcode, Number(getdata[0].vn)],
      [getdata[1].hcode, Number(getdata[1].vn)],
      [getdata[2].hcode, Number(getdata[2].vn)],
      [getdata[3].hcode, Number(getdata[3].vn)],
      [getdata[4].hcode, Number(getdata[4].vn)],
      [getdata[5].hcode, Number(getdata[5].vn)]
    ];

    console.log($scope.myChartObject)
})


console.log($scope.c) ;


    console.log('chart') ;
   
  });
