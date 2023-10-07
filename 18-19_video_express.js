const express = require('express')
const app = express();

app.get('',(req,res)=>{
    console.log("data send by browser is:",req.query.name)
res.send('Hello,'+req.query.name)
})

app.get('/about', (req,res)=>{
    res.send('<h1>Hello, This is about page</h1>')
});

app.get('/welcome', (req,res)=>{
    res.send('Hello, This is welcome page')
});

app.listen(5000)