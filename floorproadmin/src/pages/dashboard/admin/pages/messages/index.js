import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../../helpers";
import { useFetchCategoriesQuery } from "../../../../../store/category/api";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
import { MessageTable } from "../../components/tables/message";
// import styled from 'styled-components';
import "./index.css";

export const AdminDashboardMessages = () => {
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
                  <h3 class="fw-bold mb-0">Messages List</h3>
                  <Link to={`add`}>
                    {" "}
                    
                    <button className="px-2 py-2 my-2 add-btn">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-circle-fill mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <span className="m-1">Add</span>{" "}
                    </button>{" "}
                  </Link>
                  <AllMessagesTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
