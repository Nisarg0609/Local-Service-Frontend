import React from "react";
import "./searchArea.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const SearchArea = () => {
  return (
    <div className="searchArea">
      <div className="searchArea_bgImage"></div>

      <div className="searchArea_bgColor"></div>

      <div className="searchArea_content">
        <div className="searchArea_content-text">
          <div className="searchArea_content-text_text headtext-large">
            <p>Hire Experts &</p>
            <p>Get Your Job Done</p>
          </div>

          <div className="searchArea_content-text_line"></div>
        </div>

        <div className="searchArea_content-form">
          <form action="">
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Keyword (optional)"
            />

            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                required
                style={{ maxHeight: 44 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="category"
                label="Category"
                onChange={() => {}}
              >
                <MenuItem value="Ac Repair">Ac Repair</MenuItem>
                <MenuItem value="Plumber">Plumber</MenuItem>
                <MenuItem value="Electrician">Electrician</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
              required
                style={{ maxHeight: 44 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="country"
                label="country"
                onChange={() => {}}
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
              required
                style={{ maxHeight: 44 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="category"
                label="Category"
                onChange={() => {}}
              >
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
              </Select>
            </FormControl>

            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address (optional)"
            />

            <button className="searchArea_content-form_button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
