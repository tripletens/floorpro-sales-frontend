import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchProductsByIdQuery } from "../../../../../../store/product/api";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { ProductDetails, ProductPage } from "../productdetails";

export const ProductOnePage = () => {
  const { id: productId } = useParams();
  const {
    isLoading: fetchproductsByIdIsLoading,
    isError: fetchproductsByIdIsError,
    error: fetchproductsByIdError,
    data: fetchproductsByIdData,
  } = useFetchProductsByIdQuery(productId);

  console.log({ fetchproductsByIdData });
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
                <h2 className="DashboardOrderTitle my-3"> Product Details</h2>
                <div className="float-end row">
                  <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                    <Link to={`/admin-dashboard/products`}>
                      {" "}
                      <button className="px-2 py-2 my-2 add-btn">
                        {" "}
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
                        <span className="m-1">View all products</span>{" "}
                      </button>{" "}
                    </Link>
                  </div>
                </div>
                <ProductDetails
                  data={fetchproductsByIdData ? fetchproductsByIdData.data : []}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
