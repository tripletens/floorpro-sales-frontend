import React from "react";
import logo from "../../../../../assets/images/logo.png";
import "./index.js";

const DashboardNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              className="floorprologo img img-responsive img-fluid"
              style={{ marginLeft: "30px", height: "auto", width: "150px" }}
              alt="FloorPro Logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <div class="d-flex mr-3">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle mr-6"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{marginRight:"50px", border: '8px', backgroundColor: "#fcc70e", color: '#1a1449' }}
                >
                  User Profile
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      John Doe
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Settings
                    </a>
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
