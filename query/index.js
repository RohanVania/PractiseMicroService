import express from "express";
import axios from "axios";
const port=4002
const app=express();

app.use(express.json());

const posts={};



app.get('/posts',(req,res)=>{
    res.status(200).json(posts)
})

app.post('/events',(req,res)=>{
    const {type,data}=req.body

    if(type==='PostCreated-Event'){
        const{id,title}=data;
        posts[id]={id,title,comments:[]}
    }
    if(type==='CommentCreated-event'){
        const {id,content,postId}=data
        const post=posts[postId];
        post.comments.push({id,content});
        console.log(post)
    }

    res.send({});
})

app.listen(port,()=>{
    console.log(`Query Server running on ${port}`)
})