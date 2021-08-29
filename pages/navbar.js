import { useState } from 'react';
import Image from 'next/image';
import pgslot from '../public/img/logo.png';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='mx-auto px-1'>
        <div className='lg:hidden flex justify-between items-center'>
          {showModal ? (
            <div className='flex items-center p-3'>
              <button className='outline-none' type='button' onClick={() => setShowModal(false)}>
                <svg
                  className=' w-6 h-6 text-white hover:text-blue-500 '
                  x-show='!showMenu'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          ) : null}
          {!showModal ? (
            <div className='flex items-center p-3'>
              <button className='outline-none' type='button' onClick={() => setShowModal(true)}>
                <svg
                  className=' w-6 h-6 text-white hover:text-blue-500 '
                  x-show='!showMenu'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          ) : null}

          <div className='flex p-2'>
            <a href='https://watafak88.com/#/playgame' target='_blank' rel='noopener noreferrer'>
              <button
                type='button'
                className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-sm uppercase font-bold shadow-md rounded-full mx-auto p-2'
              >
                <div className='flex items-center sm:flex-cols-12 gap-2'>
                  <div className='col-span-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-10 animate-bounce' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokelinecap='round' strokelinejoin='round' strokewidth='{2}' d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z' />
                    </svg>
                  </div>
                  <div className='col-span-2 pt-1 pr-1'>Play Game</div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className='hidden md:hidden lg:block flex justify-between items-center'>
          <div className='flex space-x-1'>
            <a href='#' className='flex items-center py-3 pl-2 pr-0'>
              <Image src={pgslot} width={182} height={57} alt='pg slot' />
            </a>
            <div className='hidden md:flex items-center space-x-1 cursor-pointer'>
              <a href className='py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 '>
                สมัครใหม่
              </a>
              <a href className='py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300'>
                เล่นเกมส์
              </a>
              <a href className='py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300'>
                ดาวน์โหลด
              </a>
              <a href className='py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300'>
                บทความ
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className='absolute bg-gradient-to-r from-yellow-400 to-transparent w-screen z-50 mobile-menu'>
          <ul className='p-4 text-white hover:text-white text-lg'>
            <li className='mb-1'>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  สมัครใหม่
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  ดาวน์โหลด
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  บทความ
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  โปรโมชั่น
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  ติดต่อเรา
                </button>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
