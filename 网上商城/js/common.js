function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr = context.getElementsByTagName('*');
	for(var i=0; i<arr.length; i++){
		//class  保留字 .className
		//'aa bb' == 'aa'   'aacc'
		if(arr[i].className.indexOf(clsName) != -1){
			result.push(arr[i]);
		}
	}
	return result;
}
var oMenuBox = document.getElementById('menu-box');
var aLi = getClass('menu-btn',oMenuBox);

for(var i=0; i<aLi.length; i++){
	aLi[i].onmouseover = function(){
		// alert("hahah");
		// console.log(aLi[i]); //i = 2;
		//this  //对当前对象的引用
		var aUl = this.getElementsByTagName('ul'); 
		aUl[0].style.display = 'block';
	}
	aLi[i].onmouseout = function(){
		var oUl = this.getElementsByTagName('ul')[0];
		oUl.style.display = 'none';
	}
}

//console.log(i);











