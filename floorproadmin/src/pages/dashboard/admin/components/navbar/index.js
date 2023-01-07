import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../../assets/images/logo.png";
import { ucwords } from "../../../../../helpers";
import { logout } from "../../../../../store/auth";
import "./index.css";

const DashboardNavbar = () => {
  const user_data = sessionStorage.getItem("user_data") ? JSON.parse(sessionStorage.getItem("user_data")) : null;
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userlogout = () => {
    // fetch the dispatch  for logout

    try {
      dispatch(logout());
      navigate("/admin-dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      return toast.error(`${error}!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="floorprologo img img-responsive img-fluid"
              style={{ marginLeft: "30px", height: "auto", width: "150px" }}
              alt="FloorPro Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
            <div className="d-flex mr-3">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle mr-6 user_profile_btn"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  User Profile
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      {user_data ? ucwords(user_data.name) : "loading..."}
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                     Settings
                    </a>
                  </li>
                  <li>
                    <Link onClick={userlogout} className="dropdown-item" to={"/"}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
