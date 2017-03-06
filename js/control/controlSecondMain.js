$(function(){
    var mainHeight=document.documentElement.clientHeight-206;
    $('.part').css('height',mainHeight);

    $('.page-wrap li').on('click',function(){
        $('.page-wrap li').removeClass('page-active');
        $(this).addClass('page-active');
    });
})