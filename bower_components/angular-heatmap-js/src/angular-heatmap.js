angular.module('angular-heatmap-js', []);

angular.module('angular-heatmap-js')
  .controller('angularHeatmapController', function($scope) {
    var ctrl = this;

    ctrl.init = function() {
      var div = document.getElementById("angular-heatmap-js-container");

      // Set container style
      var width = "100%";
      var height = "100%";
      div.style.width = width;
      div.style.height = height;

      // New instance for heatmap with div as container
      ctrl.heatmapInstance = h337.create({
        container: div
      });
      // Using bind data for heatmap init
      ctrl.heatmapInstance.setData(ctrl.heatmapData);
    }
    ctrl.init();

  })
  .directive('angularHeatmap', function() {
    return {
      restrict: 'E',
      bindToController: {
        'heatmapData': '='
      },
      template: '<div id="angular-heatmap-js-container" container></div>',
      controller: 'angularHeatmapController',
      controllerAs: 'angularHeatmapCtrl'
    };
  });