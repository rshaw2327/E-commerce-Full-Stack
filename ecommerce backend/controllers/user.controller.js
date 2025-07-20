const User = require("../models/user.model")

exports.registerUser=async(req,res,next)=>{
    const {name,email,password,phone_number}=req.body
    const user=await User.create({
        name,
        email,
        password,
        phone_number,
    })
    const token=await user.getJWTtoken()

   
    return res.status(201).json({
        success:true,
        message:"user created successfully",
        user,
        token
    })
}

exports.loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    if(!email){
        return res.status(400).json({
            success:false,
            message:"please provide email"

        })   
    }
    if(!password){
        return res.status(400).json({
            suceess:false,
            message:"please provide password"
        })
    }
    const user=await User.findOne({
        email
    }).select("+password")
    if(!user){
        return res.status(400).json({
            suceess:false,
            message:" user not found"

    })
}
const ispasswordsame=await user.comparePassword(password)
if (!ispasswordsame){
    return res.status(400).json({
        success:false,
        message:"invalid password"
    })    
}
const token=await user.getJWTtoken()
    return res.status(200).json({
        success:true,
        user,
        token
    })


}

exports.getAllUsers=async(req,res,next)=>{
    const users= await User.find()
    if(!users){
        return res.status(404).json({
            success:false,
            message:"cannont find users"
        })
    }
    return res.status(201).json({
        success:true,
        message:"user found successfully",
        users
    })
}

exports.getSingleUser=async(req,res,next)=>{
    const id=req.params.id
    const user= await User.findById(id)
    if(!user){
        return res.status(404).json({
            success:false,
            message:"cannot find the user"
        })
    }
    return res.status(201).json({
        success:true,
        message:"user found successfully",
        user
    })
}

exports.updateUser = async(req,res,next)=>{
    const id=req.params.id
    const updateUser=req.body
    let user=await User.findById(id)
    if(!user){
        return res.status(404).json({
            success:false,
            message:"cannot find the user"
        })
    }
    user=await User.findByIdAndUpdate(id,updateUser,{
        new:true,
        runValidators:true
    })
    return res.status(201).json({
        success:true,
        message:"user updated successfully",
        user
    })
}