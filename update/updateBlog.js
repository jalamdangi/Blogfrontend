const express=require('express');
const authenticate = require('../authentication/auth');
const app=express();
const Blog=require('../models/Blogs');


const updateBlog=app.put('/updateblog/:id',authenticate,(req,res)=>{
    const doUpdate= async ()=>{
        const user=req.user;
        const updatedBlog={
            title:req.body.title,
            description:req.body.description,
            tags:req.body.tags,
            category:req.body.category
        }
        const result= await Blog.findByIdAndUpdate(req.params.id,{$set:updatedBlog});
        res.json(result);
    }
    doUpdate();
});
module.exports=updateBlog;