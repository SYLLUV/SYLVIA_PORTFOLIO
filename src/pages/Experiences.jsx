import React from 'react'
import Navbar from '../Components/Navbar'

export default function Experiences() {
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
          <span><a href="">EXPERIENCE</a></span>
          </p>
      </div>
      <h1>Experiences</h1>
    </div>
    <div className='exp-1'>
      <div className='exp-div'>
        <div><span className='grads'><i class='bx bxs-graduation'></i></span></div>
        <h4 className='grad-date'>2021-till date [In-view]</h4>
        <h2 className='degree'>Masters degree Analytical Chemistry</h2>
        <p className='gogl'><span className='inc'><i class='bx bxs-map'></i></span>Google Inc.</p>
        <p className='sch'>Nnamdi Azikiwe University <br /> Awka Anambra State</p>
      </div>
      <div  className='exp-div'>
        <div><span className='grads'><i class='bx bxs-graduation'></i></span></div>
        <h4 className='grad-date'>2007-2011</h4>
        <h2 className='degree'>Bachelors degree Pure & Industrial Chemistry</h2>
        <p className='gogl'><span className='inc'><i class='bx bxs-map'></i></span>Google Inc.</p>
        <p className='sch'>Chukwuemeka Odimegwu Ojukwu University <br /> Uli Anambra State</p>
      </div>
      <div  className='exp-div'>
        <div className='grad'><i class='bx bxs-graduation'></i></div>
        <h4 className='grad-date'>2023-2024</h4>
        <h2 className='degree'>Frontend Web Development</h2>
        <p className='gogl'><span className='inc'><i class='bx bxs-map'></i></span>Google Inc.</p>
        <p className='sch'>Innov8 Space ICT Academy/ <br />Software Development</p>
      </div>
      <div  className='exp-div'>
        <div className='grad'><i class='bx bxs-graduation'></i></div>
        <h4 className='grad-date'>2023-2024</h4>
        <h2 className='degree'>Backend Web Development</h2>
        <p className='gogl'><span className='inc'><i class='bx bxs-map'></i></span>Google Inc.</p>
        <p className='sch'>Innov8 Space ICT Academy/ <br />Software Development</p>
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
