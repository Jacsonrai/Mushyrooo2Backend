const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
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
    price: {
      type: Number,
      required: true,
    },
    offers: {
      type: Number,
    },
    productPicture:{type: String }
    ,
    quantity:{
        type:Number,
        required:true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User",required:true },
    review: [
      { 
        userId:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
       review: String
     },
    ],
    category: {type:mongoose.Schema.Types.ObjectId, ref: "User",required:true},
    upDateAt: Date,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
