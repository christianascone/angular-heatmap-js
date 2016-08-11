# angular-heatmap-js
Angular JS Directive for Patrick Wied's [heatmap.js](https://github.com/pa7/heatmap.js)

## Installation

Install it with bower

    bower install angular-heatmap-js --save

Add the module to your app

    angular.module('app', [
      'angular-heatmap-js',
    ]);

Include required files

	<script src="bower_components/angular/angular.min.js"></script>
	<script src="bower_components/angular-heatmap-js/src/angular-heatmap.js"></script>
	<script src="bower_components/heatmap.js-amd/build/heatmap.min.js"></script>

##Usage

```html
<angular-heatmap heatmap-data="heatmapData"></angular-heatmap>
```

The heatmap will have the same size (width and height) of his container.

For example:
```html
<div ng-controller="DemoController as demoCtrl" style="width: 500px; height: 300px;">
	<angular-heatmap heatmap-data="demoCtrl.heatmapData"></angular-heatmap>
</div>
```
The heatmap will be 500x300.

##Data

The dataset must be follow the [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/examples.html) format.

Here is a function for a sample random dataset:
```js
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
```


## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).