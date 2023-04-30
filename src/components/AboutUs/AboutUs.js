import React from "react";
import "./aboutUs.css";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="aboutUs">

<div className="aboutUs_color-bg"></div>
      <div className="aboutUs_image-bg"></div>

      <div className="aboutUs_heading">
        <h2 className="headtext-medium gradient-text">About Us</h2>
        <div className="aboutUs_heading-links">
          <Link className="p-small" to="/">
            HOME{" "}
          </Link>
          <p className="p-small">&gt; ABOUT US</p>
        </div>
      </div>

      <div className="aboutUs-content">
      <p className="p-medium">
      The web application Local Service is about booking services like
      Automobile, Plumbing, Painting, Computer, and Electronics. 
      Local Service
      </p>

      <p className="p-medium">
      helps the user to book any service online. Our mission is to offer a quick
      and easy way to book any service. Local Service providing multiple
      services and providing them with an option of selecting the service types.
      </p>

      <p className="p-medium">
      This Web Application provides facility to book online any service. The
      purpose of the site is to provide a system that saves the efforts and time
      of both the user and the service agency. 
      </p>

      <p className="p-medium">
      The Web application will be built
      using modern programming languages and tools and will follow industry
      standards for software development, ensuring a high level of quality and
      reliability.
      </p>
      <p className="p-medium">
       The project will focus on creating an intuitive and visually
      appealing user interface that provides a seamless user experience.
      Security will also be a top priority, and the Web application will use
      end-to-end encryption to protect user data and conversations from
      unauthorized access. Additionally, the web application will implement
      robust authentication and authorization mechanisms to ensure that only
      authorized users can access the application.

      </p>

      </div>
    </div>
  );
};

export default AboutUs;
