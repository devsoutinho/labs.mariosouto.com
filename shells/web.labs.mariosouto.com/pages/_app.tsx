import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        #__next {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 100%;
          font-family: -apple-system, sans-serif;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  )
}