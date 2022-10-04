const mongoose = require('mongoose');

const gunshowSchema = mongoose.Schema({
  name: {type: String, required:true},
  location: {type: String, required:true},
  when: {type: String, required:true}
});

module.exports = mongoose.model('Gunshow', gunshowSchema);
