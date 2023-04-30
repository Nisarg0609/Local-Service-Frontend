import React from "react";
import "./recentArticles.css";

const RecentArticles = () => {
  return (
    <div className="recentJobs section__padding">
      <div className="recentJobs_header">
        <div className="recentJobs_header-header">
          <h6 className="headtext-e_small">ARTICLES</h6>
          <h2 className="headtext-medium gradient-text">Recent Articles</h2>
        </div>

        <div className="recentJobs_header-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            usmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="recentJobs_jobs-container">
        <div className="recentJobs_jobs-item">
          <div className="recentJobs_jobs-item_image">
            <img src={require("../../../Images/article1.jpg")} alt="" />
          </div>

          <div className="recentJobs_jobs-item_content">
            <div className="recentJobs_jobs-item_content-time">
              <p className="p-small">January 12, 2016</p>
              <div className="recentJobs_jobs-item_content-line"></div>
              <p className="p-small">By admin</p>
            </div>

            <h5 className="headtext-small">My fourth blog post title</h5>

            <div className="recentJobs_jobs-item_content-time_button">
              <button className="p-small">Uncategorized</button>
            </div>
          </div>
        </div>

        <div className="recentJobs_jobs-item">
          <div className="recentJobs_jobs-item_image">
            <img src={require("../../../Images/article1.jpg")} alt="" />
          </div>

          <div className="recentJobs_jobs-item_content">
            <div className="recentJobs_jobs-item_content-time">
              <p className="p-small">January 12, 2016</p>
              <div className="recentJobs_jobs-item_content-line"></div>
              <p className="p-small">By admin</p>
            </div>

            <h5 className="headtext-small">My fourth blog post title</h5>

            <div className="recentJobs_jobs-item_content-time_button">
              <button className="p-small">Uncategorized</button>
            </div>
          </div>
        </div>

        <div className="recentJobs_jobs-item">
          <div className="recentJobs_jobs-item_image">
            <img src={require("../../../Images/article1.jpg")} alt="" />
          </div>

          <div className="recentJobs_jobs-item_content">
            <div className="recentJobs_jobs-item_content-time">
              <p className="p-small">January 12, 2016</p>
              <div className="recentJobs_jobs-item_content-line"></div>
              <p className="p-small">By admin</p>
            </div>

            <h5 className="headtext-small">My fourth blog post title</h5>

            <div className="recentJobs_jobs-item_content-time_button">
              <button className="p-small">Uncategorized</button>
            </div>
          </div>
        </div>

        <div className="recentJobs_jobs-item">
          <div className="recentJobs_jobs-item_image">
            <img src={require("../../../Images/article1.jpg")} alt="" />
          </div>

          <div className="recentJobs_jobs-item_content">
            <div className="recentJobs_jobs-item_content-time">
              <p className="p-small">January 12, 2016</p>
              <div className="recentJobs_jobs-item_content-line"></div>
              <p className="p-small">By admin</p>
            </div>

            <h5 className="headtext-small">My fourth blog post title</h5>

            <div className="recentJobs_jobs-item_content-time_button">
              <button className="p-small">Uncategorized</button>
            </div>
          </div>
        </div>

        <div className="recentJobs_jobs-item">
          <div className="recentJobs_jobs-item_image">
            <img src={require("../../../Images/article1.jpg")} alt="" />
          </div>

          <div className="recentJobs_jobs-item_content">
            <div className="recentJobs_jobs-item_content-time">
              <p className="p-small">January 12, 2016</p>
              <div className="recentJobs_jobs-item_content-line"></div>
              <p className="p-small">By admin</p>
            </div>

            <h5 className="headtext-small">My fourth blog post title</h5>

            <div className="recentJobs_jobs-item_content-time_button">
              <button className="p-small">Uncategorized</button>
            </div>
          </div>
        </div>
      </div>

      <div className="recentJobs_button">
        <button>View More</button>
      </div>
    </div>
  );
};

export default RecentArticles;
