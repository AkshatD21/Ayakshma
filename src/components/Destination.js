import React, {useRef, useEffect} from 'react';
import "./DestinationStyles.css"
import styles, {layout} from "../constants/style"
import lottie from 'lottie-web'

const Destination = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Home2.json')
    })
  }, [])

  return (
    <section className={layout.sectionReverse}>
        <div ref={container} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-[400px] h-[400px]`}></div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Idea Behind <br className="sm:block hidden" /> 
          <p className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-custom ss:leading-[100.8px] leading-[75px]">
            Ayakshma?
          </p>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Picture a world where healthcare is a breeze. Our disease prediction website, bringing dreams to life, blends advanced tech with an easy-to-use interface. It lets you share symptoms effortlessly and offers accurate health insights.
        </p>

      </div>
    </section>
  )
}

export default Destination