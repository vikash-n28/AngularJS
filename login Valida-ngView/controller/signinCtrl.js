

//Signin COntroller
mainApp.controller('myCtrl1', function ($scope) {
    $scope.data1 = {
        username = "",
        password = "",

        form1: function () {
            valid = $scope.data1;
            console.log(" Sign In running");
            console.log("Username :"+valid.username);
            console.log("Password :"+valid.password); 
            return ()
        }
    }

    $scope.message = "Signing In...";
});

