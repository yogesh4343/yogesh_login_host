const mongoose  = require("mongoose");
const validator = require('validator')

const UserModel = new mongoose.Schema({
    name : {
        type:String,
        required:[true, "Please Enter Your Name"],
        // maxLength:[30 , "name cannot exceed 30 char"],
        // minLength:[4 , "name more then 5 char"]
    },
    email : {
        type: String,
        required:[true , "Enter the email of the user"],
        // validate:[validator.isEmail]
    },
    password : {
        type: String,
        required:[true , "Enter the password of the user"],
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    }
})


module.exports = mongoose.model("User",UserModel);