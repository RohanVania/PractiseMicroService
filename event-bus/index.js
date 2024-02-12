import events from "events";
import express from "express";
import axios from "axios";

const app=express();
const port=5000;

app.post('/events',(req,res)=>{
    res.send("")
})

app.listen(port,()=>{
    console.log(`Event Bus running on ${port}`)
})

