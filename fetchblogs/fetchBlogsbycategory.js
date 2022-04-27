var express=require('express');
var app=express();
var Blogs=require('../models/Blogs');

const fetchBlogsByCategory=app.get('/fetchbycategory/:category',(req,res)=>{
    const fetchBlogs= async ()=>{
        try {
            const category=req.params.category;
            const result= await Blogs.find({category:category});
            res.json(result);
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    fetchBlogs()
});
module.exports=fetchBlogsByCategory;