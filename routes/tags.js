var express=require('express');
const authenticate = require('../authentication/auth');
var app=express();
var tag=require('../models/tag')
const tags=app.post('/createtag',authenticate,(req,res)=>{
    const createtag = async ()=>{
        const tags=req.body.tag;
        const description=req.body.description;
        const user_id=req.user;
        const t1= new tag({user_id:user_id,tag:tags,description:description});
        const result=await t1.save();
        if(!result){res.sendStatus(400).json({messge:"something went wrong"})}
        res.json(result);
    }
    createtag();
});
module.exports=tags