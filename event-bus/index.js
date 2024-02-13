import express from "express";
import axios from "axios";

const app=express();

const port=5000;
app.use(express.json());
const events=[];

app.post('/events',async(req,res)=>{
    const data=req.body;
    events.push(data);
    try{

        await axios.post('http://localhost:4000/events',data); //*Post Service
        await axios.post('http://localhost:4001/events',data); //* Comment Service
        await axios.post('http://localhost:4003/events',data) //* Moderation Service
        await axios.post('http://localhost:4002/events',data); //* Query Service
    }catch(err){
        console.log('Its ok for error',err.message)
    }


})


app.get('/events',(req,res)=>{
    res.send(events);
})




app.listen(port,()=>{
    console.log(`Event Bus running on ${port}`)
})

