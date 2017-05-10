/*下拉*/
var $selBtn = $('.sel-btn'),
	$selMenu = $('.sel-menu');

$selBtn.on('mousedown',function(){
	$('#select-box').addClass('selected');
});
$selBtn.on('mouseup',function(){
	$('#select-box').removeClass('selected');
	$selMenu.toggle();
});
/*$selBtn.on('click',function(){
	$selMenu.toggle();
});*/
$('li',$selMenu).on('click',function(){

	$('p',$selBtn).html($(this).html());
	$selMenu.hide();
})
$(document).on('click',function(e){
	if(e.target != $selBtn[0] && e.target != $('p',$selBtn)[0] && e.target != $('span',$selBtn)[0] ){
		$selMenu.hide();
	}
})
// 选项卡
$('.btns-box li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.tab-item').eq($(this).index()).show().siblings().hide();
});
// 弹出层
var iNow = 0;

$('.small-img li').on('click',function(){
	$('.dialog-box').show();
	$('.content').animate({
		top:'50%'
	},5000);
	$('.dialog-body img').attr('src',$(this).find('img').attr('src'));
	iNow = $(this).index();
});

$('.dialog-box').on('click',function(e){
	if(  e.target  == $('.dialog-box')[0] || e.target == $('.dialog-close')[0]   ){
		$(this).hide();
		$('.content').stop().css('top','-249px');
	}
});
$('.dialog-next').on('click',function(){
	iNow++;
	if(iNow == $('.small-img li').length){
		iNow = 0;
	}
	var $NextImgSrc = $('.small-img img').eq(iNow).attr('src');
	$('.dialog-body img').eq(0).before('<img src="'+$NextImgSrc+'"/>');
	$('.dialog-body img').eq(0).siblings('img').fadeOut(2000,function(){
		$(this).remove();
	});
})

















