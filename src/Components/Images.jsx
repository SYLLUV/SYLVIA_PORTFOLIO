import React from 'react'
import Pics from '../assets/my image-2.png'
import Picss from '../assets/my image-1.png'
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Navbar from './Navbar';

const Images = () => {
  return (
    <>
    {/* <Navbar /> */}
     <div className='images'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{display:'flex',alignItems:'end',height:'100%'}}><img className='pic-1' src= {Pics} alt=""/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex',alignItems:'end',height:'100%'}}><img className='pic-2' src={Picss} alt="" /></div></SwiperSlide>
      </Swiper>
      </div>
    {/* <div className='images'>
        <img className='pic-1' src= {Pics} alt=""/>
        <img className='pic-2' src={Picss} alt="" />
    </div> */}

   </>
    
  )
}

export default Images

