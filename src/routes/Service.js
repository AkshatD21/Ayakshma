import React from 'react'
import Navbar from "../components/Navbar";
import styles from '../constants/style';
import Footer from '../components/Footer';
import ServicePage from '../components/ServicePage';

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ServicePage />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service