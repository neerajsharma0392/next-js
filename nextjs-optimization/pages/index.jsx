import Head from "next/head";
import Image from "next/image";
import { molle, roboto, callheart, kalam } from "@/utils/font.js";

// import { Aboreto } from "next/font/google";

// const aboreto = Aboreto({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--aboreto",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Font Optimization</title>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inclusive+Sans:ital@0;1&family=Mooli&family=Roboto+Mono:wght@100&family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div>
        {/* <h1 style={{ fontFamily: "Roboto" }}>NextJS Optimization Techniques</h1> */}
        <h1 className={roboto.className}>NextJS Optimization Techniques</h1>
        <h1 className={molle.className}>NextJS Optimization Techniques</h1>
        <h1 className={callheart.className}>NextJS Optimization Techniques</h1>
        <h1 className={kalam.className}>NextJS Optimization Techniques</h1>
        {/* <h1 className={`${aboreto.variable} font-aboreto`}>
          TaildwindCSS Font
        </h1> */}
        <h1 className="font-callheart">TaildwindCSS Font</h1>
      </div>
    </>
  );
}
