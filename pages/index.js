import Head from "next/head";
import Card from "./card";
import Footmobile from "./footmobile";
import HeadMenu from "./headmenu";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <Head>
        <meta httpEquiv="content-language" content="th" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Play Slot Online</title>
        <meta
          name="description"
          content="PG SLOT Online เปิดตลอด 24 ชั่วโมง, ระบบเติมเงินแบบเรียลไทม์, Auto deposit ระบบฝากถอนอัตโนมัติ, user เดียวเล่นได้ทุกเกม, สล็อตออนไลน์บนมือถือ, ได้เงินจริงมีฟรีเครดิต, แตกทีเป็นแสน"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadMenu />
      <div className=" items-center justify-center min-h-screen py-1">
        <Card />
      </div>
      <Footmobile />
      <footer className="flex items-center justify-center w-full bottom-2">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="img/logo1.png" alt="pg slot" width={100} height={100} />
        </a>
      </footer>
    </div>
  );
}
