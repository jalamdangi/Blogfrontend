var express=require('express')
var app= express();
var comment=require('../models/comment');
const Users = require('../models/model');
const fetchcomments=app.get('/fetchcomments/:blogid',(req,res)=>{
    const fetch= async ()=>{
        try {
            
            const blog_id=req.params.blogid
            const result = await comment.find({blog_id:blog_id})
            const user= result.map((item)=>{return item.user_id})
            const comUser= await Users.find({_id:user});
            res.json({user:comUser,comment:result});
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    fetch();
});
module.exports=fetchcomments;