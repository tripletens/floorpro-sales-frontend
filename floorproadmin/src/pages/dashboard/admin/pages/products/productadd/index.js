import react from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";

const ProductAdd = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3">
              <div className="col">
                <h2 className="DashboardOrderTitle my-3">
                  {" "}
                  Add a new Product{" "}
                </h2>
    
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="name">Product Name: </label>
                            <input name="name" className="form-control" placeholder="Enter Product Name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="quantity">Product Quantity: </label>
                            <input name="quantity" className="form-control" placeholder="Enter Product Quantity"/>
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

export default ProductAdd;
