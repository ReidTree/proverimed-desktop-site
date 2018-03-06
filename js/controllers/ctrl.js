var app = angular.module('proverimedApp');

app.controller('ctrl', function($scope, $location, proverimedFactory, apiFactory){
  $scope.vendorList = apiFactory.vendorList;
  $scope.newsArticles = apiFactory.newsArticles;
  $scope.contacts = apiFactory.ExecContacts;

  $scope.routeClick = function(x, where, route) {
    $scope.currentLocation = proverimedFactory.highLight(x, where, route);
    $location.path(x)
  }

  $scope.newsObject = proverimedFactory.newsObject();
  // $scope.news = "pressIncorporation"
  $scope.currentNews = function(x) {
    $scope.news = proverimedFactory.currentNews(x);
    $scope.newsObject = proverimedFactory.newsObject();
  }

  $scope.portalClick = function(x) {
    if (x !== true) { return ; };
    var login = "https://gapro.onknowledgekubesandbox.co.uk/login";
    window.location.assign(login)
  }
});
