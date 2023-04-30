import React from "react";
import "./whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs ">
      <div className="whyChooseUs_container">
        <div className="whyChooseUs_container-content">
          <div className="whyChooseUs_container-content_header">
            <p className="p-medium">CHOOSE</p>
            <h2 className="headtext-medium gradient-text">Why Choose Us</h2>
            <p className="p-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="whyChooseUs_container-content_item-container">
            <div className="whyChooseUs_container-content_item-container_item">
              <div className="whyChooseUs_container-content_item-container_item-image">
                <img src={require("../../../Images/chooseLower1.png")} alt="" />
              </div>

              <div className="whyChooseUs_container-content_item-container_item-text">
                <h5 className="headtext-small">Meet new customers</h5>
                <p className="p-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="whyChooseUs_container-content_item-container_item">
              <div className="whyChooseUs_container-content_item-container_item-image">
                <img src={require("../../../Images/chooseLower2.png")} alt="" />
              </div>

              <div className="whyChooseUs_container-content_item-container_item-text">
                <h5 className="headtext-small">Grow your revenue</h5>
                <p className="p-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="whyChooseUs_container-content_item-container_item">
              <div className="whyChooseUs_container-content_item-container_item-image">
                <img src={require("../../../Images/chooseLower3.png")} alt="" />
              </div>

              <div className="whyChooseUs_container-content_item-container_item-text">
                <h5 className="headtext-small">Build your online reputation</h5>
                <p className="p-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>


          </div>
        </div>

        <div className="whyChooseUs_container-image">
          <img src={require("../../../Images/whyChooseUs.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
