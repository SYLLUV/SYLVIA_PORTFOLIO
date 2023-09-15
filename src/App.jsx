import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Services from './pages/Services'
import Work from './pages/Work'
import { Route,Routes } from 'react-router-dom'


function App() {
 

  

  return (
    <>
   {/* <Home  /> */}
   <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    <Route path='Experiences' element={<Experiences/>}></Route>
    <Route path='Services' element={<Services/>}></Route>
    <Route path='Work' element={<Work/>}></Route>
   </Routes>
    
    </>
  )
}

export default App
