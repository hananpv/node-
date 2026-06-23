const express = require("express")
const mongoose = require("mongoose")

const app = express()
 app.use(express.json())


 async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/students")
      console.log("mongodb connect")
    }catch(error){
        console.log(error)
    }
 }
 connectDB()


 const studentsSchema= new mongoose.Schema({
    name:String,
    age:Number,
    cource:String,
    marks:Number
 })
 const students = mongoose.model("seventh",studentsSchema)


 app.post("/students", async (req, res) => {
    console.log("POST route hit");
    try {
        const data = await students.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.get("/students", async (req, res) => {
    console.log("GET route hit");
    try {
        const data = await students.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});
 app.listen(5000,()=>{
    console.log("server is running on port 5000")
 })

