var app = angular.module('proverimedApp');

app.controller('ctrl', function($scope, $location, proverimedFactory){
  $scope.vendorList = proverimedFactory.vendorList;

  $scope.routeClick = function(x, where, route) {
    $scope.currentLocation = proverimedFactory.highLight(x, where, route);
    $location.path(x)
  }

  $scope.portalClick = function() {
    var login = "https://gapro.onknowledgekubesandbox.co.uk/login";
    window.location.assign(login)
  }
});
