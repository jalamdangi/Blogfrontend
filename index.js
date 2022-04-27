const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
const db=require('./db');
var Users=require('./models/model');
var login=require('./login/login');
var User=require('./routes/User');
const authenticate=require('./authentication/auth')
const getUser=require('./fetch user/fetchuser');
const createBlogs=require('./routes/CreateBlogs');
var fetchbytags=require('./fetchblogs/fetchbytags');
var fetchtag=require('./fetchtag/fetchtag')
var allblogs=require('./fetchblogs/fetchallblogs');
var fetchUserBlog=require('./fetchblogs/fetchuserapi');
var fetchblogsbyid=require('./fetchblogs/fetchblogsbyid');
var fetchBlogsByCategory=require('./fetchblogs/fetchBlogsbycategory')
var reports=require('./routes/reports');
var question=require('./routes/Questions');
var fetchQuestion=require('./fetchquestion/fetchquestion');
var fetchreport=require('./fetchreport/fetchreport');
var fetchreportquestion=require('./fetchreport/fetchreportquestion');
var fetchQuestionbyid=require('./fetchquestion/fetchquestionbyid');
var comments=require('./routes/comments');
var fetchcomments=require('./fetchcomments/fetchcommet');
var postanswer=require('./routes/answers');
var fetchquestionbytag=require('./fetchquestion/fetchquestionbytag');
var tag=require('./routes/tags')
var cors=require('cors');
app.use(cors());

//using all apis in my main file
app.use(fetchreportquestion);
app.use(fetchcomments);
app.use(fetchtag)
app.use(fetchreport);
app.use(reports);
app.use(question);
app.use(fetchQuestion);
app.use(fetchquestionbytag)
app.use(fetchQuestionbyid);
app.use(User);
app.use(login);
app.use(fetchbytags);
app.use(fetchUserBlog)
app.use(allblogs)
app.use(fetchblogsbyid);
app.use(fetchBlogsByCategory);
app.use(tag);

app.use(authenticate);
app.use(comments)
app.use(createBlogs)
app.use(getUser);
app.use(postanswer);



app.listen(5000,()=>{
    console.log('server started at port 5000')
})