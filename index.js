const app =require('./app')
// console.log(app.z())
// var a ='20';

const arr = [2,8,2,7,8,5,5];
// console.log(arr[2]);

let result = arr.filter((item)=>{
    return item>5
})
console.log(result)