//connection for crud.js
var express=require('express');
var app=express();
var routing=require('./crud.js');
app.use('/',routing);
app.use('/whatsapp',routing);
app.use('/instagram',routing);
app.use('/github',routing);
app.listen(9999,()=>console.log("server start"));