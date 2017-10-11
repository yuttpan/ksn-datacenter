app.controller("diagAgeCtrl", function($scope, $http, $location, appService) {

console.log('diagAge');

$scope.form = {};


appService.getbgyear().success(function($data) {
    var getdata = angular.extend($data);
    console.log(getdata)
    $scope.bgData = getdata;
  
});

appService.gethospcode().success(function($data) {
    var getdata = angular.extend($data);
    console.log(getdata)
    $scope.hospcodeData = getdata;
  
});



$scope.getdiagage = function(){
    console.log($scope.form)
   appService.getDiagAge($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)
            $scope.vData = getdata;

            appService.gethospname($scope.form).success(function($data) {
                var getdatas = angular.extend($data);
               // console.log(getdatas)
                $scope.hospname = getdatas[0].hospname;
               console.log($scope.hospname)
            })
})
    


}

});