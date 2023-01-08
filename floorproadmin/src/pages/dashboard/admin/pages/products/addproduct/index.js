import { useFormik } from "formik";
import React, { useState } from "react";
import { useFetchCategoriesQuery } from "../../../../../../store/category/api";
import { useAddProductMutation } from "../../../../../../store/product/api";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { AddProductValidation } from "./validator";
import { ToastContainer, toast } from "react-toastify";

export const AddProductPage = () => {
  const [selectedFile, setSelectedFile] = useState();
  // fetch the categories
  const {
    isLoading: fetchCategoriesIsLoading,
    isError: fetchCategoriesIsError,
    error: fetchCategoriesError,
    data: fetchCategoriesData,
  } = useFetchCategoriesQuery();

  const [
    AddProductMutation,
    {
      isLoading: addProductIsLoading,
      isError: addProductIsError,
      data: addProductData,
      error: addProductError,
    },
  ] = useAddProductMutation();

  const handleFileChange = (e) => {
    if (e.target.files) {
      // URL.createObjectURL
      setSelectedFile(e.target.files[0]);
    }
  };

  console.log("file", selectedFile);

  const AddProductFunction = (values, action) => {
    console.log("hello work in progress");
    
    const formData = new FormData();

		formData.append('image', selectedFile);

    values = {...values, image: formData}

    console.log({ values, action ,formData });


    AddProductMutation(values)
      .unwrap()
      .then((res) => {
        // dispatch(setToken(res.data.token));
        // dispatch(setUser(userData));
        console.log("res status", res);
        if (res.status && res.status === "success") {
          console.log("product addition successful");

          // navigate("/admin-dashboard", { replace: true });

          return toast.success(`Product added successfully!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((e) => {
        if (e.data && e.data.status === "error") {

          if(e.data.message.image[0]){
            return toast.error(`${e.data.message.image[0]}!`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }

          return toast.error(`${e.data.message}!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        if (e.data && e.data.status === "FETCH_ERROR") {
          return toast.error(`Please connect to the internet to continue!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log("error", e);
      });
  };

  {
    /* name, quantity, price, image, description, square_meter,category_id, vendor_id */
  }
  // form validation
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      price: "",
      // image: "",
      description: "",
      square_meter: "",
      product_category: "",
    },
    validationSchema: AddProductValidation,
    onSubmit: AddProductFunction,
  });

  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-2 col-lg-2 col-xs-2">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-10 col-lg-10 col-xs-0">
          {/* <div className="container-fluid"> */}
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className=" bg-gray-500 my-3 pt-3">
                <div className="content__wrap">
                  <div className="content__boxed">
                    <div className="content__wrap">
                      {/* <!-- Table with toolbar --> */}
                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="card-title mb-3">
                              Add a New Product
                            </h5>
                          </div>
                          <div className="card-body">
                            <form encType="multipart/form-data" method="POST">
                              {/* name, quantity, price, image, description, square_meter,category_id, vendor_id */}
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="productname"
                                      name="name"
                                      placeholder="Enter Product Name"
                                      onChange={handleChange}
                                    />
                                    {touched.name ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.name}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Quantity:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="productquantity"
                                      min={"0"}
                                      name="quantity"
                                      placeholder="Enter Product Quantity"
                                      onChange={handleChange}
                                    />
                                    {touched.quantity ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.quantity}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Price:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="productprice"
                                      min={"0"}
                                      name="price"
                                      placeholder="Enter Product Price"
                                      onChange={handleChange}
                                    />
                                    {touched.price ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.price}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Available Square Meter:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="avaliable_square_meter"
                                      min={"0"}
                                      name="square_meter"
                                      placeholder="Enter Available Square Meter"
                                      onChange={handleChange}
                                    />
                                    {touched.square_meter ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.square_meter}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                  {/* name, quantity, price, image, description, square_meter,category_id, vendor_id */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Image: <span className="login_password_alert">*</span>
                                    </label>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="form-control"
                                      id="image"
                                      name="image"
                                      placeholder="Enter Product Image"
                                      onChange={handleFileChange}
                                    />
                                    {/* {touched.image ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.image}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )} */}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlTextarea1"
                                      className="form-label"
                                    >
                                      Product Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id="productdescription"
                                      name="description"
                                      rows="6"
                                      onChange={handleChange}
                                    ></textarea>
                                    {touched.description ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.description}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="">
                                    <label
                                      htmlFor="product_category"
                                      className="form-label"
                                    >
                                      Product Category
                                    </label>
                                    <select
                                      name="product_category"
                                      className="form-control"
                                      onClick={handleChange}
                                    >
                                      <option name="product_category[]" value="">
                                        {" "}
                                        -- select a product category --{" "}
                                      </option>
                                      {fetchCategoriesData
                                        ? fetchCategoriesData.data.map(
                                            (item, key) => {
                                              return (
                                                <option
                                                  key={key}
                                                  name="product_category[]"
                                                  value={item.id}
                                                >
                                                  {" "}
                                                  {item.name}
                                                </option>
                                              );
                                            }
                                          )
                                        : ""}
                                    </select>
                                    {touched.product_category ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.product_category}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="float-end login-btn my-3"
                                  >
                                    {addProductIsLoading ? (
                                      <>
                                        <div
                                          className="spinner-border loginloader"
                                          role="status"
                                        >
                                          <span className="visually-hidden">
                                            Loading...
                                          </span>
                                        </div>
                                      </>
                                    ) : (
                                      "Submit"
                                    )}
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
              <div className="container-xxl">
                <div class="row align-items-center">
                  <div class="border-0 mb-4">
                    <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                      <h3 class="fw-bold mb-0">Products Add</h3>
                      <button
                        type="submit"
                        class="btn btn-warning py-2 px-5 text-uppercase btn-set-task w-sm-100"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div class="col-xl-4 col-lg-4">
                    <div class="sticky-lg-top">
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Pricing Info</h6>
                        </div>
                        <div class="card-body">
                          <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Price Old
                              </label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Price New
                              </label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">Product Coupon</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div className="card-body">
                            <form encType="multipart/form-data" method="POST">
                              {/* name, quantity, price, image, description, square_meter,category_id, vendor_id */}
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="productname"
                                      name="name"
                                      placeholder="Enter Product Name"
                                      onChange={handleChange}
                                    />
                                    {touched.name ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.name}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Quantity:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="productquantity"
                                      min={"0"}
                                      name="quantity"
                                      placeholder="Enter Product Quantity"
                                      onChange={handleChange}
                                    />
                                    {touched.quantity ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.quantity}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Price:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="productprice"
                                      min={"0"}
                                      name="price"
                                      placeholder="Enter Product Price"
                                      onChange={handleChange}
                                    />
                                    {touched.price ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.price}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Available Square Meter:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="avaliable_square_meter"
                                      min={"0"}
                                      name="square_meter"
                                      placeholder="Enter Available Square Meter"
                                      onChange={handleChange}
                                    />
                                    {touched.square_meter ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.square_meter}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                  {/* name, quantity, price, image, description, square_meter,category_id, vendor_id */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Product Image: <span className="login_password_alert">*</span>
                                    </label>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="form-control"
                                      id="image"
                                      name="image"
                                      placeholder="Enter Product Image"
                                      onChange={handleFileChange}
                                    />
                                    {/* {touched.image ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.image}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )} */}
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleFormControlTextarea1"
                                      className="form-label"
                                    >
                                      Product Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id="productdescription"
                                      name="description"
                                      rows="6"
                                      onChange={handleChange}
                                    ></textarea>
                                    {touched.description ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.description}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="">
                                    <label
                                      htmlFor="product_category"
                                      className="form-label"
                                    >
                                      Product Category
                                    </label>
                                    <select
                                      name="product_category"
                                      className="form-control"
                                      onClick={handleChange}
                                    >
                                      <option name="product_category[]" value="">
                                        {" "}
                                        -- select a product category --{" "}
                                      </option>
                                      {fetchCategoriesData
                                        ? fetchCategoriesData.data.map(
                                            (item, key) => {
                                              return (
                                                <option
                                                  key={key}
                                                  name="product_category[]"
                                                  value={item.id}
                                                >
                                                  {" "}
                                                  {item.name}
                                                </option>
                                              );
                                            }
                                          )
                                        : ""}
                                    </select>
                                    {touched.product_category ? (
                                      <span>
                                        <p className="login_password_alert">
                                          {errors.product_category}{" "}
                                        </p>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="float-end login-btn my-3"
                                  >
                                    {addProductIsLoading ? (
                                      <>
                                        <div
                                          className="spinner-border loginloader"
                                          role="status"
                                        >
                                          <span className="visually-hidden">
                                            Loading...
                                          </span>
                                        </div>
                                      </>
                                    ) : (
                                      "Submit"
                                    )}
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
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
