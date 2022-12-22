import React from "react";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { RecentOrderTable } from "../../components/tables/recentorder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import styled from 'styled-components';
import "./index.css";
import { right } from "@popperjs/core";

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
            <div className="col dashboard_analytics_box">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color">
                <h3>64.89 %</h3>
                <span>Total User</span>
              </div>
              <FontAwesomeIcon icon=""
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
              <div className="col dashboard_analytics_box ">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color">
                <h3>64.89 %</h3>
                <span>Total Monthy Sales</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-square-poll-vertical"
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
              <div className="col dashboard_analytics_box">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color">
                <h3>64.89 %</h3>
                <span>Total Sales/Day</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chart-pie"
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3">
              <div className="col dashboard_analytics_box">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color">
                <h3>64.89 %</h3>
                <span>Today Sales</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chart-line success font-large-2 float-left"
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
              <div className="col dashboard_analytics_box">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color">
                <h3>64.89 %</h3>
                <span>This Month Sales</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chart-simple"
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
              <div className="col dashboard_analytics_box">
              <div className="card-body">
            <div className="media d-flex">
              <div className="align-self-center">

              </div>
              <div className="media-body text-right chart-color" >
                <h3>64.89 %</h3>
                <span>Last Month Sales</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-chart-column"
              style={{
                position: 'relative',
                left: '60px',
                top: '20px',
                fontSize: '50px',
                color: '#fcc70e'
              }}
              />
            </div>
          </div>
              </div>
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
