import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port =8000;
const port2 = 8001;
const app = express();
//setup static folder
//use is a middleware which is between incoming request and outgoing respondse
app.use("/api/posts",posts);
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname,"public","index.html"));
    
});
app.get("/about",(req,res)=> {
    res.sendFile(path.join(__dirname,"public","about.html"));
})
app.get("/contact",(req,res)=>{
    res.send("<h1>contact page that is amazing right</h1>");
});
//app.listen(port2,()=>console.log(`server is running on port ${port2}`));
app.listen(port,()=>console.log("server is running on port"+port)); 