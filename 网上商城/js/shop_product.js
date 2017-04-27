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
/*
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
	// 事件源 
	// 事件处理函数
	// 事件

	// 事件冒泡
document.body.onclick = function(e){

	// console.log(e.target);
	var target = e.target || event.srcElement;

	if(target != oBtn && target != oP && target != oSpan){
		oUl.style.display = 'none';
	}
	
}
*/


var oSelBox = document.getElementById('select-box');
var oSelBtn = getClass('sel-btn',oSelBox)[0];
var oSelMenu = getClass('sel-menu',oSelBox)[0];
var aOptions = oSelMenu.getElementsByTagName('li');
var oP = oSelBtn.getElementsByTagName('p')[0];
var oSpan = oSelBtn.getElementsByTagName('span')[0];
oSelBtn.onmousedown = function(){
	oSelBox.className = 'select-box selected';
}
oSelBtn.onmouseup = function(){
	oSelBox.className = 'select-box';
	if(oSelMenu.style.display == 'none' || oSelMenu.style.display == ''){
		oSelMenu.style.display = 'block';
	}else{
		oSelMenu.style.display = 'none';
	}
}

for(var i=0; i<aOptions.length; i++){
	aOptions[i].onclick = function(){
		oP.innerHTML = this.innerHTML;
		oSelMenu.style.display = 'none';
		//console.log();
	}
}

document.onclick = function(e){
	//console.log(e.target);
	var target = e.target || event.srcElement;
	if(target!= oP && target != oSpan && target != oSelBtn ){
		oSelMenu.style.display = 'none';
	}
}


// 弹层

var oSmallImg = getClass('small-img')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass('dialog-box')[0];
var oDialogBody = getClass('dialog-body',oDialogBox)[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass('dialog-close',oDialogBox)[0];
var oDialogPrev = getClass('dialog-prev',oDialogBox)[0];
var oDialogNext = getClass('dialog-next',oDialogBox)[0];
var oSlideBtn = getClass('slide-btn',oDialogBox)[0];
var oContent = getClass('content',oDialogBox)[0];
var iNow = 0;
for(var i=0; i<aDialogLi.length; i++){
	aDialogLi[i].index = i;
	aDialogLi[i].onclick = function(){
		var oImg = this.getElementsByTagName('img')[0];
		oDialogBox.style.display = 'block';
		oDialogImg.src=oImg.src;

		oContent.style.animation = 'show 1s ease forwards';
		iNow = this.index;
	}
}
// 关闭弹层
oDialogBox.onclick = function(e){
	var target = e.target || event.srcElement;
	if(target == oDialogBox || target == oDialogClose){
		oDialogBox.style.display = 'none';
	}
}
oDialogPrev.onclick = function(){
	iNow--;
	if(iNow == -1){
		iNow = aDialogLi.length -1;
	}
	slideNext();
	/*var prevLi = aDialogLi[iNow];
	oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;*/

}
oDialogNext.onclick = function(){
	iNow++;
	if(iNow == aDialogLi.length){
		iNow = 0;
	}
	slideNext();
	//oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
}
function slideNext(){
	//取到下一个li
	var nextLi = aDialogLi[iNow];
	//取到下一个li里的图片的src属性
	var nextSrc = nextLi.getElementsByTagName('img')[0].src;
	//创建一个新的img
	var oImg = document.createElement('img');
	oImg.src=nextSrc;
	//获取到原有图片
	var oldImg = oDialogBody.children[0];
	//插入一张新图，在原有图片前边
	oDialogBody.insertBefore(oImg,oldImg);
	//原有图片动画隐藏
	oldImg.style.animation = 'hide 1s ease forwards';
	//原有图片动画隐藏后 remove掉
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000);
}
var timer = '';
oSlideBtn.onclick = function(){
	if(timer){
		clearInterval(timer);
		timer = '';
	}else{
		timer = setInterval(function(){
			oDialogPrev.onclick();
		},1000);
	}
}













