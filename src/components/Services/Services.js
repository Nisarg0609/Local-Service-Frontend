import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./services.css";
import AllService from "./All Services/AllService";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { getCategory, postCategory } from "../../redux/actions/categoryAction";

const Services = () => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [categoryData, setCategoryData] = useState({
    email: "",
    service: "",
    description: "",
    image: "",
  });

  const handleChange = (e)=>{
    setCategoryData({...categoryData , [e.target.name] : e.target.value});
    console.log(categoryData);
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(postCategory(categoryData))
  }

  const handleClick = () => {
    setFlag(!flag);
  };


  return (
    <div className="services" >
      <div className="services_color-bg"></div>
      <div className="services_image-bg"></div>

      <div className="services_heading">
        <h2 className="headtext-medium gradient-text">Popular Categories</h2>
        <div className="services_heading-links">
          <Link className="p-small" to="/">
            HOME{" "}
          </Link>
          <p className="p-small">&gt; SERVICES</p>
        </div>
      </div>

      <div className="services_container">
        <AllService />

        {user?.result?.role === "Admin" ? (
          <div className="services_addCategory-Button">
            <button onClick={handleClick}>
              {flag ? <span>Close</span> : <span>Add Category</span>}
            </button>
          </div>
        ) : (
          ""
        )}

        {flag && user?.result?.role === "Admin" ? (
          <div className="services_addCategory-container">
            <form action="">
              <div className="service_addCategory-container_account service-item_container">
                {!user ? (
                  <>
                    <p className="p-small">HAVE AN ACCOUNT?</p>
                    <div className="service-item">
                      <p>
                        If you don't have an account you can create one below by
                        entering your email address/username. Your account
                        details will be confirmed via email.
                      </p>
                      <Link to="/signIn">
                      <button>Sign In</button>
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className="service_addCategory-container_account service-item_container">
                <p className="p-small">YOUR EMAIL</p>
                <input
                  className="service-item"
                  type="text"
                  name="email"
                  placeholder="example@gmail.com"
                  value={categoryData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="service_addCategory-container_account service-item_container">
                <p className="p-small">SERVICE CATEGORY</p>
                <input
                  className="service-item"
                  type="text"
                  name="service"
                  placeholder="e.g. plumber"
                  value={categoryData.service}
                  onChange={handleChange}
                />
              </div>

              <div className="service_addCategory-container_account service-item_container">
                <p className="p-small">DESCRIPTION</p>
                <textarea
                  className="service-item"
                  type="text"
                  rows="4"
                  cols="50"
                  name="description"
                  placeholder="Description"
                  value={categoryData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="service_addCategory-container_account service-item_container">
                <p className="p-small">LOGO</p>
                {/* <input className="service-item" type="file" name="image" value={categoryData.image} onChange={handleChange}/> */}
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setCategoryData({ ...categoryData, image: base64 })}/>
              </div>

              <button className="service_addCategory-submit_button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Services;
