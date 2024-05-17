import express from "express";
const app = express();
const port =1357;

app.get("/",(req,res)=>{
res.send("hello");    
});

app.get("/contact",(req,res)=>{
    res.send("contact");    
    });
    app.get("/about",(req,res)=>{
        res.send("about");    
        });
        app.listen(port,(req,res)=>{
            console.log(`our server is running on port ${port}`);    
            });