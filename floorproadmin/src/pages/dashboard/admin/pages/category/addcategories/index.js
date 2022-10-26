import React from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { CategoryEdit } from "../categoryedit";

export const AddCategoryPage = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0">Categories Add</h3>
                                <button type="submit" class="btn btn-primary py-2 px-5 text-uppercase btn-set-task w-sm-100">Save</button>
                            </div>
                        </div>
                    </div>
      </div>
    </>
  );
};
