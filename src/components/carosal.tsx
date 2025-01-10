"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Required for navigation styles

import '@/css/carosal.css';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper 
        slidesPerView={5}  // Display 5 logos per view (adjust based on your preference)
        spaceBetween={20}   // Space between slides
        loop={true}         // Infinite loop
        navigation={true}   // Enable navigation buttons
        pagination={{ clickable: true }}  // Optional pagination dots
        modules={[Pagination, Navigation]}  // Import necessary modules
        className="mySwiper"
      >
        <SwiperSlide className="box-slide">
          <img src="./pics/state_bank_of_india_icon.jpeg.png" alt="Logo 1" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.jpeg.png" alt="Logo 2" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.png.png" alt="Logo 3" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/state_bank_of_india_icon.jpeg.png" alt="Logo 1" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.jpeg.png" alt="Logo 2" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.png.png" alt="Logo 3" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/state_bank_of_india_icon.jpeg.png" alt="Logo 1" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.jpeg.png" alt="Logo 2" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.png.png" alt="Logo 3" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/state_bank_of_india_icon.jpeg.png" alt="Logo 1" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.jpeg.png" alt="Logo 2" className="logo" />
        </SwiperSlide>
        <SwiperSlide className="box-slide">
          <img src="./pics/Icon.png.png" alt="Logo 3" className="logo" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
