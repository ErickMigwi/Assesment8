import React, { useState, createContext,useEffect } from 'react';
import axios from 'axios';


function Posts() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    try {
      const response = await axios.get('https://dummyjson.com/posts');
      setPosts(response.data.posts);
      console.log(posts);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
  
    <div>
       
      {posts?.map(post => (
        // console.log(post)
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
       
    </div>
   
  );
}
// export {posts};
export default Posts;
