const express = require("express")
const app = express()


// req.url


// app.get("/users", (req, res) => {
//     console.log(req.url);
//     res.send("Users Page");
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// app.get("/user/:id",(req,res)=>{
//     console.log(res.params)
//     res.send("user page")
// })

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.end("search page")
// }).

// req__body

// app.use(express.json());

// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.end("login success")
// })




// req_headers


app.get("/",(req,res)=>{
    console.log(req.headers);
    res.end("home page")
})


// Property         	Used For	                          Example
// req.url	            Know which URL was requested	      /users
// req.method	        Check request type	                  GET, POST
// req.params	        Get data from URL path	              /user/101 → 101
// req.query	        Get filter/search values              ?name=sinan
// req.body	            Get form/JSON data                 	  Login details
// req.headers      	Authentication, content type	      JWT token, JSON type



app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});




// Response Method	           Definition	                                                               Example
// res.send()	               Sends a response of any type (text, object, array, HTML)	                   res.send("Hello World")
// res.json()	               Sends a JSON response	                                                   res.json({ name: "Sinan" })
// res.status()	               Sets the HTTP status code	                                               res.status(404).send("Not Found")
// res.redirect()	           Redirects the client to another URL	                                       res.redirect("/home")
// res.render()	               Renders a template/view file	                                               res.render("home")
// res.set()	               Sets response headers	                                                   res.set("Content-Type", "application/json")















































































































































































































































































































































































