var mongoose=require('mongoose');


var questionSchema=mongoose.Schema({
    user_id:String,
    question:String,
    tags:{type:Array},
    upload_date:{type:Date,default:Date.now},
    status:{type:Boolean,default:true}});
var question=mongoose.model('question',questionSchema)

module.exports=question;