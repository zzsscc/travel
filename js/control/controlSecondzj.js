$(function(){
    //闸机
    var zjwhether=document.querySelectorAll('.whether');
    for(var i=0;i<zjwhether.length;i++){
        switch (zjwhether[i].innerHTML) {
            case '检票成功':
                zjwhether[i].style.color='#00c199';
                break;
            case '检票失败':
                zjwhether[i].style.color='#ff4949';
                break;
        }
    }

    $("#begin-datepicker").datetimepicker({
        showSecond: true,
        timeFormat: 'HH:mm:ss',
    });
    $("#begin-datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
    });
    $("#begin-datepicker").timepicker();
    $("#begin-datepicker").datetimepicker('setDate', (new Date()) );        //设置默认时间为当前时间



    $("#end-datepicker").datetimepicker({
        showSecond: true,
        timeFormat: 'HH:mm:ss',
    });
    $("#end-datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
    });
    $("#end-datepicker").timepicker();
})