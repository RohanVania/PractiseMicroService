import express from "express";
import { randomBytes } from "crypto"
import axios from "axios"
import cors from "cors";
const app = express();
const port = 4000;
app.use(express.json())

const posts = {};

app.use(cors());



app.post('/post', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id: id,
        title: title
    }
    const result=await axios.post('http://localhost:5000/events',{
        type:'PostCreated-Event',
        data:{
            id:id,
            title:title
        }
    })

    console.log(result)
    
    res.status(200).json({
        status:'Successfully',
        msg:'Post created'
    })

})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events',(req,res)=>{
    console.log("Event Receieved",req.body);
    res.send({});
})

app.listen(port, () => {
    console.log("Post server running on ", port)
})