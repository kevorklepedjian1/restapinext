import Head from 'next/head'
import Image from 'next/image'
import styles from './users/styles.module.css'
import { useEffect } from 'react'

export default function Home() {
  
  return (
    <div className={styles.login_container}>
      
    <div className={styles.login_form_container}>
      <div className={styles.left}>
        
          <a href="/users/login" className={styles.green_btn1}>
            Sing In
          </a>
       
      </div>
      
               
    </div>
    
  </div>
  )
}
