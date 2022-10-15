import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
// import styled from 'styled-components';
import "./index.css";

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
              <div className="col">
                <h2 className="DashboardOrderTitle my-3"> Settings</h2>
                <div className="col-xl-4">
                      <div className="card mb-4 mb-xl-0 card-1">
                <div className="card-header ">Change Profile Picture</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile img-responsive rounded-circle mb-2 user_profile_pic"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <button
                    className="btn user_profile_btn mx-23"
                    type="button"
                  >
                    Select File
                  </button>
                  <button
                    className="btn user_profile_btn mx-23"
                    type="button"
                  >
                    Update
                  </button>
                  </div>
                  </div>

                </div>
                <div className="card mb-4 h-40 ">
                        <div className="card-header">Edit Profile</div>
                        <div className="card-body">
                          <form>
                            <div className="row gx-2 mb-3">
                              <div className="col-md-6 form-group">
                                <label
                                  className=" mb-1"
                                  for="inputFirstName"
                                >
                                  First name
                                </label>
                                <input
                                  className="form-control"
                                  id="inputFirstName"
                                  type="text"
                                  placeholder="Enter your first name"
                                  value="Valerie"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  className="mb-1"
                                  for="inputLastName"
                                >
                                  Last name
                                </label>
                                <input
                                  className="form-control"
                                  id="inputLastName"
                                  type="text"
                                  placeholder="Enter your last name"
                                />
                              </div>
                            </div>
                            <div className="row gx-3 mb-3">
                              <div className="col-md-6">
                                <label
                                  className="small mb-1"
                                  for="inputOrgName"
                                >
                                  Email Address
                                </label>
                                <input
                                  className="form-control"
                                  id="inputOrgName"
                                  type="email"
                                  placeholder="Enter your Email Address"
                                />
                              </div>

                            </div>
                            {/* <!-- Save changes button--> */}
                            <button
                              className="btn user_profile_btn float-end"
                              type="button"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="card mb-4 h-40">
                        <div className="card-header">Change Password</div>
                        <div className="card-body">
                          <form>
                            <div className="row gx-2 mb-3">
                              <div className="col-md-6 form-group">
                                <label
                                  className=" mb-1"
                                  for="inputPassword6"
                                >
                                </label>
                                <input
                                  className="form-control"
                                  id="inputPassword6"
                                  type="text"
                                  placeholder="Old password"
                                  aria-describedby="passwordHelpInline"
                                />
                              </div>
                              <div className="col-md-6 form-group">
                                <label
                                  className=" mb-1"
                                  for="inputPassword6"
                                >
                                </label>
                                <input
                                  className="form-control"
                                  id="inputPassword6"
                                  type="text"
                                  placeholder="New password"
                                  aria-describedby="passwordHelpInline"
                                />
                              </div>
                              <div className="col-md-6 form-group">
                                <label
                                  className=" mb-1"
                                  for="inputPassword6"
                                >
                                </label>
                                <input
                                  className="form-control"
                                  id="inputPassword6"
                                  type="text"
                                  placeholder="Confirm password"
                                  aria-describedby="passwordHelpInline"
                                />
                              </div>
                            </div>
                            {/* <!-- Save changes button--> */}
                            <button
                              className="btn user_profile_btn float-end"
                              type="button"
                            >
                              Submit
                            </button>
                          </form>
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
