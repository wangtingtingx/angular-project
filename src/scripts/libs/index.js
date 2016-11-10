var indexTpl = require('../tpls/index.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(indexTpl);

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/src/scripts/tpls/route/home.html',
      controller: 'homeController'
    })
    .when('/seller-join', {
      templateUrl: '/src/scripts/tpls/route/seller-join.html',
      controller: 'seller-join-Controller',
    })
    .when('/seller-invest', {
      templateUrl: '/src/scripts/tpls/route/seller-invest.html',
      controller: 'seller-invest-Controller',
    })
    .when('/seller-mistake', {
      templateUrl: '/src/scripts/tpls/route/seller-mistake.html',
      controller: 'seller-mistake-Controller',
    })
    .when('/product-brand', {
      templateUrl: '/src/scripts/tpls/route/seller-mistake.html',
      controller: 'product-brand-Controller',
    })
    .when('/product-classify', {
      templateUrl: '/src/scripts/tpls/route/seller-mistake.html',
      controller: 'product-classify-Controller',
    })
    .when('/product-main', {
      templateUrl: '/src/scripts/tpls/route/seller-mistake.html',
      controller: 'product-main-Controller',
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);

myApp.controller('homeController', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'home page';
}]);

myApp.controller('seller-join-Controller', ['$scope', '$rootScope' , '$http',function($scope, $rootScope, $http){
  // $scope.message = 'seller-join page';
  var vm = $scope;
  $http({
    url: '/mock/seller-join.json'
  })
  .then(function(res){
    vm.sellerJoins = res.data.data;
    return  vm.sellerJoins

  }, function(){
     console.log(vm.sellerJoins)
  })

}]);

myApp.controller('seller-invest-Controller', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'seller-invest page';
}]);

myApp.controller('seller-mistake-Controller', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'seller-mistake page';
}]);

myApp.controller('product-brand-Controller', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'product-brand page';
}]);

myApp.controller('product-classify-Controller', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'product-classify page';
}]);

myApp.controller('product-main-Controller', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'product-main page';
}]);
