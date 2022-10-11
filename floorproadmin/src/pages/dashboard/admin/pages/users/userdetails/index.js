import React from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import "./index.css";

export const AdminDashboardUserDetails = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row gx-5 mx-3 mb-3"></div>
          </div>
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3"></div>
          </div>
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className="col">
                <h2 className="DashboardOrderTitle my-3"> Users</h2>
                <div className="container-xl px-4 mt-4">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
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
                            className="btn user_profile_btn mx-auto"
                            type="button"
                          >
                            Upload new image
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="card mb-4">
                        <div className="card-header">Account Details</div>
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
                              <div className="col-md-6">
                                <label
                                  className="small mb-1"
                                  for="inputLocation"
                                >
                                  Home Address
                                </label>
                                <textarea
                                  className="form-control"
                                  id="inputLocation"
                                  type="text"
                                  placeholder="Enter your home address"
                                ></textarea>
                              </div>
                            </div>

                            <div className="row gx-3 mb-3">
                              {/* <!-- Form Group (phone number)--> */}
                              <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">
                                  Phone number
                                </label>
                                <input
                                  className="form-control"
                                  id="inputPhone"
                                  type="tel"
                                  placeholder="Enter your phone number"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  className="small mb-1"
                                  for="inputEmailAddress"
                                >
                                  Email address
                                </label>
                                <input
                                  className="form-control"
                                  id="inputEmailAddress"
                                  type="email"
                                  placeholder="Enter your email address"
                                  value="name@example.com"
                                />
                              </div>
                            </div>
                            {/* <!-- Save changes button--> */}
                            <button
                              className="btn user_profile_btn float-end"
                              type="button"
                            >
                              Save changes
                            </button>
                          </form>
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
