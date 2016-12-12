angular.module('myAPp',[]).factory('myService', function($scope,$http) {
    // debugger;
    var service ={};
    service1.getAllData = function () {
        // debugger;
        $http.get("products.json")
        .success(function(data,status,header, config) {
            debugger;
            console.log(data);
            return data;
        }) 
        .error(function(data,status,header, config) {
            $scope.ResponseDetails = "Data :" + name + "<br />status :" +status+
            "<br /> headers :" +jsonFilter(header) +"<br />config:"+ jsonFilter(config);
        });
    };
});