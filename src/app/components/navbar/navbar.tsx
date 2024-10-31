import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> FLOWERS </h1>
      <ul className={styles.list}>
        <li>
            <Link className={styles.link} href="./">Home</Link>
        </li>
        <li>
            <Link className={styles.link} href="./about">About</Link>
        </li>
        <li>
            <Link className={styles.link} href="./contact">Contact</Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
