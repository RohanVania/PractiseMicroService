import express from "express";
import axios from "axios";

const app=express();
const port=4003;

app.use(express.json());

app.post('/events',async (req,res)=>{
    const {type,data}=req.body;
    if(type==='CommentCreated-event'){
        const status=data.content.includes('orange')?'rejected':'approved';
        await axios.post('http://localhost:5000/events',{
            type:'CommentModerated',
            data:{
                id:data.id,
                content:data.content,
                postId:data.postId,
                status:status
            }
        })
    }

})

app.listen(port,()=>{
    console.log(`Moderation running at ${port}`);
})
