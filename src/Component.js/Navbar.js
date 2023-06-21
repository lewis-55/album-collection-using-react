import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import './Nav.css'

// import Post from './Post'
const Navbar = () => {
  return (
    <div className=' navbar navbar-expand-lg bg-body-tertiary navbar-brand  justify-content-between'  id='nav'>
        
    <Link  to="/" className= 'nav-link active btn btn-primary  navbar-brand'> Home </Link> 
   <Link  to="/about" className='nav-link active btn btn-primary navbar-brand' > About </Link>    
     <Post/> 
    
  </div>

    
  )
}

export default Navbar