app.controller("visitCtrl", function($scope, $http, $location, appService) {
    
        console.log("visit") 

        $scope.form = {};

                
                appService.getbgyear().success(function($data) {
                    var getdata = angular.extend($data);
                    console.log(getdata)
                    $scope.bgData = getdata;
                  
                });
        
          
                $scope.getvisit = function(){
                        console.log($scope.form)
                        appService.getvisit($scope.form).success(function($data) {
                                var getdata = angular.extend($data);
                                console.log(getdata)
                                $scope.visitData = getdata;

                                
                })
        }


});