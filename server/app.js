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

//Send customer information to email as purchase request using nodemailer.
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hcsllcpurchaserequest@gmail.com',
    pass: 'tbtpbnuneqmynftj'
  }
});

var mailOptions = {
  from: '"High Country Sports LLC" <hcsllcpurchaserequest@gmail.com>',
  to: 'sjeand@hotmail.com',
  subject: 'High Country Sports LLC Customer Purchase Request',
  text: 'Customers info will display here...'
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent');
//   }
// });

// Database connection.
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
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


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

 app.route('/gunshows-list/:id').delete(function(req, res){
  const gunshowId = req.params.id;
  console.log(gunshowId);
  res.status(400);
    gunshowModel.deleteOne({_id: gunshowId}, (err, d) => {
      if (err) return res.status(400);
      (d.acknowledged && d.deletedCount == 1);
      console.log("Deleted Successfully");   // Use your response code
        /* else
          console.log("Record doesn't exist or already deleted")    // Use your response code */
    })
 })


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
