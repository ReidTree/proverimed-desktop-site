var app = angular.module('proverimedApp');

// app.directive('infoSlide', function() {
//   return {
//     link: function(scope, element, attr) {
//       var windowX = window.innerWidth;
//       element.css({
//         width: windowX
//       });
//     }
//   }
// });
//
// app.directive('homeSlide', ['$interval', function($interval) {
//   return {
//     link: function(scope, element, attr) {
//       var windowX = window.innerWidth;
//       var count = 0;
//       var imgs = ["https://static.pexels.com/photos/33972/pexels-photo.jpg", "./images/pexels2.jpeg", "./images/pexels3.jpeg", "./images/pexels4.jpeg", "./images/pexels5.jpeg"]
//       scope.images = imgs[count];
//
//       setInterval(function(){
//         count++;
//         count = imgs.length - 1 >= count ? count : 0;
//       }, 5000);
//     }
//   }
// }]);

app.directive('foldCont', function() {
  return {
    transclude: false,
    templateUrl: "../partials/fold-buttons.html",
    link: function(scope, element, attr) {
      var specific = window.document.URL.split("/");
      var lightEle = specific[specific.length - 1];
      var init = "/" + lightEle;
      var count = 0;
      var foldBtns = [
        {"class": "home", "linkTo": "/home", "value": "HOME", "col": " col-sm-2"},
        {"class": "about", "linkTo": "/about", "value": "ABOUT", "col": " col-sm-2"},
        {"class": "pricing", "linkTo": "/pricing", "value": "PRICING & PARTICIPATION", "col": " col-sm-4"},
        {"class": "news", "linkTo": "/news", "value": "NEWS", "col": " col-sm-2"},
        {"class": "team", "linkTo": "/team", "value": "TEAM", "col": " col-sm-2"},]

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
      changeBack(lightEle, init);
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
