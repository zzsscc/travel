$(function () {
    //wifi
    function bianse(){
        var td=document.getElementsByTagName('td');
        for(var i=0;i<td.length;i++){
            switch (td[i].innerHTML) {
                case '低':
                    td[i].style.color='#00c199';
                    break;
                case '中':
                    td[i].style.color='#ff9c00';
                    break;
                case '高':
                    td[i].style.color='#ff4949';
                    break;
                case '不可限速':
                    td[i].style.color='#999';
                    break;
                case '不限速':
                    td[i].style.color='#00c199';
                    break;
                case '限速':
                    td[i].style.color='#0fa2f2';
                    break;
                case '禁用网络':
                    td[i].style.color='#ff4949';
                    break;
            }
        }
    }
    bianse();

    var wificz=document.querySelectorAll('.wificz');
    var put=document.querySelector('.put');
    for(var i=0;i<wificz.length;i++){
        wificz[i].onclick=function(){
            if(this.innerHTML != '不可限速'){
                put.style.display='block';
                this.classList.add('active');
                for (var i = 0; i < outside.length; i++) {
                    outside[i].classList.remove('active');
                }
                for (var j = 0; j < inside.length; j++) {
                    inside[j].classList.remove('active');
                }
            }
        };
    }


    var outside=document.querySelectorAll('.outside');
    var inside=document.querySelectorAll('.inside');
    for(var i=0;i<outside.length;i++){
        outside[i].index = i;
        outside[i].onclick = function () {
            for (var i = 0; i < outside.length; i++) {
                outside[i].classList.remove('active');
            }
            this.classList.add('active');
            for (var j = 0; j < inside.length; j++) {
                inside[j].classList.remove('active');
            }
            inside[this.index].classList.add('active');
        }
    }
    var close=document.querySelector('.popup-close');
    close.onclick= function () {
        put.style.display='none';
        for(var i=0;i<wificz.length;i++) {
            wificz[i].classList.remove('active');
        }
    }

    var sure=document.querySelector('.sure');
    sure.onclick= function () {
        put.style.display='none';
        for (var i = 0; i < outside.length; i++) {
            if($(outside[i]).hasClass('active')){
                var surehtml=$(outside[i]).prev().html();
                for(var i=0;i<wificz.length;i++){
                    if($(wificz[i]).hasClass('active') && surehtml!=''){
                        $(wificz[i]).html(surehtml);
                        bianse();
                    }
                    wificz[i].classList.remove('active');
                }
            }
        }
    }
})