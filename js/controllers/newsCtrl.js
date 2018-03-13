var app = angular.module('proverimedApp');

app.controller('newsCtrl', function($scope, $location, $routeParams, proverimedFactory){

    // console.log("id: " + proverimedFactory.parseNews($routeParams.newsArticlesId))

    $scope.article = proverimedFactory.parseNews($routeParams.newsArticlesId)
    
});
