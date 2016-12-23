app.controller('', ['$scope', '$auth', function($scope, $auth) {
    console.info("App Ctrl: up and running");
    $scope.logout = function() {
        console.info("User requested LOGOUT")
    }

    $scope.authenticate = function(provider) {
        console.info("Authenticating with: " + provider);
        $auth.authenticate(provider);
    };
}]);