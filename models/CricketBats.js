const mongoose = require("mongoose") 
const CricketBatsSchema = mongoose.Schema({ 
    Name: String, 
    Manufacture: {type:String,minlength:5}, 
    Cost: {type:Number,min:20,max:40}
})
module.exports = mongoose.model("CricketBats",CricketBatsSchema)