const express=require ("express");
const app=express();

app.get("/",(req,res)=>{
  res.send("I am working");
});

app.get("/hello", (req,res)=>{
    res.send("Hello world. This is a server");
});
//server start
app.listen(3000, ()=>{
  console.log("server is working");
});