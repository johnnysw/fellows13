/**
 * Created by apple on 17/4/17.
 */

function getClass(clsName,context){
    var result = [];
    /* if(context == undefined){
     var arr = document.getElementsByTagName('*');
     }else{
     var arr = context.getElementsByTagName('*');
     }*/
    context = context || document;

    var arr = context.getElementsByTagName('*');

    for(var i=0; i<arr.length;i++){
        //'aabb'   'aa'
        if(arr[i].className.indexOf(clsName) != -1){
            result.push(arr[i]);
        }
    }
    return result;
}

var oBox = document.getElementById('nav');

var aLi = getClass('menu-btn',oBox);

for(var i=0; i<aLi.length;i++){
    aLi[i].onmouseover = function(){

        //console.log(i);

        //console.log(this);
        var oUl = this.getElementsByTagName('ul')[0];
        oUl.style.display = 'block';

    }
    aLi[i].onmouseout = function(){

        //console.log(i);

        //console.log(this);
        var oUl = this.getElementsByTagName('ul')[0];
        oUl.style.display = 'none';

    }
}

console.log(i+"ashgdkhsgdfk");



