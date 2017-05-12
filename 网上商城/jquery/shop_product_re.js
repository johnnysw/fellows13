/**
 * Created by apple on 17/5/11.
 */
requirejs.config({
    baseUrl: 'jquery/',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function($,dialog){
    $('.small-img li').on('click',function(){
        dialog.open({
            width:500,
            height:400,
            opacity:0.9,
            title:'haha',
            content:'.div1'
        });
    });
   // dialog.close();
});