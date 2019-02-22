const  mongooes= require("mongoose");
const country_schema = mongooes.Schema({
    country:[{
        type:String,
        required:true
    }],
            state:[
                {
                    type:mongooes.Schema.Types.ObjectId,
                    ref:"country",
                    required:"country is required"
                }
            ]

    
})

module.exports=mongooes.model("Country", country_schema)

//state:[{
    //         type:String,
    //         required:true
    //     }],
    //     statename:[
    //         {
    //             type:String,
    //             required:true
    //         }],
