var express=require('express');
var app=express();
var Blogs=require('../models/Blogs');


const fetchbytags=app.get('/fetchbytags/:tag',(req,res)=>{
    const fetchbytags=async ()=>{
        try { 
            const tag=req.params.tag;
            const result=await Blogs.find({tags:{$elemMatch:{$eq:tag}}});
            res.json(result)
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    fetchbytags();
})
module.exports=fetchbytags