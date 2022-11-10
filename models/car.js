const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
 car_name: String, 
 car_price: Number, 
 car_model: Number 
}) 
 
module.exports = mongoose.model("car", carSchema) 