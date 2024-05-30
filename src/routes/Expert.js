import React from 'react'
import Navbar from "../components/Navbar";
import styles from '../constants/style';
import Footer from '../components/Footer';
import ExpertPage from '../components/ExpertPage';

const Expert = () => {
  return (
      <div>
          <Navbar />
          <div className={`bg-white ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  <ExpertPage />
              </div>
          </div>
          <Footer />
      </div>
  )
}

export default Expert