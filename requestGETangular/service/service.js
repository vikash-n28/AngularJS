angular.module('myAPp').factory('service', function($scope,$http) {
    var service ={};
    service.getAllData = function () {
        $http.get("products.json")
        .success(function(data,status,header, config) {
            console.log(data);
            return data;
        }) 
        .error(function(data,status,header, config) {
            $scope.ResponseDetails = "Data :" + name + "<br />status :" +status+
            "<br /> headers :" +jsonFilter(header) +"<br />config:"+ jsonFilter(config);
        });
    };
});