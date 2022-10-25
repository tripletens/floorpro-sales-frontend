import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
// import styled from 'styled-components';
import "./index.css";

export const AdminDashboardCategory = () => {
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
              <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0">Categorie List</h3>
                                <a href="categories-add.html" class="btn btn-primary py-2 px-5 btn-set-task w-sm-100"><i class="icofont-plus-circle me-2 fs-6"></i> Add Categories</a>
                            </div>
                        </div>
                    </div>
                <table
                  id="dashboard_order_table"
                  className="table table-striped table-centered"
                  style={{ width: "100%", margin: "20px" }}
                >
                  <thead>
                    <tr role="row">
                      <th rowspan="1" colspan="1" >Product ID</th>
                      <th>Category</th>
                      <th>Status </th>
                      <th>Date </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>   
                                        <tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1"><strong>#0001</strong></td>
                                                <td>Watch</td>
                                                <td class=" dt-body-right">March 13, 2021</td>
                                                <td><span class="badge bg-success">Published</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="bi bi-pencil-square"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1"><strong>#0002</strong></td>
                                                <td>Toy</td>
                                                <td class=" dt-body-right">January 14, 2021</td>
                                                <td><span class="badge bg-warning">Scheduled</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1"><strong>#0003</strong></td>
                                                <td>Laptop</td>
                                                <td class=" dt-body-right">February 08, 2021</td>
                                                <td><span class="badge bg-success">Published</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1"><strong>#0004</strong></td>
                                                <td>Mobile</td>
                                                <td class=" dt-body-right">April  02, 2021</td>
                                                <td><span class="badge bg-warning">Scheduled</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1"><strong>#0005</strong></td>
                                                <td>Tv</td>
                                                <td class=" dt-body-right">June 19, 2021</td>
                                                <td><span class="badge bg-success">Published</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1"><strong>#0006</strong></td>
                                                <td>Cloths</td>
                                                <td class=" dt-body-right">April 10, 2021</td>
                                                <td><span class="badge bg-warning">Scheduled</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1"><strong>#0007</strong></td>
                                                <td>Footwear</td>
                                                <td class=" dt-body-right">May 11, 2021</td>
                                                <td><span class="badge bg-success">Published</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1"><strong>#0008</strong></td>
                                                <td>Kitchenware</td>
                                                <td class=" dt-body-right">June 13, 2021</td>
                                                <td><span class="badge bg-danger">Hidden</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="odd">
                                                <td tabindex="0" class="sorting_1"><strong>#0009</strong></td>
                                                <td>Beautywear</td>
                                                <td class=" dt-body-right">June 13, 2021</td>
                                                <td><span class="badge bg-danger">Hidden</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr><tr role="row" class="even">
                                                <td tabindex="0" class="sorting_1"><strong>#0010</strong></td>
                                                <td>Game accessories</td>
                                                <td class=" dt-body-right">February 13, 2021</td>
                                                <td><span class="badge bg-success">Published</span></td>
                                                <td class=" dt-body-right">
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                        <a href="categories-edit.html" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></a>
                                                        <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </td>
                                            </tr></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
