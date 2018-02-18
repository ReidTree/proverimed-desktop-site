var app = angular.module('proverimedApp');

app.factory('proverimedFactory', function(){

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
  };

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
