import React from 'react'
import Navbar from '../Components/Navbar'

export default function Contact() {
  return (
    <>
    <section>
      <header>
    <Navbar />
    <h1 className='about-h1'>BELVIA.</h1>
      </header>
    </section>
    <div className='about-h2'>
      <div className='about-div'>
        <p>
          <span><a href="">HOME</a></span>
          </p>
          <p>
          <span><a href="">CONTACT</a></span>
          </p>
      </div>
      <h1>Contact</h1>
    </div>
    <div className='contact-main'>
    <div className='contact'>
      <h1>Contact Us</h1>
      <p>We are open for any suggestion or just to have a chat.</p>
      <div className='contact-us'>
        <div>
          <h4>ADDRESS:</h4>
          <p>Awka,Anambra state.</p>
        </div>
        <div>
          <h4>EMAIL:</h4>
          <p>[Email Protected]</p>
        </div>
        <div>
          <h4>PHONE NO:</h4>
          <p>07032591765</p>
        </div>
      </div>
      <div>
        <form action="">
        <input type="text" placeholder='Name' /><br />
        <input type="email" placeholder='Email' /> <br />
        <input type="text" placeholder='Subject'/> <br />
        <p>Create a message here.</p>
      <textarea name="" id="" cols="50" rows="5"></textarea>
      </form>
    </div>
    <button className='btn-3'>SEND MESSAGE</button>
    <h3 className='social'>Follow us here</h3>
    <div className='social-page'>
      <p>FACEBOOK</p>
      <p>TWITTER</p>
      <p>INSTAGRAM</p>
     
    </div>
    </div>
    </div>
    <div className='footer'>
        <p className='about-footer'>
            Copyright <i className='bx bx-copyright'></i> 2023  All right reserved | This template made with by<i className='bx bxs-heart'></i>
             <a href="">Colorlib</a>
        </p>
    </div>
    </>
   
  )
}
