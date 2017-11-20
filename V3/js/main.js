
var app = angular.module('LogixalApp',[])
.controller('LeftPane',["$scope",function($sc){
console.log('hie',$sc);
$sc.pages=[{
	"name":"What We Do",
	"url" :"/home",
	"submenu":[{
		"name":"Jack",
		"url" :"/home"
	},{
		"name":"Sparrow",
		"url" :"/home"
	}]
},{
	"name":"Company",
	"url" :"/about-us"
},{
	"name":"Contact Us",
	"url" :"/about-us"
},
{
	"name":"Join Us",
	"url" :"/about-us"
},{
	"name":"Case Studies",
	"url" :"/about-us"
}];
}]);
app.controller('Root',["$scope",function($sc){
	console.log('i am grut');
}]);
app.controller('Stage',["$scope",function($sc){
	console.log('i am stageee');
}])
