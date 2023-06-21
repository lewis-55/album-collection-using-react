import React from 'react'
import { Navigate,Route,Routes } from 'react-router-dom'
import Home from './Component.js/Home'
import About from './Component.js/About'
import Navbar from './Component.js/Navbar'
import Add from './Component.js/Add'
import './App.css'


const App = () => {
  return (
    <div >
      
      
   <div className='done'>   <Navbar  />  </div>
      <Routes>
          <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = { <About/> } />
        {/* <Route path='/*' element = {<h1> <Page404 /> </h1>} /> */}
        <Route path = '/*' element = {<Navigate to = '/' />} />
      </Routes>
      
      <Add/>
      
    </div>
  )
}

export default App