app.directive('ngHello', function(){
	return {
		restrict: 'E',
		scope: {
			name: '='
		},
		templateUrl:'webapp/js/directives/ngHello.html',
		link: function changeColour(scope, elem, attrs){
			elem.bind('click', function() {
        		elem.toggleClass("highlight"); 
      		});
		}
	};
});