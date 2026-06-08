// const EventEmitter = require("events")
// const event = new EventEmitter()
// event.on("login", (name)=>{
//     console.log(`user ${name} is logged `)
// })
// event.emit("login","hanan")



const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("hello world")

})
server.listen (3000,()=>{
    console.log("server run on port 3000")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});