const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { join } = require('path');
let user = {}
let user1 = {};
let user2 = {};

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/$|index(.html)?',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/register',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
})

app.get('/register/userInfo1',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views' ,'register' , 'userInfo1.html'));
})
app.post('/register/userInfo1', (req,res)=>{
    user1 = req.body
    console.log( user1 );
    // file에 저장 
})

app.get('/register/userInfo2',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views' ,'register' , 'userInfo2.html'));
})
app.post('/register/userInfo2', (req,res)=>{
    user2 = req.body;
    user = {...user1,...user2}
    console.log( user );
    fs.writeFileSync(path.join(__dirname,'data','userInfo.json'),JSON.stringify(user),'utf-8');
})

app.get('/register/userInfo3',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'views' ,'register' , 'userInfo3.html'));
})

app.get('/userInfo',(req,res)=>{
    res.sendFile(path.join(__dirname,'data','userInfo.json'));
})

app.listen(3000,()=>{
    console.log('server litening', 3000);
})
