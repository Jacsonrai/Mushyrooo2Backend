const express = require("express");
const { requireSignin, adminMiddleware } = require("../controllers/common-middleware");

const multer=require("multer")
const router = express.Router();
const shortId=require("shortid")
const path=require("path");
const { createModel, getModel } = require("../controllers/rolemodel");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads') )
    },
    filename: function (req, file, cb) {
      
      cb(null,shortId.generate() +'-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


router.post('/model/create',requireSignin,adminMiddleware,upload.single('modelPicture'),createModel)
router.get('/model/getmodel',getModel)


module.exports = router;
