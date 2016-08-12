angular.module('angular-heatmap-js', []);

angular.module('angular-heatmap-js')
  .controller('angularHeatmapController', function($scope) {
    var ctrl = this;
    ctrl.container = {};

    ctrl.init = function() {
      ctrl.container = document.getElementById("angular-heatmap-js-container");

      // Set container style
      var width = "100%";
      var height = "100%";
      ctrl.container.style.width = width;
      ctrl.container.style.height = height;

      // Set specific width and height if available
      if (ctrl.width) {
        ctrl.container.style.width = ctrl.width + "px";
      }
      if (ctrl.height) {
        ctrl.container.style.height = ctrl.height + "px";
      }

      // New instance for heatmap with ctrl.container as container
      ctrl.heatmapInstance = h337.create({
        container: ctrl.container
      });
      // Using data binding for heatmap init
      ctrl.heatmapInstance.setData(ctrl.heatmapData);

      if (ctrl.tooltipEnabled) {
        ctrl.initTooltip();
      }

    }

    ctrl.initTooltip = function() {
      ctrl.tooltip = document.querySelector('#heatmap-tooltip');

      // When the mouse is hover the heatmap, it checks
      // the coordinates and set the tooltip visibility
      ctrl.container.onmousemove = function(ev) {
        var x = ev.layerX;
        var y = ev.layerY;
        // getValueAt gives us the value for a point p(x/y)
        var value = ctrl.heatmapInstance.getValueAt({
          x: x,
          y: y
        });

        ctrl.tooltip.style.display = 'block';
        ctrl.tooltip.style.opacity = '.9';

        updateTooltip(x, y, value);
      };

      // hide ctrl.tooltip on mouseout
      ctrl.container.onmouseout = function() {
        ctrl.tooltip.style.display = 'none';
      };
    }


    function updateTooltip(x, y, value) {
      // + 15 for distance to cursor
      var transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)';
      ctrl.tooltip.style.webkitTransform = transl;
      ctrl.tooltip.innerHTML = value;
    }

  })
  .directive('angularHeatmap', function() {
    return {
      restrict: 'E',
      bindToController: {
        'heatmapData': '=',
        'width': '=',
        'height': '='
      },
      link: function(scope, element, attrs, ctrl) {
        if (angular.isDefined(attrs.heatmapTooltip)) {
          ctrl.tooltipEnabled = true;
        }
        ctrl.init();
      },
      template: '<div id="heatmap-tooltip" class="tooltip"></div>' + '<div id="angular-heatmap-js-container" container></div>',
      controller: 'angularHeatmapController',
      controllerAs: 'angularHeatmapCtrl'
    };
  });