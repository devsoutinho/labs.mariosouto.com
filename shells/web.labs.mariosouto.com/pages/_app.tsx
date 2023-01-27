import { Provider } from "@devsoutinho/sknui/web";
import Script from "next/script";
import type { AppProps } from "next/app";
import Head from "next/head";

const GA_ID = "G-6YZP7X6ZGP";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-script">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_ID}');
      `}</Script>
      <Head>
        <title>DevSoutinho Labs</title>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
