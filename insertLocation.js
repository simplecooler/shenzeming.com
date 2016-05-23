var mongoose = require('mongoose');
mongoose.connect('mongodb://shenzeming.com/AttackInfo');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var locationSchema = mongoose.Schema({
  name: String,
  LocX: String,
  LocY: String
});
var locationModel = mongoose.model('locationModel', locationSchema);

db.once('open', function() {

  var doc = [{
    name : '上海',
    LocX : '121.4648',
    LocY : '31.2891'
  },{
    name : '东莞',
    LocX : '113.8953',
    LocY : '22.901'
  },{
    name : '东营',
    LocX : '118.7073',
    LocY : '37.5513'
  },{
    name : '中山',
    LocX : '113.4229',
    LocY : '22.478'
  },{
    name : '临汾',
    LocX : '111.4783',
    LocY : '36.1615'
  },{
    name : '临沂',
    LocX : '118.3118',
    LocY : '35.2936'
  },{
    name : '丹东',
    LocX : '124.541',
    LocY : '40.4242'
  },{
    name : '丽水',
    LocX : '119.5642',
    LocY : '28.1854'
  },{
    name : '乌鲁木齐',
    LocX : '87.9236',
    LocY : '43.5883'
  },{
    name : '佛山',
    LocX : '112.8955',
    LocY : '23.1097'
  },{
    name : '保定',
    LocX : '115.0488',
    LocY : '39.0948'
  },{
    name : '兰州',
    LocX : '103.5901',
    LocY : '36.3043'
  },{
    name : '包头',
    LocX : '110.3467',
    LocY : '41.4899'
  },{
    name : '北京',
    LocX : '116.4551',
    LocY : '40.2539'
  },{
    name : '北海',
    LocX : '109.314',
    LocY : '21.6211'
  },{
    name : '南京',
    LocX : '118.8062',
    LocY : '31.9208'
  },{
    name : '南宁',
    LocX : '108.479',
    LocY : '23.1152'
  },{
    name : '南昌',
    LocX : '116.0046',
    LocY : '28.6633'
  },{
    name : '南通',
    LocX : '121.1023',
    LocY : '32.1625'
  },{
    name : '厦门',
    LocX : '118.1689',
    LocY : '24.6478'
  },{
    name : '台州',
    LocX : '121.1353',
    LocY : '28.6688'
  },{
    name : '合肥',
    LocX : '117.29',
    LocY : '32.0581'
  },{
    name : '呼和浩特',
    LocX : '111.4124',
    LocY : '40.4901'
  },{
    name : '咸阳',
    LocX : '108.4131',
    LocY : '34.8706'
  },{
    name : '哈尔滨',
    LocX : '127.9688',
    LocY : '45.368'
  },{
    name : '唐山',
    LocX : '118.4766',
    LocY : '39.6826'
  },{
    name : '嘉兴',
    LocX : '120.9155',
    LocY : '30.6354'
  },{
    name : '大同',
    LocX : '113.7854',
    LocY : '39.8035'
  },{
    name : '大连',
    LocX : '122.2229',
    LocY : '39.4409'
  },{
    name : '天津',
    LocX : '117.4219',
    LocY : '39.4189'
  },{
    name : '太原',
    LocX : '112.3352',
    LocY : '37.9413'
  },{
    name : '威海',
    LocX : '121.9482',
    LocY : '37.1393'
  },{
    name : '宁波',
    LocX : '121.5967',
    LocY : '29.6466'
  },{
    name : '宝鸡',
    LocX : '107.1826',
    LocY : '34.3433'
  },{
    name : '宿迁',
    LocX : '118.5535',
    LocY : '33.7775'
  },{
    name : '常州',
    LocX : '119.4543',
    LocY : '31.5582'
  },{
    name : '广州',
    LocX : '113.5107',
    LocY : '23.2196'
  },{
    name : '廊坊',
    LocX : '116.521',
    LocY : '39.0509'
  },{
    name : '延安',
    LocX : '109.1052',
    LocY : '36.4252'
  },{
    name : '张家口',
    LocX : '115.1477',
    LocY : '40.8527'
  },{
    name : '徐州',
    LocX : '117.5208',
    LocY : '34.3268'
  },{
    name : '德州',
    LocX : '116.6858',
    LocY : '37.2107'
  },{
    name : '惠州',
    LocX : '114.6204',
    LocY : '23.1647'
  },{
    name : '成都',
    LocX : '103.9526',
    LocY : '30.7617'
  },{
    name : '扬州',
    LocX : '119.4653',
    LocY : '32.8162'
  },{
    name : '承德',
    LocX : '117.5757',
    LocY : '41.4075'
  },{
    name : '拉萨',
    LocX : '91.1865',
    LocY : '30.1465'
  },{
    name : '无锡',
    LocX : '120.3442',
    LocY : '31.5527'
  },{
    name : '日照',
    LocX : '119.2786',
    LocY : '35.5023'
  },{
    name : '昆明',
    LocX : '102.9199',
    LocY : '25.4663'
  },{
    name : '杭州',
    LocX : '119.5313',
    LocY : '29.8773'
  },{
    name : '枣庄',
    LocX : '117.323',
    LocY : '34.8926'
  },{
    name : '柳州',
    LocX : '109.3799',
    LocY : '24.9774'
  },{
    name : '株洲',
    LocX : '113.5327',
    LocY : '27.0319'
  },{
    name : '武汉',
    LocX : '114.3896',
    LocY : '30.6628'
  },{
    name : '汕头',
    LocX : '117.1692',
    LocY : '23.3405'
  },{
    name : '江门',
    LocX : '112.6318',
    LocY : '22.1484'
  },{
    name : '沈阳',
    LocX : '123.1238',
    LocY : '123.1238'
  },{
    name : '沧州',
    LocX : '116.8286',
    LocY : '38.2104'
  },{
    name : '河源',
    LocX : '114.917',
    LocY : '23.9722'
  },{
    name : '泉州',
    LocX : '118.3228',
    LocY : '25.1147'
  },{
    name : '泰安',
    LocX : '117.0264',
    LocY : '36.0516'
  },{
    name : '泰州',
    LocX : '120.0586',
    LocY : '32.5525'
  },{
    name : '济南',
    LocX : '117.1582',
    LocY : '36.8701'
  },{
    name : '济宁',
    LocX : '116.8286',
    LocY : '35.3375'
  },{
    name : '海口',
    LocX : '110.3893',
    LocY : '19.8516'
  },{
    name : '淄博',
    LocX : '118.0371',
    LocY : '36.6064'
  },{
    name : '淮安',
    LocX : '118.927',
    LocY : '33.4039'
  },{
    name : '深圳',
    LocX : '114.5435',
    LocY : '22.5439'
  },{
    name : '清远',
    LocX : '112.9175',
    LocY : '24.3292'
  },{
    name : '温州',
    LocX : '120.498',
    LocY : '27.8119'
  },{
    name : '渭南',
    LocX : '109.7864',
    LocY : '35.0299'
  },{
    name : '湖州',
    LocX : '119.8608',
    LocY : '30.7782'
  },{
    name : '湘潭',
    LocX : '112.5439',
    LocY : '27.7075'
  },{
    name : '滨州',
    LocX : '117.8174',
    LocY : '37.4963'
  },{
    name : '潍坊',
    LocX : '119.0918',
    LocY : '36.524'
  },{
    name : '烟台',
    LocX : '120.7397',
    LocY : '37.5128'
  },{
    name : '玉溪',
    LocX : '101.9312',
    LocY : '23.8898'
  },{
    name : '珠海',
    LocX : '113.7305',
    LocY : '22.1155'
  },{
    name : '盐城',
    LocX : '120.2234',
    LocY : '33.5577'
  },{
    name : '盘锦',
    LocX : '121.9482',
    LocY : '41.0449'
  },{
    name : '石家庄',
    LocX : '114.4995',
    LocY : '38.1006'
  },{
    name : '福州',
    LocX : '119.4543',
    LocY : '25.9222'
  },{
    name : '秦皇岛',
    LocX : '119.2126',
    LocY : '40.0232'
  },{
    name : '绍兴',
    LocX : '120.564',
    LocY : '29.7565'
  },{
    name : '聊城',
    LocX : '115.9167',
    LocY : '36.4032'
  },{
    name : '肇庆',
    LocX : '112.1265',
    LocY : '23.5822'
  },{
    name : '舟山',
    LocX : '122.2559',
    LocY : '30.2234'
  },{
    name : '苏州',
    LocX : '120.6519',
    LocY : '31.3989'
  },{
    name : '莱芜',
    LocX : '117.6526',
    LocY : '36.2714'
  },{
    name : '菏泽',
    LocX : '115.6201',
    LocY : '35.2057'
  },{
    name : '营口',
    LocX : '122.4316',
    LocY : '40.4297'
  },{
    name : '葫芦岛',
    LocX : '120.1575',
    LocY : '40.578'
  },{
    name : '衡水',
    LocX : '115.8838',
    LocY : '37.7161'
  },{
    name : '衢州',
    LocX : '118.6853',
    LocY : '28.8666'
  },{
    name : '西宁',
    LocX : '101.4038',
    LocY : '36.8207'
  },{
    name : '西安',
    LocX : '109.1162',
    LocY : '34.2004'
  },{
    name : '贵阳',
    LocX : '106.6992',
    LocY : '26.7682'
  },{
    name : '连云港',
    LocX : '119.1248',
    LocY : '34.552'
  },{
    name : '邢台',
    LocX : '114.8071',
    LocY : '37.2821'
  },{
    name : '邯郸',
    LocX : '114.4775',
    LocY : '36.535'
  },{
    name : '郑州',
    LocX : '113.4668',
    LocY : '34.6234'
  },{
    name : '鄂尔多斯',
    LocX : '108.9734',
    LocY : '39.2487'
  },{
    name : '重庆',
    LocX : '107.7539',
    LocY : '30.1904'
  },{
    name : '金华',
    LocX : '120.0037',
    LocY : '29.1028'
  },{
    name : '铜川',
    LocX : '109.0393',
    LocY : '35.1947'
  },{
    name : '银川',
    LocX : '106.3586',
    LocY : '38.1775'
  },{
    name : '镇江',
    LocX : '119.4763',
    LocY : '31.9702'
  },{
    name : '长春',
    LocX : '125.8154',
    LocY : '44.2584'
  },{
    name : '长沙',
    LocX : '113.0823',
    LocY : '28.2568'
  },{
    name : '长治',
    LocX : '112.8625',
    LocY : '36.4746'
  },{
    name : '阳泉',
    LocX : '113.4778',
    LocY : '38.0951'
  },{
    name : '青岛',
    LocX : '120.4651',
    LocY : '36.3373'
  },{
    name : '韶关',
    LocX : '113.7964',
    LocY : '24.7028'
  }];

  locationModel.create(doc, function(error){
    if(error) {
      console.log(error);
    } else {
      console.log('save ok');
    }
    db.close();
  });
});
