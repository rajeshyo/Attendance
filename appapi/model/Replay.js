const mongoose =require("mongoose");

const replay_schema = new mongoose.Schema({
    content : {
    type: String,
    required :"comment is required"
    },
    post :{
        type :mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required :"post is required"
    }
});

module.exports = mongoose.model("Replay",replay_schema);