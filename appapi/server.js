const express = require("express");
const cors = require('cors');
require("express-async-errors");
const app = express();
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const morgan =require("morgan");
//database connection
require("./mongo")


//models
require("./model/Post");
require("./model/Comment");
require("./model/Replay");
require("./model/Country");
require("./model/State");
require("./model/Statename");
require("./model/Signup");
require("./model/Product");
require("./model/Student");
//Middleware

app.use(bodyParser.json()).use(morgan())


//Routes
app.use("/posts", require("./routes/posts"))
app.use("/country", require("./routes/country"))
app.use("/signup", require("./routes/signup"))
app.use("/profile", require("./routes/profile"))
app.use("/product", require("./routes/product"))
app.use("/student", require("./routes/student"))

//not found url
app.use((req, res, next)=>{
    req.status =404;
    const error = new Error("Url not found");
    next(error);
});

//error hundeler
app.use((error,req, res, next)=>{
    res.status(req.status || 500).send({
        message:error.message,
        stack:error.stack
    });
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('access-control-allow-credentials','true');
    res.header('access-control-allow-methods','GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('access-control-allow-headers', 'authorization');
    next();
})





//database 
app.listen(3001,() =>{
    console.log("Server is running ")
})