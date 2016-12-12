angular.module('myAPp').controller('fetchCtrl', function($scope, service) {
       $scope.getAllData = function() {
           $scope.Details =service.getAllData;
       }
    // $http.get("")
    // .success(function(response) {$scope.names = response;});
    // $scope.getAllData = function () {
    //     $http.get("products.json")
    //     .success(function(data,status,header, config) {
    //         console.log(data);
    //         $scope.Details = data;
    //     }) 
    //     .error(function(data,status,header, config) {
    //         $scope.ResponseDetails = "Data :" + name + "<br />status :" +status+
    //         "<br /> headers :" +jsonFilter(header) +"<br />config:"+ jsonFilter(config);
    //     });
    // };
    
});