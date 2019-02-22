const mongoose =require("mongoose");

const student_schem = new mongoose.Schema({
    content : {
    type: String,
    required :"student is required"
    }
    // post :{
    //     type :mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    //     required :"post is required"
    // }
});

module.exports = mongoose.model("Student",student_schem);