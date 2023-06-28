import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
