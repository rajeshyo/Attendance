const  mongooes= require("mongoose");
const product_schema = mongooes.Schema({
    productname:[{
        type:String,
        required:true
    }],
    description:[
        { 
            type:String,
            required:true
        }
    ],
    price:[
        {
            type:String,
            required:true
        }
    ],
    offerprice:[
        {
            type:String,
            required:true
        }
    ]
    
    
})

module.exports=mongooes.model("Product", product_schema)
