const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  maker: {type: String, required:true},
  model: {type: String, required:true},
  price: {type: mongoose.Schema.Types.Decimal128, required:true},
  description: {type: String},
  image: {type: String, required:true},
  type: {type: String, required:true},
  subtype: {type: String, required:true},
  otherInfo: {type: mongoose.Schema.Types.Mixed}
});

module.exports = mongoose.model('Product',productSchema);
