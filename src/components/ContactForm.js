import React, { useRef, useEffect, useState } from 'react';
import styles, { layout } from '../constants/style';
import lottie from 'lottie-web'

const ContactForm = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Contact.json')
    })
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can send the data to a backend or perform any desired action)
    console.log(formData);
  };

  return (

    <>

      <section className={`${layout.section}  p-32 mt-16`}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Contact us <br className="sm:block hidden" />
            <p className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-custom ss:leading-[90px] leading-[70px]">
              Anytime!!
            </p>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-2`}>
            Got questions or feedback? We're here to listen! Reach out to our friendly team through our Contact Us page. Your thoughts matter, and we're eager to assist you.
          </p>
        </div>

        <div ref={container} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-[400px] h-[400px]`}></div>

      </section>


        <form onSubmit={handleSubmit} className="pt-12 flex flex-col w-1/2 mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
            className="h-12 px-4 mb-8 rounded-md border border-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
            className="h-12 px-4 mb-8 rounded-md border border-gray-600"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
            className="h-12 px-4 mb-8 rounded-md border border-gray-600"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
            className="h-12 px-4 mb-8 rounded-md border border-gray-600"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
            className="h-32 px-4 py-2 mb-2 rounded-md border border-gray-300 mb-4 resize-none"
          required
        />
        <button
          type="submit"
          className="mb-8 bg-black-500 text-black py-2 px-4 rounded-md shadow-md hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-500"
        >
          Submit
        </button>
      </form>

    </>
  );
}

export default ContactForm;
