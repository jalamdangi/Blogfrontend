const express=require('express');
const authenticate = require('../authentication/auth');
const app=express();
const User=require('../models/model');

const getuser=app.get('/getuser',authenticate,(req,res)=>{
    const getUser= async ()=>{
        const userid=req.user;
       const result = await User.find({_id:userid});
       res.json(result);
    }
    getUser();
})
module.exports=getuser;