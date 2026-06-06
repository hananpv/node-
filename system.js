// const fs = require('fs')

// fs.writeFile('nxt.txt',"hello world",(err)=>{
//     if(err) throw err;
//     console.log("file created")
// })


// fs.readFile("nxt.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }) 


// fs.appendFile("nxt.txt","\n new line", (err)=>{
//     console.log('data added')
// })


// fs.rename("new.txt","npm.txt",(err)=>{
//     console.log("renamed")
// })



// const fs = require('fs');

// const stream = fs.createReadStream('test.txt');

// stream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });


// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {

//   if (req.url === "/") {
//     fs.writeFileSync("test.txt", "Hello World");
//     const data = fs.readFileSync("test.txt", "utf8");
//     res.end(data);
//   }

//   else if (req.url === "/del") {
//     fs.unlinkSync("test.txt");
//     res.end("File Deleted");
//   }

// }).listen(3000);

// console.log("Server running on port 3000");



// console.log("Start");

// setTimeout(() => {
//    console.log("Timer");
// }, 3000);

// console.log("End");
const fs = require("fs")

// fs.writeFile("kin.txt","hello king",(err)=>{
//    if (err) throw err;
//    console.log("file created")
// })

// fs.readFile("kin.txt","utf8",(err,data)=>{
//    console.log(data)
// })

// fs.appendFile("kin.txt","\n new line", (err)=>{
// console.log("new added-")
// } )


fs.unlink("npm.txt",(err)=>{
   console.log("file deleted")
})