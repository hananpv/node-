// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.end("hello world")
// })
// server.listen(3000,()=>{
//     console.log("server run on 3000")
// })



const express = require("express")
const app = express()
app.get("/users", (req, res) => {
    console.log(req.url);
    res.send("Users Page");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});