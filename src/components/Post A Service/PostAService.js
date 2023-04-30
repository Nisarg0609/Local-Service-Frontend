import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import {useDispatch} from 'react-redux'
import "./postAservice.css";
import { postService } from "../../redux/actions/serviceAction";


const PostAService = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [serviceData, setServiceData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    contact : "",
    country : "",
    city : "",
    address : "",
    category : "",
    description : "",
    logo : ""
  })

  const handleChange =(e)=>{
    setServiceData({...serviceData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e)=>{
    console.log(serviceData);
    e.preventDefault()
    dispatch(postService(serviceData))
  }


  return (
    <div className="postService">
      <div className="postService_color-bg"></div>
      <div className="postService_image-bg"></div>

      <div className="postServices_heading">
        <h2 className="headtext-medium gradient-text">Post a Service</h2>
        <div className="postServices_heading-links">
          <Link className="p-small" to="/">
            HOME{" "}
          </Link>
          <p className="p-small">&gt; POST A SERVICE</p>
        </div>
      </div>

      <div className="postService_addAservice-text">
        <h2 className="headtext-medium gradient-text">Post a Service</h2>
      </div>

      <div className="postService_addCategory-container">
        <form action="">
          {!user ? (
            <div className="postService_addCategory-container_account postService-item_container">
              <p className="p-small">HAVE AN ACCOUNT?</p>
              <div className="postService-item">
                <p>
                  If you don't have an account you can create one below by
                  entering your email address/username. Your account details
                  will be confirmed via email.
                </p>
                <Link to="/signIn">
                <button>Sign In</button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="postService-item_container-heading">
            <p className="p-small">USER DETAILS</p>
            <div className="postService-item_container-line"></div>
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">FIRST NAME</p>
            <input
              className="postService-item"
              type="text"
              name="firstName"
              placeholder="e.g. Henry"
              value={serviceData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">LAST NAME</p>
            <input
              className="postService-item"
              type="text"
              name="lastName"
              placeholder="e.g. Cavill"
              value={serviceData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">YOUR EMAIL</p>
            <input
              className="postService-item"
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={serviceData.email}
              onChange={handleChange}
            />
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">CONTACT NO.</p>
            <input
              className="postService-item"
              type="text"
              name="contact"
              placeholder="e.g. +91 0000000000"
              value={serviceData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="postService-item_container-heading">
            <p className="p-small">LOCATION DETAILS</p>
            <div className="postService-item_container-line"></div>
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">COUNTRY</p>
            <FormControl style={{ width: "65%" }}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  required
                  style={{ maxHeight: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={serviceData.country}
                  label="Country"
                  name="country"
                  onChange={handleChange}
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
              </FormControl>
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">CITY</p>
            <FormControl style={{ width: "65%" }}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  required
                  style={{ maxHeight: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={serviceData.city}
                  label="City"
                  name="city"
                  onChange={handleChange}
                >
                  <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                </Select>
              </FormControl>
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">ADDRESS &#40;optional&#41;</p>
            <input
              className="postService-item"
              type="text"
              name="address"
              placeholder="e.g. street, city"
              value={serviceData.address}
              onChange={handleChange}
            />
          </div>

          <div className="postService-item_container-heading">
            <p className="p-small">SERVICE DETAILS</p>
            <div className="postService-item_container-line"></div>
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">SERVICE CATEGORY</p>
            <FormControl style={{ width: "65%" }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  required
                  style={{ maxHeight: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={serviceData.category}
                  label="Category"
                  name="category"
                  onChange={handleChange}
                >
                  <MenuItem value="plumber">Plumber</MenuItem>
                </Select>
              </FormControl>
          </div>

          {/* <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">SERVICES</p>
            <FormControl style={{ width: "65%", maxHeight: 44 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Services
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                label="services"
                multiple
                value={personName}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">DESCRIPTION</p>
            <textarea
              className="postService-item"
              type="text"
              rows="4"
              cols="50"
              placeholder="Description"
              name="description"
              value={serviceData.description}
              onChange={handleChange}
            />
          </div>

          <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">LOGO</p>
            <input className="postService-item" type="file" name="logo" value={serviceData.logo} onChange={handleChange} />
          </div>

          {/* <div className="postService_addCategory-container_account postService-item_container">
            <p className="p-small">IMAGES</p>
            <input
              className="postService-item"
              multiple
              type="file"
              name=""
              id=""
            />
          </div> */}

          <div className="postService_addCategory-submit_button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAService;
