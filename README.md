Time Duration Picker
====================

A duration time picker directive that allows a user to select a time via a dropdown widget.

- Click the buttons to change time
- Scroll with your mouse to change time
- Support time copy/paste (e.g, 1 year 2 months 3 days 12:34:56)

## Dependency

- AngularJS
- Bootstrap (Or you can customise by yourself)
- Angular-ui dropdown menu
- Font awesome (Or you can provide your icon set)
- jQuery

## Usage

```html
<script src="src/time-duration-picker.js"></script>
```

## Configuration

The following options can be set either through data attributes on the time input or by overriding the EzTimepickerConfig constant.

```javascript
{
  yearStep            : 1,
  monthStep           : 1,
  dayStep             : 1,
  hourStep            : 1,
  minuteStep          : 1,
  secondStep          : 1,
  meridians           : ['AM', 'PM'],
  showYear            : 'false',
  showMonth           : 'false',
  showDay             : 'false',
  showHour            : 'true',
  showMinute          : 'true',
  showSecond          : 'true',
  showMeridian        : 'true',
  inputContainerClass : 'input-group',
  incIconClass        : 'icon-chevron-up',
  decIconClass        : 'icon-chevron-down'
}
```

## Example

```html
<body ng-app="myApp" ng-controller="RootCtrl">
	<input ez-timepicker class="time-picker" type="text"
		   inc-icon-class = "fa fa-chevron-up"
		   dec-icon-class = "fa fa-chevron-down"
	/>
</body>
```

```javascript
angular.module('myApp', ['ez.timepicker', 'ui.bootstrap'])
.controller('RootCtrl', ['$scope', function($scope) {
 	$scope.data = '12:34:55';
 }
]);
```

Defaults to 00:00:00

## LICENSE

MIT License