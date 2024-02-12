import './App.css'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

function App() {

  return (
  <div className=''>
    <div className=' tw-mx-auto '>
      <PostCreate/>
    </div>
    <div className='tw-max-w-[80%] tw-px-5  tw-mx-auto '>
      <hr className='tw-my-10'/>  
      <PostList/>
    </div>

  </div>
  )
}

export default App
