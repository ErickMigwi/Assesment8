import React, { useState, useContext, useEffect } from 'react';
import { PostsContext } from '../App';


function Posts() {
let posts = useContext(PostsContext)

  return (
  
    <div id='posts'>
      {posts?.map(post => (
        <div id='post' key={post.id}>
          <h2>{post.title}</h2>
          <p id='paragraph'>{post.body}</p>
        </div>
      ))}
    </div>

  );
}

export default Posts;
// export { posts };