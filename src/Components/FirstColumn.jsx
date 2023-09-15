import React from 'react'
import Header from './Header'
import Body from './Body'
import FirstButton from './FirstButton'
import SecondButton from './SecondButton'
import Footer from './Footer'
import Picss from '../assets/my image-2.png'
import { useState } from 'react'

const FirstColumn = () => {
 
  return (
    <div className='column-1'>
        <Header />
      <img className='pic-3' src={Picss} alt="" style={{borderRadius: '50%'}}/>
        <Body />
        <div className='btn'>
         <FirstButton />
         <SecondButton />
        </div>
        <Footer />
    </div>
  )
}

export default FirstColumn