angular.module('l42y.amap.lngLat', [
  'l42y.amap',
  'l42y.amap.map'
]).directive('amapLngLat', function (
  $window,
  Amap
) {
  return {
    require: 'amapMap',
    restrict: 'EA',
    link: function ($scope, $element, $attrs, amap) {
      Amap.promise.then(function () {
        $scope.$watch(function () {
          return $attrs.amapLngLat;
        }, function (val) {
          var lngLat = val.split(/[\s,]+/);
          var amapLngLat = new $window.AMap.LngLat(lngLat[0], lngLat[1]);
          amap.map.setCenter(amapLngLat);
        });
      });
    }
  };
});
