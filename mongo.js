var mongoose = require('mongoose');
mongoose.connect('mongodb://shenzeming.com:27017/local');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose opened!');
});