import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="mb-2">
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}
