import './App.css';
import { Route, Routes } from "react-router-dom";
import Posts from './components/Posts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import OnePost from './components/OnePost';
import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';
export const PostsContext = createContext([]);

function App() {
  const [posts, setPosts] = useState([])
  let getPosts= async function(){
    let response = await axios.get("https://dummyjson.com/posts")
    setPosts(response.data.posts)
  }
  useEffect(()=>{
   getPosts()
 
  }, [])
  console.log(posts);
  return (
    <div className="App">
      {/* <Home/> */}
      <PostsContext.Provider value={posts} >
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/posts' element={<Posts/>}/>
     <Route path='/onePost' element={<OnePost/>}/>
     </Routes>
     </PostsContext.Provider>
    </div>
  );
}

export default App;
