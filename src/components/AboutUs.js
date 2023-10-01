import { features1, features2 } from "./MenuItems";
import styles, { layout } from "../constants/style";


const FeatureCard1 = ({ icon, content, index }) => (
  <div className={`p-4 rounded-lg shadow-md hover:shadow-lg flex items-center ${index !== features1.length - 1 ? " mb-6" : "mb-0"}`}>
    <div>
      <img src={icon} alt="star" />
    </div>
    <div className="ml-4">
      <p className="text-black">
        {content}
      </p>
    </div>
  </div>
);


const FeatureCard2 = ({ icon, content, index }) => (
  <div className={`p-4 rounded-lg shadow-md hover:shadow-lg flex items-center ${index !== features1.length - 1 ? " mb-6" : "mb-0"}`}>
    <div>
      <img src={icon} alt="star" />
    </div>
    <div className="ml-4">
      <p className="text-black">
        {content}
      </p>
    </div>
  </div>
);



const Business = () => (
  <>
  <section className={`${layout.sectionReverse} p-32 mt-16`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} flex  items-baseline`}>
        <span>Our</span> &nbsp; 
        <p className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-custom ss:leading-[100.8px] leading-[75px]">Mission</p>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our mission is to empower individuals with the tools they need to take control of their health and well-being. We have developed an advanced platform designed to provide accurate disease predictions and actionable solutions.
      </p>
    </div>

      <div className="flex-col mt-16">
        {features1.map((feature, index) => (
          <FeatureCard1 key={feature.id} {...feature} index={index} />
        ))}
      </div>

  </section>

  <section className={`${layout.section} p-32`}>
    <div className="flex">
      <div className="flex-col mt-16">
        {features2.map((feature, index) => (
          <FeatureCard2 key={feature.id} {...feature} index={index} />
        ))}
      </div>
    <div className={`${layout.sectionInfo} ml-32`}>
      <h2 className={`${styles.heading2} flex  items-baseline`}>
        <span>Our</span> &nbsp; 
        <p className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-custom ss:leading-[100.8px] leading-[75px]">Vision</p>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We envision a future where individuals can make informed health decisions from the comfort of their homes, reducing the burden on hospitals during critical times. Our goal is to foster a healthcare ecosystem that prioritizes prevention and convenience.
      </p>
    </div>
    </div>
  </section>
  </>
);

export default Business;