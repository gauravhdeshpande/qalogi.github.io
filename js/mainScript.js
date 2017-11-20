$(document).ready(function(){
	$(document).on('click','.panel',function(e){
		var t = $(e.target).parent().parent().next('.panel-collapse');
		console.log($(t).hasClass('in'));
	})
})