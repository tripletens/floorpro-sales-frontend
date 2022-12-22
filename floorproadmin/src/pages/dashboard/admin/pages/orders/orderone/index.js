import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link, useParams } from "react-router-dom";
import {
  formatDate,
  get_current_day_and_time,
} from "../../../../../../helpers";
import { useDeleteOrderQuery, useFetchOrderByRefQuery } from "../../../../../../store/orders/api";
import "./index.css";

export const OrderOne = () => {
  const { ref: orderRef } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const {
    isLoading: fetchOrderByRefIsLoading,
    isError: fetchOrderByRefIsError,
    error: fetchOrderByRefError,
    data: fetchOrderByRefData,
  } = useFetchOrderByRefQuery(orderRef);

  const {
    isLoading: DeleteOrderByRefIsLoading,
    isError: DeleteOrderByRefIsError,
    error: DeleteOrderByRefError,
    data: DeleteOrderByRefData,
  } = useDeleteOrderQuery(orderRef);
  

  useEffect(() => {
    if (fetchOrderByRefData && fetchOrderByRefData.data) {
      setOrderDetails(fetchOrderByRefData.data);
    }
  }, [orderDetails]);
  console.log({ orderDetails });

  return (
    <>
      <div className="container mt-5 mb-5">
        {orderDetails ? (
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="card mb-4">
                <div class="card-body">
                  <div class="mb-5 d-flex align-items-center justify-content-between">
                    <span>
                      Order No : <a href="#">{orderDetails.ref}</a>
                    </span>
                    <span class="badge bg-success">Completed</span>
                  </div>
                  <div class="row mb-5 g-4">
                    <div class="col-md-3 col-sm-6">
                      <p class="fw-bold">Date Ordered</p>
                      {get_current_day_and_time(orderDetails.created_at)}
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <p class="fw-bold">Name</p>
                      {orderDetails.first_name}, {orderDetails.last_name}
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <p class="fw-bold">Email</p>
                      {orderDetails.email}
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <p class="fw-bold">Contact No</p>
                      {orderDetails.phone}
                    </div>
                  </div>
                  <div class="row g-4">
                    <div class="col-md-6 col-sm-12">
                      <div class="card">
                        <div class="card-body d-flex flex-column gap-3">
                          <div class="d-flex justify-content-between">
                            <h5 class="mb-0">Delivery Address</h5>
                            <a href="#">Edit</a>
                          </div>
                          <div>Name: Home</div>
                          <div>
                            {orderDetails.first_name}, {orderDetails.last_name}{" "}
                          </div>
                          <div>{orderDetails.address}</div>
                          <div>
                            <i class="bi bi-telephone me-2"></i>{" "}
                            {orderDetails.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <div class="card">
                        <div class="card-body d-flex flex-column gap-3">
                          <div class="d-flex justify-content-between">
                            <h5 class="mb-0">Billing Address</h5>
                            <a href="#">Edit</a>
                          </div>
                          <div>Name: Workplace</div>
                          <div>
                            {orderDetails.first_name}, {orderDetails.last_name}
                          </div>
                          <div>{orderDetails.address}</div>
                          <div>
                            <i class="bi bi-telephone me-2"></i>{" "}
                            {orderDetails.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 mt-4 mt-lg-0">
              <div class="card mb-4">
                <div class="card-body">
                  <h6 class="card-title mb-4">Price</h6>
                  <div class="row  mb-3">
                    <div class="col-5 ">Sub Total :</div>
                    <div class="col-4">{orderDetails.price ?? "N/A"}</div>
                  </div>
                  <div class="row  mb-3">
                    <div class="col-5">Shipping :</div>
                    <div class="col-4">Free</div>
                  </div>
                  <div class="row ">
                    <div class="col-4 text-end">
                      <strong>Total :</strong>
                    </div>
                    <div class="col-4">
                      <strong>{orderDetails.total_price ?? "N/A"}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title mb-4">Invoice</h6>
                  <div class="row justify-content-center mb-3">
                    <div class="col-6 text-end">Invoice No :</div>
                    <div class="col-6">
                      <a href="#">{orderDetails.ref}</a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <button class="btn btn-outline-primary">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-order">
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
                  <span className="m-1">Edit Order</span>{" "}
                </button>{" "}
              </Link>
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
                  <span className="m-1">Delete Order</span>{" "}
                </button>{" "}
              </Link>
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
                  <span className="m-1">Cancel Order</span>{" "}
                </button>{" "}
              </Link>
            </div>

            <div class="card widget mt-5">
              <h5 class="card-header">Order Items</h5>
              <div class="card-body">
                <div
                  class="table-responsive"
                  tabindex="1"
                  style={{ overflow: "hidden", outline: " none" }}
                >
                  <table class="table table-custom mb-0">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails && orderDetails.products ? (
                        orderDetails.products.map((item, key) => {
                          return (
                            <>
                              {/* category_name product_description product_img_url
                            product_name product_price product_quantity
                            product_square_meter product_status */}
                              <tr>
                                <td>
                                  <a href="#">
                                    <img
                                      src={item.product_img_url}
                                      className="rounded"
                                      width="60"
                                      alt="Product image"
                                    />
                                  </a>
                                </td>
                                <td>{item.product_name}</td>
                                <td>{item.product_quantity}</td>
                                <td>{item.product_price}</td>
                                <td>{item.product_square_meter}</td>
                                <td>
                                    {item.product_status == 0 ? <span class="badge bg-danger"> not available</span> : (item.product_status == 1 ? <span class="badge bg-success">Completed</span> : <span class="badge bg-primary">Pending</span>)}</td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <p className="alert alert-info">
                            Sorry no product in the order.
                          </p>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="alert alert-info">
              Sorry we could not fetch order details
            </p>
          </>
        )}
      </div>
    </>
  );
};
