import React from "react";
import "./working.css";

const Working = () => {
  return (
    <div className="working">
      <div className="working_container">
        <div className="working_container-header">
          <p className="p-medium ">STEPS</p>
          <h2 className="headtext-medium gradient-text">How Service Finder Works</h2>
        </div>

        <div className="working_container-content">
          <div className="working_container-content_item">
            <div className="working_container-content_item-number">01</div>

            <div className="working_container-content_item-image">
              <img src={require("../../../Images/work1.png")} alt="" />
            </div>

            <div className="working_container-content_item-text">
              <h5 className="headtext-small">Describe Your Task</h5>
              <p className="p-medium">
                This helps us determine which Taskers are best for your job
              </p>
            </div>
          </div>

          
          <div className="working_container-content_item">
            <div className="working_container-content_item-number">02</div>

            <div className="working_container-content_item-image">
              <img src={require("../../../Images/work1.png")} alt="" />
            </div>

            <div className="working_container-content_item-text">
              <h5 className="headtext-small">Choose a Tasker</h5>
              <p className="p-medium">
                This helps us determine which Taskers are best for your job
              </p>
            </div>
          </div>

          <div className="working_container-content_item">
            <div className="working_container-content_item-number">03</div>

            <div className="working_container-content_item-image">
              <img src={require("../../../Images/work1.png")} alt="" />
            </div>

            <div className="working_container-content_item-text">
              <h5 className="headtext-small">Live Smarter</h5>
              <p className="p-medium">
                This helps us determine which Taskers are best for your job
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Working;
