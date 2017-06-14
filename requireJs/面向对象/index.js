var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight= document.documentElement.clientHeight || document.body.clientHeight;
function Leaf(){
	/*属性：位置、速度、大小   方法：初始化、下落*/
	this.width = 100+Math.random()*50;  //叶子宽度随机100-150
	this.pos = {
		//0 screenWidth-width
		left:Math.random()*(screenWidth-this.width),
		top:0
	}
	this.speed = 5;
	this.img = new Image();
	this.img.src="img/"+(Math.floor(Math.random()*4)+1)+".png";
	this.img.style.width = this.width+"px";
	this.img.style.left = this.pos.left +"px";
}
Leaf.prototype.init = function(){
	document.body.appendChild(this.img);
}
Leaf.prototype.fall = function(){
	var _this = this;
	setTimeout(function(){

		clearInterval(_this.timer);
		_this.timer = setInterval(function(){
			//_this.width == height
			if(_this.img.offsetTop > screenHeight - _this.width){
				clearInterval(_this.timer);
			}else{
				_this.img.style.top =_this.img.offsetTop +_this.speed+"px";
			}
		},30)
	},Math.random()*1000);	
}
var aLeaf = [];
for(var i=0; i<7;i++){
	var oLeaf = new Leaf();
	oLeaf.init();
	aLeaf.push(oLeaf);
}
document.onclick = function(){
	for(var i=0; i<aLeaf.length; i++){
		aLeaf[i].fall();
	}
}







