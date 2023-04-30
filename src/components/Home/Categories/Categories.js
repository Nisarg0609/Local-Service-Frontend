import React from "react";
import "./categories.css";
import {Link} from 'react-router-dom'
import AllService from "../../Services/All Services/AllService";

const Categories = () => {
  return (
    <div className="categories section__padding">
      <div className="categories_header">
        <div className="categories_header-header">
          <h6 className="headtext-e_small">CATEGORIES</h6>
          <h2 className="headtext-medium gradient-text">Popular Categories</h2>
        </div>

        <div className="categories_header-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            usmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <AllService/>

      <div className="categories_button">
        <Link to="/services">
          <button>Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
