import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import styles from "../constants/style"

const Home = () => {
  return (
    <div>
          <Navbar />

      {/* HERO COMPONENT */}
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Destination />
          <Trip />
          <Footer />
        </div>
      </div>
    </div>

    
  )
}

export default Home