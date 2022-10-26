import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../../components/navbar";
import { AdminSidebar } from "../../components/sidebar";
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
                          <div class="row">
                            {/* <!-- Left toolbar --> */}
                            <div class="col-md-6 d-flex gap-1 align-items-center mb-3">
                              <button class="btn btn-primary hstack gap-2 align-self-center">
                                <i class="demo-psi-add fs-5"></i>
                                <span class="vr"></span>
                                Add New
                              </button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-printer"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                              </svg>
                              <div class="btn-group">
                                <button
                                  class="btn btn-icon btn-outline-light"
                                  aria-label="Information"
                                >
                                  <i class="demo-pli-exclamation fs-5"></i>
                                </button>
                                <button
                                  class="btn btn-icon btn-outline-light"
                                  aria-label="Remove"
                                >
                                  <i class="demo-pli-recycling fs-5"></i>
                                </button>
                              </div>
                            </div>
                            {/* <!-- END : Left toolbar --> */}

                            {/* <!-- Right Toolbar --> */}
                            <div class="col-md-6 d-flex gap-1 align-items-center justify-content-md-end mb-3">
                              <div class="form-group">
                                <input
                                  type="text"
                                  placeholder="Search..."
                                  class="form-control"
                                  autocomplete="off"
                                />
                              </div>
                              <div class="btn-group">
                                <button
                                  class="btn btn-icon btn-outline-light"
                                  aria-label="Download"
                                >
                                  <i class="demo-pli-download-from-cloud fs-5"></i>
                                </button>
                                <div class="btn-group dropdown">
                                  <button
                                    class="btn btn-icon btn-outline-light dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <span class="visually-hidden">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                    <li>
                                      <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        Separated link
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- END : Right Toolbar --> */}
                          </div>
                        </div>

                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th>Invoice</th>
                                  <th>User</th>
                                  <th>Order date</th>
                                  <th>Amount</th>
                                  <th class="text-center">Status</th>
                                  <th class="text-center">Tracking Number</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      {" "}
                                      Order #53431
                                    </a>
                                  </td>
                                  <td>Steve N. Horton</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 22,
                                      2021
                                    </span>
                                  </td>
                                  <td>$45.00</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-success">
                                      Paid
                                    </div>
                                  </td>
                                  <td class="text-center">-</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      {" "}
                                      Order #53432
                                    </a>
                                  </td>
                                  <td>Charles S Boyle</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 24,
                                      2021
                                    </span>
                                  </td>
                                  <td>$245.30</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-info">
                                      Shipped
                                    </div>
                                  </td>
                                  <td class="text-center">CGX0089734531</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      {" "}
                                      Order #53433
                                    </a>
                                  </td>
                                  <td>Lucy Doe</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 24,
                                      2021
                                    </span>
                                  </td>
                                  <td>$38.00</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-info">
                                      Shipped
                                    </div>
                                  </td>
                                  <td class="text-center">CGX0089934571</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      {" "}
                                      Order #53434
                                    </a>
                                  </td>
                                  <td>Teresa L. Doe</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 15,
                                      2021
                                    </span>
                                  </td>
                                  <td>$77.99</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-info">
                                      Shipped
                                    </div>
                                  </td>
                                  <td class="text-center">CGX0089734574</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      {" "}
                                      Order #53435
                                    </a>
                                  </td>
                                  <td>Teresa L. Doe</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 12,
                                      2021
                                    </span>
                                  </td>
                                  <td>$18.00</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-success">
                                      Paid
                                    </div>
                                  </td>
                                  <td class="text-center">-</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      Order #53437
                                    </a>
                                  </td>
                                  <td>Charles S Boyle</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 17,
                                      2021
                                    </span>
                                  </td>
                                  <td>$658.00</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-danger">
                                      Refunded
                                    </div>
                                  </td>
                                  <td class="text-center">-</td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#" class="btn-link">
                                      Order #536584
                                    </a>
                                  </td>
                                  <td>Scott S. Calabrese</td>
                                  <td>
                                    <span class="text-muted">
                                      <i class="demo-pli-clock"></i> Oct 19,
                                      2021
                                    </span>
                                  </td>
                                  <td>$45.58</td>
                                  <td class="text-center fs-5">
                                    <div class="d-block badge bg-warning">
                                      Unpaid
                                    </div>
                                  </td>
                                  <td class="text-center">-</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <nav
                            class="text-align-center mt-5"
                            aria-label="Table navigation"
                          >
                            <ul class="pagination justify-content-center">
                              <li class="page-item disabled">
                                <a class="page-link" href="#">
                                  Previous
                                </a>
                              </li>
                              <li class="page-item active" aria-current="page">
                                <span class="page-link">1</span>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li class="page-item disabled">
                                <a class="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      {/* <!-- END : Table with toolbar --> */}
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
