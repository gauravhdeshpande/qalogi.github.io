(function(){
	var app = angular.module('LogixalApp');
	
	app.directive('a',HashHref);
	app.directive('hamburger',Ham);
	
	function HashHref(){
		var directive = {
			restrict:'E',
			link:link
		}
		return directive;
		function link(scope,element,attrs){
			if(attrs.href == "#"){
				element.on('click',function(e){
					e.preventDefault();
					console.log('wallah');
				});
			}
		}
	}
	function Ham(){
		console.log('heyo');
		var directive =  {
			restrict:"EC",
			link:link
		}
		return directive;
		function link(scope,el,attrs){
			console.log(el);
			var toggler = el.children('.navbar-toggler')
		}
	}
})(angular)