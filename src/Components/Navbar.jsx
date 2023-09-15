import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open,setOpen] = useState(false);
  function handleclick(){
    if(open){
      setOpen(false)
    }else{
      setOpen(true)
    }
  }
  return (
    <div className='menu'onClick={handleclick}>
      {!open && <i className='bx bx-menu'></i>}
      {open &&<i className='bx bx-x'></i>}
     {open && <div className='menu-list' style={{height:"60px,", width:"90px",color:"green",fontWeight:'bolder',fontSize:'small'}}>
      <ul className='meno'>
       <Link to='/'>HOME</Link>
        <Link to='/About'>ABOUT</Link>
        <Link to='/Services'>SERVICES</Link>
        <Link to='/Experiences'>EXPERIENCES</Link>
        <Link to='/Work'>WORK</Link>
        <Link to='/Contact'>CONTACT</Link>
      </ul>
      </div>}
    </div>
  )
}

export default Navbar