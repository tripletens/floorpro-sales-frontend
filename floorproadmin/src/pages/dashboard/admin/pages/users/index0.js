import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import "./index.css";

export const AdminDashboardUsers0 = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3">
            <div class="card mb-5 mb-xl-10">

              <div class="container mb-5 mb-xl-10">
                <h1 class="text-primary">Edit Profile</h1>
                <hr />
                <div class="row">
                  <div class="col-md-3">
                    <div class="text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        class="avatar img-circle img-thumbnail"
                        alt="avatar"
                      />
                      <h6>Upload a different photo...</h6>

                      <input type="file" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-9 personal-info">
                    <div class="alert alert-info alert-dismissable">
                      <a class="panel-close close" data-dismiss="alert">
                        ×
                      </a>
                      <i class="fa fa-coffee"></i>
                      This is an <strong>.alert</strong>. Use this to show
                      important messages to the user.
                    </div>
                    <h3>Personal info</h3>

                    <form class="form-horizontal" role="form">
                      <div class="form-group">
                        <label class="col-lg-3 control-label">
                          First name:
                        </label>
                        <div class="col-lg-8">
                          <input
                            class="form-control"
                            type="text"
                            value="dey-dey"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-3 control-label">Last name:</label>
                        <div class="col-lg-8">
                          <input
                            class="form-control"
                            type="text"
                            value="bootdey"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-3 control-label">Company:</label>
                        <div class="col-lg-8">
                          <input class="form-control" type="text" value="" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-3 control-label">Email:</label>
                        <div class="col-lg-8">
                          <input
                            class="form-control"
                            type="text"
                            value="janesemail@gmail.com"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-3 control-label">Time Zone:</label>
                        <div class="col-lg-8">
                          <div class="ui-select">
                            <select id="user_time_zone" class="form-control">
                              <option value="Hawaii">(GMT-10:00) Hawaii</option>
                              <option value="Alaska">(GMT-09:00) Alaska</option>
                              <option value="Pacific Time (US &amp; Canada)">
                                (GMT-08:00) Pacific Time (US &amp; Canada)
                              </option>
                              <option value="Arizona">
                                (GMT-07:00) Arizona
                              </option>
                              <option value="Mountain Time (US &amp; Canada)">
                                (GMT-07:00) Mountain Time (US &amp; Canada)
                              </option>
                              <option
                                value="Central Time (US &amp; Canada)"
                                selected="selected"
                              >
                                (GMT-06:00) Central Time (US &amp; Canada)
                              </option>
                              <option value="Eastern Time (US &amp; Canada)">
                                (GMT-05:00) Eastern Time (US &amp; Canada)
                              </option>
                              <option value="Indiana (East)">
                                (GMT-05:00) Indiana (East)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
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
