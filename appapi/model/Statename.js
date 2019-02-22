const mongoose =require("mongoose");

const statename_schema = new mongoose.Schema({
    statename : [{
        type: String
        
        }],
        country :{
            type :mongoose.Schema.Types.ObjectId,
            ref: "Country",
            required :"Country is required"
        },
    // state :{
    //     type :mongoose.Schema.Types.ObjectId,
    //     ref: "State",
    //     required :"statename is required"
    // }
});

module.exports = mongoose.model("Statename",statename_schema);