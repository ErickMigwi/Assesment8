import React from 'react'
import {  NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div id='NavBar'>
        <div id='logo'>
        <h1>POSTS</h1>
        </div>
        <div id='nav'>
<NavLink id='button' to={'/'} activeClassName="active" >Home</NavLink>
      <NavLink  id='button' to={'/posts'} activeClassName="active">Posts</NavLink>
<NavLink  id='button' to={'/onePost'} activeClassName="active">OnePosts</NavLink>
</div>
    </div>
  )
}

export default NavBar
