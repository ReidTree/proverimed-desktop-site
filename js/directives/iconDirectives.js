var app = angular.module('proverimedApp');


app.directive('worldIcon', function() {
  return {
    transclude: false,
    templateUrl: "../partials/icons/worldIcon.html",
  }
});

app.directive('timeCheck', function() {
  return {
    transclude: false,
    templateUrl: "../partials/icons/timeCheck.html",
  }
});

app.directive('priceDown', function() {
  return {
    transclude: false,
    templateUrl: "../partials/icons/priceDown.html",
  }
});

app.directive('lockIcon', function() {
  return {
    transclude: false,
    templateUrl: "../partials/icons/lockIcon.html",
  }
});

app.directive('noCost', function() {
  return {
    transclude: false,
    templateUrl: "../partials/icons/noCost.html",
  }
});
