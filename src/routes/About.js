import React from 'react'
import styles from '../constants/style'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const About = () => {
  return (
   <>
    <Navbar />
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
          <Footer />
        </div>
      </div>
   </>
 
  )
}

export default About