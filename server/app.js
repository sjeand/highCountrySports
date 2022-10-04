const express = require('express');
const path = require('path');
const app = express();
let announcement = require('./announcement-data');
let products = require('./data');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const productModel = require('./models/product');
const gunshowModel = require('./models/gunshow');
const announcementModel = require('./models/announcement');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var multer  = require('multer');
var Gallery = require('../models/Gallery.js');
var galleryRouter = require('./routes/gallery');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});

var upload = multer({storage: storage});

mongoose.connect("mongodb+srv://AdminHCS:highCountrySportsLLC123@highcountrysportsllc.slsatny.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>{
    console.log("Connected to database");
  })
  .catch(()=>{
    console.log("Connection Failed");
  });

app.route('/request-to-purchase-dialog').get(function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());
app.use('/gallery', galleryRouter);

//API Gets
app.route('/announcements').get( function (req, res) {
  announcementModel.find()
  .then((announcements)=> {
    console.log(announcements);
    res.status(201).json({
      message: 'announcements fetched',
      announcements: announcements
    });
  });
});

 app.route('/product-list').get( function (req, res) {
   res.send({products: products})
 })

 app.route('/gunshows-list').get( function (req, res) {
  gunshowModel.find()
    .then((gunshows)=> {
      console.log(gunshows);
      res.status(201).json({
        message: 'gunshows fetched',
        gunshows: gunshows
      });
    });
 });

 //API Posts
 router.post('/', upload.single('file'), function(req, res, next) {
  if(!req.file) {
      return res.status(500).send({ message: 'Upload fail'});
  } else {
      req.body.imageUrl = 'http://192.168.0.7:3000/images/' + req.file.filename;
      Gallery.create(req.body, function (err, gallery) {
          if (err) {
              console.log(err);
              return next(err);
          }
          res.json(gallery);
      });
  }
});

 app.route('/gunshows-list').post( function (req, res) {
  // gunshows.push(req.body);
  const gunshow = new gunshowModel({
    name: req.body.name,
    location: req.body.location,
    when: req.body.when,
  });
  gunshow.save();//Add error handler
  console.log(gunshow);
    res.status(201).json({
      message: 'it worked'
    });
 });

 app.route('/announcements').post( function (req, res) {
  const announcement = new announcementModel({
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
    //image
  });
  announcement.save(function(err, user) {
    if (err) {
        console.log(err);
        res.send(400, 'Bad Request');
    }
    //res.redirect('/');
    res.status(201).json({
      message: 'it worked'
    });
});
  console.log(announcement);
});

 app.route("/file-upload").post( function (req, res) {
  let file = req["files"].thumbnail;

  console.log(file.name);
 })

 app.route('/product').post( function (req, res) {
  announcement.push(req.body);
 })

app.post('/email', (req, res) => {
  //Send an email here but currently dummy email
  console.log('Data:', req.body);
  res.json({message: 'Message received!'})
});

app.use(express.static(__dirname + '/../dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


app.listen(process.env.PORT || 8080);
