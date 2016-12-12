var mainApp = angular.module("myApp", ['ngRoute']);
console.log("call")
mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/signin', {
        templateUrl: 'templete/signin.htm',
        controller: 'myCtrl1'
    })
    .when('/signup', {
        templateUrl: 'templete/signup.htm',
        controller: 'myCtrl2'
    })
    .otherwise ({
        redirectTo: '/signin'
    });
}]);
 console.log("app.js is working...");