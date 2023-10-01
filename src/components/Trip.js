import React from 'react';
import TripData from './TripData'
import "./TripStyles.css"
import styles from '../constants/style'
import image1 from '../assets/Yoga.png'
import image2 from '../assets/Hydration.png'
import image3 from '../assets/Checkup.png'
import image4 from '../assets/Hygiene.png'
import image5 from '../assets/Vaccine.png'
import image6 from '../assets/Mask.png'

const Trip = () => {

  return (
    <div className={`${styles.paddingX} p-4 sm:p-8 md:p-16 lg:p-32 xl:p-48`}>
      <h1 className={`${styles.heading2} text-center`}>Precautions</h1>
      <p className={`${styles.paragraph} text-center mb-8`}>Universal Must-Dos: These Are a Must!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-8">
          <TripData
            image={image1}
            heading="Mindfulness"
            text="Achieve balance and serenity through yoga, enhancing physical strength, mental clarity, and emotional wellness"
          />
        </div>
        
        <div className="p-8">
        <TripData
          image={image2}
          heading="Fluid Wellness"
           text="Optimal hydration fuels your body's functions, energizing you, and promoting overall health and wellness."
        />
        </div>

        <div className="p-8">
        <TripData
          image={image3}
          heading="Preventive Care"
          text="Regular health checkups catch issues early, ensuring timely intervention and a healthier, worry-free life."
        />
        </div>

        <div className="p-8 ">
        <TripData
          image={image4}
          heading="Clean Hands"
          text="Practicing good hand hygiene is your first line of defense against illnesses, keeping you and others safe."
        />
        </div>

        <div className="p-8">
        <TripData
          image={image5}
            heading="Immunity Shield"
            text=" Vaccination fortifies your body's defenses, safeguarding you and your community from preventable diseases."
        />
        </div>

        <div className="p-8">
        <TripData
          image={image6}
            heading="Mask Up"
            text="Wearing masks is an effective way to protect against airborne illnesses, promoting public health and safety."
        />

        </div>
      </div >
    </div>
  )
}

export default Trip