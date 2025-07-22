const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors")

const whitelist=["http://127.0.0.1:5502","http://127.0.0.1:5501","https://e-commerce-full-stack-zeta.vercel.app/","https://e-commerce-full-stack-2rfq.vercel.app/"] 
const corsOptions={
  origin:function(origin,callback){
    if(!origin || whitelist.includes(origin)){
      callback(null,true)

    }else{
      callback(new Error("not allowed by cors"))
    }


  },
  credentials:true,
  methods:["GET","POST","DELETE","PUT","PATCH"],
//   allowedHeaders:["Content-Type"]
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

// routes imports
const user=require("./routes/user.route")
const product=require("./routes/product.route");




// routes use
app.use("/api/v1",user)
app.use("/api/v1/product",product)
module.exports=app;

// localhost:port/api/v1/register
// localhost:port/api/v1/login
// localhost:port/api/v1/product/create
// localhost:port/api/v1/product/getAllProducts
// localhost:port/api/v1/product/getSingleProduct/id
// localhost:port/api/v1/product/updateProduct/id
// 
