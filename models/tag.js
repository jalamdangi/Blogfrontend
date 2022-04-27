var mongoose=require('mongoose');

var tagSchema=mongoose.Schema(
    {user_id:{type:String},
    tag:{type:String},
    description:{type:String},
    status:{type:Boolean,default:true}});

var tag=mongoose.model('tag',tagSchema)
module.exports=tag;