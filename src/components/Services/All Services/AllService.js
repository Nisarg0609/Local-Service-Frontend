import React, { useEffect } from "react";
import "./allService.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux/actions/categoryAction";
import {CardMedia} from '@mui/material'

const AllService = () => {
  const dispatch = useDispatch();
  const data  = useSelector((categories) => categories);
  let categories = []
  categories = data.categories
  console.log(categories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="allServices">
      {categories?.map((category) => (
        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            {/* <CardMedia
              image={
                category.image ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
            /> */}
             <img src={require('../../../Images/plumber.png')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">{category.service}</h6>
            {/* <p className="p-medium">{category.count} providers</p> */}
            <p className="p-medium">2 providers</p>
          </div>
        </div>
      ))}


        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/carService.png')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">Car Service</h6>
            <p className="p-medium">3 providers</p>
          </div>
        </div>

        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/electrician.jpg')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">Electrician</h6>
            <p className="p-medium">1 providers</p>
          </div>
        </div>

        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/Ac.jpg')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">AC Repair</h6>
            <p className="p-medium">1 providers</p>
          </div>
        </div>

        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/Tv.jpg')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">TV Repair</h6>
            <p className="p-medium">3 providers</p>
          </div>
        </div>

        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/paint.jpg')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">Home Painting</h6>
            <p className="p-medium">4 providers</p>
          </div>
        </div>

        <div className="allServices_content-item">
          <div className="allServices_content-item_image">
            <img src={require('../../../Images/homeCleaning.jpg')} alt="" />
          </div>

          <div className="allServices_content-item_text">
            <h6 className="headtext-small">Home Cleaning</h6>
            <p className="p-medium">2 providers</p>
          </div>
        </div>

    </div>
  );
};

export default AllService;
