import React, { useEffect, useState } from "react";
import { useFetchRecentOrdersQuery } from "../../../../../store/orders/api";

export const RecentOrderTable = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const {
    isLoading: fetchRecentOrdersIsLoading,
    isError: fetchRecentOrdersIsError,
    error: fetchRecentOrdersError,
    data: fetchRecentOrdersData,
  } = useFetchRecentOrdersQuery();

  //   console.log({fetchRecentOrdersData});
  useEffect(() => {
    if (fetchRecentOrdersData && fetchRecentOrdersData.data) {
      setRecentOrders(fetchRecentOrdersData.data);
      console.log(recentOrders);
    }
  }, [recentOrders]);
  return (
    <>
      {fetchRecentOrdersData && fetchRecentOrdersData.data.fetchRecentOrdersErrorlength > 0 ? (
        <table
          id="dashboard_order_table"
          className="table table-striped table-centered"
          style={{ width: "100%", margin: "20px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Order Id </th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Delivery date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fetchRecentOrdersData && fetchRecentOrdersData.data 
              ? fetchRecentOrdersData.data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        {item.first_name} {item.last_name}
                      </td>
                      <td>
                        <span className="badge badge-pill badge-primary">{item.ref}</span>
                      </td>
                      <td>Edinburgh</td>
                      <td>51</td>
                      <td>2008-11-13</td>
                      <td>
                        <a href="#" className="product-eye">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </a>
                        <a href="#" className="product-eye">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a href="#" className="product-eye">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Order Id </th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Delivery date</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <>
          <div
            className="spinner-border text-primary d-flex justify-content-center align-items-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      )}
    </>
  );
};