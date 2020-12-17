$(document).ready(function(){
	$(window).on("scroll",function(){
		if($(window).scrollTop()){
			$(".site-header .header").addClass("white");
		}
		else{
			$(".site-header .header").removeClass("white");
		}
	})

})
