const mongoes= require("mongoose");
require("dotenv").config();
const mongoDBErrors = require("mongoose-mongodb-errors");
mongoes.Promise = global.Promise;
mongoes.plugin(mongoDBErrors);
mongoes.connect("mongodb://test:r25071995@ds145895.mlab.com:45895/testing")
// new data base link mongodb://<dbuser>:<dbpassword>@ds145895.mlab.com:45895/testing