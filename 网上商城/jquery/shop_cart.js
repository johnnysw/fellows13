var flag = true;  //没有被全选
$('tbody tr').on('click',function(){
	$(this).toggleClass('selected');
	$(this).find(':checkbox').prop('checked',$(this).hasClass('selected'));
	flag = true;
	$('tbody tr').each(function(index,elem){
		if(!$(this).hasClass('selected')){
			flag = false;
		}
	})
	$('#checkAll').prop('checked',flag);

});
$('#checkAll').on('click',function(){
	if(this.checked){
		$('tbody tr').addClass('selected');
	}else{
		$('tbody tr').removeClass('selected');
	}
	$('tbody tr :checkbox').prop('checked',this.checked);
});