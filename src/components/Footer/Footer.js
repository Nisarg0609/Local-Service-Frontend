import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {FaInstagram,FaTwitter,FaLinkedin,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer '>
        <div className="footer_horizontal-line"></div>
        <div className="footer_links">
            <div className="footer_links-container">
                <div className="footer_links-container_header">
                    <h5 className='headtext-e_small'>Site Links</h5>
                    <div className="footer_links-container_header-line"></div>
                </div>
                <div className="footer_links-container_links p-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/postService">Post a Service</Link></li>
                    <li><Link to="/providers">Providers</Link></li>
                </div>
            </div>   
            
            <div className="footer_links-container p-medium">
                <div className="footer_links-container_header">
                    <h5 className='headtext-e_small'>Site Links</h5>
                    <div className="footer_links-container_header-line"></div>
                </div>
                <div className="footer_links-container_links">
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contactUs">Contact Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/signIn">Sign In</Link></li>
                </div>
            </div>   

            <div className="footer_links-container p-medium">
                <div className="footer_links-container_header">
                    <h5 className='headtext-e_small'>Popular Cities</h5>
                    <div className="footer_links-container_header-line"></div>
                </div>
                <div className="footer_links-container_links">
                    <li><a href="">Ahmedabad</a></li>
                    <li><a href="">Agra</a></li>
                    <li><a href="">Jaipur</a></li>
                    <li><a href="">Kolkata</a></li>
                </div>
            </div>   

            <div className="footer_links-container p-medium">
                <div className="footer_links-container_header">
                    <h5 className='headtext-e_small'>Contact Info</h5>
                    <div className="footer_links-container_header-line"></div>
                </div>
                <div className="footer_links-container_links">
                    <li><a href="">India</a></li>
                    <li><a href="">+91 0000000000</a></li>
                    <li><a href="">+91 0000000000</a></li>
                    <li><a href="">hello@LS.com</a></li>
                </div>
            </div>   


        </div>

        <div className="footer_copy-right">
            <div className="footer_copy-right_logo">
                <div className="footer_copy-right_logo-image">
                    <a href="/">
                        <img src={require("../../Images/logo1.png")} alt="Local Services" />
                    </a>
                </div>

                <div className="footer_copy-right_logo-text headtext-small gradient-text">
                    <a href="/">
                        <p>LOCAL</p>
                        <p>SERVICES</p>
                    </a>
                </div>
            </div>

            <div className="footer_copy-right_text">
                <p className="p-small">Copyright 2023</p>
                <div className="footer_copy-right_text-line"></div>
                <p className="p-small">All Rights Reserved</p>
            </div>

            <div className="footer_copy-right_line"></div>

            <div className="footer_copy-right_social-media">
                <div className="footer_copy-right_social-media_logo">
                    <FaFacebook size={25}/>
                </div>
                <div className="footer_copy-right_social-media_logo">
                    <FaInstagram size={25}/>
                </div>
                <div className="footer_copy-right_social-media_logo">
                    <FaLinkedin size={25}/>
                </div>
                <div className="footer_copy-right_social-media_logo">
                    <FaTwitter size={25}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer