var express=require('express');
var app=express();
var tag=require('../models/tag');

const fetchTag= app.post('/fetchtag',(req,res)=>{
    const getTag= async ()=>{
        try {
            const tags=req.body.tag;
            const result= await tag.find({tag:tags});
            res.json(result);
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    getTag();
});
module.exports=fetchTag;