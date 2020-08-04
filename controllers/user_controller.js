const User = require('../models/user_model');
const express =require('express');
const app=express();

//Mentioning response file's type is ejs
app.set('view engine','ejs');

//Declaring static files
app.use(express.static('/Static'));

//Home
const home = (req,res,next) => {
    res.send("Sign_in-> http://localhost:9000/sign_in  :::  Sign_up-> http://localhost:9000/sign_up");
}

//sign-in
const show = (req,res,next) => {
    var email=req.body.email;
    var password=req.body.password;
    User.findOne({$or:[{email:email},{password:password}]})
    .then(response=>{
        if(response){
            res.send("Hello  " +response.name);
        }
        else{
            res.json({
                message:'Wrong deatils'
            })
        }
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}

//sign-up
const store=(req,res,next) => {
    console.log(req.body);
    let user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    user.save()
    .then(response=>{
        res.json({
            message:"Your details have been uploaded successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}

//export every controller
module.exports={
    home,store,show
}