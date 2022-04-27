const express=require('express');
const authenticate = require('../authentication/auth');
var questions=require('../models/Questions');
var app=express();

const question=app.post('/question',authenticate,(req,res)=>{
    const askQuestion= async ()=>{
        try {
            const user=req.user;
            const question=req.body.question;
            const tags=req.body.tags;
            if(!user){res.sendStatus(401)}
            var q1=new questions({user_id:user, question:question,tags:tags});
            const result= await q1.save();
            res.json(result);
        } catch (error) {
            res.sendStatus(400);
        }


    }
    askQuestion()
})

module.exports=question;