import React,{useRef} from 'react'
import axios from "axios"

function CommentCreate({post}) {
    const inputRef=useRef("");

    const handleChange=(event)=>{
        inputRef.current.value=event.target.value;
    }

    const handleCommentSubmit=async (event)=>{
        event.preventDefault();
        const result=await axios.post(`http://localhost:4001/posts/${post.id}/comment`,{
            content:inputRef.current.value
        })
        console.log(result.data);
        inputRef.current.value="";
    }

    return (
        <form className='tw-px-4 tw-flex tw-flex-col tw-gap-y-3' onSubmit={handleCommentSubmit}>
            <label>New Comment</label>
            <input type="text" ref={inputRef} className='tw-border-[1px] tw-border-gray-300 tw-rounded-md tw-py-2 tw-px-4 tw-outline-none' onChange={handleChange} />
            <button className='tw-px-4 tw-py-3 tw-bg-blue-500 tw-rounded-lg tw-text-white tw-w-fit' onClick={handleCommentSubmit}>Submit</button>
        </form>
    )
}

export default CommentCreate