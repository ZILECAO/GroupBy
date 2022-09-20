import '../styles/globals.css'
import { React, Component } from 'react'
import { Nav, Footer } from "../components/navfooter"
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Nav />  
        <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
