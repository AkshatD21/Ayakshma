import React, {useRef, useEffect, useState } from 'react';
import axios from 'axios';
import styles, {layout} from '../constants/style';
import lottie from 'lottie-web'

const ServicePage = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/Checkup.json')
        })
    }, [])

    const [symptom, setSymptom] = useState('');
    const [disease, setDisease] = useState('');

    const handleInputChange = (e) => {
        setSymptom(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/your-flask-api-endpoint', {
                symptom: symptom,
            });

            // Assuming your Flask API returns the disease as a property of the response data
            setDisease(response.data.disease);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    return (
        <>
            <section className={`${layout.section}  p-32 mt-16`}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        Time for <br className="sm:block hidden" />
                        <p className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-custom ss:leading-[90px] leading-[70px]">
                            Checkup!!
                        </p>
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-2`}>
                        Picture a world where healthcare is a breeze. Our disease prediction website, bringing dreams to life, blends advanced tech with an easy-to-use interface. It lets you share symptoms effortlessly and offers accurate health insights.
                    </p>
                </div>

            <div ref={container} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-[400px] h-[400px]`}></div>

        </section>

            <form onSubmit={handleSubmit} className="pt-12 flex flex-col w-1/2 mx-auto">
                <input
                    placeholder="Enter the symptoms"
                    type="text"
                    value={symptom}
                    onChange={handleInputChange}
                    className="h-12 px-4 mb-8 rounded-md border border-gray-600"
                />

                <button
                    type="submit"
                    className="mb-8 bg-black-500 text-black py-2 px-4 rounded-md shadow-md hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-500"
                >
                    Submit
                </button>
                <div className="text-center">
                    <div className={`bg-gray-200 rounded-md p-4 mx-auto w-1/2 h-32 mb-16`}>
                        <p>Result: {disease}</p>
                    </div>
                </div>
            </form>
            </>
    );
}

export default ServicePage;
