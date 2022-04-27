const express= require('express')
const app=express();
const question=require('../models/Questions')

const fetchquestionbytag=app.get('/fetchquestionbytag/:tag',(req,res)=>{
     const fetchQuestion = async()=>{
         const tag=req.params.tag;
         const result=await question.find({tags:{$elemMatch:{$eq:tag}}});
         res.json(result)
     }
     fetchQuestion()

});
module.exports=fetchquestionbytag;