var express=require('express');
var app=express();
var question=require('../models/Questions');

 const fetchQuestionbyid=app.get('/fetchquestion/:id',(req,res)=>{
     const fetch= async ()=>{
         try {
             const id=req.params.id;
             var result= await question.find({_id:id});
             if(!result){res.sendStatus(404)}
             res.json(result);
         } catch (error) {
            console.log(error)
         }
     }
     fetch();
 });


 module.exports=fetchQuestionbyid;