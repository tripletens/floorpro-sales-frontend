import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../../helpers";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { AppointmentTable } from "../../components/tables/appointment";
// import styled from 'styled-components';
import "./index.css";

export const AdminDashboardAppointment = () => {
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
              <div class="content__boxed bg-gray-500 my-3 pt-3">
                <div class="content__wrap">
                  <div class="content__boxed">
                    <div class="content__wrap">
                      {/* <!-- Table with toolbar --> */}
                      <div class="card">
                        <div class="card-header">
                          <h5 class="card-title mb-3">Appointment</h5>
                          
                        </div>
                        <AppointmentTable/>
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
