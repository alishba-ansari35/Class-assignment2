import React from 'react'
import styles from './contact.module.css'

const Contactpage = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
      <h1 className={styles.heading}>CONTACT US </h1>
      <form action="">
        
        <label htmlFor="" className={styles.label}>First Name</label>
        <input className={styles.input} type="text"  placeholder='Enter your first name'/>

        <label htmlFor="" className={styles.label}>Last Name</label>
        <input className={styles.input}  type="text"  placeholder='Enter your last name'/>

        <label htmlFor="" className={styles.label}>Email Address</label>
        <input className={styles.input}  type="text"  placeholder='Enter your email address'/>

        <button type="submit" className={styles.button}>Send Message</button>

      </form>
      </div>
    </div>
  )
}

export default Contactpage
