const router = require("express").Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

//Product
//                              POST Operation
//create Product operation
router.post("/",async(req, res)=>{
    const product =new Product();
    product.productname =req.body.productname;
    product.description =req.body.description;
    product.price =req.body.price;
    product.offerprice =req.body.offerprice;
    await product.save();
    res.send(product);
 });


 //                            END  POST Operation



 //                              View Operation


//find view by id get operation 
//product view
router.get("/:productId",async(req, res)=>{
    const product= await Product.findOne({_id: req.params.productId});
    // .populate(
    //     "states"
    // );
    res.send(product);
});


//view get operation product all
router.get("/",async(req, res)=>{
    const product = await Product.find({}).populate(
        "products"
    );
    res.send(product);
});



 //                              End View Operation
                     
module.exports= router;