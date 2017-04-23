var oTbody = document.getElementsByTagName('tbody')[0];
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
}
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

var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];
oTr.onclick = function(){
    oCheckAll.checked = true;
    
    for(var i=0; i<aTr.length; i++){
        if(oCheckAll.checked == true){
            aTr[i].className = 'selected';
        }else{
            aTr[i].className = '';
        }
        aCheckBtn[i].checked = oCheckAll.checked;
    }

}


















