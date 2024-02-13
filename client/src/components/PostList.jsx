
import React, { useEffect, useState } from 'react'
import axios from "axios"
import CommentCreate from './CommentCreate'
import Post from './Post';

function PostList() {
    const [posts, setPost] = useState({});

    const fetchPosts = async () => {
        const result = await axios.get('http://localhost:4002/posts')

        setPost(result.data)
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    const Allpost = Object.values(posts);
    console.log(Allpost)

    return (
        <div className='grid-post-list tw-justify-around tw-gap-y-8'>
            {
                Allpost.map((post,indx) => {
                    return <Post key={`post-${indx}`} post={post}/> 
                })
            }

        </div>
    )
}

export default PostList