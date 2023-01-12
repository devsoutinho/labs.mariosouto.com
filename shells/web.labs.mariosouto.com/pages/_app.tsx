import "tailwindcss/tailwind.css";
import { Provider } from "@devsoutinho/sknui/web";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
