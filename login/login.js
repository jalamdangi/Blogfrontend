const express=require('express');
const app=express();
var {body,validationResult}=require('express-validator');
var bycrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Users=require('../models/model');
var mongoose=require('mongoose');
app.use(express.json());

const login=app.post('/login',[body('username','User Name not Valid').isEmail(),
body('password','password must not be blank').exists()

],(req,res)=>{
    const getLogin= async ()=>{
            try {  
                    const username=req.body.username;
                    const password=req.body.password;
                    const error=validationResult(req);
                    if(!error.isEmpty)return res.status(400).json({ errors: errors.array() });
                    const result=await Users.findOne({email:username});
                    if(!result){res.sendStatus(404).res.json({message:"email does not found"})}
                    else{

                            const compare= await bycrypt.compare(password,result.password);
                            if(!compare){res.json({message:"login with correct credential"})}
                            else{
                                      
                                    const token=jwt.sign({id:result._id,username:result.email},'thesecretishere');
                                    res.json({message:"login succesful",token:token});
                            }
                    }
            } catch (error) {
                    console.log("this is the error "+error)
            }
       
    }
 getLogin();

})
module.exports=login;