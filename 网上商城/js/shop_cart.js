/*var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var oCheckAll = document.getElementById('checkAll');
var aCheckBtn = getClass('checkBtn',oTbody);
for(var i=0; i<aTr.length; i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		//判断是否被选中
		if(this.className == 'selected'){//已经被选中
			this.className = '';
			oCheck.checked = false;
		}else{
			this.className = 'selected';
			oCheck.checked = true;
		}
		//判断是否全被勾上
		var aCheckTr = getClass('selected',oTbody);
		if(aCheckTr.length == aTr.length){
			oCheckAll.checked = true;
		}else{
			oCheckAll.checked = false;
		}
	}
}*/
//全选按钮点击
/*oCheckAll.onclick = function(){
	console.log(this.checked);
	for(var i=0; i<aTr.length; i++){
		if(this.checked == true){
			aTr[i].className = 'selected';
		}else{
			aTr[i].className = '';
		}
		aCheckBtn[i].checked = this.checked;
	}
}*/

/*var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];
oTr.onclick = function(e){
	var target = e.target || event.srcElement;
	if(target != oCheckAll){
		oCheckAll.checked = !oCheckAll.checked;
	}
    for(var i=0; i<aTr.length; i++){
        if(oCheckAll.checked == true){
            aTr[i].className = 'selected';
        }else{
            aTr[i].className = '';
        }
        aCheckBtn[i].checked = oCheckAll.checked;
    }

}*/



 var oTbody = document.getElementsByTagName('tbody')[0];
 var aTr = oTbody.getElementsByTagName('tr');
 var oCheckAll = document.getElementById('checkAll');
 var aCheckBtn = getClass('checkBtn',oTbody);


for(var i=0; i<aTr.length; i++){
	aTr[i].onclick = function(){
		if(this.className == 'selected'){//取消勾选
			this.className = '';
			var oCheckBox = this.getElementsByTagName('input')[0];
			oCheckBox.checked = false;
		}else{ //勾选
			this.className = 'selected';
			var oCheckBox = this.getElementsByTagName('input')[0];
			oCheckBox.checked = true;
		}

		var aSelTr = getClass('selected',oTbody);
		if(aSelTr.length == aTr.length){
			oCheckAll.checked = true;
		}else{
			oCheckAll.checked = false;
		}


	}
}

oCheckAll.onclick = function(){
	//console.log(this.checked);
	if(this.checked){
		for(var i=0; i<aTr.length; i++){
			aTr[i].className = 'selected';
			aCheckBtn[i].checked = this.checked;
		}
	}else{
		for(var i=0; i<aTr.length; i++){
			aTr[i].className = '';
			aCheckBtn[i].checked = this.checked;
		}
	}
}







