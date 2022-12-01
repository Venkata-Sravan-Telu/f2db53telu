const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
    car_name: {type: String,required: [true, 'Car Name cannot be empty']},
    car_price: {type: Number,required: [true, ' car price cannot be empty']},
    car_model: {type: Number,required: [true, 'car model cannot be empty']}
}) 
 
module.exports = mongoose.model("car", carSchema) 