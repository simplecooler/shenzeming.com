var http = require('http');
var fs = require('fs');
var exec = require('child_process').exec;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text-plain','Access-Control-Allow-Origin':'http://www.shenzeming.com'});
  fs.appendFile('/etc/nginx/iplist.conf', 'deny 117.144.21.30;\n', (err) => {
    if (err) throw err;
    console.log('报告老大！可恶的攻击ip已经被列入黑名单了！');
  });

  exec('nginx -s reload', function (error, stdout, stderr) {
    console.log('报告老大！nginx已重新加载配置啦！');
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  response.end('Hello world!');
}).listen(3000);