var app = angular.module('proverimedApp');

app.directive('articleDetail', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/press-list.template.html",
  }
});

app.directive('recentNews', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/recent-news.html",
  }
});

app.directive('newsButtons', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/press-buttons.html",
  }
});
