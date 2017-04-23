var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var oCheckAll = document.getElementById('checkAll');
for(var i=0; i<aTr.length; i++){
	aTr[i].onclick = function(){


		var oCheck = this.getElementsByTagName('input')[0];
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
}

