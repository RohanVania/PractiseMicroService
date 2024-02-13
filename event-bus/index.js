import events from "events";
import express from "express";
import axios from "axios";

const app=express();

const port=5000;
app.use(express.json());

app.post('/events',async(req,res)=>{
    const data=req.body;

    await axios.post('http://localhost:4000/events',data);
    await axios.post('http://localhost:4001/events',data);
    await axios.post('http://localhost:4002/events',data);

})



app.listen(port,()=>{
    console.log(`Event Bus running on ${port}`)
})

