var app = angular.module('proverimedApp');

app.directive('foldCont', function() {
  return {
    transclude: false,
    templateUrl: "../partials/fold.html",
    link: function(scope, element, attr) {
      var currentUrl = window.document.URL;
      var specific = currentUrl.split("/");
      var lightEle = specific[specific.length - 1];
      var init = "/" + lightEle;
      var count = 0;
      var foldBtns = [
        {"class": "home", "linkTo": "/home", "value": "HOME", "col": " col-2"},
        {"class": "about", "linkTo": "/about", "value": "ABOUT", "col": " col-2"},
        {"class": "pricing", "linkTo": "/pricing", "value": "PRICING & PARTICIPATION", "col": " col-4"},
        {"class": "news", "linkTo": "/news", "value": "NEWS", "col": " col-2"},
        {"class": "team", "linkTo": "/team", "value": "TEAM", "col": " col-2"},]

      function changeBack(x, check){
        if (typeof lightEle === 'number'){
          foldBtns[lightEle].class = init;
        }
        foldBtns.forEach(function(e){
          if(e.class === x){
            lightEle = count;
            e.class += " active";
          }
          count++;
        });

        if(typeof lightEle != 'number') { return ; }

        init = foldBtns[lightEle].class.substr(0,foldBtns[lightEle].class.length - 7);
      }

      if ( currentUrl === "https://www.proverimed.com/" || currentUrl === "https://proverimed.com/" || currentUrl === "http://localhost:3000/" || currentUrl === "http://www.proverimed.com/" || currentUrl === "http://proverimed.com/") {
        changeBack("home")
      } else { changeBack(lightEle, init); }

      scope.route = function(x, check){
        count = 0;
        changeBack(x, check);
      };
      scope.foldBtn = foldBtns;
    },
  }
});

app.directive('pressIncorporation', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/incorporation-3-30-2016.html",
  }
});

app.directive('pressCapital', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/capital-5-19-2016.html",
  }
});

app.directive('pressWolffis', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/wolffis-8-18-2017.html",
  }
});

app.directive('pressTechstars', function() {
  return {
    transclude: false,
    templateUrl: "../partials/press/techstars-3-5-2018.html",
  }
});
app.directive('waterMark', function() {
  return {
    transclude: false,
    templateUrl: "../partials/waterMark.html",
  }
});
