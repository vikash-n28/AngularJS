var myApp = angular.module('routerApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/signin');
$stateProvider
         .state('signin', {
             url: '/signin',
             templateUrl: 'signin.html'
         })

         .state('signup', {
             url: '/signup',
             templateUrl: 'signup.html'
         });
});