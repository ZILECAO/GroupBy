import '../styles/globals.css'
import { React, Component } from 'react'
import { Nav, Footer } from "../components/navfooter"
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/tronweb@4.4.0/dist/TronWeb.js"></script>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>

      {/* <Nav />   */}
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
