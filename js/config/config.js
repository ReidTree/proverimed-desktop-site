var app = angular.module('proverimedApp');

app.config(function($locationProvider, $routeProvider){

  $routeProvider
    .when('/home', {
      controller: 'ctrl',
      templateUrl: 'partials/home.html'
    })
    .when('/team', {
      controller: 'ctrl',
      templateUrl: 'partials/team.html'
    })
    .when('/news', {
      controller: 'ctrl',
      templateUrl: 'partials/news.html'
    })
    .when('/news/:newsArticlesId', {
      controller: 'newsCtrl',
      templateUrl: 'partials/news.html'
    })
    .when('/about', {
      controller: 'ctrl',
      templateUrl: 'partials/about.html'
    })
    .when('/pricing', {
      controller: 'ctrl',
      templateUrl: 'partials/pricing.html'
    })
    .when('/participation', {
      controller: 'ctrl',
      templateUrl: 'partials/participation.html'
    })
    .when('/solutions', {
      controller: 'ctrl',
      templateUrl: 'partials/solutions.html'
    })
    .when('/MPL', {
      controller: 'ctrl',
      templateUrl: 'partials/MPL.html'
    })
    .when('/CVO', {
      controller: 'ctrl',
      templateUrl: 'partials/CVO.html'
    })
    .when('/test12345', {
      controller: 'ctrl',
      templateUrl: 'partials/home-test.html'
    })
    .otherwise({redirectTo: '/home'});

//checks for window.history support in browser
  // if (window.history) {
  //   $locationProvider.html5Mode({
  //     enabled: true,
  //     requireBase: false
  //   }).hashPrefix('!');
  // }
});
