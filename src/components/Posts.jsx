import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const PostContext = createContext([])
function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await axios.get('https://dummyjson.com/posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={posts}>
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    </PostContext.Provider>
  );
}

export default Posts;
// export { posts };