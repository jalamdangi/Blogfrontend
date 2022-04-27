const { status } = require('express/lib/response');
const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    status:{type:Boolean,default:true},
    sing_up_date:{type:Date,default:Date.now}
})
const Users=mongoose.model('Users',userSchema);

module.exports=Users