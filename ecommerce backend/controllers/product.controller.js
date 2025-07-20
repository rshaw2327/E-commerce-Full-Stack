const Products = require("../models/product.model")

exports.createProduct=async(req,res,next)=>{
    const product=await Products.create(req.body)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Cannot create a product"
        })
    }
    return res.status(201).json({
        success:true,
        message:"product created successfully",
        product
    })
}

exports.getAllProducts=async(req,res,next)=>{
    const products=await Products.find()
    if(!products){
        return res.status(404).json({
            success:false,
            message:"Cannot find products"
        })
    }
    return res.status(200).json({
        success:true,
        message:"products fetched successfully",
        products
    })

}

exports.getSingleProduct=async(req,res,next)=>{
    const id=req.params.id
    const product=await Products.findById(id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"cannot find the product"
        })
    }
    return res.status(201).json({
        success:true,
        message:"products fetched successfully",
        product
    })
}

exports.updateProduct=async(req,res,next)=>{
    const id=req.params.id
    let updatedData=req.body
    let product=await Products.findById(id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"cannot find the product while updating"
        })
    }
    product = await Products.findByIdAndUpdate(id,updatedData,{
        new:true,
        runValidators:true
    })
    return res.status(201).json({
        success:true,
        message:"product updated successfully",
        product
    })
}