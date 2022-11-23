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
          {/* <div className="container-fluid"> */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  name="name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Product Price"
                  name="price"
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default ProductAdd;
