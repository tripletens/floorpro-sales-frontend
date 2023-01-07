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
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Visibility Status</h6>
                        </div>
                        <div class="card-body">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                              checked=""
                            />
                            <label class="form-check-label">Published</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                            />
                            <label class="form-check-label">Scheduled</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                            />
                            <label class="form-check-label">Hidden</label>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Size</h6>
                        </div>
                        <div class="card-body">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="sizechek1"
                            />
                            <label class="form-check-label" for="sizechek1">
                              XS
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="sizechek2"
                            />
                            <label class="form-check-label" for="sizechek2">
                              S
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="sizechek3"
                            />
                            <label class="form-check-label" for="sizechek3">
                              M
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="sizechek4"
                            />
                            <label class="form-check-label" for="sizechek4">
                              L
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="sizechek5"
                            />
                            <label class="form-check-label" for="sizechek5">
                              XL
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Publish Schedule</h6>
                        </div>
                        <div class="card-body">
                          <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                              <label class="form-label">Publish Date</label>
                              <input type="date" class="form-control w-100" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">Publish Time</label>
                              <input type="time" class="form-control w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Categories</h6>
                        </div>
                        <div class="card-body">
                          <label class="form-label">Categories Select</label>
                          <select
                            class="form-select"
                            size="3"
                            aria-label="size 3 select example"
                          >
                            <option value="1">Watch</option>
                            <option value="2">Clothes</option>
                            <option value="3">Toy</option>
                            <option value="4">Cosmetic</option>
                            <option value="5">Laptop</option>
                            <option value="6">Mobile</option>
                            <option value="7">Gaming accessories</option>
                          </select>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Inventory Info</h6>
                        </div>
                        <div class="card-body">
                          <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                              <label class="form-label">SKU</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Total Stock Quantity
                              </label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div class="card mb-3">
                      <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 class="mb-0 fw-bold ">Basic information</h6>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row g-3 align-items-center">
                            <div class="col-md-6">
                              <label class="form-label">Name</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Page Title</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Identifier URL
                              </label>
                              <div class="input-group mb-3">
                                <span class="input-group-text">
                                  https://eBazar.com
                                </span>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Description
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 class="mb-0 fw-bold ">Images</h6>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Images Upload
                              </label>
                              <small class="d-block text-muted mb-2">
                                Only portrait or square images, 2M max and
                                2000px max-height.
                              </small>
                              <div class="dropify-wrapper">
                                <div class="dropify-message">
                                  <span class="file-icon">
                                    {" "}
                                    <p>Drag and drop a file here or click</p>
                                  </span>
                                  <p class="dropify-error">
                                    Ooops, something wrong appended.
                                  </p>
                                </div>
                                <div class="dropify-loader"></div>
                                <div class="dropify-errors-container">
                                  <ul></ul>
                                </div>
                                <input
                                  type="file"
                                  id="input-file-to-destroy"
                                  class="dropify"
                                  data-allowed-formats="portrait square"
                                  data-max-file-size="2M"
                                  data-max-height="2000"
                                />
                                <button type="button" class="dropify-clear">
                                  Remove
                                </button>
                                <div class="dropify-preview">
                                  <span class="dropify-render"></span>
                                  <div class="dropify-infos">
                                    <div class="dropify-infos-inner">
                                      <p class="dropify-filename">
                                        <span class="file-icon"></span>{" "}
                                        <span class="dropify-filename-inner"></span>
                                      </p>
                                      <p class="dropify-infos-message">
                                        Drag and drop or click to replace
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="product-cart">
                                <div class="checkout-table table-responsive">
                                  <div
                                    id="myCartTable_wrapper"
                                    class="dataTables_wrapper dt-bootstrap5 no-footer"
                                  >
                                    <div class="row">
                                      <div class="col-sm-12 col-md-6">
                                        <div
                                          class="dataTables_length"
                                          id="myCartTable_length"
                                        >
                                          <label>
                                            Show{" "}
                                            <select
                                              name="myCartTable_length"
                                              aria-controls="myCartTable"
                                              class="form-select form-select-sm"
                                            >
                                              <option value="10">10</option>
                                              <option value="25">25</option>
                                              <option value="50">50</option>
                                              <option value="100">100</option>
                                            </select>{" "}
                                            entries
                                          </label>
                                        </div>
                                      </div>
                                      <div class="col-sm-12 col-md-6">
                                        <div
                                          id="myCartTable_filter"
                                          class="dataTables_filter"
                                        >
                                          <label>
                                            Search:
                                            <input
                                              type="search"
                                              class="form-control form-control-sm"
                                              placeholder=""
                                              aria-controls="myCartTable"
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-sm-12">
                                        <table
                                          id="myCartTable"
                                          class="table display dataTable table-hover align-middle nowrap no-footer dtr-inline style"
                                          role="grid"
                                          aria-describedby="myCartTable_info"
                                        >
                                          <thead>
                                          <tr role="row">
                                            <th
                                              class="product sorting_asc"
                                              tabindex="0"
                                              aria-controls="myCartTable"
                                              rowspan="1"
                                              colspan="1"
                                              
                                              aria-sort="ascending"
                                              aria-label="Product: activate to sort column descending"
                                            >
                                              Product
                                            </th>
                                            <th
                                              class="product sorting"
                                              tabindex="0"
                                              aria-controls="myCartTable"
                                              rowspan="1"
                                              colspan="1"
                                              
                                              aria-label="Product Tag Name: activate to sort column ascending"
                                            >
                                              Product Tag Name
                                            </th>
                                         
                                            <th
                                              class="quantity sorting"
                                              tabindex="0"
                                              aria-controls="myCartTable"
                                              rowspan="1"
                                              colspan="1"
                                              
                                              aria-label="Quantity: activate to sort column ascending"
                                            >
                                              Quantity
                                            </th>
                                            <th
                                              class="quantity dt-body-right sorting"
                                              tabindex="0"
                                              aria-controls="myCartTable"
                                              rowspan="1"
                                              colspan="1"
                                              
                                              aria-label="Action: activate to sort column ascending"
                                            >
                                              Action
                                            </th>
                                          </tr>
                                        </thead>
                                          <tbody>
                                            <tr role="row" class="odd">
                                              <td
                                                tabindex="0"
                                                class="sorting_1"
                                              >
                                                <div class="product-cart d-flex align-items-center">
                                                  <div class="product-thumb">
                                                    <img
                                                      src="assets/images/product/upload.png"
                                                      class="img-fluid avatar xl"
                                                      alt="Product"
                                                    />
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder="Product tag name"
                                                />
                                              </td>

                                              <td>
                                                <div class="product-quantity d-inline-flex">
                                                  <input type="number" />
                                                </div>
                                              </td>
                                              <td class=" dt-body-right">
                                                <div
                                                  class="btn-group"
                                                  role="group"
                                                  aria-label="Basic outlined example"
                                                >
                                                  <button type="button" class="btn btn-light">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-trash "
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                  </svg>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr role="row" class="even">
                                              <td
                                                tabindex="0"
                                                class="sorting_1"
                                              >
                                                <div class="product-cart d-flex align-items-center">
                                                  <div class="product-thumb">
                                                    <img
                                                      src="assets/images/product/upload.png"
                                                      class="img-fluid avatar xl"
                                                      alt="Product"
                                                    />
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder="Product tag name"
                                                />
                                              </td>

                                              <td>
                                                <div class="product-quantity d-inline-flex">
                                                  <input type="number" />
                                                </div>
                                              </td>
                                              <td class=" dt-body-right">
                                                <div
                                                  class="btn-group"
                                                  role="group"
                                                  aria-label="Basic outlined example"
                                                >
                                                   <button type="button" class="btn btn-light">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-trash "
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                  </svg>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr role="row" class="odd">
                                              <td
                                                tabindex="0"
                                                class="sorting_1"
                                              >
                                                <div class="product-cart d-flex align-items-center">
                                                  <div class="product-thumb">
                                                    <img
                                                      src="assets/images/product/upload.png"
                                                      class="img-fluid avatar xl"
                                                      alt="Product"
                                                    />
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder="Product tag name"
                                                />
                                              </td>

                                              <td>
                                                <div class="product-quantity d-inline-flex">
                                                  <input type="number" />
                                                </div>
                                              </td>
                                              <td class=" dt-body-right">
                                                <div
                                                  class="btn-group"
                                                  role="group"
                                                  aria-label="Basic outlined example"
                                                >
                                                    <button type="button" class="btn btn-light">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-trash "
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                  </svg>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr role="row" class="even">
                                              <td
                                                tabindex="0"
                                                class="sorting_1"
                                              >
                                                <div class="product-cart d-flex align-items-center">
                                                  <div class="product-thumb">
                                                    <img
                                                      src="assets/images/product/upload.png"
                                                      class="img-fluid avatar xl"
                                                      alt="Product"
                                                    />
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  placeholder="Product tag name"
                                                />
                                              </td>

                                              <td>
                                                <div class="product-quantity d-inline-flex">
                                                  <input type="number" />
                                                </div>
                                              </td>
                                              <td class=" dt-body-right">
                                                <div
                                                  class="btn-group"
                                                  role="group"
                                                  aria-label="Basic outlined example"
                                                >
                                                  <button type="button" class="btn btn-light">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    class="bi bi-trash "
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                  </svg>
                                                  </button>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-sm-12 col-md-5">
                                        <div
                                          class="dataTables_info"
                                          id="myCartTable_info"
                                          role="status"
                                          aria-live="polite"
                                        >
                                          Showing 1 to 4 of 4 entries
                                        </div>
                                      </div>
                                      <div class="col-sm-12 col-md-7">
                                        <div
                                          class="dataTables_paginate paging_simple_numbers"
                                          id="myCartTable_paginate"
                                        >
                                          <ul class="pagination">
                                            <li
                                              class="paginate_button page-item previous disabled"
                                              id="myCartTable_previous"
                                            >
                                              <a
                                                href="#"
                                                aria-controls="myCartTable"
                                                data-dt-idx="0"
                                                tabindex="0"
                                                class="page-link"
                                              >
                                                Previous
                                              </a>
                                            </li>
                                            <li class="paginate_button page-item active">
                                              <a
                                                href="#"
                                                aria-controls="myCartTable"
                                                data-dt-idx="1"
                                                tabindex="0"
                                                class="page-link"
                                              >
                                                1
                                              </a>
                                            </li>
                                            <li
                                              class="paginate_button page-item next disabled"
                                              id="myCartTable_next"
                                            >
                                              <a
                                                href="#"
                                                aria-controls="myCartTable"
                                                data-dt-idx="2"
                                                tabindex="0"
                                                class="page-link"
                                              >
                                                Next
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
