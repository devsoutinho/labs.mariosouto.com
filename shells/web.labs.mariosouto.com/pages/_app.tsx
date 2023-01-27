import { Provider } from "@devsoutinho/sknui/web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { TagManager } from "@src/infra/TagManager/TagManager";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TagManager />
      <Head>
        <title>DevSoutinho Labs</title>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
