import Head from 'next/head';
import Card from './card';
import Carousel from './carousel';
import Swipcard from './swipcard';
import Footmobile from './footmobile';
import Navbar from './navbar';
import 'swiper/css/bundle';
import Slidecard from './slidecard';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-yellow-400 to-red-600'>
      <Head>
        <meta httpEquiv='content-language' content='th' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Play Slot Online- สล็อตออนไลน์ได้เงินจริง - แจกเครดิตฟรี</title>
        <meta
          name='description'
          content='PG SLOT Online เปิดตลอด 24 ชั่วโมง, ระบบเติมเงินแบบเรียลไทม์, Auto deposit ระบบฝากถอนอัตโนมัติ, เล่นสล็อตเว็บไหนดี, สล็อตออนไลน์บนมือถือ, ได้เงินจริงมีฟรีเครดิต'
        />
        <link rel='icon' href='/icon.png' />
      </Head>

      <Navbar />
      <div className='items-center justify-center'>
        <div className='hidden md:hidden lg:block'>
          <Carousel />
          <Card />
        </div>
        <div className='lg:hidden'>
          <Swipcard />
          <Slidecard />
        </div>
        <Footmobile />
      </div>

      <footer className='flex items-center justify-center w-full bottom-1'>
        <a className='flex items-center justify-center' href='/' target='_blank' rel='noopener noreferrer'>
          Powered by <img src='img/logo1.png' alt='pg slot' width={100} height={100} />
        </a>
      </footer>
    </div>
  );
}
