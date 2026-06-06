// const http = require('http');

// const server = http.createServer((req, res) => {

//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Home Page');
//   }

//   else if (req.url === '/user') {
//     res.writeHead(201, { 'Content-Type': 'text/plain' });
//     res.end('User Created');
//   }

//   else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page Not Found');
//   }

// });

// server.listen(3001, () => {
//   console.log('Server running on port 3001');
// });



const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
   if(req.url==="/"){
fs.writeFileSync("test.txt","he  world")
const data =  fs.readFileSync("test.txt","utf8")
  res.end(data)
}
else if(req.url==="/del"){
  fs.unlinkSync("test.txt")
  res.end("file deleted")
}

  
              
})

server.listen(3000,()=>{
  console.log("server port in 3000")
})