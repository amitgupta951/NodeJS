// console.log("code with amit here you will learn new technology");
// console.log(40+50);

                    // Make a simple Api
const http = require('http');
const data = require('./data');
http.createServer((req,res)=>{
res.writeHead(201,{'Content-Type':'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(5000);