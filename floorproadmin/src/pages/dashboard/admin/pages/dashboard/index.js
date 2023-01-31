import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { RecentOrderTable } from "../../components/tables/recentorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import styled from 'styled-components';
import "./index.css";
import { right } from "@popperjs/core";

export const AdminDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row dashboard">
        <div className="col-md-2 col-lg-2">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-lg-10 dashboard-content">
          <div className="container-fluid ">
            <div className="row gy-5 mx-3 mb-3 dashboard-content-box">
              <div className="col dashboard_analytics_box ">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>Total User</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon=""
                    />
                  </div>
                </div>
              </div>
              <div className="col dashboard_analytics_box ">
                <div className="card-body">
                  <div className="media d-flex chart-box">
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>Total Monthy Sales</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon="fa-solid fa-square-poll-vertical"
                    />
                  </div>
                </div>
              </div>
              <div className="col dashboard_analytics_box">
                <div className="card-body">
                  <div className="media d-flex chart-box">
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>Total Sales/Day</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon="fa-solid fa-chart-pie"
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="row gx-5 mx-3 my-3 dashboard-content-box">
              <div className="col dashboard_analytics_box">
                <div className="card-body">
                  <div className="media d-flex chart-box" >
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>Today Sales</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon="fa-solid fa-chart-line success font-large-2 float-left"
                    />
                  </div>
                </div>
              </div>
              <div className="col dashboard_analytics_box">
                <div className="card-body">
                  <div className="media d-flex chart-box">
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>This Month Sales</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon="fa-solid fa-chart-simple"
                    />
                  </div>
                </div>
              </div>
              <div className="col dashboard_analytics_box">
                <div className="card-body">
                  <div className="media d-flex chart-box">
                    <div className="align-self-center"></div>
                    <div className="media-body text-right chart-color">
                      <h3>64.89 %</h3>
                      <span>Last Month Sales</span>
                    </div>
                    <FontAwesomeIcon
                    className="chart-icon"
                      icon="fa-solid fa-chart-column"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-fluid ">
            <div className="row gx-5 mx-3 my-3 px-5 ">
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
