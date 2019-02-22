const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
  
  var upload = multer({ storage: storage }).single('profileimage');



router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // A Multer error occurred when uploading.
    }

    // Everything went fine.
  })
})


module.exports= router;