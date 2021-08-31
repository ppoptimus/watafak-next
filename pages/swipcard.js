import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import css from './styles/swipe.module.css';

import Image from 'next/image';
import pgslot1 from '../public/img/pgslot1.jpg';
import pgslot2 from '../public/img/pgslot2.jpg';
import pgslot3 from '../public/img/pgslot3.jpg';
import pgslot4 from '../public/img/pgslot4.jpg';
import pgslot5 from '../public/img/pgslot5.jpg';
import pgslot6 from '../public/img/pgslot6.jpg';
import pgslot7 from '../public/img/pgslot7.jpg';
import pgslot8 from '../public/img/pgslot8.jpg';
import pgslot9 from '../public/img/pgslot9.jpg';
import pgslot10 from '../public/img/pgslot10.jpg';
import pgslot11 from '../public/img/pgslot11.jpg';
import pgslot12 from '../public/img/pgslot12.jpg';
import pgslot13 from '../public/img/pgslot13.jpg';
import pgslot14 from '../public/img/pgslot14.jpg';
import pgslot15 from '../public/img/pgslot15.jpg';
import pgslot16 from '../public/img/pgslot16.jpg';
import pgslot17 from '../public/img/pgslot17.jpg';
import pgslot18 from '../public/img/pgslot18.jpg';
import pgslot19 from '../public/img/pgslot19.jpg';
import pgslot20 from '../public/img/pgslot20.jpg';
import pgslot21 from '../public/img/pgslot21.jpg';
import pgslot22 from '../public/img/pgslot22.jpg';
import pgslot24 from '../public/img/pgslot24.jpg';
import pgslot25 from '../public/img/pgslot25.jpg';
import pgslot26 from '../public/img/pgslot26.jpg';

import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);
export default function Swipcard() {
  return (
    <div className='text-center'>
      <style jsx>{``}</style>
      <Swiper effect={'cards'} grabCursor={true} loop={true} loopFillGroupWithBlank={true} className={css.swiper}>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot20} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Sushi Oishi</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot1} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Rise of Apollo</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot2} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Bali Vacation</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot3} className='w-full h-auto overflow-hidden' alt='pg slot' />

          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Wild Bandito</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot4} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Candy Bonanza</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot5} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Circus Delight</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot6} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Crypto Gold</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot7} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Dreams of Macau</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot8} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Fortune Ox</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot9} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Galactic Gems</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot10} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Guardians of Ice & Fire</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot11} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Heist Stakes</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot12} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Jack Frost's Winter</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot13} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Jewels of Prosperity</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot14} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Bikini Paradise</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot15} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Lucky Neko</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot16} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Treasures of Aztec</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot17} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Opera Dynasty</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot18} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Queen of Bounty</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot19} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Secrets of Cleopatra</button>
          </span>
        </SwiperSlide>

        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot21} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Thai River Wonders</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot22} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Majestic Treasures</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot24} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Treasures of Aztec</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot25} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Vampire's Charm</button>
          </span>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <Image src={pgslot26} className='w-full h-auto overflow-hidden' alt='pg slot' />
          <span>
            <button className='pt-2 pb-3 font-bold text-red-400'>Ways of the Qilin</button>
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
