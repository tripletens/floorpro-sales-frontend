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
            <div class="col-lg-9">
            <form>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="row gx-3">
                                                <div class="col-6  mb-3">
                                                    <label class="form-label">First name</label>
                                                    <input class="form-control" type="text" placeholder="Type here"/>
                                                </div> 
                                                <div class="col-6  mb-3">
                                                    <label class="form-label">Last name</label>
                                                    <input class="form-control" type="text" placeholder="Type here"/>
                                                </div>
                                                <div class="col-lg-6  mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input class="form-control" type="email" placeholder="example@mail.com"/>
                                                </div> 
                                                <div class="col-lg-6  mb-3">
                                                    <label class="form-label">Phone</label>
                                                    <input class="form-control" type="tel" placeholder="+1234567890"/>
                                                </div> 
                                                <div class="col-lg-12  mb-3">
                                                    <label class="form-label">Address</label>
                                                    <input class="form-control" type="text" placeholder="Type here"/>
                                                </div> 
                                                <div class="col-lg-6  mb-3">
                                                    <label class="form-label">Birthday</label>
                                                    <input class="form-control" type="date"/>
                                                </div> 
                                            </div> 
                                        </div> 
                                        <aside class="col-lg-4">
                                            <figure class="text-lg-center">
                                                <img class="img-lg mb-3 img-avatar" src="assets/imgs/people/avatar1.jpg" alt="User Photo"/>
                                                <figcaption>
                                                    <a class="btn btn-light rounded font-md" href="#">
                                                        <i class="icons material-icons md-backup font-md"></i> Upload
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </aside>
                                    </div> 
                                    <br/>
                                    <button class="btn btn-primary" type="submit">Save changes</button>
                                </form>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
