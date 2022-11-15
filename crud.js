const express=require("express");
const app=express();
const router=express.Router();
router.get("/",function(req,res){
    res.sendFile(__dirname+'/'+'index.html');
});
router.get("/display",function(req,res){
    res.send("<div style='border:3px dotted green;background-colour:lightgrey;color:aqua'>Your name: <h1>"+req.query['username']+"</h1><br><br>Your Query :"+req.query['message']+"</div>");
});
var bodyParser=require('body-parser');
var urlEncoded=bodyParser.urlencoded({extended:false});
router.post("/multiplayer",urlEncoded,function(req,res){
    res.send("<div style='border:3px dotted green;background-colour:lightgrey;color:aqua'>Your Program Marks: <h1>"+req.body.programming+"</h1><br><br>Your Other Marks :<h1>"+req.body.other+"</h1><br><br>"+"Your Range :<h1>"+req.body.range+"</h1></div>");
});
//var router=app.router();
router.get('/whatsapp',function(req,res){
    res.redirect("https://web.whatsapp.com/");
});
router.get('/instagram',function(req,res){
    res.redirect("https://www.instagram.com/");
});
router.get('/github',function(req,res){
    res.redirect("https://github.com/");
});
module.exports=router;

///connection in app/js
