var app = angular.module('proverimedApp');

app.factory('proverimedFactory', function(){
  var news = ['pressIncorporation', 'pressCapital', 'pressWolffis']
  var newsCurrent = 0;
  var currentLocation;
  var currentLocate = window.document.URL.substr(25,window.document.URL.length);
  var vendorList = [
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
    {"name": "Placeholder Vendor Name", "code": "Placeholder", "city": "Placeholder", "state": "Placeholder",},
  ];

  return {
    highLight: highLight,
    vendorList: vendorList,
    currentNews: currentNews,
    newsObject: newsObject,
  };

  // if(x)
  function currentNews(x) {
    var count = 0;
    if (x === 'prev'){
      newsCurrent = (newsCurrent > 0) ? newsCurrent - 1 : 0;
    } else if (x === 'next'){
      newsCurrent = (newsCurrent < 2) ? newsCurrent + 1 : 2;
    } else {
      news.forEach(function(e){
        if (e === x) {
          newsCurrent = count;
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
