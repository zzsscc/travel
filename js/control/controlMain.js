$(function(){
    var icons=document.getElementsByClassName('icon');
    var icons2=document.getElementsByClassName('icon2');

    var initial=113;
    var initial2=105;

    for(var i=0;i<icons.length;i++){
        icons[i].style.left=initial+'px';
        icons[i].style.bottom=8+'px';
        initial+=95;
    }
    for(var i=0;i<icons2.length;i++){
        icons2[i].style.left=initial2+'px';
        icons2[i].style.bottom=76+'px';
        initial2+=95;
    }

    var mapHeight=document.documentElement.clientHeight-50;
    $('.main-container').css('height',mapHeight);


    //var $wifi=$('.wifi-logo');
    //var $gb=$('.gb-logo');
    //var $jk=$('.jk-logo');
    //var $zj=$('.zj-logo');
    //hover($wifi);
    //hover($gb);
    //hover($jk);
    //hover($zj);
    //var zIndex=1;
    //function hover(obj){
    //    obj.hover(function(e) {
    //            zIndex++;
    //            var cc = $(this).find('.zq');
    //            cc.stop().fadeTo (0,1);
    //            $(this).css("z-index",zIndex);
    //        },function(e) {
    //            var cc = $(this).find('.zq');
    //            cc.stop().fadeTo (500,0,function (){
    //                $(this).css({"display":"none","z-index":zIndex});
    //
    //            })
    //        }
    //    )
    //}


})