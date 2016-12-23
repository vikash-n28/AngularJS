var routerApp = angular.module('myAPp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'template/bResult.htm',
        controller: 'fetchCtrl'

    })
});