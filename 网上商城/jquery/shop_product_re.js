/**
 * Created by apple on 17/5/11.
 */
requirejs.config({
    baseUrl: 'jquery/',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog1'],function($,Dialog){
    $('.small-img li').on('click',function(){
        var dialog1 = new Dialog({
            width:500,
            height:400,
            opacity:0.5,
            title:'haha',
            content:'.div1'
        });

        dialog1.open();
    });

    $('body').on('click','#login-btn',function(){
        var dialog2 = new Dialog({
            width:200,
            height:100,
            opacity:0.7,
            title:'登陆成功'
        });

        dialog2.open();
    });
   // dialog.close();
});