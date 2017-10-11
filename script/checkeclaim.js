app.controller("eclaimcheckCtrl", function($scope, $http, $location, appService) {



    console.log("eclaim")
    $scope.status = appService.getStatus();
    $scope.userData = appService.getUser();

    console.log($scope.userData.user_id)
        //ตรวจสอบ LOGIN
        /* if ($scope.status == false) {
             alert("ท่านยังไม่เข้าสู่ระบบ")
             $location.path('/');
         } else {
             alert("OK")
         }
         */
    $scope.form = {};
    $scope.checkclaim = function() {
        console.log($scope.form)
        appService.getcheckeclaim($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.checkEclaimData = getdata;


        });


    }

});