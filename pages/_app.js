import '../styles/globals.css'
import { React, Component } from 'react'
import { Nav, Footer } from "../components/navfooter"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
        <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
