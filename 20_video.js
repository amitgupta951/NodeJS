const express = require('express')
const app = express();

app.get('',(req,res)=>{
    console.log("data send by browser is:",req.query.name)
res.send('Hello,'+req.query.name)
})

app.get('/about', (req,res)=>{
    res.send([{
        name: 'Amit',
        email:'amit@gmail.com'
    },
        {name: 'Ajeet',
        email:'ajeetgupta@gmail.com'
    }
    ]);
})
app.get('/welcome', (req,res)=>{
    res.send(`
    <input type ="text" placeholder = "user name" />
<button>click me</button>
< href="/home"> Go to Home Page</a>
    `)
});

app.listen(5000)