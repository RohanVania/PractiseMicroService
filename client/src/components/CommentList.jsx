import React from 'react'
import axios from "axios"


function CommentList({ commentList }) {

        return (
            <div>
                <ul className='tw-mx-10 tw-my-4 tw-list-disc'>
                    {
                        commentList.map((comment,indx)=>{
                            if(comment.status==='approved'){
                                comment.content=comment.content
                            }
                            if(comment.status==='rejected'){
                                comment.content='Contains explicit content';
                            }
                            if(comment.status==='pending'){
                                comment.content='Pending moderation'
                            }
                            return <li key={`comment-${indx}`}>{comment.content}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    export default CommentList