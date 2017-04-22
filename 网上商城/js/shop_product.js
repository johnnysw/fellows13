// 选项卡
var oTabBox = document.getElementById('tab-box'),
	aLi = oTabBox.getElementsByTagName('li'),
	aDiv = getClass('tab-item',oTabBox);

	for(var i=0; i<aLi.length; i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(var j=0; j<aDiv.length; j++){
				aDiv[j].style.display = 'none';
				aLi[j].className = '';
			}
			this.className = 'active';
			aDiv[this.index].style.display = 'block';
		}
	}
// 下拉
var oSelBox = document.getElementById('select-box');
var oBtn = getClass('sel-btn',oSelBox)[0];
var oUl = getClass('sel-menu',oSelBox)[0];
var aOption = oUl.getElementsByTagName('li');
var oP = oBtn.getElementsByTagName('p')[0];
var oSpan = oBtn.getElementsByTagName('span')[0];

oBtn.onmousedown = function(){
	oSelBox.className = 'select-box selected';
}
oBtn.onmouseup = function(){
	oSelBox.className = 'select-box';

	if(oUl.style.display == 'none' || oUl.style.display == ''){
		oUl.style.display = 'block';
	}else{
		oUl.style.display = 'none';
	}
}

for(var i=0; i<aOption.length;i++){
	aOption[i].onclick = function(){
		oP.innerHTML = this.innerHTML;
		oUl.style.display = 'none';
		// console.log(this.innerHTML);
	}
}
	// console.log('aaa');
	/*事件源 
	事件处理函数
	事件*/

	// 事件冒泡
document.body.onclick = function(e){

	// console.log(e.target);
	var target = e.target || event.srcElement;

	if(target != oBtn && target != oP && target != oSpan){
		oUl.style.display = 'none';
	}
	
}














