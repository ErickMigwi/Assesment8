import React from 'react'
import {  NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <h1>Products Store</h1>
<button><NavLink to={'/'}>Home</NavLink></button>
     <button> <NavLink to={'/posts'}>Posts</NavLink></button>
<button><NavLink to={'/onePost'}>OnePosts</NavLink></button>
    </div>
  )
}

export default NavBar
