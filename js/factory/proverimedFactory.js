var app = angular.module('proverimedApp');

app.factory('proverimedFactory', function(apiFactory){
  var news = apiFactory.newsArticles;
  var newsCurrent = 0;
  var newsCount = news.length - 1;
  var currentLocation;

  return {
    foldHightlight: foldHightlight,
    currentNews: currentNews,
    newsObject: newsObject,
  };

  function currentNews(x) {
    var count = 0;
    if (x === 'prev'){
      newsCurrent = (newsCurrent > 0) ? newsCurrent - 1 : 0;
    } else if (x === 'next'){
      newsCurrent = (newsCurrent < newsCount) ? newsCurrent + 1 : newsCount;
    } else {
      news.forEach(function(e){
        if (e.id === x) {
          newsCurrent = count;
        }
        count++;
      });
    }
  }

  function newsObject() {
    return { 'pos': newsCurrent, 'arr': news, 'current': news[newsCurrent]};
  }

  function foldHightlight(x, where, route) {
    if (where){
      console.log(x)
        currentLocation = x;
    }
    if(route){
      route(currentLocation.substr(1,currentLocation.length), currentLocation)
    }
  }

});
