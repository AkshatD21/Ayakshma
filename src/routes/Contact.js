import React from 'react'
import Footer from '../components/Footer'
import styles from '../constants/style';
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
    <Navbar />
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactForm />
          </div>
      </div>
      <Footer />
    </div >
  )
}

export default Contact