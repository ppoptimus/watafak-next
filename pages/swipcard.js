import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import css from './styles/swipe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandPaper } from '@fortawesome/free-solid-svg-icons';

//#region images -------------------------------
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
import slotfree from '../public/img/slotfree.png';
//#endregion -------------------------------------

import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);
export default function Swipcard() {
  return (
    <div className='text-center overflow-hidden'>
      <Swiper effect={'cards'} grabCursor={true} loop={true} loopFillGroupWithBlank={false} className={css.swiper}>
        <SwiperSlide className='bg-gradient-to-b from-blue-300 to-blue-600 rounded-3xl'>
          <div className={css.firstslide}>
            <h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-600'>Swipe This</h1>
            <Image src={slotfree} className='mt-28' alt='pg slot' />
          </div>
          <div className='flex flex-row justify-around items-center text-white -mt-2 mb-2'>
            เลือกเกมส์เลยสิ
            <FontAwesomeIcon icon={faHandPaper} className='w-10 animate-bounce' />
          </div>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/lucky-neko/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot15} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Lucky Neko</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/sushi-oishi/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot20} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Sushi Oishi</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/rise-of-apollo/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot1} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Rise of Apollo</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/bali-vacation/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot2} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Bali Vacation</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/wild-bandito/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot3} className='w-full h-auto overflow-hidden' alt='pg slot' />

            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Wild Bandito</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/candy-burst/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot4} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Candy Bonanza</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/circus-delight/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot5} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Circus Delight</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/crypto-gold/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot6} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Crypto Gold</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/dreams-of-macau/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot7} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Dreams of Macau</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/fortune-ox/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot8} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Fortune Ox</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/galactic-gems/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot9} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Galactic Gems</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/gdn-ice-fire/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot10} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Guardians of Ice & Fire</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/heist-stakes/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot11} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Heist Stakes</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/jack-frosts/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot12} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Jack Frost's Winter</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/jewels-prosper/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot13} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Jewels of Prosperity</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/bikini-paradise/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot14} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Bikini Paradise</p>
            </span>
          </a>
        </SwiperSlide>

        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/treasures-aztec/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot16} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Treasures of Aztec</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/opera-dynasty/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot17} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Opera Dynasty</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/queen-bounty/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot18} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Queen of Bounty</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/sct-cleopatra/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot19} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Secrets of Cleopatra</p>
            </span>
          </a>
        </SwiperSlide>

        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/thai-river/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot21} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Thai River Wonders</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/majestic-ts/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot22} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Majestic Treasures</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/treasures-aztec/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot24} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Treasures of Aztec</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/vampires-charm/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot25} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Vampire's Charm</p>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide className={css.swiperslide}>
          <a
            href='https://m.pg-demo.com/ways-of-qilin/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US,en;q=0.9&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https://dev.pgslot.co/home'
            target='_blank'
            rel='noopener'
          >
            <Image src={pgslot26} className='w-full h-auto overflow-hidden' alt='pg slot' />
            <span>
              <p className='pt-2 pb-3 font-bold text-red-400'>Ways of the Qilin</p>
            </span>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
