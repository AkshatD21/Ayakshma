import React from 'react'
import "./FooterStyles.css"
import Rlogo from "../assets/RLogo.png"

const Footer = () => {
  return (
    <div className="footer">
    <div className="top">
      <div>
        <img className="rlogo" alt="RealLogo" src={Rlogo}/>
          <p className='mt-4'>The essence of our humanity lies in our pursuit of healthcare.</p>
      </div>
      <div>
        <a href="/">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-behance-square"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter-square"></i>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Footer