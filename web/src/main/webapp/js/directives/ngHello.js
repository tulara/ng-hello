app.directive('ngHello', function(){
	return {
		restrict: 'E',
		scope: {
			name: '='
		},
		templateUrl:'js/directives/ngHello.html'
	};
});