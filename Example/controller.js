var myApp = angular.module('myApp',[]);

var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};

function MyCtrl($scope, filterFilter) {
    $scope.usePants = {};
    $scope.useShirts = {};
    $scope.useShoes = {};
        
    $scope.players = [
        {name: 'Bruce Wayne', shirt: 'XXL', pants: '42', shoes: '12'},
        {name: 'Wayne Gretzky', shirt: 'XL', pants: '38', shoes: '10'},
        {name: 'Michael Jordan', shirt: 'M', pants: '32', shoes: '9'},
        {name: 'Rodman', shirt: 'XSXL', pants: '42', shoes: '11'},
        {name: 'Jake Smitz', shirt: 'XXL', pants: '42', shoes: '12'},
        {name: 'Will Will', shirt: 'XXLL', pants: '42', shoes: '12'},
        {name: 'Youasdf Oukls', shirt: 'XL', pants: '38', shoes: '10'},
        {name: 'Sam Sneed', shirt: 'XL', pants: '38', shoes: '10'},
        {name: 'Bill Waxy', shirt: 'M', pants: '32', shoes: '9'},
        {name: 'Javier Xavior', shirt: 'M', pants: '32', shoes: '9'},
        {name: 'Bill Knight', shirt: 'M', pants: '32', shoes: '9'},        
        {name: 'One More', shirt: 'M', pants: '32', shoes: '9'},        
        {name: 'Player One', shirt: 'XXL', pants: '42', shoes: '11'},
        {name: 'Space Cadet', shirt: 'XXL', pants: '42', shoes: '12'},
        {name: 'Player Two', shirt: 'XXXXL', pants: '42', shoes: '12'}
    ]; 
    
    // Watch the pants that are selected
    $scope.$watch(function () {
        return {
            players: $scope.players,
            usePants: $scope.usePants,
            useShirts: $scope.useShirts,
            useShoes: $scope.useShoes
        }
    }, function (value) {
        var selected;
        
        $scope.pantsGroup = uniqueItems($scope.players, 'pants');
        var filterAfterPants = [];        
        selected = false;
        for (var j in $scope.players) {
            var p = $scope.players[j];
            for (var i in $scope.usePants) {
                if ($scope.usePants[i]) {
                    selected = true;
                    if (i == p.pants) {
                        filterAfterPants.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterPants = $scope.players;
        }

        $scope.shirtsGroup = uniqueItems(filterAfterPants, 'shirt');
        var filterAfterShirts = [];        
        selected = false;
        for (var j in filterAfterPants) {
            var p = filterAfterPants[j];
            for (var i in $scope.useShirts) {
                if ($scope.useShirts[i]) {
                    selected = true;
                    if (i == p.shirt) {
                        filterAfterShirts.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterShirts = filterAfterPants;
        }

        $scope.shoesGroup = uniqueItems(filterAfterShirts, 'shoes');
        var filterAfterShoes = [];        
        selected = false;
        for (var j in filterAfterShirts) {
            var p = filterAfterShirts[j];
            for (var i in $scope.useShoes) {
                if ($scope.useShoes[i]) {
                    selected = true;
                    if (i == p.shoes) {
                        filterAfterShoes.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAfterShoes = filterAfterShirts;
        }        

        $scope.filteredPlayers = filterAfterShoes;        
    }, true);
    
    
    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);    
}

myApp.filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          //console.log(collection[i].pants);
          //var out = myApp.filter('filter')(collection[i].pants, "42", true);
      }
      return out;
    }
});


myApp.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });




    ist.github.com/thelifenadine/63dfd9ff485198e2a61a
angular.module('mainApp').controller('prodctrl', function ($scope, $firebase, Myservice, $timeout) {
   $scope.product={};
   $scope.manufacturer={};
   $scope.os={};
   $scope.storage={};
   $scope.camera={};
   myPromise().then(function(){
       
        console.log(items);
        items.forEach(function(value){
            console.log(value);
            value.forEach(function(element){
                console.log(element);
            })
        })
    })

       function myPromise() {
       return new Promise(function (resolve, reject) {
               Myservice.getDatabase(function(database){
              items=database;
              $timeout(function(){$scope.product=items;},1000);
              resolve();
           })
           });
       }
   // Myservice.getDatabase(function (database) {
   //     items = database;
   //     $timeout(function () {$scope.product = items;}, 1000);
   //     console.log($scope.product)
   // });
   // console.log(items)
   // // $items.forEach(function(element) {
       
//   });
// });


// angular.module('mainApp').factory('Myservice',function($firebase){
//    var service={};
//    service.getDatabase=function(callback){
//        var ref=firebase.database().ref();
//        ref.on("value",function(obj){
//            callback(obj.val());
//        });
//    }
//    return service;
})