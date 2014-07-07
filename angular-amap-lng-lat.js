angular.module('l42y.amap.lngLat', [
  'l42y.amap.map'
]).directive('amapLngLat', function (
  $window
) {
  return {
    require: 'amapMap',
    restrict: 'A',
    link: function ($scope, $element, $attrs, amap) {
      $attrs.$observe('amapLngLat', function (val) {
        var lngLat = val.split(/[\s,]+/);
        var amapLngLat = new $window.AMap.LngLat(lngLat[0], lngLat[1]);
        amap.map.setCenter(amapLngLat);
      });
    }
  };
});
