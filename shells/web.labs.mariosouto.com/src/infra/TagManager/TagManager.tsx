import Script from "next/script";

const GA_ID = "G-6YZP7X6ZGP";
export function TagManager() {
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
    </>
  );
}
