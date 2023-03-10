import './App.css';
import { Route, Routes } from "react-router-dom";
import Posts from './components/Posts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import OnePost from './components/OnePost';
// export const PostsContext = createContext([]);
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <PostsContext.Provider > */}
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/posts' element={<Posts/>}/>
     <Route path='/onePost' element={<OnePost/>}/>
     </Routes>
     {/* </PostsContext.Provider> */}
    </div>
  );
}

export default App;
