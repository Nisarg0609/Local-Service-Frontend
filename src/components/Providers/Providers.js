import React from "react";
import "./providers.css";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const Providers = () => {
  return (
    <div className="providers">
      <div className="providers_content">
        <div className="providers_content-item">
          <div className="providers_content-slider"></div>

          <div className="providers_content-item_heading">
            <div className="providers_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="providers_content-item_heading-text">
              <h6 className="p-large">Henry Cavill</h6>
              <p className="p-small">India</p>
            </div>
            <div className="providers_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="providers_content-item_content">
            <div className="providers_content-item_content-image">
              <img src={require("../../Images/provider2.jpg")} alt="" />
            </div>
            <div className="providers_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="providers_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="providers_content-item">
          <div className="providers_content-slider"></div>

          <div className="providers_content-item_heading">
            <div className="providers_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="providers_content-item_heading-text">
              <h6 className="p-large">Tom Cruise</h6>
              <p className="p-small">India</p>
            </div>
            <div className="providers_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="providers_content-item_content">
            <div className="providers_content-item_content-image">
              <img src={require("../../Images/provider1.jpg")} alt="" />
            </div>
            <div className="providers_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="providers_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="providers_content-item">
          <div className="providers_content-slider"></div>

          <div className="providers_content-item_heading">
            <div className="providers_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="providers_content-item_heading-text">
              <h6 className="p-large">Chirs evans</h6>
              <p className="p-small">India</p>
            </div>
            <div className="providers_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="providers_content-item_content">
            <div className="providers_content-item_content-image">
              <img src={require("../../Images/provider4.jpg")} alt="" />
            </div>
            <div className="providers_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="providers_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="providers_content-item">
          <div className="providers_content-slider"></div>

          <div className="providers_content-item_heading">
            <div className="providers_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="providers_content-item_heading-text">
              <h6 className="p-large">Elizabeth Olsen</h6>
              <p className="p-small">India</p>
            </div>
            <div className="providers_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="providers_content-item_content">
            <div className="providers_content-item_content-image">
              <img src={require("../../Images/provider3.jpg")} alt="" />
            </div>
            <div className="providers_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="providers_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>

        <div className="providers_content-item">
          <div className="providers_content-slider"></div>

          <div className="providers_content-item_heading">
            <div className="providers_content-item_heading-leftLogo">
              <IoMdCheckmark size={25} color="white" />
            </div>
            <div className="providers_content-item_heading-text">
              <h6 className="p-large">Tom Holland</h6>
              <p className="p-small">India</p>
            </div>
            <div className="providers_content-item_heading-rightLogo">
              <AiOutlineHeart size={35} color="red" />
            </div>
          </div>

          <div className="providers_content-item_content">
            <div className="providers_content-item_content-image">
              <img src={require("../../Images/provider2.jpg")} alt="" />
            </div>
            <div className="providers_content-item_content-text">
              <p>
                Throughout our experties, Technical knowledge, global presence
                and spoken web ...[ ]
              </p>
            </div>
            <div className="providers_content-item_content-button">
              <button className="p-small">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
      </div>

    </div>  

  );
};

export default Providers;
