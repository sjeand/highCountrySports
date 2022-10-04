const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
  title: {type: String, required:true},
  subtitle: {type: String, required:true},
  // image: {type: String, required:true},
  text: {type: String, required:true},
});

module.exports = mongoose.model('Announcement', announcementSchema);
