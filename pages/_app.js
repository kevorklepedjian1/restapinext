import '../styles/globals.css'
import {useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    localStorage.clear()
    },[])
  return <Component {...pageProps} />
}

export default MyApp
