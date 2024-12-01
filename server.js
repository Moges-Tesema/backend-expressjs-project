const express = require("express");
const path = require("path");
const port =8000;
const port2 = 8001;
const app = express();
//setup static folder
//use is a middleware which is between incoming request and outgoing respondse
app.use(express.static(path.join(__dirname,"public")));
/*app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname,"public","index.html"));
    
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"));
})
app.get("/contact",(req,res)=>{
    res.send("<h1>contact page that is amazing right</h1>");
})
    */
let posts=[
    {id:1,title:"post one",
        body:"this is post one"
    },
    {id:2,title:"post two",
        body:"this is post two"
    },
    {id:3,title:"post three",
        body:"this is post three"
    }
];
app.get("/api/posts",(req,res)=>{
    const request=req.query;
    console.log(request);
    const post={
        id:4,
        title:"post four",
        body:"this is post four"
    };
    posts.push(post);
    res.json(posts);
});
   app.get("/api/posts:id",(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter(post=>post.id===id));
   });
app.get("/",(req,res)=>{
    res.send("<h2>this is other part of my backend</h2>");
 
});
//app.listen(port2,()=>console.log(`server is running on port ${port2}`));
app.listen(port,()=>console.log("server is running on port"+port)); 