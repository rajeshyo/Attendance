const mongoose =require("mongoose");

const comment_schema = new mongoose.Schema({
    date : {
        type: String
        // required :"comment is required"
        },
        starting : {
            type: String,
            required:true
            },
        chakeout : {
            type: String,
            required:true
            },
    
    // repl : [{
    //     type: String,
        
    //     }],
    post :{
        type :mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required :"post is required"
    }
});

module.exports = mongoose.model("Comment",comment_schema);