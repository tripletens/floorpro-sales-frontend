import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import "./index.css";

export const AdminDashboard = () => {
  return (
    <>
      <DashboardNavbar/>
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-12">
          <div className="row gx-2">
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box "></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
          </div>
          <div className="row gx-2">
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box "></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
