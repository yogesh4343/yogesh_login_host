const express = require("express");
const { RegisterUser , Login, AlreadyLogin , AllUser , SignOut  } = require("../Controller/UserController");
const { Authenticate } = require("../Utils/Authenticate");

const Router = express.Router();


Router.route("/register").post(RegisterUser); 
Router.route("/login").post(Login); 
Router.route("/me").get(Authenticate , AlreadyLogin); 
Router.route("/users").get(  AllUser); 
Router.route("/logout").get(   SignOut); 


module.exports = Router
