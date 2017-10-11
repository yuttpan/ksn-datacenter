app.service('appService', function ($http) {

    this.registerService = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/adduser.php',
            data: fdata
        })

        return promise;
    }

    this.loginService = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/login.php',
            data: fdata

        })
        return promise;
    }

    var status = '';
    this.setStatus = function (data) {

        status = data
        console.log(status)
    }
    this.getStatus = function () {
        return status;
    }
    var userData = {};
    this.saveUser = function (obj) {

        userData = obj;

    }

    this.getUser = function () {

        return userData;
    }

    this.getopdhos = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getOpdhos.php',
            data: fdata

        })
        return promise;

    }

    this.getopdpcu = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getOpdpcu.php',
            data: fdata

        })
        return promise;

    }

    this.getipdhos = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getipdhos.php',
            data: fdata

        })
        return promise;

    }

    this.getipddetail = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getipddetail.php',
            data: fdata

        })
        return promise;

    }

    this.getopddetail = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getopddetail.php',
            data: fdata

        })
        return promise;

    }

    this.getpcudetail = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getpcudetail.php',
            data: fdata

        })
        return promise;

    }

    this.getopdeclaim = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getOpdeElaim.php',
            data: fdata

        })
        return promise;

    }

    this.getipdeclaim = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getIpdeElaim.php',
            data: fdata

        })
        return promise;

    }

    this.getopdeclaimdetail = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getOpdDetaileElaim.php',
            data: fdata

        })
        return promise;

    }


    this.getipdeclaimdetail = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getipdDetaileElaim.php',
            data: fdata

        })
        return promise;

    }

    this.getcheckeclaim = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/checkeclaim.php',
            data: fdata

        })
        return promise;

    }

    this.getbgyear = function () {

        //var fdata = data;
        // console.log(fdata);
        var promise = $http({

            method: 'GET',
            url: './api/getbgyear.php',
            //data: fdata

        })
        return promise;

    }

    this.gethospcode = function () {

        //var fdata = data;
        // console.log(fdata);
        var promise = $http({

            method: 'GET',
            url: './api/gethospcode.php',
            //data: fdata

        })
        return promise;

    }

    this.getvisit = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getvisit.php',
            data: fdata

        })
        return promise;

    }

    this.getvisitday = function () {

        //var fdata = data;
        // console.log(fdata);
        var promise = $http({

            method: 'GET',
            url: './api/getvisitday.php',
            //data: fdata

        })
        return promise;

    }

    this.getDiagAge = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getdiageage.php',
            data: fdata

        })
        return promise;

    }
    this.gethospname = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/gethospname.php',
            data: fdata

        })
        return promise;

    }

    this.getprovider = function (data) {

        var fdata = data;
        console.log(fdata);
        var promise = $http({

            method: 'POST',
            url: './api/getprovider.php',
            data: fdata

        })
        return promise;

    }
    this.getpersontype = function () {
        
               // var fdata = data;
               // console.log(fdata);
                var promise = $http({
        
                    method: 'GET',
                    url: './api/getpersontype.php',
                    //data: fdata
        
                })
                return promise;
        
            }

            
     
});