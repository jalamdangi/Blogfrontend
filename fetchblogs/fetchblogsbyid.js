var express=require('express');
var app=express();
const Blogs=require('../models/Blogs');


const fetchblogsbyid=app.get('/getblogs/:id',(req,res)=>{
    const getblogs= async()=>{
        try {
        const id=req.params.id;
        const result= await Blogs.find({_id:id});
        res.json(result);
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    getblogs();
});
module.exports=fetchblogsbyid;