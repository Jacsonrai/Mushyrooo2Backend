const Model=require("../models/rolemodel")
const slugify = require("slugify");
const env=require("dotenv")


exports.createModel = async(req, res) => {
    // res.status(200).json({file:req.files,body:req.body})
    const { name,description,email} = req.body;
   
    let modelUrl;
    if (req.file) {
      modelUrl = `${process.env.BASE_URL}/public/` + req.file.filename;
    }
    const model = new Model({
      name: name,
      email: email,
      modelPicture: modelUrl,
      description:description,
      slug: slugify(name),
     
    });
    model.save((err, mod) => {
      if (err) return res.status(400).json({ err });
      if (mod) {
        return res.status(200).json({
          mod,
        });
      }
    });
  };
  
exports.getModel = async(req, res) => {
    Model.find({}).exec((err, model) => {
      if (err)
        return res.status(400).json({
          err,
        });
      if (model) {
        return res.status(200).json({
          model,
        });
      }
    });
  };