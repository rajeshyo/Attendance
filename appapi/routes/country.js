const router = require("express").Router();
const mongoose = require("mongoose");
const cors = require('cors');
const Country = mongoose.model("Country");
const State = mongoose.model("State");
const Statename = mongoose.model("Statename");




router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('access-control-allow-credentials','true');
    res.header('access-control-allow-methods','GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('access-control-allow-headers', 'authorization');
    next();
})


//country
//                              POST Operation
//create country operation
router.post("/",async(req, res)=>{
    const country =new Country();
    country.country =req.body.country;
    //country.state =req.body.state;
    //country.statename =req.body.statename;
    await country.save();
    res.send(country);
 });

//State

    //create a state
    router.post("/:countryId/state", async(req,res)=>{
        //find a country 
    const country = await Country.findOne({_id: req.params.countryId});

    //Create a state
    const state =new State();
    state.state =req.body.state;
    state.country =country._id;
    await state.save();

    //Associate country with state
    country.state.push(state._id);
    await country.save();
    res.send(state);
    // res.send({ok:true});
    });

//Statename

    //create a statename
    router.post("/state/:stateId/statename", async(req,res)=>{
        //find a state 
    const state = await State.findOne({_id: req.params.stateId});

    //Create a statename
    const statename =new Statename();
    statename.statename =req.body.statename;
    statename.country =state._id;
    await statename.save();

    //Associate state with statename
    state.state.push(statename._id);
    await state.save();
    res.send(statename);
    // res.send({ok:true});
    });




//                                           END POST Operation


//                                          View Operation
//find view by id get operation 
//statename view
router.get("/state/statename/:statenameId",async(req, res)=>{
    const statename= await Statename.findOne({_id: req.params.statenameId});
    res.send(statename);
});

//find view by id get operation 
//state view
router.get("/state/:stateId",async(req, res)=>{
    const state= await State.findOne({_id: req.params.stateId});
    // .populate(
    //     "states"
    // );
    res.send(state);
});

//view get operation country
router.get("/",async(req, res)=>{
    const countrys = await Country.find({}).populate(
        "states"
    );
    res.send(countrys)
});


//find view by id get operation
//country view
router.get("/:countryId",async(req, res)=>{
    const country= await Country.find({_id: req.params.countryId})
    res.send(country)
});


//                                      END view operation


//                                      EDIT Opration
//edit/modify put operation country
router.put("/:countryId",async(req, res)=>{
    const country= await Country.findByIdAndUpdate({
        _id: req.params.countryId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(country)
});

//edit/modify put operation state
router.put("/state/:stateId",async(req, res)=>{
    const state= await State.findByIdAndUpdate({
        _id: req.params.stateId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(state)
   // res.send({ok:true});
});

//edit/modify put operation statename
router.put("/state/statename/:statenameId/",async(req, res)=>{
    const statename= await Statename.findByIdAndUpdate({
        _id: req.params.statenameId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(statename)
//    res.send({ok:true});
});

//                                     END EDIT Operation

//                                    DELETE Operation
//delete operation country

router.delete("/:countryId",async(req, res)=>{
        const country= await Country.findByIdAndDelete({_id: req.params.countryId,});
    res.send(country)
    });


//delete operation state

// router.delete("/state/:stateId",async(req, res)=>{
//     const state= await State.findByIdAndRemove({_id: req.params.stateId,});
// res.send({message:"state delete successfull"})
// });    

//                                     END Operation
module.exports= router;