var app = angular.module('proverimedApp');

app.controller('ctrl', function($scope, $location, proverimedFactory, apiFactory, $routeParams){
  $scope.vendorList = apiFactory.vendorList;
  $scope.newsArticles = apiFactory.newsArticles;
  $scope.contacts = apiFactory.ExecContacts;
  $scope.pricingIcons = apiFactory.pricingIcons;
  $scope.aboutProverimed = apiFactory.aboutProverimed;
  $scope.solutionStyle = {"min-height": (window.innerHeight/2) + "px"};

  $scope.routeClick = function(x, where, route) {
    $scope.currentLocation = proverimedFactory.foldHightlight(x, where, route);
    $location.path(x)
  }

  $scope.hamStyle = function(x) {
    $scope.checkFade = x;
    $scope.fade = (x) ? "open-menu" : "closed-menu";
    return ;
  }

  $scope.res = proverimedFactory.resObject(window.innerWidth);
  window.addEventListener("resize", function(e){
    $scope.res = proverimedFactory.resObject(window.innerWidth)
  })

  if($location.path()==="/news"){
    $location.path("/news/" + apiFactory.newsArticles[0].id)
  }

  $scope.currentNews = function(x) {
    console.log(x)
    $location.path("/news/" + x)
  }

});
