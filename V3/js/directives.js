(function(){
	var app = angular.module('LogixalApp');
	kiko = app;
	app.directive('diva',function(){
		var directive = {
			
		};
		directive.restrict = "AE";
		console.log('wo',directive.scope);
		/*directive.scope = {
			fn:"=firstName"
		}*/
		directive.template = "My first directive:{{user}} and {{fn}}";
		return directive;
	})
})(angular)