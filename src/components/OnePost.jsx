import React, {useState, useContext} from 'react'
import { PostContext } from './Posts'

function OnePost() {
    let post = useContext(PostContext)
    const [value, setValue] = useState(0)
    const [id, setId] = useState(0)
    let handleChange = (e)=>{
   setValue(e.target.value)
//    console.log(value);
    }
    let handleClick = ()=>{
    setId(value)
    console.log(id);
    console.log(post);
    
    }
    const filteredPost = post.find(p => p.id === id)
  return (
    <div>

        <h1>Enter id:</h1>
        <label> Id:
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      </label>
      
      {filteredPost ? (
          <div>
            <h2>{filteredPost.title}</h2>
            <p>{filteredPost.body}</p>
          </div>
        ) : (
          <p>No post found with id: {id}</p>
        )}
    </div>
  )
}

export default OnePost
