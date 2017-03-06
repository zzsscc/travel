$(function(){

    var map = new BMap.Map("control-map");          // 创建地图实例
    var point = new BMap.Point(121.9044790000,28.4547990000);  // 创建坐标点 其中116.404表示经度，39.915表示纬度。
    map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别 地图必须经过初始化才可以执行其他操作。
    map.enableScrollWheelZoom();         //鼠标滚轮控制缩放
    //map.disableDragging();               //禁止拖拽
    map.enableDragging();                //可拖拽
    map.enableInertialDragging();        //惯性拖拽


//        向地图添加控件
    map.addControl(new BMap.NavigationControl()); //平移缩放控件
    map.addControl(new BMap.ScaleControl());        //比例尺控件
    map.addControl(new BMap.OverviewMapControl());  //缩略地图控件
    map.addControl(new BMap.MapTypeControl());      //地图类型控件


    //添加图标
    //var marker = new BMap.Marker(new BMap.Point(121.9123060000,28.4554950000)); // 创建点
    //map.addOverlay(marker);
    function addMarker(picurl,pointArr,siziWidth,sizeHeight,infoWindow){
        var iconPic = new BMap.Icon(picurl, new BMap.Size(siziWidth,sizeHeight));
        var wifiPoint=[];
        function addWifiMarker(point){
            var marker = new BMap.Marker(point,{icon:iconPic});
            map.addOverlay(marker);
            marker.addEventListener("click", function(){
                this.openInfoWindow(infoWindow);
                //图片加载完毕重绘infowindow
                infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
            });
            return marker;
        }
        // 批量添加标注
        for (var i = 0; i < pointArr.length; i ++) {
            var point = new BMap.Point(pointArr[i].longitude,pointArr[i].latitude);
            wifiPoint.push(addWifiMarker(point));
        }
        //for (var i = 0; i < shpoint.length; i ++) {
        //    shpoint[i].hide();
        //}     ---隐藏小点
    }
    //添加wifi图标
    var pointWifiArr=[
        {
            longitude:121.9128270000,
            latitude:28.4561620000
        },
        {
            longitude:121.9080840000,
            latitude:28.4567970000
        },
        {
            longitude:121.8975340000,
            latitude:28.4497100000
        },
        {
            longitude:121.9256190000,
            latitude:28.4681970000
        },
        {
            longitude:121.9252230000,
            latitude:28.4645130000
        }
    ];
    var wifiContent =
       '<div class="zq">'+
    '<div class="zq-tl clearfix">'+
        '<div class="zq-title">wifi源设备状态</div>'+
    '</div>'+
    '<div class="zq-cwrap">'+
        '<div>设备状态 ：<span style="color:#00c199">正常</span></div>'+
        '<div>设备编号 ：MYS-012</div>'+
    '<div>当前连接 ：146台设备</div>'+
    '<div>网络速度 ：100M/bps</div>'+
    '<div>连续运行时间 ：5天20小时50分钟</div>'+
    '</div>'+
    '<div class="zqbtn clearfix">'+
        '<div class="cq">重启</div>'+
        '<div class="dk">断开</div>'+
        '<div class="ck"><a href="../../html/control/secondary/wifi-secondary.html">查看详情</a></div>'+
        '</div>'+
        '</div>';
    var wifiOpt={
        width:250,
        height: 180,
    };
    var wifiInfoWindow = new BMap.InfoWindow(wifiContent,wifiOpt);
    function addwifi(){
        addMarker("../../img/wifi2.png", pointWifiArr, 23, 17, wifiInfoWindow);
    }
    addwifi();
    //添加闸口图标
    var pointZjArr=[
        {
            longitude:121.9151420000,
            latitude:28.4555630000
        },
        {
            longitude:121.9090540000,
            latitude:28.4561380000
        },
        {
            longitude:121.8999910000,
            latitude:28.4489990000
        },
        {
            longitude:121.9274870000,
            latitude:28.4676980000
        },
        {
            longitude:121.9270310000,
            latitude:28.4639470000
        }
    ];
    var zkContent =
    '<div class="zj-logo">'+
        '<div class="zq">'+
        '<div class="zq-tl clearfix">'+
        '<div class="zq-title">检票闸口状态</div>'+
    '</div>'+
    '<div class="zq-cwrap">'+
        '<div>设备状态 ：<span style="color:#00c199">正常</span></div>'+
        '<div>设备编号 ：景区东大门闸机</div>'+
    '</div>'+
    '<div class="zqbtn clearfix">'+
        '<div class="ck"><a href="../../html/control/secondary/zj-secondary.html">查看详情</a></div>'+
        '</div>'+
        '</div>'+
        '</div>';
    var zkOpt={
        width:230,
        height: 130,
    };
    var zkInfoWindow = new BMap.InfoWindow(zkContent,zkOpt);
    function addzk(){
        addMarker("../../img/闸机.png", pointZjArr, 29, 29, zkInfoWindow);
    }
    addzk();
    //添加广播图标
    var pointGbArr=[
        {
            longitude:121.9119420000,
            latitude:28.4555630000
        },
        {
            longitude:121.9070540000,
            latitude:28.4561380000
        },
        {
            longitude:121.8966010000,
            latitude:28.4489990000
        },
        {
            longitude:121.9245870000,
            latitude:28.4676980000
        },
        {
            longitude:121.9242310000,
            latitude:28.4639470000
        }
    ];
    var gbContent =
    '<div class="gb-logo">'+
        '<div class="zq gb-logo-zq">'+
        '<div class="zq-tl clearfix">'+
        '<div class="zq-title">广播设备状态</div>'+
    '</div>'+
    '<div class="zq-cwrap">'+
        '<div>设备状态 ：<span style="color:#00c199">正常</span></div>'+
        '<div>设备编号 ：LTM-005</div>'+
    '<div>当前广播内容 ：通浪门当前风浪过大，请游客注意安全</div>'+
    '<div>下一条广播内容：暂无</div>'+
    '</div>'+
    '<div class="zqbtn clearfix">'+
        '<div class="cq">重播</div>'+
        '<div class="dk">切广播</div>'+
        '<div class="ck">历史播报</div>'+
        '</div>'+
        '</div>'+
        '</div>';
    var gbOpt={
        width:250,
        height: 180,
    };
    var gbInfoWindow = new BMap.InfoWindow(gbContent,gbOpt);
    function addgb(){
        addMarker("../../img/广播.png",pointGbArr,25,20,gbInfoWindow);
    }
    addgb();
    //添加监控图标
    var pointJkArr=[
        {
            longitude:121.9128270000,
            latitude:28.4546620000
        },
        {
            longitude:121.9080840000,
            latitude:28.4552970000
        },
        {
            longitude:121.8975340000,
            latitude:28.4481100000
        },
        {
            longitude:121.9256190000,
            latitude:28.4667970000
        },
        {
            longitude:121.9252230000,
            latitude:28.4630130000
        }
    ];
    var jkContent =
    '<div class="jk-logo">'+
        '<div class="zq clearfix">'+
        '<div class="zq-tl clearfix">'+
        '<div class="zq-title">视频设备状态</div>'+
    '</div>'+
    '<div class="zq-cwrap">'+
        '<div>设备状态 ：<span style="color:#00c199">正常</span></div>'+
        '<div>设备编号 ：JWY-008</div>'+
    '</div>'+
    '<div class="zqbtn clearfix">'+
        '<div class="cq">放大视角</div>'+
        '<div class="dk">移动视角</div>'+
        '<div class="ck"><a href="../../html/control/secondary/wifi-secondary.html">更多操作</a></div>'+
        '</div>'+
        '<div class="zqimg">'+
        '<img src="../../img/control-jk.png" alt="">'+
        '</div>'+
        '</div>'+
        '</div>';
    var jkOpt={
        width:300,
        height: 180,
    };
    var jkInfoWindow = new BMap.InfoWindow(jkContent,jkOpt);
    function addjk() {
        addMarker("../../img/监控.png", pointJkArr, 24, 15, jkInfoWindow);
    }
    addjk();
    //添加车船图标
    var pointCcArr=[
        {
            longitude:121.9130780000,
            latitude:28.4590510000
        }
    ];
    var ccContent =
        '<div class="cc-logo">'+
        '<div class="zq">'+
        '<div class="zq-tl clearfix">'+
        '<div class="zq-title">车船码头状态</div>'+
        '</div>'+
        '<div class="zq-cwrap">'+
        '<div>码头状态 ：<span style="color:#00c199">正常</span></div>'+
        '<div>当前码头 ：下大陈码头</div>'+
        '</div>'+
        '<div class="zqbtn clearfix">'+
        '<div class="ck"><a href="../../html/control/secondary/carship-secondary.html">查看详情</a></div>'+
        '</div>'+
        '</div>'+
        '</div>';
    var ccOpt={
        width:230,
        height: 130,
    };
    var ccInfoWindow = new BMap.InfoWindow(ccContent,ccOpt);
    function addcc(){
        addMarker("../../img/码头.png", pointCcArr, 29, 29, ccInfoWindow);
    }
    addcc();






    //显示隐藏图标
    function onlyshow(className,addfn){
        var show=document.querySelectorAll('.'+className);
        for(var i=0;i<show.length;i++){
            show[i].onclick=function (){
                var allOverlay = map.getOverlays();
                for (var i = 0; i < allOverlay.length; i++){
                    map.removeOverlay(allOverlay[i]);
                }
                addfn();
            }
        }
    }
    onlyshow('onlyshow-gb',addgb);
    onlyshow('onlyshow-jk',addjk);
    onlyshow('onlyshow-wifi',addwifi);
    onlyshow('onlyshow-zk',addzk);
    onlyshow('onlyshow-cc',addcc);

    function showall(className){
        var show=document.querySelectorAll('.'+className);
        for(var i=0;i<show.length;i++) {
            show[i].onclick = function () {
                var allOverlay = map.getOverlays();
                for (var i = 0; i < allOverlay.length; i++) {
                    map.removeOverlay(allOverlay[i]);
                }
                addgb();
                addjk();
                addwifi();
                addzk();
                addcc();
            }
        }
    }
    showall('show-all');

    //var allOverlay = map.getOverlays();
    //for (var i = 0; i < allOverlay.length; i++){
    //    map.removeOverlay(allOverlay[i]);
    //}



})