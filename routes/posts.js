import express from "express";
const router = express.Router();
let posts=[
    { 
        id:1,
        title:"post one",
        body:"this is post one"
    },
    {
        id:2,
        title:"post two",
        body:"this is post two"
    },
    {
        id:3,
        title:"post three",
        body:"this is post three"
    }
];
router.get("/",(req,res)=>{
     res.join(posts);
   
});
   router.get("/:id",(req,res)=>{
    
    const id = parseInt(req.params.id);
    res.json(posts.filter(post=>post.id===id));
   });
   export default router;