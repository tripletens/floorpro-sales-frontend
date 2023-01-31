import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useFetchCategoriesQuery } from "../../../../../../store/category/api";
import { useAddProductMutation } from "../../../../../../store/product/api";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";
import { AddProductValidation } from "./validator";
import { ToastContainer, toast } from "react-toastify";
import { API_LOCAL_URL } from "../../../../../../config";
import axios from "axios";

export const AddProductPage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isloading, setIsLoading] = useState(false);
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

  useEffect(() => {
    
  }, [isloading]);

  const AddProductFunction = (values, action) => {
    let formData = new FormData();

    let form_entry_values = Object.entries(values);

    formData.append("image", selectedFile);

    form_entry_values.map((item) => {
      formData.append(item[0], item[1]);
    });

    console.log("form data", formData.getAll("product_category"));

    console.log("image", formData.getAll("image"));

    console.log("category_id", formData.getAll("category_id"));

    console.log("object shit", Object.entries(formData));

    values = { ...values, image: formData.getAll("image") };

    console.log({ values, action, formData });

    const access_token = sessionStorage.getItem("access_token")
      ? sessionStorage.getItem("access_token")
      : null;

    setIsLoading(true);
    axios
      .post(API_LOCAL_URL + "/add_product", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log("response => ", { res });
        setIsLoading(false);
        return toast.success(`Product added successfully!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((e) => {
        setIsLoading(false);
        if (e.data && e.data.status === "error") {
          if (e.data.message.image[0]) {
            return toast.error(`${e.data.message.image[0]}!`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }

          return toast.error(`${e.data.message}!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  // form validation
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      price: "",
      // image: "",
      description: "",
      square_meter: "",
      category_id: "",
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
                          <h3 class="fw-bold mb-0">Add a New Product</h3>
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
                                  {errors.name && touched.name ? (
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
                                  {errors.quantity && touched.quantity ? (
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
                                  {errors.price && touched.price ? (
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
                                  {errors.square_meter &&
                                  touched.square_meter ? (
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
                                    Product Image:{" "}
                                    <span className="login_password_alert">
                                      *
                                    </span>
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
                                  {errors.description && touched.description ? (
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
                                    htmlFor="category_id"
                                    className="form-label"
                                  >
                                    Product Category
                                  </label>
                                  <select
                                    name="category_id"
                                    className="form-control"
                                    onClick={handleChange}
                                  >
                                    <option name="category_id[]" value="">
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
                                  {errors.product_category &&
                                  touched.product_category ? (
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
                                  {isloading ? (
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
    </>
  );
};
