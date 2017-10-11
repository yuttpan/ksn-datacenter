app.controller("persontypeCtrl", function ($scope, $http, $location, appService) {
    $scope.form = {};
    console.log('persontype');

    appService.getpersontype().success(function ($data) {
        var getdata = angular.extend($data);
        console.log(getdata)
        $scope.pData = getdata;

    })
})