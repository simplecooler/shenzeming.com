<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>沈泽明毕业设计</title>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="china_mapChart"></div>
    <!-- 文件引入 -->
    <script src="//cdn.bootcss.com/jquery/2.2.1/jquery.min.js"></script>
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
    <script>
      var socket = io('http://www.shenzeming.com:8000');
      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
      });
    </script>
    <script type="text/javascript">
        function getClientIpLoaction() {
            return '<?php
                function getIp() {
                if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
                    $ip = getenv("HTTP_CLIENT_IP");
                else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
                    $ip = getenv("HTTP_X_FORWARDED_FOR");
                else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
                    $ip = getenv("REMOTE_ADDR");
                else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
                    $ip = $_SERVER['REMOTE_ADDR'];
                else
                    $ip = "unknown";
                return($ip);
                }
                function getCity($ip) {
                    $url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
                    $ipinfo=json_decode(file_get_contents($url));
                    if($ipinfo->code=='1'){
                        return false;
                    }
                    $city = $ipinfo->data->city;
                    return $city;
                }
                echo(getCity(getIp()));
            ?>'
        }

        //初始化地图DOM高度
        $(document).ready(function(){
            $('#china_mapChart').css('height',window.innerHeight);
            console.log(getClientIpLoaction());
        });

        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        // 使用
        require(
            [
                'echarts',
                'echarts/chart/map'
            ],
            function (ec) {

                /*定义变量*/
                var option;

                /*定义中国地图*/
                var chinaMapchart = ec.init(document.getElementById('china_mapChart'));

                /*地图设置*/
                option = {
                    backgroundColor: '#1b1b1b',
                    color: ['gold','aqua','lime'],
                    title : {
                        text: '网络安全监测',
                        // subtext:'数据纯属虚构',
                        x:'center',
                        textStyle : {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    toolbox: {
                        show : true,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name: '全国',
                            type: 'map',
                            roam: true,
                            hoverable: false,
                            mapType: 'china',
                            itemStyle:{
                                normal:{
                                    borderColor:'rgba(100,149,237,1)',
                                    borderWidth:0.5,
                                    areaStyle:{
                                        color: '#1b1b1b'
                                    }
                                }
                            },
                            data:[],
                            markLine : {
                                smooth:true,
                                effect : {
                                    show: true,
                                    scaleSize: 1,
                                    period: 30,
                                    color: '#fff',
                                    shadowBlur: 10
                                },
                                itemStyle : {
                                    normal: {
                                        borderWidth:1,
                                        lineStyle: {
                                            type: 'solid',
                                            shadowBlur: 10
                                        }
                                    }
                                },
                                data : [
                                    [{name:getClientIpLoaction()}, {name:'北京市',value:95}],
                                    [{name:getClientIpLoaction()}, {name:'常州市',value:10}]
                                ]
                            },
                            markPoint : {
                                symbol:'emptyCircle',
                                symbolSize : function (v){
                                    return 10 + v/10
                                },
                                effect : {
                                    show: true,
                                    shadowBlur : 0
                                },
                                itemStyle:{
                                    normal:{
                                        label:{show:false}
                                    },
                                    emphasis: {
                                        label:{position:'top'}
                                    }
                                },
                                data : [
                                    {name:'北京市',value:95},
                                    {name:'常州市',value:10}
                                ]
                            },
                            geoCoord: {
                                '上海市': [121.4648,31.2891],
                                '东莞市': [113.8953,22.901],
                                '东营市': [118.7073,37.5513],
                                '中山市': [113.4229,22.478],
                                '临汾市': [111.4783,36.1615],
                                '临沂市': [118.3118,35.2936],
                                '丹东市': [124.541,40.4242],
                                '丽水市': [119.5642,28.1854],
                                '乌鲁木齐市': [87.9236,43.5883],
                                '佛山市': [112.8955,23.1097],
                                '保定市': [115.0488,39.0948],
                                '兰州市': [103.5901,36.3043],
                                '包头市': [110.3467,41.4899],
                                '北京市': [116.4551,40.2539],
                                '北海市': [109.314,21.6211],
                                '南京市': [118.8062,31.9208],
                                '南宁市': [108.479,23.1152],
                                '南昌市': [116.0046,28.6633],
                                '南通市': [121.1023,32.1625],
                                '厦门市': [118.1689,24.6478],
                                '台州市': [121.1353,28.6688],
                                '合肥市': [117.29,32.0581],
                                '呼和浩特市': [111.4124,40.4901],
                                '咸阳市': [108.4131,34.8706],
                                '哈尔滨市': [127.9688,45.368],
                                '唐山市': [118.4766,39.6826],
                                '嘉兴市': [120.9155,30.6354],
                                '大同市': [113.7854,39.8035],
                                '大连市': [122.2229,39.4409],
                                '天津市': [117.4219,39.4189],
                                '太原市': [112.3352,37.9413],
                                '威海市': [121.9482,37.1393],
                                '宁波市': [121.5967,29.6466],
                                '宝鸡市': [107.1826,34.3433],
                                '宿迁市': [118.5535,33.7775],
                                '常州市': [119.4543,31.5582],
                                '广州市': [113.5107,23.2196],
                                '廊坊市': [116.521,39.0509],
                                '延安市': [109.1052,36.4252],
                                '张家口市': [115.1477,40.8527],
                                '徐州市': [117.5208,34.3268],
                                '德州市': [116.6858,37.2107],
                                '惠州市': [114.6204,23.1647],
                                '成都市': [103.9526,30.7617],
                                '扬州市': [119.4653,32.8162],
                                '承德市': [117.5757,41.4075],
                                '拉萨市': [91.1865,30.1465],
                                '无锡市': [120.3442,31.5527],
                                '日照市': [119.2786,35.5023],
                                '昆明市': [102.9199,25.4663],
                                '杭州市': [119.5313,29.8773],
                                '枣庄市': [117.323,34.8926],
                                '柳州市': [109.3799,24.9774],
                                '株洲市': [113.5327,27.0319],
                                '武汉市': [114.3896,30.6628],
                                '汕头市': [117.1692,23.3405],
                                '江门市': [112.6318,22.1484],
                                '沈阳市': [123.1238,42.1216],
                                '沧州市': [116.8286,38.2104],
                                '河源市': [114.917,23.9722],
                                '泉州市': [118.3228,25.1147],
                                '泰安市': [117.0264,36.0516],
                                '泰州市': [120.0586,32.5525],
                                '济南市': [117.1582,36.8701],
                                '济宁市': [116.8286,35.3375],
                                '海口市': [110.3893,19.8516],
                                '淄博市': [118.0371,36.6064],
                                '淮安市': [118.927,33.4039],
                                '深圳市': [114.5435,22.5439],
                                '清远市': [112.9175,24.3292],
                                '温州市': [120.498,27.8119],
                                '渭南市': [109.7864,35.0299],
                                '湖州市': [119.8608,30.7782],
                                '湘潭市': [112.5439,27.7075],
                                '滨州市': [117.8174,37.4963],
                                '潍坊市': [119.0918,36.524],
                                '烟台市': [120.7397,37.5128],
                                '玉溪市': [101.9312,23.8898],
                                '珠海市': [113.7305,22.1155],
                                '盐城市': [120.2234,33.5577],
                                '盘锦市': [121.9482,41.0449],
                                '石家庄市': [114.4995,38.1006],
                                '福州市': [119.4543,25.9222],
                                '秦皇岛市': [119.2126,40.0232],
                                '绍兴市': [120.564,29.7565],
                                '聊城市': [115.9167,36.4032],
                                '肇庆市': [112.1265,23.5822],
                                '舟山市': [122.2559,30.2234],
                                '苏州市': [120.6519,31.3989],
                                '莱芜市': [117.6526,36.2714],
                                '菏泽市': [115.6201,35.2057],
                                '营口市': [122.4316,40.4297],
                                '葫芦岛市': [120.1575,40.578],
                                '衡水市': [115.8838,37.7161],
                                '衢州市': [118.6853,28.8666],
                                '西宁市': [101.4038,36.8207],
                                '西安市': [109.1162,34.2004],
                                '贵阳市': [106.6992,26.7682],
                                '连云港市': [119.1248,34.552],
                                '邢台市': [114.8071,37.2821],
                                '邯郸市': [114.4775,36.535],
                                '郑州市': [113.4668,34.6234],
                                '鄂尔多斯市': [108.9734,39.2487],
                                '重庆市': [107.7539,30.1904],
                                '金华市': [120.0037,29.1028],
                                '铜川市': [109.0393,35.1947],
                                '银川市': [106.3586,38.1775],
                                '镇江市': [119.4763,31.9702],
                                '长春市': [125.8154,44.2584],
                                '长沙市': [113.0823,28.2568],
                                '长治市': [112.8625,36.4746],
                                '阳泉市': [113.4778,38.0951],
                                '青岛市': [120.4651,36.3373],
                                '韶关市': [113.7964,24.7028]
                            }
                        }
                    ]
                };

                chinaMapchart.setOption(option);

                /*地图窗口响应*/
                window.onresize = function () {
                    $('#china_mapChart').css('height',window.innerHeight);
                    chinaMapchart.resize();
                };
            }
        );
    </script>
</body>
