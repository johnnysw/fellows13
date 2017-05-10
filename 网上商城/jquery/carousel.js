var iNow = 0;
var timer;
var $btns = $('.carousel-btns li');
$btns.on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	$('.carousel-imgs').animate({
		left:-960*$(this).index()
	},1000)
	iNow = $(this).index();
});
run();
$('.carousel').on('mouseover',function(){
	clearInterval(timer);
}).on('mouseout',function(){
	run();
})
function run(){
	timer = setInterval(function(){
		iNow++;
		if(iNow == $btns.length ){
			iNow = 0;
		}
		$btns.eq(iNow).trigger('click');
	},2000);
}




