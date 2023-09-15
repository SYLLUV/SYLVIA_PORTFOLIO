import React from 'react'
import Navbar from '../Components/Navbar'

export default function Services() {
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
          <span><a href="">HOME</a></span><span></span>
          </p>
          <p>
          <span><a href="">SERVICES</a></span>
          </p>
      </div>
      <h1>Services</h1>
    </div>
    <div className='service'>
      <div className='service-sub'>
        <div className='service-subs'>
        <h2><span>Frontend Web</span> Development</h2>
        <p>Far far away,behind the <br /> word mountain,far from <br /> the countries there lives the <br /> blind texts.</p>
      </div>
      <div className='service-subs'>
        <h2><span>Backend Web</span> Development</h2>
        <p>Far far away,behind the <br /> word mountain,far from <br /> the countries there lives the <br /> blind texts.</p>
      </div>
      </div>
    </div>
    <div>
      <div className='price'>
        <p>PRICING</p>
        <h1>Choose your pricing plan.</h1>
      </div>
      <div className='price-box'>
        <div className='price-box1'>
          <h1><span className='price-tag'>$</span>49</h1>
          <h3>Personal</h3>
          <p> <span><i class='bx bx-check'></i></span>Strategic Alliance</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Growth Expansion</p>
          <p><span><i class='bx bx-check'></i></span>Business Planning</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Contact Negotiation</p>
          <p><span><i class='bx bx-check'></i></span>Market Positioning</p>
          <div  className='price-btn'>
          <button>GET STARTED</button>
          </div>
        </div>
        <div className='price-box1'>
          <h1><span className='price-tag'>$</span>79</h1>
          <h3>Professional</h3>
          <p> <span><i class='bx bx-check'></i></span>Strategic Alliance</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Growth Expansion</p>
          <p><span><i class='bx bx-check'></i></span>Business Planning</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Contact Negotiation</p>
          <p><span><i class='bx bx-check'></i></span>Market Positioning</p>
          <div  className='price-btn'>
          <button>GET STARTED</button>
          </div>
        </div>
        <div className='price-box1'>
          <h1><span className='price-tag'>$</span>109</h1>
          <h3>Medium Business</h3>
          <p> <span><i class='bx bx-check'></i></span>Strategic Alliance</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Growth Expansion</p>
          <p><span><i class='bx bx-check'></i></span>Business Planning</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Contact Negotiation</p>
          <p><span><i class='bx bx-check'></i></span>Market Positioning</p>
          <div  className='price-btn'>
          <button>GET STARTED</button>
          </div>
        </div>
        <div className='price-box1'>
          <h1><span className='price-tag'>$</span>149</h1>
          <h3>Gigantic Business</h3>
          <p> <span><i class='bx bx-check'></i></span>Strategic Alliance</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Growth Expansion</p>
          <p><span><i class='bx bx-check'></i></span>Business Planning</p>
          <p className='check-list'><span><i class='bx bx-check'></i></span>Contact Negotiation</p>
          <p><span><i class='bx bx-check'></i></span>Market Positioning</p>
          <div  className='price-btn'>
          <button>GET STARTED</button>
          </div>
        </div>
      </div >
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
