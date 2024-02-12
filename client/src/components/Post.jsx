import React from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

function Post({post}) {
    return (
        <div  className='tw-px-3 tw-py-5 tw-border-[1.2px] tw-border-gray-400 tw-rounded-md'>
            <h1 className='tw-text-xl tw-font-300 tw-font-mono'>{post.title}</h1>
            <CommentList post={post}/>
            <CommentCreate post={post}/>
        </div>
    )
}

export default Post