angular.module('angular-heatmap-js', []);

angular.module('angular-heatmap-js')
.controller('AngularHeatmapCtrl', function ($scope) {

           // now generate some random data
            var points = [];
            var max = 0;

            var div = document.getElementById("angular-heatmap-js-container");
            var width = div.style.width;
            var height = div.style.height;
            var len = 200;

            while (len--) {
                var val = Math.floor(Math.random()*100);
                max = Math.max(max, val);
                var point = {
                    x: Math.floor(Math.random()*width),
                    y: Math.floor(Math.random()*height),
                    value: val
                };
                points.push(point);
            }
            // heatmap data format
            $scope.passed_data = { 
                max: max, 
                data: points 
            };
    })
    .directive('angularHeatmap', function(){
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            template: '<div id="angular-heatmap-js-container" container></div>',
            link: function(scope, ele, attr){
                var div = document.getElementById("angular-heatmap-js-container");

                var width = "400px";
                var height = "200px";

                div.style.width = width;
                div.style.height = height;
                scope.heatmapInstance = h337.create({
                  container: ele.find('div')[0]
                });
                scope.heatmapInstance.setData(scope.data);
            }

        };
    });