const  mongooes= require("mongoose");

const post_schema = mongooes.Schema({
    imageUrl: {
        type: String
      },
    f_name:{
        type:String,
    },

    l_name:{
        type:String,
    },
    position:{
        type:String,
    },
    email:{
        type:String,

    },

    phone:{
        type:Number,
        
    },
    attendances:[
        {
            type:mongooes.Schema.Types.ObjectId,
            ref:"Comment",
            required:"comment is required"
        }
    ],
    
    // reps:[
    //     {
    //         type:mongooes.Schema.Types.ObjectId,
    //         ref:"Comment",
    //         required:"Comment is required"
    //     }
    // ]
})


module.exports=mongooes.model("Post", post_schema)