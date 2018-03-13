var app = angular.module('proverimedApp');

app.factory('proverimedFactory', function(apiFactory){
  var news = apiFactory.newsArticles;
  var newsCurrent = 0;
  var newsCount = news.length - 1;
  var currentLocation, newsPage;
  var hamburger = false;
  var currentUrl = window.document.URL.split("/");

  return {
    foldHightlight: foldHightlight,
    currentNews: currentNews,
    newsObject: newsObject,
    testing: testing,
    parseNews: parseNews,
    newState: newState,
    resObject: resObject,
  };

  function testing() {
    currentUrl = window.document.URL.split("/");
    return currentUrl[currentUrl.length - 1];
  }

  function resObject(x){
    return {
      "phone": (x < 768) ? true : false,
      "tablet": (x >= 768 && x < 900 ) ? true : false,
      "desktop": (x >= 900) ? true : false,

    }

    var w = x.target.innerWidth;
    console.log(w)
    var phone = (x.target.innerWidth < 768) ? true : false;
    var tablet = (x.target.innerWidth >= 768 || e.target.innerWidth < 900 ) ? true : false;
    var desktop = (x.target.innerWidth > 900) ? true : false;

  }

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

  function newState(x) {
    if (hamburger = x) {
      hamburger = hamburger === x ? false : true;
      return {"display": "absolute"}
    }

    return hamburger;
  }

  function newsObject() {
    return { 'pos': newsCurrent, 'arr': news, 'current': news[newsCurrent]};
  }

  function foldHightlight(x, where, route) {
    if (where){
      // console.log(x)
        currentLocation = x;
    }
    if(route){
      route(currentLocation.substr(1,currentLocation.length), currentLocation)
    }
  }

  function parseNews(x){
    console.log(newsPage)
    var articleId;
    for (var i = 0; i < news.length; i++){
      var newsIterate = news[i];
      // console.log(x, newsIterate.id)
      if (newsIterate.id === x) {
        articleId = {"current": news[i], "prev": news[i-1], "next": news[i+1]};
        newState(articleId)
      }
    }
    // console.log(articleId)
    return articleId;
  }

});
