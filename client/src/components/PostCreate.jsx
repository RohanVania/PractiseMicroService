import React, { useRef } from 'react'
import axios from "axios"


function PostCreate() {

    const inputRef = useRef("");

    function handleChange(event) {
        inputRef.current.value = event.target.value
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('http://localhost:4000/post', {
            title: inputRef.current.value
        })
        console.log(result.data)
        inputRef.current.value = "";
    }

    return (
        <div className=' tw-max-w-[800px] tw-mx-auto tw-px-4'>
            <h1 className='tw-text-[32px] tw-font-normal'>Create Post</h1>
            <form className='tw-flex tw-flex-col tw-gap-y-4 tw-mt-4' onSubmit={handleSubmit}>
                <label className='tw-text-[25px] tw-font-light'>Title</label>
                <input ref={inputRef} type='text' className=' tw-border-[1px] tw-border-gray-300 tw-rounded-md tw-py-2 tw-px-4 tw-outline-none' onChange={handleChange} />
                <button className='tw-px-4 tw-py-3 tw-bg-blue-500 tw-rounded-lg tw-text-white tw-w-fit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate