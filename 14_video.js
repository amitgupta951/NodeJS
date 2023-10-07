const fs =require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/amit.txt`;
// fs.writeFileSync(filepath, "This is file of amit you can read his data")

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// });


// fs.appendFile(filepath,'and file name is amit.txt', (err)=>{
//     if(!err) console.log("file is updated now")
// })

fs.rename(filepath, `${dirpath}/fruit.txt`,(err)=>{
        if(!err) console.log("file is updated now")
})

fs.unlinkSync(`${dirpath}/fruit.txt`)