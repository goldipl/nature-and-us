import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/common/Layout";
import favicon from "./../../public/icons/favicon.ico";
import "@/sass/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
