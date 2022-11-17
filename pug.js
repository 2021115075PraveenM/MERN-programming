var express=require('express');
var app=express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function(req,res){
    res.render('index',{
        name:'Praveen',
        wonder:{
            ok: 200,
            notok:500
        }
    });
});
app.listen(10002,()=>console.log("Server Excution"));
