const mongoose = require("mongoose")
const { Schema } = mongoose;

const dressSchema = new Schema({
  img: String, // String is shorthand for {type: String}
  name: String,
  price: Number,

});

const dressModel= mongoose.model("dress",dressSchema);

module.exports=dressModel;