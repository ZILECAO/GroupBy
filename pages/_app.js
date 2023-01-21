import '../styles/globals.css'
import { React, Component } from 'react'
import { Nav } from "../components/navfooter"
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return (
    <>
    
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>

      {/* <Nav />   */}
      <Component {...pageProps} />
    </>)
}

export default MyApp
