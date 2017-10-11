app.controller("opdEclaimCtrl", function($scope, $http, $location, appService) {

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
    $scope.opdeclaim = function() {
        console.log($scope.form)
        appService.getopdeclaim($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.opdEclaimData = getdata;
            //$scope.response = getdata;

            // console.log($scope.response.data)
            /*  if (getdata.status == true) {
                alert('เข้าสู่ระบบสำเร็จ')
                $scope.status = getdata.status;
                $scope.username = getdata[0].user_name;
                appService.setStatus(getdata.status);
                appService.saveUser(getdata[0]);
            } else {
                alert('ไม่สามารถเข้าสู่ระบบได้')
                $scope.status = getdata.status;
                $location.path('/');
            }
*/

        });


    }

    $scope.exportData = function() {
        console.log("export")
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };

});

app.controller("ipdEclaimCtrl", function($scope, $http, $location, appService) {

    console.log("ipdeclaim")
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
    $scope.ipdeclaim = function() {
        console.log($scope.form)
        appService.getipdeclaim($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.ipdEclaimData = getdata;
            //$scope.response = getdata;

            // console.log($scope.response.data)
            /*  if (getdata.status == true) {
                alert('เข้าสู่ระบบสำเร็จ')
                $scope.status = getdata.status;
                $scope.username = getdata[0].user_name;
                appService.setStatus(getdata.status);
                appService.saveUser(getdata[0]);
            } else {
                alert('ไม่สามารถเข้าสู่ระบบได้')
                $scope.status = getdata.status;
                $location.path('/');
            }
*/

        });


    }

    $scope.exportData = function() {
        console.log("export")
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };

});

app.controller("opdEclaimDetailCtrl", function($scope, $http, $location, appService, $routeParams) {



    console.log($routeParams)
    appService.getopdeclaimdetail($routeParams).success(function($data) {
        var getdatai = angular.extend($data);
        console.log(getdatai)
        $scope.opdDatadetail = getdatai;

    });
    $scope.exportData = function() {
        console.log("export")
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };

});


app.controller("ipdEclaimdetailCtrl", function($scope, $http, $location, appService, $routeParams) {



    console.log($routeParams)
    appService.getipdeclaimdetail($routeParams).success(function($data) {
        var getdatai = angular.extend($data);
        console.log(getdatai)
        $scope.ipdDatadetail = getdatai;

    });
    $scope.exportData = function() {
        console.log("export")
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };


});


