const express = require("express");
const { RegisterUser , Login, AlreadyLogin , AllUser} = require("../Controller/UserController");
const { Authenticate } = require("../Utils/Authenticate");

const Router = express.Router();


Router.route("/register").post(RegisterUser); 
Router.route("/login").post(Login); 
Router.route("/me").get(Authenticate , AlreadyLogin); 
Router.route("/users").get(  AllUser); 


module.exports = Router