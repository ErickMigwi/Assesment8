import React from 'react'
import {  NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div id='NavBar'>
        <div id='logo'>
        <h1>POSTS</h1>
        </div>
        <div id='nav'>
<NavLink id='button' to={'/'} activeclassName="active-link" >Home</NavLink>
      <NavLink  id='button' to={'/posts'} activeclassName="active-link">Posts</NavLink>
<NavLink  id='button' to={'/onePost'} activeclassName="active-link">OnePosts</NavLink>
</div>
    </div>
  )
}

export default NavBar
