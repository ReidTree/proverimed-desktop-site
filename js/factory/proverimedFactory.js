var app = angular.module('proverimedApp');

app.factory('proverimedFactory', function(){
  var news = [{
    'id': 'pressTechstars', 'title': 'Press Release: TechStars',
  }, {
    'id': 'pressWolffis', 'title': 'Welcomes New VP',
  }, {
    'id': 'pressCapital', 'title': 'Raises Capital',
  }, {
    'id': 'pressIncorporation', 'title': 'Incorporates',
  },]
  var newsCurrent = 0;
  var currentLocation;
  var currentLocate = window.document.URL.substr(25,window.document.URL.length);

  return {
    highLight: highLight,
    currentNews: currentNews,
    newsObject: newsObject,
  };

  // if(x)
  function currentNews(x) {
    var newsCount = news.length - 1;
    var count = 0;
    if (x === 'prev'){
      newsCurrent = (newsCurrent > 0) ? newsCurrent - 1 : 0;
    } else if (x === 'next'){
      newsCurrent = (newsCurrent < newsCount) ? newsCurrent + 1 : newsCount;
    } else {
      news.forEach(function(e){
        if (e.id === x) {
          newsCurrent = count;
          console.log(e.id)
        }
        count++;
      });
    }
  }

  function newsObject() {
    return { 'pos': newsCurrent, 'arr': news, 'current': news[newsCurrent]};
  }

  function highLight(x, where, route) {
    if (where){
      currentLocate = window.document.URL.substr(25,window.document.URL.length);
      currentLocation = x;
    }
    if(route){
      route(currentLocation.substr(1,currentLocation.length), currentLocation)
    }
  }

});
