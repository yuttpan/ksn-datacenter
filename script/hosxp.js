app.controller("hosxpCtrl", function($scope, $http, $location, appService) {

    console.log("HOSXP")
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

    $scope.opdhos = function() { 
        console.log($scope.form)
        appService.getopdhos($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.opdData = getdata;
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

    $scope.opdpcu = function() {
        console.log($scope.form)
        appService.getopdpcu($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.pcuData = getdata;
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

    $scope.ipdhos = function() {
        console.log($scope.form)
        appService.getipdhos($scope.form).success(function($data) {
            var getdatai = angular.extend($data);
            console.log(getdatai)
            $scope.ipdData = getdatai;
            //$scope.response = getdata;

            console.log($scope.ipdData)
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
})

app.filter('dateFilter', function() {
    return function(value) {
        var month = ['', 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

        var data = value.split(' ');
        var date = data[0].split('/');

        var result = parseInt(date[2]) + ' ' + month[parseInt(date[1])] + ' ' + date[0];

        return result + ' ' + data[1] + ' น.';
    };
});


app.controller("ipdDetailCtrl", function($scope, $http, $location, appService, $routeParams) {



    console.log($routeParams)
    appService.getipddetail($routeParams).success(function($data) {
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

app.controller("opdDetailCtrl", function($scope, $http, $location, appService, $routeParams) {



    console.log($routeParams)
    appService.getopddetail($routeParams).success(function($data) {
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

app.controller("pcudetailCtrl", function($scope, $http, $location, appService, $routeParams) {



    console.log($routeParams)
    appService.getpcudetail($routeParams).success(function($data) {
        var getdatai = angular.extend($data);
        console.log(getdatai)
        $scope.pcuDatadetail = getdatai;

    });
    $scope.exportData = function() {
        console.log("export")
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
    };

});



