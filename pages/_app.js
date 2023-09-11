import "../public/assets/css/app.2afad0c.bundle.css";
import "../public/assets/css/swiper-custom.css";
import "../public/assets/css/custom.css";
import React, { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";
import "react-modal-video/css/modal-video.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import 'sweetalert2/src/sweetalert2.scss'

import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/public/assets/css/custom.css" />
        {/* <meta
          name="description"
          content="Best Home Services at the Tap of a Key. 
          Zimkey guarantees safe and hassle-free home services by verified professionals"
        /> */}
      </Head>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      />
      {!loading ? <Component {...pageProps} /> : <Preloader />}
    </>
  );
}

export default MyApp;
