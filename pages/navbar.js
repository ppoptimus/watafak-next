import { useState } from 'react';
import Image from 'next/image';
import pgslot from '../public/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='mx-auto px-1 shadow-md'>
        <div className='lg:hidden flex justify-between items-center'>
          {showModal ? (
            <div className='flex items-center p-3'>
              <button className='outline-none' type='button' aria-label='menu' onClick={() => setShowModal(false)}>
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
              <button className='outline-none' type='button' aria-label='menu' onClick={() => setShowModal(true)}>
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
            <a href='https://www.hab0001.com?aff=A575137' target='_blank' rel='noopener noreferrer'>
              <button
                type='button'
                className='flex max-w-sm w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-sm uppercase font-bold shadow-md rounded-full mx-auto p-2'
              >
                <div className='flex items-center sm:flex-cols-12 gap-2'>
                  <div className='col-span-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokelinecap='round' strokelinejoin='round' strokewidth='{2}' d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z' />
                    </svg>
                  </div>
                  <div className='col-span-2 pt-1 pr-1'>Play Game</div>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className='hidden md:hidden lg:block'>
          <div className='hidden md:flex justify-between'>
            <div className='flex items-center space-x-1'>
              <a href='/' className='items-center py-3 pl-2 pr-0'>
                <Image src={pgslot} width={182} height={57} alt='pg slot' />
              </a>
              <a href='https://www.hab0001.com?aff=A575137' target='_blank' rel='noopener noreferrer' className='text-white font-semibold'>
                <button type='button' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-3 rounded-md shadow-md'>
                  สมัครใหม่
                </button>
              </a>
              <a href='https://www.hab0001.com?aff=A575137' target='_blank' rel='noopener noreferrer' className='text-white font-semibold'>
                <button type='button' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-3 rounded-md shadow-md'>
                  เล่นเกมส์
                </button>
              </a>
              <a href='https://www.hiaff.org?aff=A575137' target='_blank' rel='noopener noreferrer' className='text-white font-semibold'>
                <button type='button' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-3 rounded-md shadow-md'>
                  สมัครเป็นตัวแทน
                </button>
              </a>
              <a href='/articlemain' className='text-white font-semibold'>
                <button type='button' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-3 rounded-md shadow-md'>
                  บทความ {' (เร็วๆ นี้)'}
                </button>
              </a>
            </div>

            <a href='/' target='_blank' rel='noopener'>
              <button type='button' className='flex max-w-sm w-full bg-white rounded-xl p-4 my-2 mx-auto'>
                <div className='col-span-1'>
                  <FontAwesomeIcon icon={faComments} className='text-blue-500 h-8 w-10' />
                </div>
                <div className='col-span-2 py-1 px-2 text-gray-500'>แสดงความคิดเห็นที่นี่  {' (เร็วๆ นี้)'}</div>
              </button>
            </a>
          </div>
        </div>
      </div>

      {showModal ? (
        <div className='absolute bg-gradient-to-r from-yellow-400 to-transparent w-screen z-50 mobile-menu'>
          <ul className='p-4 text-white hover:text-white text-lg' onClick={() => setShowModal(false)}>
            <li className='mb-1'>
              <a href='https://www.hab0001.com?aff=A575137' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  สมัครใหม่
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='https://www.hiaff.org?aff=A575137' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  สมัครตัวแทน
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='https://www.hab0001.com?aff=A575137' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  โปรโมชั่น
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='https://line.me/R/ti/p/%40014ionvq' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  ติดต่อเรา
                </button>
              </a>
            </li>
            <li className='mb-1'>
              <a href='/articlemain'>
                <button type='button' className='bg-red-500 hover:bg-red-600 focus:bg-red-800 rounded-r-lg py-2 px-3 w-32 text-left'>
                  เร็วๆ นี้
                </button>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
