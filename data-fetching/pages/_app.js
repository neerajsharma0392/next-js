import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <h1>Testing</h1> */}
      <Component {...pageProps} />
    </div>
  );
}
