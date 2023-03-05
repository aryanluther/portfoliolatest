import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div className="overscroll-contain">
        <div className="mb-2">
          <Header />
        </div>
        <AnimatePresence initial={false} mode={"wait"}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
