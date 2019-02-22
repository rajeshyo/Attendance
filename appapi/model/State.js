const mongoose =require("mongoose");

const state_schema = new mongoose.Schema({
    state : [{
        type: String,
        
        }],
    country :{
        type :mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required :"Country is required"
    }
});

module.exports = mongoose.model("State",state_schema);