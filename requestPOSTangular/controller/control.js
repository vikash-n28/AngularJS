angular.module('myApp').controller('fetchCtrl', function($scope,$http) {
    $scope.sendData = function()  {
        var data = $.param ({
            username: $scope.un,
            password: $scope.pw
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('products.json', data, config)
        .success(function(data, status, headers, config) {
            $scope.Details = "Data:" + data +
            "<br />status:" + status +
            "<br />headers:" + header +
            "<br />headers:" + config;
        });
    }
});