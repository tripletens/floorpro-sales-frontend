import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";

import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <div class="card mb-5 mb-xl-10">
                <div class="content ">
                  <div class="row flex-column-reverse flex-md-row">
                    <div class="col-md-8">
                      <div class="tab-content" id="myTabContent">
                        <div
                          class="tab-pane fade active show"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div class="mb-4">
                            <div class="d-flex flex-column flex-md-row text-center text-md-start mb-3">
                              <div className="col-md-3">
                                <div className="text-center">
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    class="avatar img-circle img-thumbnail"
                                    alt="avatar"
                                    style={{ width: "200px !important" }}
                                  />
                                  <input
                                    type="file"
                                    class="form-control"
                                  ></input>
                                </div>
                                <p class="small text-muted mt-3">
                                  For best results, use an image at least 256px
                                  by 256px in either .jpg or .png format
                                </p>
                              </div>
                            </div>
                            <div class="card mb-4">
                              <div class="card-body">
                                <h6 class="card-title mb-4">
                                  Basic Information
                                </h6>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label class="form-label">Name</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="Adek Kembar"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">Username</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="adek-kembar"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">Email</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="wtaffe3@addthis.com"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">
                                        Date of Birth
                                      </label>
                                      <div class="d-flex gap-3">
                                        <input
                                          type={"date"}
                                          className="form-control"
                                          placeholder="Select date of birth"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label class="form-label">Role</label>
                                      <select class="form-select">
                                        <option value="">All</option>
                                        <option value="">Admin</option>
                                        <option value="">User</option>
                                        <option value="" selected="">
                                          Staff
                                        </option>
                                      </select>
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">Status</label>
                                      <select class="form-select">
                                        <option value="">All</option>
                                        <option value="" selected="">
                                          Active
                                        </option>
                                        <option value="">Blocked</option>
                                      </select>
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">
                                        Department
                                      </label>
                                      <select class="form-select">
                                        <option value="">All</option>
                                        <option value="">Sales</option>
                                        <option value="" selected="">
                                          Development
                                        </option>
                                        <option value="">Management</option>
                                      </select>
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">Gender</label>
                                      <div>
                                        <div class="form-check form-check-inline">
                                          <input
                                            type="radio"
                                            id="inlineRadio1"
                                            name="inlineRadio"
                                            class="form-check-input"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="inlineRadio1"
                                          >
                                            Male
                                          </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                          <input
                                            type="radio"
                                            id="inlineRadio2"
                                            name="inlineRadio"
                                            class="form-check-input"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="inlineRadio2"
                                          >
                                            Female
                                          </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                          <input
                                            type="radio"
                                            id="inlineRadio3"
                                            name="inlineRadio"
                                            class="form-check-input"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="inlineRadio3"
                                          >
                                            Other
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button className="px-2 py-2 my-2 add-btn float-end">
                                  {" "}
                                  <span className="m-1">Submit</span>{" "}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="card mb-4">
                            <div class="card-body">
                              <h5 class="card-title mb-4">Contact</h5>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="+65195892151"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Website</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="http://laborasyon.com/"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Languages</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="http://laborasyon.com/"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      Address Line 1
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="A-65, Belvedere Streets"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">
                                      Address Line 2
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="mb-3">
                                    <label class="form-label">Post Code</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="1868"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">City</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="New York"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">State</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="New York"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label">Country</label>
                                    <input
                                      type="text"
                                      class="form-control"
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
                          <div class="card">
                            <div class="card-body">
                              <h6 class="card-title mb-4">Social</h6>
                              <form>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label class="form-label">Twitter</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="https://twitter.com/roxana-roussell"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">Facebook</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="https://www.facebook.com/roxana-roussell"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label class="form-label">
                                        Instagram
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="https://www.instagram.com/roxana-roussell/"
                                      />
                                    </div>
                                    <div class="mb-3">
                                      <label class="form-label">GitHub</label>
                                      <input
                                        type="text"
                                        class="form-control"
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
                          class="tab-pane fade"
                          id="password"
                          role="tabpanel"
                          aria-labelledby="password-tab"
                        >
                          <div class="card">
                            <div class="card-body">
                              <h6 class="card-title mb-4">Change Password</h6>
                              <div class="mb-3">
                                <label class="form-label">Old Password</label>
                                <input type="password" class="form-control" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">New Password</label>
                                <input type="password" class="form-control" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">
                                  New Password Repeat
                                </label>
                                <input type="password" class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div
                          class="tab-pane fade"
                          id="notification-settings"
                          role="tabpanel"
                          aria-labelledby="notification-settings-tab"
                        >
                          <div class="card">
                            <div class="card-body">
                              <h6 class="card-title mb-4">Notifications</h6>
                              <h6 class="mb-4">Activity Notifications</h6>
                              <div class="mb-5">
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      checked=""
                                      id="cs1"
                                    />
                                    <label class="form-check-label" for="cs1">
                                      Someone assigns me to a task
                                    </label>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      checked=""
                                      id="cs2"
                                    />
                                    <label class="form-check-label" for="cs2">
                                      Someone mentions me in a conversation
                                    </label>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      checked=""
                                      id="cs3"
                                    />
                                    <label class="form-check-label" for="cs3">
                                      Someone adds me to a project
                                    </label>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="cs4"
                                    />
                                    <label class="form-check-label" for="cs4">
                                      Activity on a project I am a member of
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <h6 class="mb-4">Service Notifications</h6>
                              <div>
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="cs5"
                                    />
                                    <label class="form-check-label" for="cs5">
                                      Monthly newsletter
                                    </label>
                                  </div>
                                </div>
                                <div class="mb-3">
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      checked=""
                                      id="cs6"
                                    />
                                    <label class="form-check-label" for="cs6">
                                      Major feature enhancements
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div class="form-check form-switch">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="cs7"
                                    />
                                    <label class="form-check-label" for="cs7">
                                      Minor updates and bug fixes
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div
                          class="tab-pane fade"
                          id="integrations"
                          role="tabpanel"
                          aria-labelledby="integrations-tab"
                        >
                          <div class="card widget">
                            <div class="card-header">
                              <h6 class="card-title">Integrations</h6>
                            </div>
                            <div class="card-body p-0 overflow-hidden">
                              <div class="list-group list-group-flush">
                                <div class="list-group-item p-4">
                                  <div class="d-md-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                      <figure class="mb-0 me-3">
                                        <img
                                          src="../../assets/svg/logo-integration-slack.svg"
                                          alt="..."
                                        />
                                      </figure>
                                      <div>
                                        <h5 class="mb-1">Slack</h5>
                                        <small class="text-muted">
                                          Permissions: Read, Write, Comment
                                        </small>
                                      </div>
                                    </div>
                                    <button class="btn btn-outline-danger mt-3 mt-md-0">
                                      Disconnect
                                    </button>
                                  </div>
                                </div>
                                <div class="list-group-item p-4">
                                  <div class="d-md-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                      <figure class="mb-0 me-3">
                                        <img
                                          src="../../assets/svg/logo-integration-drive.svg"
                                          alt="..."
                                        />
                                      </figure>
                                      <div>
                                        <h5 class="mb-1">Google Drive</h5>
                                        <small class="text-muted">
                                          Permissions: Read, Write
                                        </small>
                                      </div>
                                    </div>
                                    <button class="btn btn-outline-success mt-3 mt-md-0">
                                      Connect
                                    </button>
                                  </div>
                                </div>
                                <div class="list-group-item p-4">
                                  <div class="d-md-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                      <figure class="mb-0 me-3">
                                        <img
                                          src="../../assets/svg/logo-integration-dropbox.svg"
                                          alt="..."
                                        />
                                      </figure>
                                      <div>
                                        <h5 class="mb-1">Dropbox</h5>
                                        <small class="text-muted">
                                          Permissions: Read, Write, Upload
                                        </small>
                                      </div>
                                    </div>
                                    <button class="btn btn-outline-danger mt-3 mt-md-0">
                                      Disconnect
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card sticky-top mb-4 mb-md-0">
                        <div class="card-body">
                          <ul
                            class="nav nav-pills flex-column gap-2"
                            id="myTab"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <a
                                class="nav-link active"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="true"
                              >
                                <i class="bi bi-person me-2"></i> Profile
                              </a>
                            </li>
                            <li class="nav-item" role="presentation">
                              <a
                                class="nav-link"
                                id="password-tab"
                                data-bs-toggle="tab"
                                href="#password"
                                role="tab"
                                aria-controls="password"
                                aria-selected="false"
                              >
                                <i class="bi bi-lock me-2"></i> Password
                              </a>
                            </li>
                            <li class="nav-item" role="presentation">
                              <a
                                class="nav-link"
                                id="notification-settings-tab"
                                data-bs-toggle="tab"
                                href="#notification-settings"
                                role="tab"
                                aria-controls="notification-settings"
                                aria-selected="false"
                              >
                                <i class="bi bi-bell me-2"></i> Notifications
                              </a>
                            </li>
                            <li class="nav-item" role="presentation">
                              <a
                                class="nav-link"
                                id="integrations-tab"
                                data-bs-toggle="tab"
                                href="#integrations"
                                role="tab"
                                aria-controls="integrations"
                                aria-selected="false"
                              >
                                <i class="bi bi-arrow-down-up me-2"></i>{" "}
                                Integrations
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
