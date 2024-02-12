import React, { useState,useEffect } from 'react'
import axios from "axios"


function CommentList({ post }) {

    const [commentList, setCommentList] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${post.id}/comments`
        );
        setCommentList(res.data);
    }

    useEffect(()=>{
        fetchData();
    },[]);


        return (
            <div>
                <ul className='tw-mx-10 tw-my-4 tw-list-disc'>
                    {
                        commentList.map((comment,indx)=>{
                            return <li key={`comment-${indx}`}>{comment.content}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    export default CommentList