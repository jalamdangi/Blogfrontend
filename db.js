const mongoose=require('mongoose');
const DB = 'mongodb+srv://reactdevelopers:xp6a8OYw9EDSGRXW@cluster0.cc3c8.mongodb.net/lumenoreblog?retryWrites=true&w=majority';

const connection=mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log('connection created succesfully')
}).catch((err)=>{console.log(err)})

module.exports=connection;