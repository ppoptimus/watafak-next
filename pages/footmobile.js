import React from "react";

export default function Footmobile() {
  return (
    <>
      <div className='mx-5 grid place-content-center mb-0 mt-16'>
        <div className='bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-6 px-14 text-center h-52 max-w-sm mx-auto'>
          <h1 className='text-3xl mb-3 font-serif'>ติดต่อเรา</h1>
          <p className='text-lg font-serif'>เปิดบริการตลอด 24 ชั่วโมง</p>
        </div>
        <div className='bg-white pt-6 pb-2 px-6 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto'>
          <a href='https://lin.ee/bDb5ic7' target='_blank' rel='noopener noreferrer'>
            <button className='animate-bounce rounded-md bg-gradient-to-r from-green-400 to-green-500 text-xl text-white pt-3 pb-4 px-8 inline'>Send a message</button>
          </a>
        </div>
      </div>
    </>
  );
}
