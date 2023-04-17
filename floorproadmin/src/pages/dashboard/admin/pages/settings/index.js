import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";

import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateBasicInformation from "./updateBasicInfo";
import UpdateContactInformation from "./updateContactInfo";
import UpdateSocialInformation from "./updateSocialInfo";
import UpdatePasswordInformation from "./updatePasswordInfo";

export const AdminDashboardSettings = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row ">
        <div className="col-md-4 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-8 col-sm-2 col-lg-10 col-xs-0 ">
          {/* <div className="container-fluid"> */}
          {/* <div className="row gx-5 =mx-3 my-3 p">
              <div className="card mb-5 mb-xl-10">
                <div className="content "> */}
          <div className="row flex-column-reverse flex-md-row px-5">
            <div className="col-md-8 p-4">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="mb-4">
                    <div className="d-flex flex-column flex-md-row text-center text-md-start mb-3">
                      <div className="col-md-3">
                        <div className="text-center">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            className="img img-circle img-thumbnail"
                            alt="avatar"
                            style={{ width: "200px !important" }}
                          />
                          <input type="file" className="form-control"></input>
                        </div>
                        <p className="small text-muted mt-3">
                          For best results, use an image at least 256px by 256px
                          in either .jpg or .png format
                        </p>
                      </div>
                    </div>

                    <UpdateBasicInformation />
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      {/* <h5 className="card-title mb-4">Contact</h5> */}
                      <UpdateContactInformation />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <UpdateSocialInformation />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="password"
                  role="tabpanel"
                  aria-labelledby="password-tab"
                >
                  <UpdatePasswordInformation/>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card sticky-top mb-4 mb-md-0">
                <div className="card-body">
                  <ul
                    className="nav nav-pills flex-column gap-2"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        <i className="bi bi-person me-2"></i> Profile
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="password-tab"
                        data-bs-toggle="tab"
                        href="#password"
                        role="tab"
                        aria-controls="password"
                        aria-selected="false"
                      >
                        <i className="bi bi-lock me-2"></i> Password
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};
