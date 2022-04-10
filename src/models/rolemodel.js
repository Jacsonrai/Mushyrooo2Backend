const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
      },
 
    modelPicture: { type: String, required: true },
    description:{type:String,required:true},
    email:{type:String,required:true}
  
  },
  { timestamps: true }
);
module.exports = mongoose.model("Model", modelSchema);
