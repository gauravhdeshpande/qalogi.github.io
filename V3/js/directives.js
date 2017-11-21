(function(){
	var app = angular.module('LogixalApp');
	
	app.directive('a',HashHref);
	app.directive('hamburger',HamDirective);
	
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
				});
			}
		}
	}
	function HamDirective(){
		var directive =  {
			restrict:"E",
			link:link,
			templateUrl: 'templates/hamburger-menu.html',
			controller:HamCntrl,
			controllerAs:'Ham'
		}
		return directive;
		function link(scope,el,attrs){
			
		}
	}
	function HamCntrl(){
		this.showMenu = false;
		this.click = function(){
			this.showMenu = !this.showMenu;
		}
	}
})(angular)