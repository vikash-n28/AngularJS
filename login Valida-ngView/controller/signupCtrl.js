//Signup controller
mainApp.controller('myCtrl2', function ($scope,DisDependency) {
    console.log("signup call")
    $scope.data2 = {
        firstname = "",
        lastname = "",
        password = "",

        form2: function() {
            valid = $scope.data2;
            console.log(" Sign In running");
            console.log("Username :"+valid.firstname);
            console.log("lastname :"+valid.lastname);
            console.log("Password :"+valid.password);
        }
    }

    $scope.message = "Signing Up...";
    $scope.mService =DisDependency.display($scope.data2);
});