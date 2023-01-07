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
              <div class="content__boxed bg-gray-500 my-3 pt-3">
                <div class="content__wrap">
                  <div class="content__boxed">
                    <div class="content__wrap">
                      {/* <!-- Table with toolbar --> */}
                      <div class="card">
                        <div class="card-header">
                          <h5 class="card-title mb-3">All messages</h5>
                          
                        </div>
                        <MessageTable/>
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
