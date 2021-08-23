
import Link from "next/link";
import Image from "next/image";
import pgslot from "../public/img/logo.png";
export default function Headmenu() {

  return (
    <>
      <div className="flex justify-between items-center flex-wrap bg-gradient-to-r from-green-400 to-blue-500 p-3 ">
        <Link href="/">
          <a className="flex items-center py-0 px-1">
            <Image src={pgslot} width={182} height={57} alt="pg slot" />
          </a>
        </Link>

        <a href="https://watafak88.com/#/playgame" target="_blank" rel="noopener noreferrer">
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
      </div>
    </>
  );
}
