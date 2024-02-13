import express from "express";
import axios from "axios"
import { randomBytes } from "crypto"
import cors from "cors";
const app = express();
const port = 4001;
app.use(cors());
app.use(express.json())

const commentsByPostId = {};

app.post("/posts/:id/comment",async(req,res)=>{
   const commentId=randomBytes(4).toString('hex');
    const {id}=req.params;
    const {content}=req.body;

    const comments=commentsByPostId[id]||[];

    comments.push({
        id:commentId,
        content:content
    })
    commentsByPostId[id]=comments;
    await axios.post('http://localhost:5000/events',{
        type:'CommentCreated-event',
        data:{
            id:commentId,
            content:content,
            postId:id
        }
    });
    res.status(201).json(comments);;


})

app.get("/posts/:id/comments",(req,res)=>{
    res.status(200).json(commentsByPostId[req.params.id] || []);
})


app.get('/comments', (req, res) => {
    res.send(comments)
})

app.post('/events',(req,res)=>{
    console.log("Event Receieved",req.body);
    res.send({});
})

app.listen(port, () => {
    console.log("Comment server running on ", port)
})