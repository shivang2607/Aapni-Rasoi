import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (<>
    <nav className={styles.mainnav}>
        
        <ul>
          <Link href='/'>
          <li>Home</li></Link>
          <Link href='/popular'><li>Popular Recipy</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/contact'><li>Contact Us</li></Link>

        </ul>
        <nav className={styles.mainnavu2}>
      <ul>
            <Link href='/signin'><li>Sign In</li></Link>
            <Link href='/login'><li>LogIn</li></Link>
        </ul>
      </nav>
      </nav>
     
      </>
  )
}

export default Navbar