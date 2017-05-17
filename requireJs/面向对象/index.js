var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
function Leaf(){
	/*属性：位置、速度、大小   方法：初始化、下落*/
	this.width = 100+Math.random()*50;  //叶子宽度随机100-150
	this.pos = {
		//0 screenWidth-width
		left:Math.random()*(screenWidth-this.width),
		top:0
	}
	this.speed = 5;
}
Leaf.prototype.init = function(){
	var oImg = new Image();
	oImg.src="img/"+(Math.floor(Math.random()*4)+1)+".png";
	oImg.style.width = this.width+"px";
	oImg.style.left = this.pos.left +"px";
	document.body.appendChild(oImg);
}
for(var i=0; i<7;i++){
	var oLeaf = new Leaf();
	oLeaf.init();
}





