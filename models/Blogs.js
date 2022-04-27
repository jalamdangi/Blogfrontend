var mongoose=require('mongoose');

var BlogSchema=mongoose.Schema({
    user_id:{type:String,required:true},
    title:{type:String, required:true},
    description:{type:String,required:true},
    image:{type:String},
    category:{type:String},
    tags:{type:Array},
    upload_date:{type:Date,default:Date.now},
    status:{type:Boolean,default:true}
})
var Blog=mongoose.model('Blog',BlogSchema);

module.exports=Blog;