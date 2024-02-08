const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../Models/UserSchema");
const dotenv = require('dotenv')
// dotenv.config({path:"./backend/config/config.env"});
dotenv.config({path:"./../backend/config/config.env"});

exports.Authenticate = async(req,res,next)=>{

    // const {token} = req.cookies;
    // const {token} = req.rawHeaders
    // console.log(req.rawHeaders[15]);
    const spl = req.rawHeaders[15].split("=");
    // console.log(spl[1]);



    if(!spl[1]){
        return res.status(400).json({status:false  , message:"Tokn not found" })
    }

    const SECRET_KEY = "value";
    // verifyToken 
    const decodedData = jwt.verify(spl[1] , SECRET_KEY);
    // const decodedData = jwt.verify(spl[1] , process.env.SECRET_KEY);
    console.log("decodedData" , decodedData)
    req.existingUserByAuth = await User.findById(decodedData.id);

    

    next();
}
