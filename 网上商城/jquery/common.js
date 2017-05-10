$('.menu-btn').hover(function(){
	$(this).find('.sub-menu').show().animate({
		top:56
	});
},function(){
	 $(this).find('.sub-menu').hide().css('top','120px')
});