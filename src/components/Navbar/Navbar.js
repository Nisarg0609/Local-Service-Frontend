import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Avatar, Typography, Button } from "@mui/material";
import { logout } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  const logoutHandle = () => {
    setUser(null);
    dispatch(logout(navigate));
  };

  return (
    <>
      {window.location.pathname === "/" && scrollPosition === 0 ? (
        <div className={`navbar`}>
          <div className="navbar_logo">
            <div className="navbar_logo-image">
              <Link to="/">
                <img
                  src={require("../../Images/logo1.png")}
                  alt="Local Services"
                />
              </Link>
            </div>

            <div className="navbar_logo-text headtext-small gradient-text">
              <Link to="/">
                <p>LOCAL</p>
                <p>SERVICES</p>
              </Link>
            </div>
          </div>

          <div className="navbar_links p-small">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/postService">POST A SERVICE</Link>
            </li>
            <li>
              <Link to="/providers">PROVIDERS</Link>
            </li>
            <li>
              <Link to="/aboutUs">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contactUs">CONTACT US</Link>
            </li>
          </div>

          {user ? (
            <div className="navbar_links-avatar">
              <Avatar className="">{user?.result?.name.charAt(0)}</Avatar>
              <div className="navbar_links-avatar_button">
                <button className="" onClick={logoutHandle}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar_logIn">
              <div className="navbar_logIn-signin">
                <Link to="/signIn">
                  <button>Sign In</button>
                </Link>
              </div>

              <div className="navbar_logIn-signUp">
                <Link to="/signIn">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={`navbar navbarBG`}>
          <div className="navbar_logo">
            <div className="navbar_logo-image">
              <Link to="/">
                <img
                  src={require("../../Images/logo1.png")}
                  alt="Local Services"
                />
              </Link>
            </div>

            <div className="navbar_logo-text headtext-small gradient-text">
              <Link to="/">
                <p>LOCAL</p>
                <p>SERVICES</p>
              </Link>
            </div>
          </div>

          <div className="navbar_links p-small">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/postService">POST A SERVICE</Link>
            </li>
            <li>
              <Link to="/providers">PROVIDERS</Link>
            </li>
            <li>
              <Link to="/aboutUs">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contactUs">CONTACT US</Link>
            </li>
          </div>

          {user ? (
            <div className="navbar_links-avatar">
              <Avatar className="">{user?.result?.name.charAt(0)}</Avatar>
              <div className="navbar_links-avatar_button">
                <button className="" onClick={logoutHandle}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar_logIn">
              <div className="navbar_logIn-signin">
                <Link to="/signIn">
                  <button>Sign In</button>
                </Link>
              </div>

              <div className="navbar_logIn-signUp">
                <Link to="/signIn">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
