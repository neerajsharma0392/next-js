import "@/styles/globals.css";
import { molle, roboto, callheart } from "@/utils/font.js";

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${molle.variable} ${roboto.variable} ${callheart.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
