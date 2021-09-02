import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import css from './styles/slide.module.css'

import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

export default function Slidecard() {
    return (
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={1}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={css.swiper}
        >
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_11-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_1-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_3-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_2-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_4-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_5-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
          <SwiperSlide className={css.swiperslide}>
            <img src='https://watafak88.com/img/promotion/pgslot_6-1080.jpg' width={500} height={500} alt='โปรโมชั่น pgslot' defer />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}
