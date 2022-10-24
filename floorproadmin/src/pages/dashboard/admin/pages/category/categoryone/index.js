import React from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { CategoryEdit } from "../categoryedit";

export const CategoryOnePage = () => {
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
              <div className="col">
                <h2 className="DashboardOrderTitle my-3"> Category Details</h2>
                <CategoryEdit/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
