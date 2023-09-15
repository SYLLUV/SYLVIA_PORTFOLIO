import React from 'react'
import FirstColumn from './Components/FirstColumn'
import SecondColumn from './Components/SecondColumn'

export default function Home() {
  return (
    <div className='main'>
      <div className='col-1'>
      <FirstColumn />
      </div>
      <div className='col-2'>
      <SecondColumn />
      </div>
    </div>
  )
}
