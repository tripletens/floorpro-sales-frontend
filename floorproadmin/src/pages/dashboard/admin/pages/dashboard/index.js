import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { RecentOrderTable } from "../../components/tables/recentorder";
// import styled from 'styled-components';
import "./index.css";

export const AdminDashboard = () => {
  return (
    <>
      
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row gx-5 mx-3 mb-3">
              <div className="col dashboard_analytics_box">Column</div>
              <div className="col dashboard_analytics_box">Column</div>
              <div className="col dashboard_analytics_box">Column</div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3">
              <div className="col dashboard_analytics_box">Column</div>
              <div className="col dashboard_analytics_box">Column</div>
              <div className="col dashboard_analytics_box">Column</div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className="col">
                <h2 className="DashboardOrderTitle my-3"> Recent Orders</h2>
                  <RecentOrderTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
