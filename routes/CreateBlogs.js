var express=require('express');
var app=express();
var Blog=require('../models/Blogs');
const authenticate=require('../authentication/auth');

const createBlogs=app.post('/postblog',authenticate,(req,res)=>{
    const postblog = async ()=>{
        try{
        const user=req.user;
        const title=req.body.title;
        const description=req.body.description;
        const category=req.body.category;
        const tags=req.body.tags;
        const image=req.body.image;
        const b1= new Blog({user_id:user,
            title:title,
            description:description,
            tags:tags,
            category:category,
            image:image});
        const result = await b1.save();
        res.json(result);}
        catch(err){
            console.log("this is the error "+error)
        }
    }
    postblog();
})

module.exports=createBlogs;