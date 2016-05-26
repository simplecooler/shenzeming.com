var http = require('http');
var fs = require('fs');
var exec = require('child_process').exec;
var mongoose = require('mongoose');
var locationModel = require('./locationModel');
var attackModel = require('./attackModel');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var srcIp, srcName, srcLocX, srcLocY;

var locationData = function(city, ip) {
  mongoose.connect('mongodb://shenzeming.com/AttackInfo');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  locationModel.findOne({name: city},function(err,data){
    if(err) {
      return console.log(err);
    }else {
      srcName = data.name;
      srcLocX = data.LocX;
      srcLocY = data.LocY;
      console.log('查询完毕');
    }

    var doc = {srcIp: ip, srcName: srcName, srcLocX: srcLocX, srcLocY: srcLocY};
    attackModel.create(doc, function(error){
      if(error) {
        console.log(error);
      } else {
        console.log('新增攻击信息完毕');
      }
      db.close();
    });
  });
};

app.post('/', urlencodedParser, function(req, res) {
  res.writeHead(200, {'Content-Type':'text-plain','Access-Control-Allow-Origin':'http://www.shenzeming.com'});
  console.log(req.body);
  locationData(req.body._city, req.body._ip);
  res.end('服务器传来：操作成功');
});

var server = app.listen(3000, function() {
  console.log('server start!');
});

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type':'text-plain','Access-Control-Allow-Origin':'http://www.shenzeming.com'});
//   console.log(request.body);
  // fs.appendFile('/etc/nginx/iplist.conf', 'deny 117.144.21.30;\n', (err) => {
  //   if (err) throw err;
  //   console.log('报告老大！可恶的攻击ip已经被列入黑名单了！');
  // });

  // exec('nginx -s reload', function (error, stdout, stderr) {
  //   console.log('报告老大！nginx已重新加载配置啦！');
  //   if (error !== null) {
  //     console.log('exec error: ' + error);
  //   }
  // });
//   response.end('Hello world!');
// }).listen(3000);