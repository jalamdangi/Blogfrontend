var express=require('express');
var app=express();
var question=require('../models/Questions');

 const fetchQuestion=app.get('/fetchquestion',(req,res)=>{
     const fetch= async ()=>{
         try {
             var result= await question.find();
             if(!result){res.sendStatus(404)}
             res.json(result);
         } catch (error) {
             res.json(error)
         }
     }
     fetch()
 });


 module.exports=fetchQuestion;