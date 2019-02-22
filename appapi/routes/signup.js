const router = require("express").Router();
const mongoose = require("mongoose");
const Signup = mongoose.model("Signup");


//signup
//                              POST Operation
//create signup operation
router.post("/",async(req, res)=>{
    const signup =new Signup();
    signup.name =req.body.name;
    signup.email =req.body.email;
    signup.password =req.body.password;
    signup.address =req.body.address;
    signup.state =req.body.state;
    signup.pin =req.body.pin;
    signup.mobile =req.body.mobile;
    signup.statename =req.body.statename;
    await signup.save();
    res.send(signup);
 });


 // Simple login post 


 router.post("/:signupId/login",async(req, res)=>{
  var name = req.body.name;
  var password = req.body.password;
  const signups = await Signup.findOne({_id: req.params.signupId,name: name, password: password},
    function(err,signup){
      if(err){
          console.log(err);
          return Response.status(500).send();
      }
      if(!signup){
        res.send({message:"Login Faild successfull"});
          return res.status(400).send();
      }
      console.log("login");
    //   return res.status(200).send();      
  })
res.send(signups)

 });

// logout
 router.post("/:signupId/logout",async(req, res)=>{
    var name = req.body.name;
    var password = req.body.password;
    const signups= await Signup.findOne({_id: req.params.signupId,name: name, password: password},
        function(err,signup){
        if(err){
            console.log(err);
            return Response.status(500).send();
        }
        if(!signup){
          res.send({message:"logout Faild successfull"});
            return res.status(400).send();
        }
        res.send({message:"logout successfull"});
        return res.status(200).send();      
    })
  //res.send(signups)
//   res.send({ok:true});
   });
  

//                                           END POST Operation


//                                          View Operation

//view get operation signup
router.get("/",async(req, res)=>{
    const signups = await Signup.find({}).populate(
        "signups"
    );
    res.send(signups)
});


//find view by id get operation
//country view
router.get("/:signupId",(req, res)=>{
    const immage= await 
    res.send(immage)
});


//                                      END view operation


//                                      EDIT Opration
//edit/modify put operation signup
router.put("/:signupId",async(req, res)=>{
    const signup= await Signup.findByIdAndUpdate({
        _id: req.params.signupId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(signup)
});



//                                     END EDIT Operation

//                                    DELETE Operation
//delete operation country

router.delete("/:signupId",async(req, res)=>{
        const signup= await Signup.findByIdAndDelete({_id: req.params.signupId,});
    res.send(signup)
    });


//                                 END Operation
module.exports= router;