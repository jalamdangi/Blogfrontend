const express=require('express')
const app = express();
const authenticate = require('../authentication/auth')
const Blog = require('../models/Blogs')

const fetchUserBlog=app.get('/userblog',authenticate,(req,res)=>{
    const fetchBlog=async ()=>{
        try {
            const userId=req.user;
            const result = await Blog.find({user_id:userId});
            res.json(result);
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchBlog()
});
module.exports=fetchUserBlog;