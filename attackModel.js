var mongoose = require('mongoose');
var attackSchema = mongoose.Schema({
  type: {type: String, default: 'DDOS'},
  destIp: {type: String, default: '115.29.114.65'},
  destName: {type: String, default: '青岛'},
  destLocX: {type: String, default: '120.4651'},
  destLocY: {type: String, default: '36.3373'},
  srcIp: {type: String, default: '0.0.0.1'},
  srcName: String,
  srcLocX: String,
  srcLocY: String,
  time: {type: Date, default: Date.now}
});
var attackModel = mongoose.model('attackModel', attackSchema);
module.exports = attackModel;
