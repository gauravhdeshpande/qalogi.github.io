
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
$sc.user = "LeftPaneUser";
}]);
app.controller('Root',["$scope",function($sc){
	console.log('i am grut');
	$sc.nav = false;
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
$sc.click1 = function($e){
	$sc.nav = !$sc.nav;
	console.log($sc.nav);
}


}]);
app.controller('Stage',["$scope",function($sc){
	console.log('i am stageee');
	$sc.user = "StageUser";
}])
