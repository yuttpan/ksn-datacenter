app.controller("opdMoneyCtrl", function($scope, $http, $location, appService) {

    console.log('report')

    $scope.form = {};


    $http.get("./api/getpttype.php")
        .then(function(response) {
            $scope.pttype = response.data;
            //console.log($scope.pttype)
        });

    $scope.report_opd = function() {
        console.log($scope.form)
        appService.getreportopd($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.reportData = getdata;


        });

    }
})