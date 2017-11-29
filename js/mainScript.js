$(document).ready(function(){
	$(document).on('click','a[href="#"]',function(e){
		e.preventDefault();
	});
	$('ul.icon-gallery li').attr('class','col-xs-6 col-md-3');
})