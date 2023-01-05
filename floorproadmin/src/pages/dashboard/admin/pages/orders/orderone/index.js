import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProductsByIdQuery } from "../../../../../../store/product/api";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { ProductDetails, ProductPage } from "../productdetails";

export const OrderOnePage = () => {
  const{ id: orderId } = useParams();
  const {
    isLoading: fetchproductsByIdIsLoading,
    isError: fetchproductsByIdIsError,
    error: fetchproductsByIdError,
    data: fetchproductsByIdData,
  } = useFetchProductsByIdQuery(orderId);

  console.log({fetchproductsByIdData});
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
                <ProductDetails data={fetchproductsByIdData ? fetchproductsByIdData.data : []}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
