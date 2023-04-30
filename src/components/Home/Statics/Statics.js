import React from "react";
import "./statics.css";

const Statics = () => {
  return (
    <div className="statics ">
      <div className="statics_container">
        <div className="statics_container-text">
          <p className="p-medium">STATICS</p>
          <h2 className="headtext-medium gradient-text">
            Trusted by thousands of people all over the world
          </h2>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="statics_container-number">
            <div className="statics_container-number_number">
                <p className="headtext-large">16</p>
                <p className="p-small">Providers</p>
            </div>
            <div className="statics_container-line"></div>
            <div className="statics_container-number_number">
                <p className="headtext-large">12</p>
                <p className="p-small">Customers</p>
            </div>
            <div className="statics_container-line"></div>
            <div className="statics_container-number_number">
                <p className="headtext-large">0</p>
                <p className="p-small">Jobs</p>
            </div>
            <div className="statics_container-line"></div>
            <div className="statics_container-number_number">
                <p className="headtext-large">5</p>
                <p className="p-small">Categories</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
