var app = angular.module("myApp", ["ngRoute","googlechart"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html?Ver=0001",
            controller: "mainCtrl"
        })
        .when("/visit", {
            templateUrl: "pages/visit/visit.html",
            controller: "visitCtrl"

        })

        .when("/diagmain", {
            templateUrl: "pages/diag/diagMain.html",
            controller: "diagMainCtrl"

        })

        .when("/diagage", {
            templateUrl: "pages/diag/diagAge.html",
            controller: "diagAgeCtrl"

        })

        .when("/provider", {
            templateUrl: "pages/provider/provider.html",
            controller: "providerCtrl"

        })
        .when("/personType", {
            templateUrl: "pages/person/persontype.html",
            controller: "persontypeCtrl"

        })
       
       
       
      
});

app.filter('sumByKey', function() {
    return function(data, key) {
        if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
            return 0;
        }

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }

        return sum;
    };
});



app.controller("myCtrl", function($scope, $location, appService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.status = appService.getStatus();
    console.log($scope.status)
    $scope.form = {};
    $scope.login = function() {

        appService.loginService($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata[0])

            //$scope.response = getdata;

            // console.log($scope.response.data)
            if (getdata.status == true) {
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


        });



        //  console.log($scope.status)
    }

    $scope.logout = function() {

        $location.path('/');

        $scope.status = false;
        console.log($scope.status)
        appService.setStatus($scope.status);

    }

    
});