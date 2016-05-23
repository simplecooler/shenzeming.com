var mongoose = require('mongoose');
var locationSchema = mongoose.Schema({
  name: String,
  LocX: String,
  LocY: String
});
var locationModel = mongoose.model('locationModel', locationSchema);
module.exports = locationModel;
