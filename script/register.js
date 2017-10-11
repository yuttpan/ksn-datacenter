app.controller("registerCtrl", function($scope, $http, $location, appService) {

    console.log("Register")

    $scope.form = {};
    $scope.register = function(data) {

        appService.registerService($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            //console.log(getdata.length)

            $scope.response = getdata;

            // console.log($scope.response.data)
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                    // console.log(getdata.length)
                $location.path('/');
                // $scope.mralistSend();
            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    }


})