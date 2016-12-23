var uxprototypeApp = angular.module('uxprototypeApp', []);

var uniqueItems = function (data, key) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
        if (result.indexOf(value) === -1) {
            result.push(value);
        }
    }
    return result;
};



uxprototypeApp.controller('SearchCtrl', ['$scope', function ($scope) {

    $scope.useBrands = {};
    $scope.filters = {};
    $scope.filters.Label = {};

    $scope.maxBrands = 5;
    $scope.maxLabels = 5;

    $scope.layout = 'grid';
    $scope.products = [{
        "Category": ["g122", "Side by Side Refrigerators"],
            "Brand": "LG",
            "ModelNo": "GC-P197DPSL",
            "Sku": "50001129",
            "Heading": "567L Side by Side Refrigerator",
            "ShortDesc": "The LG 567L Side-by-Side Platinum Refrigerator with One Touch Home Bar offers a huge amount of storage capacity making it perfect for family sized homes!",
            "Labels": ["New", "As Advertised"],
            "Callout": ["Bonus Offer", "Sale"],
            "Price": 1399,
            "WasPrice": 1650,
            "DeliveryTier": "4",
            "Image": "50001129_62296"
    }, {
        "Category": ["g186", "LED TVs"],
            "Brand": "LG",
            "ModelNo": "55LA6620",
            "Sku": "50017349",
            "Heading": "55\"(139cm) FHD LED LCD 100Hz 3D Smart TV",
            "ShortDesc": "The LG 55\" FHD LED LCD is a Smart TV for smart people. The LG Smart TV is a class above with dual core processor, virtual surround, LED plus and magic remote control with voice recognition.",
            "Labels": ["New", "As Advertised"],
            "Callout": ["Bonus Offer", "Sale"],
            "Price": 1389,
            "WasPrice": 1599,
            "DeliveryTier": "4",
            "Image": "50017349_87400"
    }, {
        "Category": ["g186", "LED TVs"],
            "Brand": "Samsung",
            "ModelNo": "UA50F6400AM",
            "Sku": "50017426",
            "Heading": "50\" (127cm) FHD LED LCD 100Hz 3D Smart TV",
            "Labels": ["As Advertised"],
            "Callout": ["Cashback Offer"],
            "Price": 1249,
            "WasPrice": 1299,
            "DeliveryTier": "4",
            "Image": "50017426_82802"
    }, {
        "Category": ["g186", "LED TVs"],
            "Brand": "Samsung",
            "ModelNo": "UA55F6400AM",
            "Sku": "50017428",
            "Heading": "55\"(140cm) FHD LED LCD 100Hz 3D Smart TV",
            "Labels": ["As Advertised"],
            "Callout": ["Clearance"],
            "Price": 1396,
            "WasPrice": 1429,
            "DeliveryTier": "4",
            "Image": "50017428_82797"
    }, {
        "Category": ["g186", "LED TVs"],
            "Brand": "Samsung",
            "ModelNo": "UA50F6400AM",
            "Sku": "50017431",
            "Heading": "60\"(152cm) FHD LED LCD 100Hz 3D Smart TV",
            "Labels": ["New", "As Advertised"],
            "Callout": ["Bonus Offer", "Sale"],
            "Price": 1787,
            "WasPrice": 1899,
            "DeliveryTier": "4",
            "Image": "50017431_82777"
    }, {
        "Category": [],
            "Brand": "Samsung",
            "ModelNo": "UA65F6400AM",
            "Sku": "50017434",
            "Heading": "65\"(165cm) FHD LED LCD 100Hz 3D Smart TV",
            "Labels": [],
            "Callout": ["Cashback Offer"],
            "Price": 1787,
            "WasPrice": 1899,
            "DeliveryTier": "4",
            "Image": "50017434_82866"
    }, {
        "Category": [],
            "Brand": "Samsung",
            "ModelNo": "UA75F6400AM",
            "Sku": "50017436",
            "Heading": "75\"(190cm) FHD LED LCD 100Hz 3D Smart TV",
            "Labels": [],
            "Callout": ["Cashback Offer"],
            "Price": 4799,
            "WasPrice": 4999,
            "DeliveryTier": "4",
            "Image": "50017436_82877"
    }, {
        "Category": [],
            "Brand": "Samsung",
            "ModelNo": "SRF579DLS",
            "Sku": "50010550",
            "Heading": "579L French Door Refrigerator",
            "Labels": [],
            "Callout": ["Cashback Offer"],
            "Price": 1829,
            "WasPrice": 2199,
            "DeliveryTier": "4",
            "Image": "50010550_87218"
    }, {
        "Category": [],
            "Brand": "LG",
            "ModelNo": "WT-H8006",
            "Sku": "50005108",
            "Heading": "8kg Top Load Washer",
            "Labels": [],
            "Callout": [],
            "Price": 829,
            "WasPrice": 0,
            "DeliveryTier": "4",
            "Image": "50005108_73618"
    }, {
        "Category": [],
            "Brand": "Kobo",
            "ModelNo": "2075372",
            "Sku": "50016279",
            "Heading": "eReader Touch Black",
            "Labels": [],
            "Callout": [],
            "Price": 149,
            "WasPrice": 0,
            "DeliveryTier": "1",
            "Image": "50016279_79711"
    }, {
        "Category": [],
            "Brand": "Breville",
            "ModelNo": "BJE410",
            "Sku": "10163246",
            "Heading": "Juice Fountain Plus 1200W",
            "Labels": [],
            "Callout": [],
            "Price": 169,
            "WasPrice": 0,
            "DeliveryTier": "1",
            "Image": "10163246_74450"
    }, {
        "Category": [],
            "Brand": "Breville",
            "ModelNo": "800ES",
            "Sku": "10116167",
            "Heading": "Professional 800 Espresso Coffee Machine",
            "Labels": [],
            "Callout": [],
            "Price": 299,
            "WasPrice": 0,
            "DeliveryTier": "1",
            "Image": "10116167_21295"
    },

    {
        "Category": [],
            "Brand": "Canon",
            "ModelNo": "1100DTKB",
            "Sku": "50004065",
            "Heading": "1100D Twin Lens Kit (18-55 & 75-300mm)",
            "Labels": [],
            "Callout": [],
            "Price": 579,
            "WasPrice": 0,
            "DeliveryTier": "1",
            "Image": "50004065_64999"
    }];


    $scope.sorting = {
        id: "1",
        order: "Name",
        direction: "false"
    };

    $scope.setOrder = function (id, order, reverse) {
        $scope.sorting.id = id;
        $scope.sorting.order = order;
        $scope.sorting.direction = reverse;
    };

    // Watch the Price that are selected
    $scope.$watch(function () {
        return {
            products: $scope.products,
            useBrands: $scope.useBrands,
        }
    }, function (value) {
        var selected;

        $scope.count = function (prop, value) {
            return function (el) {
                return el[prop] == value;
            };
        };

        $scope.brandsGroup = uniqueItems($scope.products, 'Brand');
        var filterAfterBrands = [];
        selected = false;
        for (var j in $scope.products) {
            var p = $scope.products[j];
            for (var i in $scope.useBrands) {
                if ($scope.useBrands[i]) {
                    selected = true;
                    if (i === p.Brand) {
                        filterAfterBrands.push(p);
                        break;
                    }
                }
            }
        }
        if (!selected) {
            filterAfterBrands = $scope.products;
        }

        $scope.filteredProducts = filterAfterBrands;
    }, true);

    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);


}]);


uxprototypeApp.filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          //console.log(collection[i].Price);
          //var out = myApp.filter('filter')(collection[i].Price, "42", true);
      }
      return out;
  }
});