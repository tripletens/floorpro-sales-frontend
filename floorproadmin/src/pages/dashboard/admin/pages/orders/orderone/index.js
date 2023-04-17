import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link, useParams } from "react-router-dom";
import {
  formatDate,
  get_current_day_and_time,
} from "../../../../../../helpers";
import {
  useDeleteOrdersByRefQuery,
  useFetchOrderByRefQuery,
  useGenerateInvoiceQuery,
} from "../../../../../../store/orders/api";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import "./index.css";
import EditOrderModal from "../../../components/modals/editorder";
import { Base64 } from "js-base64";
import { saveAs } from "file-saver";
import fileDownload from "react-file-download";

export const OrderOne = () => {
  const { ref: orderRef } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const [pdfData, setPdfData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isLoading: fetchOrderByRefIsLoading,
    isError: fetchOrderByRefIsError,
    error: fetchOrderByRefError,
    data: fetchOrderByRefData,
  } = useFetchOrderByRefQuery(orderRef);

  const {
    isLoading: generateInvoiceIsLoading,
    isError: generateInvoiceIsError,
    error: generateInvoiceError,
    data: generateInvoiceData,
  } = useGenerateInvoiceQuery(orderRef);

  console.log("generate invoice ", generateInvoiceData);

  // const {
  //   isLoading: DeleteOrderByRefIsLoading,
  //   isError: DeleteOrderByRefIsError,
  //   error: DeleteOrderByRefError,
  //   data: DeleteOrderByRefData,
  // } = useDeleteOrdersByRefQuery(orderRef);

  console.log("order_details", { fetchOrderByRefData });

  useEffect(() => {
    if (fetchOrderByRefData && fetchOrderByRefData.data) {
      setOrderDetails(fetchOrderByRefData.data);
    }

    if (generateInvoiceData && generateInvoiceData.data) {
      setPdfData(generateInvoiceData.data);
    }
  }, [orderDetails,pdfData]);

  // console.log("products", { orderDetails.address });

  const sumTotal =
    orderDetails && orderDetails.products
      ? orderDetails.products.reduce((accumulator, object) => {
          return accumulator + object.order_products_total_price;
        }, 0)
      : 0;

  const base64Data = generateInvoiceData ? generateInvoiceData.data : null;
  const fileName = "invoice.pdf";


  const base64ToPDF = () => {
    // Decode base64 string to binary data
    const base64Data = generateInvoiceData ? generateInvoiceData.data : null;

    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
  
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
  
    const url = URL.createObjectURL(blob,'invoice.pdf');
    window.open(url);
  }

  return (
    <>
      <DashboardNavbar />
      <div className="row gx-5">
        <div className="col-md-3 col-sm-3 col-lg-2">
          <AdminSidebar />
        </div>
        <div className="col-md-8 col-sm-8 col-lg-10 ml-3 ">
          <div className="row gx-5 my-3 rightbox">
            <h2 className="DashboardOrderTitleOrder my-3 col-md-4">
              {" "}
              Order Details
            </h2>
            <Link
              to={`/admin-dashboard/orders`}
              className="col-md-8 float-end mb-3"
            >
              <button className="px-2 py-2 mx-2 add-btn float-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <span className="m-1">View all orders</span>
              </button>
            </Link>
          </div>
          <div className="row gx-3 rightbox">
            <div className="col-md-6">
              <div style={{ height: "auto" }}>
                <div className="mt-1 mb-5 p-auto">
                  {orderDetails ? (
                    <>
                      <div className="card mb-4">
                        <div class="card-body">
                          <div class="mb-5 d-flex align-items-center justify-content-between">
                            <span>
                              Order No : <a href="#">{orderDetails.ref}</a>
                            </span>
                            {/* <span class="badge bg-success">Completed</span> */}
                          </div>
                          <div class="row mb-5 g-4">
                            <div class="col-md-3 col-sm-6">
                              <p class="fw-bold">Date Ordered</p>
                              {get_current_day_and_time(
                                orderDetails.created_at
                              )}
                            </div>
                            <div class="col-md-3 col-sm-6">
                              <p class="fw-bold">Name</p>
                              {orderDetails.first_name},{" "}
                              {orderDetails.last_name}
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
                          {/* <div class="row">
                          <div class="col-md-6 col-sm-12"> */}
                          <div class="card">
                            <div class="card-body d-flex flex-column">
                              <div class="d-flex justify-content-between">
                                <h5 class="mb-0">Delivery Address</h5>
                              </div>

                              <div>{orderDetails.address}</div>
                              <div>
                                <i class="bi bi-telephone me-2"></i>{" "}
                                {orderDetails.phone}
                              </div>
                            </div>
                            {/* </div>
                          </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="btn-order mx-5">
                        {/* <Link to={``}> */}{" "}
                        <button
                          className="px-2 py-2 my-2 add-btn"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
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
                        {/* </Link> */}
                        <EditOrderModal data={orderDetails} />
                        <Link to={`#`}>
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
                        <Link to={`#`}>
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
                    </>
                  ) : (
                    <>
                      <p className="alert alert-info">
                        Sorry we could not fetch order details
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ height: "auto" }}>
                <div className="mt-1 mb-5 p-3">
                  {orderDetails ? (
                    <>
                      <div class="card mb-4">
                        <div class="card-body">
                          <div class="col mb-3 text-center">
                            <h3 class="col">Total </h3>
                            <h3 class="col">
                              <strong>
                                {orderDetails && orderDetails.products
                                  ? "₦‎" + sumTotal.toFixed(2)
                                  : "N/A"}
                              </strong>
                            </h3>
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
                            <button
                              disabled={isLoading}
                              onClick={base64ToPDF}
                              class="btn btn-outline-primary"
                            >
                              {isLoading ? "Downloading..." : "Download PDF"}
                            </button>
                            {/* <button onClick={downloadBase64File(base64Data, fileName)} class="btn btn-outline-primary"> */}
                            {/* onClick={window.open("data:application/pdf;base64," + Base64.decode(pdfData),"_blank") */}
                            {/* window.open("data:application/pdf;base64," + Base64.encode(pdfData))} download class="btn btn-outline-primary"> */}
                            {/* Download PDF */}
                            {/* </button> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="alert alert-info">
                        Sorry we could not fetch order details
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-3 rightbox">
            <div className="col-md-12 col-lg-12 px-3">
              <div class="card widget mt-5 mx-3">
                <h5 class="card-header">Order Items</h5>
                <div class="card-body">
                  <div
                    class="table-responsive"
                    tabindex="1"
                    style={{ overflow: "hidden", outline: " none" }}
                  >
                    <table class="table table-responsive table-custom mb-0">
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
                                <tr key={key}>
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
                                  <td>{item.ordered_product_quantity}</td>
                                  <td>
                                    {" "}
                                    ₦‎{" "}
                                    {item.order_products_unit_price.toFixed(2)}
                                  </td>
                                  <td>
                                    {" "}
                                    ₦‎{" "}
                                    {item.order_products_total_price.toFixed(2)}
                                  </td>
                                  <td>
                                    {item.product_status == 0 ? (
                                      <span class="badge bg-danger">
                                        {" "}
                                        not available
                                      </span>
                                    ) : item.product_status == 1 ? (
                                      <span class="badge bg-success">
                                        Completed
                                      </span>
                                    ) : (
                                      <span class="badge bg-primary">
                                        Pending
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })
                        ) : (
                          <>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="alert alert-primary">
                                  Sorry no product in the order.
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </tbody>
                    </table>
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
