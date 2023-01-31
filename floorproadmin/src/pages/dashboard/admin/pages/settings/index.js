import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";

import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateBasicInformation from "./updateBasicInfo";

export const AdminDashboardSettings = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className="card mb-5 mb-xl-10">
                <div className="content ">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-8">
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
                                    className="avatar img-circle img-thumbnail"
                                    alt="avatar"
                                    style={{ width: "200px !important" }}
                                  />
                                  <input
                                    type="file"
                                    className="form-control"
                                  ></input>
                                </div>
                                <p className="small text-muted mt-3">
                                  For best results, use an image at least 256px
                                  by 256px in either .jpg or .png format
                                </p>
                              </div>
                            </div>
                            
                            <UpdateBasicInformation/>
                          </div>
                          <div className="card mb-4">
                            <div className="card-body">
                              <h5 className="card-title mb-4">Contact</h5>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="+65195892151"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Website</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="http://laborasyon.com/"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Languages</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="http://laborasyon.com/"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Address Line 1
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="A-65, Belvedere Streets"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Address Line 2
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">Post Code</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="1868"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="New York"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="New York"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Country</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="United States"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button className="px-2 py-2 my-2 add-btn float-end">
                                {" "}
                                <span className="m-1">Submit</span>{" "}
                              </button>{" "}
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title mb-4">Social</h6>
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">Twitter</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value="https://twitter.com/roxana-roussell"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">Facebook</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value="https://www.facebook.com/roxana-roussell"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Instagram
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value="https://www.instagram.com/roxana-roussell/"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">GitHub</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value="https://github.com/roxana-roussell"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button className="px-2 py-2 my-2 add-btn float-end">
                                  {" "}
                                  <span className="m-1">Submit</span>{" "}
                                </button>{" "}
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="password"
                          role="tabpanel"
                          aria-labelledby="password-tab"
                        >
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title mb-4">Change Password</h6>
                              <div className="mb-3">
                                <label className="form-label">Old Password</label>
                                <input type="password" className="form-control" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input type="password" className="form-control" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">
                                  New Password Repeat
                                </label>
                                <input type="password" className="form-control" />
                              </div>
                            </div>
                          </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
