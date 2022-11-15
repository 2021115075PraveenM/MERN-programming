var express=require('express');
var app=express();
var alert=require('alert');
const  router = express.Router();
router.use(function(req,res,next){                               //app.use('/',function(req,res,next))----better;
  alert("First-Page");
  console.log("the request method"+req.method+"the request url"+req.url);
next();
});
router.get("/",function(req,res){
    console.log("the request method"+req.method+"the request url"+req.url);
    res.redirect("http://localhost:10000/exit");
    });
app.use('/exit',function(req,res,next){
    alert("Going to end the Program");
    next();
});
app.get('/exit',function(req,res){
    res.send("The Progra  Ended");
});
app.listen(10000,()=>console.log("App Middleware start"));