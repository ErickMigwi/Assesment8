import React, {useState, useContext} from 'react'
import { PostsContext } from '../App'

function OnePost() {
    let post = useContext(PostsContext)
    const [value, setValue] = useState(0)
  
    const [onePost, setOnePost] = useState([])
    let handleChange = (e)=>{
   setValue(e.target.value)
//    console.log(value);
    }
    let handleClick = ()=>{
    console.log(post);
    post.map((item)=>{
        if(item.id==value){
            setOnePost(item)
            console.log(onePost);
        }
        else{
            console.log("No Matching Number");
        }
    })
    }
    
  return (
    <div>
     <div id="input">
        <h1>Enter id:</h1>
        <label> Id:
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      </label>
      </div>
      
      {onePost ? (
          <div id='post'>
            <h2>{onePost.title}</h2>
            <p>{onePost.body}</p>
          </div>
        ) : (
          <p>No post found with id: {value}</p>
        )}
    </div>
  )
}

export default OnePost
