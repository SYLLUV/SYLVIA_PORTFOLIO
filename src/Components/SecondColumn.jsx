import React from 'react'
import Navbar from './Navbar'
import Images from './Images'

const SecondColumn = ({pageManager,setPageManager}) => {
  return (
    <div className='column-2'>
      <Navbar pageManager={pageManager} setPageManager={setPageManager} />
      <Images />
    </div>
  )
}

export default SecondColumn