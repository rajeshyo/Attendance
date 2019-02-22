const mongoes= require("mongoose");
// require("dotenv").config();
// const mongoDBErrors = require("mongoose-mongodb-errors");
// mongoes.Promise = global.Promise;
// mongoes.plugin(mongoDBErrors);
mongoes.connect("mongodb://nodejsuser:nodejspassword1@ds123151.mlab.com:23151/nodejs-tuts")