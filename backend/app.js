
const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");

// host 
const path = require('path');


const app = express()
app.use(express.urlencoded({extended: true}))

app.use(cors(
    {
        origin : ["https://yogesh-login-host-frontend.vercel.app"],
        methods :["POST" , "GET"],
        credentials : true
    }
));



// app.use  =================================================
app.use(express.json())
// const require 
const User = require('./Routes/UserRoutes');
app.use('/api', User );


// app.use finidh  =================================================


// ${process.env.BASE_URL}


// app.get("/",(req,res,next)=>{
//     console.log("server sonnect");
//     res.send("server sonnect");
// })

app.get("/",(req,res,next)=>{
        // console.log("server sonnect");
        // res.send("server sonnect");
        app.use(express.static(path.resolve(__dirname, "frontend", "build")));
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
    
    









// mongoose conn 
const API = "mongodb+srv://yogesh:9891334343@cluster0.w1mwsjh.mongodb.net/?retryWrites=true&w=majority"
const PORT = 4000;

mongoose.connect(API).then(()=>{
    console.log("server sonnect" , PORT);
}).then(()=>{
app.listen(PORT)
}).catch((err)=> console.log(err));
