import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <div id="body">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0 viewport-fit=cover"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="theme-color"
          content="#linear-gradient(180deg, rgb(81, 138, 204) 12%, rgba(219,199,164,1) 80%)"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#linear-gradient(180deg, rgb(81, 138, 204) 12%, rgba(219,199,164,1) 80%)"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
