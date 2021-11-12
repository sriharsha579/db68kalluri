const mongoose = require("mongoose") 
const CricketBatsSchema = mongoose.Schema({ Name: String, Manufacture: String, Cost: Number}) 
 
module.exports = mongoose.model("CricketBats",CricketBatsSchema)