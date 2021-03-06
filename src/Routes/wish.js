const express=require("express")
const router=express.Router()
const{requireSignin,userMiddleware}=require('../controllers/common-middleware')
const { addWishList, getWishList } = require("../controllers/wishList")

router.post('/wish/addwish',requireSignin,userMiddleware,addWishList)
router.get("/wish/getwish",requireSignin,userMiddleware,getWishList)
module.exports=router