const  mongooes= require("mongoose");
const signup_schema = mongooes.Schema({
    name:[{
        type:String,
        required:true
    }],
    email:[{
        type:String,
        required:true
    }],
    password:[{
        type:String,
        required:true
    }],
    address : [{
        type: String,
        
        }],
        state : [{
            type: String,
            
            }],
        pin : [{
            type: Number,
                
           }],
        mobile : [{
            type: Number,
            
            }]

    
})

module.exports=mongooes.model("Signup", signup_schema)

