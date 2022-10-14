import React from "react";
import DashboardNavbar from "../../../admin/components/navbar";
import { AdminDashboard } from "../../../admin/pages/dashboard";
import { AdminSidebar } from "../../components/sidebar";
import "./index.css";

export const Salesorder = () => {
  return (
    <>
    <DashboardNavbar/>
    <AdminSidebar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0"></div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-12">
          <div className="row gx-2">
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box "></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_box"></div>
          </div>
          <div className="row gx-2">
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_boxs"></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_boxs "></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_boxs"></div>
            <div className="col-md-4 col-sm-12 col-xs-12 dashboard_details_boxs"></div>
          </div>
          <div className="row gx-2">
            <table className="table table-bordered details_box">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
