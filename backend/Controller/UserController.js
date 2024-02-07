const express = require("express");
const User = require("../Models/UserSchema");
const jwt = require('jsonwebtoken');

// require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config({path:"./backend/config/config.env"});
// dotenv.config({path:"./../backend/config/config.env"});



exports.RegisterUser = async(req,res,next)=>{
    try {
        let userRegisterOrNot;

        const {name , email , password} = req.body;

        userRegisterOrNot = await User.findOne({email: email});

        if(userRegisterOrNot){
            return res.status(500).json({status:true, message:"User Already Register"})
        }



        userRegisterOrNot = await User.create({
            name,email,password
        })
        
        // token         
        const token = jwt.sign({id:userRegisterOrNot._id} , process.env.SECRET_KEY , {
            expiresIn : "5d"
        })

        userRegisterOrNot.save();


        const options = {
            expires : new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly :true,
        }

        return res.status(200).cookie("token",token,options).json({status:true,token, userRegisterOrNot , message:"User Registration Successfully"});        

    } catch (error) {
            console.log(error);
    }
}






// login 

exports.Login = async(req,res,send)=>{
    try{
        let LoginOrNot;
        let {email , password} =  req.body;

        LoginOrNot = await User.findOne({email: email});

        if(!LoginOrNot){
            return res.status(500).json({status:true, "message":"User Not LoginIn"})
        }

        let SECRET_KEY = "value" 

        // token 
        const token = jwt.sign({id:LoginOrNot._id} , SECRET_KEY , {
            expiresIn : "5d"
        })


        let COOKIE_EXPIRE = 5


        const options = {
            expires : new Date(
                Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly :true,
        }

        if(LoginOrNot.password != password){
            return res.json({status:true, "message":"details r not same for Login"  `pas  ${password}`})
        }



            return res.status(200).cookie("token",token,options).json({status:true, "message":"userLoged in ...." , token , LoginOrNot})
        

        // steps to user logi 
        // LoginOrNot 

    }catch(err){
        console.log(err);
    }
}






// const already login user 

exports.AlreadyLogin = async(req,res,next)=>{
    const cont = req.existingUserByAuth;
  if(!cont){
    return res.json({status:false,message:"Not Nhi h ing"})
  }

  return res.status(200).json({status:true,message:"User already h " , cont})
}






// ================================================================

exports.AllUser = async(req,res,next)=>{
    let sareUser ;

    try {
        sareUser = await User.find();
        return res.status(200).json({status:true,message:"Sare USer" , sareUser});
    } catch (error) {
        console.log(error);
    }
}