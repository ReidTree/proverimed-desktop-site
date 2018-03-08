var app = angular.module('proverimedApp');

app.config(function($locationProvider, $routeProvider){

  $routeProvider
    .when('/', {
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
    .otherwise({redirectTo: '/'});

//checks for window.history support in browser
  if (window.history) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');
  }
});
