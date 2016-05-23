var http = require('http');
var fs = require('fs');
var exec = require('child_process').exec;
var mongoose = require('mongoose');
var locationModel = require('./locationModel');
var attackModel = require('./attackModel');

var srcName, srcLocX, srcLocY;

var locationData = function() {
  mongoose.connect('mongodb://shenzeming.com/AttackInfo');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  locationModel.findOne({name: '上海'},function(err,data){
    if(err) {
      return console.log(err);
    }else {
      srcName = data.name;
      srcLocX = data.LocX;
      srcLocY = data.LocY;
      console.log('查询完毕');
    }

    var doc = {srcName: srcName, srcLocX: srcLocX, srcLocY: srcLocY};
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

locationData();


// var attackData = function() {


// };


// attackData();


// db.once('open', function() {

//   var doc = [{
//     name : '上海',
//     LocX : '121.4648',
//     LocY : '31.2891'
//   },{
//     name : '东莞',
//     LocX : '113.8953',
//     LocY : '22.901'
//   },{
//     name : '东营',
//     LocX : '118.7073',
//     LocY : '37.5513'
//   }];

//   locationModel.create(doc, function(error){
//     if(error) {
//       console.log(error);
//     } else {
//       console.log('save ok');
//     }

//     db.close();
//   });

// });

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type':'text-plain','Access-Control-Allow-Origin':'http://www.shenzeming.com'});
//   fs.appendFile('/etc/nginx/iplist.conf', 'deny 117.144.21.30;\n', (err) => {
//     if (err) throw err;
//     console.log('报告老大！可恶的攻击ip已经被列入黑名单了！');
//   });

//   exec('nginx -s reload', function (error, stdout, stderr) {
//     console.log('报告老大！nginx已重新加载配置啦！');
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
//   });
//   response.end('Hello world!');
// }).listen(3000);