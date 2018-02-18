var app = angular.module('proverimedApp');

app.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      controller: 'ctrl',
      templateUrl: 'partials/home.html'
    })
    .when('/contact', {
      controller: 'ctrl',
      templateUrl: 'partials/contact.html'
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
    .otherwise({redirectTo: '/home'});

//closure for app.config
});
