const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const UserRoute =require('./routers/user_routers');

mongoose.connect('mongodb://localhost:27017/Users',{useNewUrlParser:true,useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
});
db.once('open',()=>{
    console.log("DB connected");
});

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(9000,()=>{
    console.log('Server is running')
});

app.use('/',UserRoute);