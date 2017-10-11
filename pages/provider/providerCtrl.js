app.controller("providerCtrl", function ($scope, $http, $location, appService) {
            $scope.form = {};
            console.log('provider');
            appService.gethospcode().success(function ($data) {
                var getdata = angular.extend($data);
                console.log(getdata)
                $scope.hospcodeData = getdata;

            })

            $scope.myFunc = function () {

                console.log($scope.form)
                appService.getprovider($scope.form).success(function ($data) {
                        var getdata = angular.extend($data);
                        console.log(getdata)
                        $scope.providerData = getdata;

                    })
                }
                });