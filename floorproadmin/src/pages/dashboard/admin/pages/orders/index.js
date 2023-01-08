import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { AllOrderTable } from "../../components/tables/allorder";

// import styled from 'styled-components';
import "./index.css";

export const AdminDashboardOrders = () => {
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
              <div class="border-0 mb-4">
                <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 class="fw-bold mb-3">Orders List</h3>
                  {/*  */}
                  <AllOrderTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
