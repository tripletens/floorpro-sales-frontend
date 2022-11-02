import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { AllProductsTable } from "../../components/tables/allproducts";
import "./index.css";

export const AdminDashboardProducts = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row">
              <div className="float-right">
                <button className="View">
                  
                </button>
              </div>
            </div>
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className="col">
                <h2 className="DashboardOrderTitle my-3"> All Products</h2>
                <AllProductsTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
