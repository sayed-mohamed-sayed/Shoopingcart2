"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../[locale]/globals.css';
import Image from 'next/image';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle: React.MutableRefObject<HTMLElement | null> = useRef(null);
  const progressContent: React.MutableRefObject<HTMLElement | null> = useRef(null);  
  const onAutoplayTimeLeft = (s:any, time:number, progress:any) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/2.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/3.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/4.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/9.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/2.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/2.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/4.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/3.webp" alt='Image'/>  </SwiperSlide>
        <SwiperSlide><Image className='w-screen' width={1000} height={1000} src="/9.webp" alt='Image'/>  </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}