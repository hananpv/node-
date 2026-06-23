require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")

const app = express()

app.use(express.json())
app.use("/uploads", express.static("uploads"))

mongoose.connect("mongodb://localhost:27017/user_management")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))


const adminSchema = new mongoose.Schema({
    email:String,
    password:String
})

const Admin = mongoose.model("Admin", adminSchema)

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    username:String,
    photo:String
})

const User = mongoose.model("User", userSchema)


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+"-"+file.originalname)
    }
})

const upload = multer({storage})


const auth = (req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        return res.json({message:"Token Required"})
    }

    try{
        const decoded = jwt.verify(token, "secretkey")
        req.admin = decoded
        next()
    }catch(error){
        res.json({message:"Invalid Token"})
    }
}


app.post("/register", async(req,res)=>{

    const {email,password} = req.body

    const hashedPassword = await bcrypt.hash(password,10)

    const admin = await Admin.create({
        email,
        password:hashedPassword
    })

    res.json({
        message:"Admin Registered",
        admin
    })
})


app.post("/login", async(req,res)=>{

    const {email,password} = req.body

    const admin = await Admin.findOne({email})

    if(!admin){
        return res.json({
            message:"Admin Not Found"
        })
    }

    const isMatch = await bcrypt.compare(password,admin.password)

    if(!isMatch){
        return res.json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign(
        {id:admin._id},
        "secretkey",
        {expiresIn:"1d"}
    )

    res.json({
        message:"Login Success",
        token
    })
})


app.post("/users", auth, upload.single("photo"), async(req,res)=>{

    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        photo:req.file ? req.file.filename : ""
    })

    res.json(user)
})


app.get("/users", auth, async(req,res)=>{

    const users = await User.find()

    res.json(users)
})


app.get("/users/:id", auth, async(req,res)=>{

    const user = await User.findById(req.params.id)

    res.json(user)
})


app.put("/users/:id", auth, upload.single("photo"), async(req,res)=>{

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            photo:req.file ? req.file.filename : undefined
        },
        {new:true}
    )

    res.json(updatedUser)
})


app.delete("/users/:id", auth, async(req,res)=>{

    await User.findByIdAndDelete(req.params.id)

    res.json({
        message:"User Deleted Successfully"
    })
})

app.listen(5000,()=>{
    console.log("Server Running on Port 5000")
})