$(function(){
    var proOf=document.getElementsByClassName('proportion-of')[0];
    var proSpan=proOf.getElementsByTagName('span');
    var btn=proOf.getElementsByClassName('btn');
    for(var i=0;i<proSpan.length;i++){
        proSpan[i].onclick=function(){
            $(this).siblings().removeClass('active');
            this.classList.add('active');
        }
    }
    for(var i=0;i<btn.length;i++) {
        btn[i].index = i;
        btn[i].onclick = function () {
            $(this).siblings().removeClass('active');
            this.classList.add('active');
            switch (this.index) {
                case 0:
                    proportionOfChart.setOption(proportionOfTodayChartOption);
                    break;
                case 1:
                    proportionOfChart.setOption(proportionOfWeekChartOption);
                    break;
                case 2:
                    proportionOfChart.setOption(proportionOfMonthChartOption);
                    break;
                case 3:
                    proportionOfChart.setOption(proportionOfYearChartOption);
                    break;
            }
        }
    }




    var proportionOfChart = echarts.init(document.getElementById('proportion-of-chart'));

    var proportionOfTodayChartOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['餐饮','酒店','交通','其他'],
            x : 430,
            y : 5,
            textStyle :{
                fontSize : 12,
                color : '#999'
            },
        },
        grid: {
            x:50,
            y:40,
            x2:70,
            y2:140,
            borderColor : '#e5e5e5'
        },
        calculable : true,
        color:['#ff9d00','#fb7a53','#0fa2f2','#00c199'],
        xAxis : [
            {
                type : 'category',
                name : '（时间）',
                boundaryGap : false,
                nameTextStyle : {
                    fontSize : 14,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    }
                },
                data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
            }
        ],
        yAxis : [
            {
                name : '（收入）',
                nameTextStyle : {
                    fontSize : 12,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    },
                    interval:3
                },
                type : 'value'
            }
        ],
        series : [
            {
                name:'餐饮',
                type:'line',
                symbolSize:6,
                data:[120, 132, 101, 134, 90, 230, 800, 120, 42, 105, 155, 105, 40]
            },
            {
                name:'酒店',
                type:'line',
                symbolSize:6,
                data:[10, 182, 191, 234, 0, 330, 310, 120, 132, 101, 134, 90, 230]
            },
            {
                name:'交通',
                type:'line',
                symbolSize:6,
                data:[20, 112, 111, 244, 110, 100, 200, 310, 400, 500, 234, 170, 130]
            },
            {
                name:'其他',
                type:'line',
                symbolSize:6,
                data:[40, 82, 201, 104, 42, 420, 120, 300, 212, 120, 210, 111, 400]
            }
        ]
    };

    var proportionOfWeekChartOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['餐饮','酒店','交通','其他'],
            x : 430,
            y : 5,
            textStyle :{
                fontSize : 12,
                color : '#999'
            },
        },
        grid: {
            x:50,
            y:40,
            x2:70,
            y2:140,
            borderColor : '#e5e5e5'
        },
        calculable : true,
        color:['#ff9d00','#fb7a53','#0fa2f2','#00c199'],
        xAxis : [
            {
                type : 'category',
                name : '（时间）',
                boundaryGap : false,
                nameTextStyle : {
                    fontSize : 14,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    }
                },
                data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
            }
        ],
        yAxis : [
            {
                name : '（收入）',
                nameTextStyle : {
                    fontSize : 12,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    },
                    interval:3
                },
                type : 'value'
            }
        ],
        series : [
            {
                name:'餐饮',
                type:'line',
                symbolSize:6,
                data:[600, 104, 452, 450, 452, 782, 101, 521, 125, 634, 105, 721, 358]
            },
            {
                name:'酒店',
                type:'line',
                symbolSize:6,
                data:[452, 785, 401, 740, 465, 605, 736, 404, 450, 203, 741, 302, 108]
            },
            {
                name:'交通',
                type:'line',
                symbolSize:6,
                data:[524, 482, 721, 104, 201, 520, 102, 712, 560, 402, 710, 100, 453]
            },
            {
                name:'其他',
                type:'line',
                symbolSize:6,
                data:[724, 120, 120, 432, 302, 712, 605, 190, 424, 800, 710, 401, 633]
            }
        ]
    };

    var proportionOfMonthChartOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['餐饮','酒店','交通','其他'],
            x : 430,
            y : 5,
            textStyle :{
                fontSize : 12,
                color : '#999'
            },
        },
        grid: {
            x:50,
            y:40,
            x2:70,
            y2:140,
            borderColor : '#e5e5e5'
        },
        calculable : true,
        color:['#ff9d00','#fb7a53','#0fa2f2','#00c199'],
        xAxis : [
            {
                type : 'category',
                name : '（时间）',
                boundaryGap : false,
                nameTextStyle : {
                    fontSize : 14,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    }
                },
                data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
            }
        ],
        yAxis : [
            {
                name : '（收入）',
                nameTextStyle : {
                    fontSize : 12,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    },
                    interval:3
                },
                type : 'value'
            }
        ],
        series : [
            {
                name:'餐饮',
                type:'line',
                symbolSize:6,
                data:[100, 200, 300, 400, 500, 550, 600, 700, 712, 718, 736, 780, 800]
            },
            {
                name:'酒店',
                type:'line',
                symbolSize:6,
                data:[50 , 400, 200, 600, 500, 760, 320, 350, 100, 200, 250, 400, 100]
            },
            {
                name:'交通',
                type:'line',
                symbolSize:6,
                data:[700, 400, 500, 800, 100, 150, 200, 300, 400, 450, 100, 300, 250]
            },
            {
                name:'其他',
                type:'line',
                symbolSize:6,
                data:[400, 600, 100, 120, 170, 250, 400, 250, 300, 500, 100, 350, 250]
            }
        ]
    };

    var proportionOfYearChartOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['餐饮','酒店','交通','其他'],
            x : 430,
            y : 5,
            textStyle :{
                fontSize : 12,
                color : '#999'
            },
        },
        grid: {
            x:50,
            y:40,
            x2:70,
            y2:140,
            borderColor : '#e5e5e5'
        },
        calculable : true,
        color:['#ff9d00','#fb7a53','#0fa2f2','#00c199'],
        xAxis : [
            {
                type : 'category',
                name : '（时间）',
                boundaryGap : false,
                nameTextStyle : {
                    fontSize : 14,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    }
                },
                data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']
            }
        ],
        yAxis : [
            {
                name : '（收入）',
                nameTextStyle : {
                    fontSize : 12,
                },
                axisLine : {
                    lineStyle : {
                        color : '#666'
                    }
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12  //刻度大小
                    },
                    interval:3
                },
                type : 'value'
            }
        ],
        series : [
            {
                name:'餐饮',
                type:'line',
                symbolSize:6,
                data:[5000, 10000, 3000, 3500, 10000, 5500, 7000, 6000, 5000, 6000, 5000, 7000, 8000]
            },
            {
                name:'酒店',
                type:'line',
                symbolSize:6,
                data:[5000 , 7000, 2000, 4000, 4500, 7520, 3502, 4125, 1762, 4125, 1253, 7411, 6000]
            },
            {
                name:'交通',
                type:'line',
                symbolSize:6,
                data:[5201, 4120, 4258, 7412, 1205, 4425, 4265, 4258, 1230, 7852, 1258, 7412, 3620]
            },
            {
                name:'其他',
                type:'line',
                symbolSize:6,
                data:[4000, 5201, 4000, 6000, 4752, 1250, 5041, 7541, 1235, 5321, 1245, 7541, 7512]
            }
        ]
    };

    proportionOfChart.setOption(proportionOfTodayChartOption);
})