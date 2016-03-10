require.config({
    paths: {
        echarts: '/script/echarts-2.2.7/build/dist'
    }
});
require(
    [
        'echarts',
        'echarts/chart/map',
        'echarts/chart/gauge',
        'echarts/chart/line'
    ],
    function (ec) {

        /*定义变量*/
        var time_type = 0;
        var visitwordMapOption, visitMapOptions;
        var loglist = [], thread_node_pushlog = null;
        var reload_count = null;

        /*定义中国地图*/
        var chinaMapchart = ec.init(document.getElementById('visitChinaMapChart'));

        var chinaGeolist = null; //中国地图Geo数据

        /* WebSocket 初始化*/
        // var socket = null;
        // var addr = "ws://ws.yundun.cn/ddos_report_service";//socket url
        // if (typeof(WebSocket) !== 'undefined') {
        //     socket = new WebSocket(addr);
        // } else if (typeof(MozWebSocket) !== 'undefined') {
        //     socket = new MozWebSocket(addr);
        // }

        /*消息格式对象*/
        // var req = {
        //     //实时攻击信息
        //     msg7 : {
        //         action: 'getTopTrafficin',
        //         task_return: false,
        //         params: {
        //             addTimer: 3000,
        //             limit:8
        //         },
        //         actionClose: 0
        //     },
        //
        //     //攻击地图信息查询
        //     msg8 : {
        //         action: 'getMapAttack',
        //         task_return: false,
        //         params: {
        //             addTimer: 8000,
        //             limit:30
        //         },
        //         actionClose: 0
        //     }
        // };

        /*消息格式*/
        // socket.onopen = function () {
        //     this.send(JSON.stringify(req.msg8));
        //     this.send(JSON.stringify(req.msg7));
        // };

        /* socket 断开重连*/
        // socket.onclose = function(){
        //     reload_count = setTimeout(function(){
        //         window.location.reload();
        //     },15000);
        // };

        /* socket 接收消息*/
        // socket.onmessage = function (e) {
        //     try {
        //         if (e.data) {
        //             var data = JSON.parse(e.data);
        //                 /*********************** 地图 ************************/
        //                 if(data.action.name === "getMapAttack") {
        //                     if(data.data.length > 0) {
        //                         if (currentMapType === "world") {
        //                             $("#visitChinaMapChart").hide();
        //                             $("#visitWorldMapChart").fadeIn(function () {
        //                                 for (world_count = 1; world_count < 10; world_count++) {
        //                                     visitwordMapOption.series[world_count].markLine.data = [];
        //                                     visitwordMapOption.series[world_count].markPoint.data = [];
        //                                 }
        //                                 worldMapchart.refresh();
        //                                 worldMapchart.setOption(visitwordMapOption, true);
        //                             });
        //                             for (count = 0; count < data.data.length; count++) {
        //                                 if (data.data[count].attacktype === 'SYN') {
        //                                     worldMapchart.addMarkPoint(1, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(1, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'HTTP') {
        //                                     worldMapchart.addMarkPoint(2, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(2, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'TCP') {
        //                                     worldMapchart.addMarkPoint(3, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(3, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'UDP') {
        //                                     worldMapchart.addMarkPoint(4, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(4, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'App') {
        //                                     worldMapchart.addMarkPoint(5, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(5, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'ACK') {
        //                                     worldMapchart.addMarkPoint(6, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(6, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'Icmp') {
        //                                     worldMapchart.addMarkPoint(7, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(7, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'DNS') {
        //                                     worldMapchart.addMarkPoint(8, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(8, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 } else if (data.data[count].attacktype === 'Frag') {
        //                                     worldMapchart.addMarkPoint(9, {
        //                                         data: [{
        //                                             name: data.data[count].host_city,
        //                                             value: 10
        //                                         }]
        //                                     });
        //                                     worldMapchart.addMarkLine(9, {
        //                                         data: [[{name: data.data[count].src_city}, {
        //                                             name: data.data[count].host_city,
        //                                             value: data.data[count].trafficin
        //                                         }]]
        //                                     });
        //                                 }
        //                             }
        //                         }
        //                         if (currentMapType === "china") {
        //                             $("#visitWorldMapChart").hide();
        //                             $("#visitChinaMapChart").fadeIn(function () {
        //                                 for (china_count = 1; china_count < 10; china_count++) {
        //                                     visitMapOptions.series[china_count].markLine.data = [];
        //                                     visitMapOptions.series[china_count].markPoint.data = [];
        //                                 }
        //                                 chinaMapchart.refresh();
        //                                 chinaMapchart.setOption(visitMapOptions, true);
        //                             });
        //                             for (x = 0; x < data.data.length; x++) {
        //                                 if (data.data[x].host_country === 0 && data.data[x].src_country === 0) {
        //                                     if (data.data[x].attacktype === 'SYN') {
        //                                         chinaMapchart.addMarkPoint(1, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(1, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'HTTP') {
        //                                         chinaMapchart.addMarkPoint(2, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(2, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'TCP') {
        //                                         chinaMapchart.addMarkPoint(3, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(3, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'UDP') {
        //                                         chinaMapchart.addMarkPoint(4, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(4, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'App') {
        //                                         chinaMapchart.addMarkPoint(5, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(5, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'ACK') {
        //                                         chinaMapchart.addMarkPoint(6, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(6, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'Icmp') {
        //                                         chinaMapchart.addMarkPoint(7, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(7, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'DNS') {
        //                                         chinaMapchart.addMarkPoint(8, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(8, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     } else if (data.data[x].attacktype === 'Frag') {
        //                                         chinaMapchart.addMarkPoint(9, {
        //                                             data: [{
        //                                                 name: data.data[x].host_city,
        //                                                 value: 10
        //                                             }]
        //                                         });
        //                                         chinaMapchart.addMarkLine(9, {
        //                                             data: [[{name: data.data[x].src_city}, {
        //                                                 name: data.data[x].host_city,
        //                                                 value: data.data[x].trafficin
        //                                             }]]
        //                                         });
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //                 }
        //         }
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };

        /*地图设置*/
        $.getJSON("/script/map_shengshi.json", {}, function (res2) {
            chinaGeolist = res2;
            visitMapOptions = {
                color: ['#ff0000','#eb7852','#b59cd9','#c8215d','#73d692','#c7e5d2','#1c61da','#fddc89','#f3859b'],
                title : {
                    text: '中国',
                    x:'center',
                    textStyle : {
                        color: '#fff'
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: '{b}'
                },
                legend: {
                    orient: 'vertical',
                    itemGap:5,
                    x:'left',
                    y:'600',
                    data:[
                        {
                            name:'SYN',
                            textStyle:{color:'#ff0000'}
                        },
                        {
                            name:'HTTP',
                            textStyle:{color:'#eb7852'}
                        },
                        {
                            name:'TCP',
                            textStyle:{color:'#b59cd9'}
                        },
                        {
                            name:'UDP',
                            textStyle:{color:'#c8215d'}
                        },
                        {
                            name:'App',
                            textStyle:{color:'#73d692'}
                        },
                        {
                            name:'ACK',
                            textStyle:{color:'#c7e5d2'}
                        },
                        {
                            name:'Icmp',
                            textStyle:{color:'#1c61da'}
                        },
                        {
                            name:'DNS',
                            textStyle:{color:'#fddc89'}
                        },
                        {
                            name:'Frag',
                            textStyle:{color:'#f3859b'}
                        }
                    ],
                    selectedMode: 'multiple',
                    selected:{
                        'SYN':true,
                        'HTTP' : true,
                        'TCP' : true,
                        'UDP' : true,
                        'App' : true,
                        'ACK' : true,
                        'Icmp' : true,
                        'DNS' : true,
                        'Frag' : true
                    },
                    textStyle : {
                        color: 'auto'
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
                        geoCoord: chinaGeolist.geoCoord,
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol: ['none', 'circle'],
                            symbolSize : 1,
                            itemStyle : {
                                normal: {
                                    color:'#fff',
                                    borderWidth:1,
                                    borderColor:'rgba(30,144,255,0.5)'
                                }
                            },
                            data : []
                        }
                    },
                    {
                        name: 'SYN',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#ff0000',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'HTTP',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#eb7852',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'TCP',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#b59cd9',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'UDP',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#c8215d',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'App',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#73d692',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'ACK',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#c7e5d2',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'Icmp',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#1c61da',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'DNS',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#fddc89',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    },
                    {
                        name: 'Frag',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol:['circle', 'circle'],
                            effect : {
                                show: true,
                                scaleSize: 3,
                                period: 10,
                                color: '#f3859b',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10,
                                        color:'transparent'
                                    }
                                }
                            },
                            data : []
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5
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
                            data : []
                        }
                    }
                ]
            };
        });
        chinaMapchart.setOption(visitMapOptions,true);

        /*地图响应*/
        window.onresize = function () {
            chinaMapchart.resize();
        };
    }
);
