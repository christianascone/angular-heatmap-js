angular.module('demoApp').controller('DemoController', function($scope) {
	var ctrl = this;

	function generateRandomData(len) {
		var max = 100;
		var min = 1;
		var maxX = 500;
		var maxY = 300;
		var data = [];
		while (len--) {
			data.push({
				x: ((Math.random() * maxX) >> 0),
				y: ((Math.random() * maxY) >> 0),
				value: ((Math.random() * max + min) >> 0),
				radius: ((Math.random() * 50 + min) >> 0)
			});
		}
		return {
			max: max,
			min: min,
			data: data
		}
	};
	// data can be set manually with the heatmap data attribute
	ctrl.heatmapData = generateRandomData(400);

});