import React from "react";
import {Link} from 'react-router-dom'
import "./featureProviders.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const FeatureProviders = () => {
  return (
    <div className="featureProvider section__padding">
      <div className="featureProvider_header">
        <div className="featureProvider_header-header">
          <h6 className="headtext-e_small">VENDOR</h6>
          <h2 className="headtext-medium gradient-text">Feature Providers</h2>
        </div>

        <div className="featureProvider_header-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            usmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="featureProvider_content">
        <div className="featureProvider_content-item">
          <div className="featureProvider_content-slider"></div>

          <div className="featureProvider_content-item_heading">
            <div className="featureProvider_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="featureProvider_content-item_heading-text">
              <h6 className="p-large">Henry Cavill</h6>
              <p className="p-small">India</p>
            </div>
            <div className="featureProvider_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="featureProvider_content-item_content">
            <div className="featureProvider_content-item_content-image">
              <img src={require("../../../Images/provider2.jpg")} alt="" />
            </div>
            <div className="featureProvider_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="featureProvider_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="featureProvider_content-item">
          <div className="featureProvider_content-slider"></div>

          <div className="featureProvider_content-item_heading">
            <div className="featureProvider_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="featureProvider_content-item_heading-text">
              <h6 className="p-large">Tom Cruise</h6>
              <p className="p-small">India</p>
            </div>
            <div className="featureProvider_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="featureProvider_content-item_content">
            <div className="featureProvider_content-item_content-image">
              <img src={require("../../../Images/provider1.jpg")} alt="" />
            </div>
            <div className="featureProvider_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="featureProvider_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="featureProvider_content-item">
          <div className="featureProvider_content-slider"></div>

          <div className="featureProvider_content-item_heading">
            <div className="featureProvider_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="featureProvider_content-item_heading-text">
              <h6 className="p-large">Chirs evans</h6>
              <p className="p-small">India</p>
            </div>
            <div className="featureProvider_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="featureProvider_content-item_content">
            <div className="featureProvider_content-item_content-image">
              <img src={require("../../../Images/provider4.jpg")} alt="" />
            </div>
            <div className="featureProvider_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="featureProvider_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="featureProvider_content-item">
          <div className="featureProvider_content-slider"></div>

          <div className="featureProvider_content-item_heading">
            <div className="featureProvider_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="featureProvider_content-item_heading-text">
              <h6 className="p-large">Elizabeth Olsen</h6>
              <p className="p-small">India</p>
            </div>
            <div className="featureProvider_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="featureProvider_content-item_content">
            <div className="featureProvider_content-item_content-image">
              <img src={require("../../../Images/provider1.jpg")} alt="" />
            </div>
            <div className="featureProvider_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="featureProvider_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="featureProvider_content-item">
          <div className="featureProvider_content-slider"></div>

          <div className="featureProvider_content-item_heading">
            <div className="featureProvider_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="featureProvider_content-item_heading-text">
              <h6 className="p-large">Tom Holland</h6>
              <p className="p-small">India</p>
            </div>
            <div className="featureProvider_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="featureProvider_content-item_content">
            <div className="featureProvider_content-item_content-image">
              <img src={require("../../../Images/provider1.jpg")} alt="" />
            </div>
            <div className="featureProvider_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="featureProvider_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="featureProvider_arrows">
        {/* <div className="featureProvider_arrows-leftArrow">
          <BsArrowLeft size={40} />
        </div>
        <div className="featureProvider_arrows-rightArrow">
          <BsArrowRight size={40} />
        </div> */}
        <Link to='/providers'>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureProviders;
