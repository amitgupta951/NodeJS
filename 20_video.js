const express = require('express')
const app = express();

app.get("",(req,res)=>{

    res.send(`<h1>Welcome, to home Page</h1> <a href="/about">Go to about page</a>`);
});

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
    <input type ="text" placeholder = "user name" value="${req.query.name}" />
<button>click me</button>
<a href="/">Go to home page</a>

`)
});

app.listen(5000)