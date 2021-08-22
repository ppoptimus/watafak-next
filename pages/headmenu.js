import React, { useState } from "react";
import Link from "next/link";
export default function Headmenu() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex justify-between items-center flex-wrap bg-gradient-to-r from-green-400 to-blue-500 p-3 ">
        <Link href="/">
          <a href="#" className="flex items-center py-0 px-1">
            <img src="img/logo.png" alt="Logo" className="" />
          </a>
        </Link>

        {/* <button className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none" onClick={handleClick}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
        
        <a href="/">
          <div className="mb-1 ml-1">
            <button
              type="button"
              className="flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-md uppercase font-bold shadow-md rounded-full mx-auto p-2"
            >
              <div className="flex sm:flex-cols-12 gap-2">
                <div className="col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                </div>
                <div className="col-span-2 pt-1 pr-1">Play Game</div>
              </div>
            </button>
          </div>
        </a>

        {/* <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">หน้าหลัก</a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">ดาวน์โหลด</a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">ติดต่อเรา</a>
            </Link>
            <a href="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              สมัครสมาชิก
            </a>
          </div>
        </div> */}
      </nav>
    </>
  );
}
