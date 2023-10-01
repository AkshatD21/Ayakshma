import React, {useRef, useEffect} from 'react';
import styles from "../constants/style";
import lottie from 'lottie-web';

const Hero = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Home1.json')
    })
}, [])

  return (
    <section id="home" className={`flex md:flex-row flex-col mt-28 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Unlocking Health <br className="sm:block hidden" />{" "}
            <span className="text-gradient">One Cure!!</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Fits All
        </h1>
        <p className={"font-poppins font-normal text-[18px] leading-[30.8px] text-black max-w-[470px] mt-5"}>
          Explore healthcare's future: Predicting health risks with advanced algorithms. Empower proactive wellness with accurate insights.
        </p>
      </div>

      <div ref={container} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-[400px] h-[400px]`}></div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero