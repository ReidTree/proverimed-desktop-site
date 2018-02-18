var app = angular.module('proverimedApp');

app.controller('ctrl', function($scope, $location, proverimedFactory){
  $scope.vendorList = proverimedFactory.vendorList;

  $scope.routeClick = function(x, where, route) {
    $scope.currentLocation = proverimedFactory.highLight(x, where, route);
    $location.path(x)
  }

  $scope.portalClick = function(x) {
    if(x === true) {
      return alert('Enroll page not supported currently')
    } else {
      return alert('This will eventally link to plumbing login')
    }
  }
});
