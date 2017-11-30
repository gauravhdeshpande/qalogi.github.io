$(document).ready(function(){
	$(document).on('click','a[href="#"]',function(e){
		e.preventDefault();
	});
	$('ul.icon-gallery li').attr('class','col-xs-6 col-md-3');
	$('ul.lines-of-business li').attr('class','col-xs-12 col-sm-6 col-md-3');
})