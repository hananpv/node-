const EventEmitter = require("events")

const event = new EventEmitter()
event.on("add",(a,b)=>{
console.log(a+b)
}) 
event.emit("add",1,2)

event.on("sub",)