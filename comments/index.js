import express from "express";
import { randomBytes } from "crypto"
import cors from "cors";
const app = express();
const port = 4001;
app.use(cors());
app.use(express.json())

const commentsByPostId = {};

app.post("/posts/:id/comment",(req,res)=>{
   const commentId=randomBytes(4).toString('hex');
    const {id}=req.params;
    const {content}=req.body;

    const comments=commentsByPostId[id]||[];

    comments.push({
        id:commentId,
        content:content
    })
    commentsByPostId[id]=comments;
    res.status(201).json(comments);;


})

app.get("/posts/:id/comments",(req,res)=>{
    res.status(200).json(commentsByPostId[req.params.id] || []);
})


app.get('/comments', (req, res) => {
    res.send(comments)
})

app.listen(port, () => {
    console.log("Comment server running on ", port)
})