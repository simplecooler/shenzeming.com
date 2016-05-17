var mongoose = require('mongoose');
mongoose.connect('mongodb://shenzeming.com/IP');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var ipSchema = mongoose.Schema({
    srcIp: String,
    srcPort: String,
    type: String,
    destIp: String,
    destName: String,
    destLocX: String,
    destLocY: String,
    time: String,
    srcName: String,
    srcLocX: String,
    srcLocY: String
  });

  var ipModel = mongoose.model('ipModel', ipSchema);

  var firstIp = new ipModel({
    srcIp: '41.56.42.113',
    srcPort: '5212',
    type: 'DDOS',
    destIp: '116.12.54.95',
    destName: '南京',
    destLocX: '118.77807441',
    destLocY: '32.05723550',
    time: '2015-11-01 16:57',
    srcName: '日本',
    srcLocX: '141.31364243',
    srcLocY: '43.89833761'
  });

  firstIp.save(function(err) {
    if (err) return console.error(err);
  });
});
module.exports = mongoose;