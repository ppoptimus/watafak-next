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
          content="PG SLOT Online เปิดตลอด 24 ชั่วโมง, ระบบเติมเงินแบบเรียลไทม์, Auto deposit ระบบฝากถอนอัตโนมัติ, เล่นสล็อตเว็บไหนดี, สล็อตออนไลน์บนมือถือ, ได้เงินจริงมีฟรีเครดิต"
        />

        <link rel="icon" href="/icon.png" />
      </Head>
      <HeadMenu />
      <div className=" items-center justify-center min-h-screen py-1">
        <Card />
      </div>
      <Footmobile />
      <footer className="flex items-center justify-center w-full bottom-2">
        <a
          className="flex items-center justify-center"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="img/logo1.png" alt="pg slot" width={100} height={100} />
        </a>
      </footer>
    </div>
  );
}
