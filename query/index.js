import express from "express";
import cors from "cors"
import axios from "axios";
const port = 4002
const app = express();

app.use(express.json());

const posts = {};

app.use(cors());

const handleEvents = (type,data) => {
    if (type === 'PostCreated-Event') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }
    if (type === 'CommentCreated-event') {
        const { id, content, postId, status } = data
        const post = posts[postId];
        post.comments.push({ id, content, status });
        console.log(post)
    }
    if (type === 'CommentUpdated') {
        const { id, postId, content, status } = data;
        const post = posts[postId];
        const comment = post.comments.find((comment) => {
            return comment.id === id
        })
        comment.status = status;

    }
}



app.get('/posts', (req, res) => {
    res.status(200).json(posts)
})

app.post('/events', (req, res) => {
    const { type, data } = req.body
    handleEvents(type,data);


    res.send({});
})

app.listen(port, async () => {
    console.log(`Query Server running on ${port}`)

    try {
        const res = await axios.get("http://localhost:5000/events");
     
        for (let event of res.data) {
          console.log("Processing event:", event.type);
     
          handleEvents(event.type, event.data);
        }
      } catch (error) {
        console.log(error.message);
      }
})