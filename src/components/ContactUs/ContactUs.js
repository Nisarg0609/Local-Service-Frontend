import React from 'react'
import './contactUs.css'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className='contactUs'>
      <div className="contactUs_color-bg"></div>
      <div className="contactUs_image-bg"></div>


      
      <div className="contactUs_heading">
        <h2 className="headtext-medium gradient-text">Contact Us</h2>
        <div className="contactUs_heading-links">
          <Link className="p-small" to="/">
            HOME{" "}
          </Link>
          <p className="p-small">&gt; CONTACT US</p>
        </div>
      </div>

      <div className="contactUs_container">
        <div className="contactUs_container-item">
          <div className="contactUs_container-item_image">
            <img src={require('../../Images/mail.png')} alt="" />
          </div>

          <h4 className='headtext-medium'>Mailing Address</h4>

          <p className='p-small'>xyz street, abc, India</p>
        </div>

        <div className="contactUs_container-item">
          <div className="contactUs_container-item_image">
            <img src={require('../../Images/email.png')} alt="" />
          </div>

          <h4 className='headtext-medium'>Email Info</h4>

          <p className='p-small'>xyz@gmail.com</p>
        </div>

        <div className="contactUs_container-item">
          <div className="contactUs_container-item_image">
            <img src={require('../../Images/phone.png')} alt="" />
          </div>

          <h4 className='headtext-medium'>Phone Number</h4>

          <p className='p-small'>+00 0000000000</p>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs