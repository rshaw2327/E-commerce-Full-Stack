const express=require("express")
const{createProduct,getAllProducts,getSingleProduct,updateProduct}=require("../controllers/product.controller")

const router=express.Router()

router.route("/create").post(createProduct)
router.route("/getAllProducts").get(getAllProducts)
router.route("/getSingleProduct/:id").get(getSingleProduct)
router.route("/updateProduct/:id").put(updateProduct)

module.exports=router
