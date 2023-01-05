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
              <div class="content__boxed bg-gray-500 my-3 pt-3">
                <div class="content__wrap">
                  <div class="content__boxed">
                    <div class="content__wrap">
                      {/* <!-- Table with toolbar --> */}
                      <div class="card">
                        <div class="card-header">
                          <h5 class="card-title mb-3">Order Status</h5>
                          
                        </div>
                        <AllOrderTable/>
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
