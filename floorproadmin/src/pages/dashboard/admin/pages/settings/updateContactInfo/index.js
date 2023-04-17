import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useUpdateContactInformationMutation } from "../../../../../../store/users/api";
import { UpdateContactInfoValidation } from "./validator";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateContactInformation = () => {
  let navigate = useNavigate();
  const [
    UpdateContactInfoMutation,
    {
      isLoading: UpdateContactInfoIsLoading,
      isError: UpdateContactInfoIsError,
      data: UpdateContactInfoData,
      error: UpdateContactInfoError,
    },
  ] = useUpdateContactInformationMutation();

  // fetch user details
  const userDetails = sessionStorage.getItem("user_data")
    ? JSON.parse(sessionStorage.getItem("user_data"))
    : null;

  const UpdateContactInfoFunction = (values, action) => {
    console.log("values =>", { values, action });

    UpdateContactInfoMutation(values)
      .unwrap()
      .then((res) => {
        if (res.status && res.status === "success") {
          return toast.success(`Contact Info updated successfully!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((e) => {
        if (e.status == 401) {
          console.log("Login Error, unauthenticated");
          navigate("/", { replace: true });
          return toast.error(`${e.data.message}!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        if (e.data && e.data.status === "error") {
          console.log("Login Error");
          return toast.error(`${e.data.message}!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        if (e.data && e.data.status === "FETCH_ERROR") {
          console.log("Login Error");
          return toast.error(`Please connect to the internet to continue!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log("error", e);
      });
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      phone: "",
      home_address: "",
      user_id: userDetails ? userDetails.id : null,
      postal_code: "",
      city: "",
      state: "",
      country: "",
    },

    validationSchema: UpdateContactInfoValidation,
    onSubmit: UpdateContactInfoFunction,
  });

  // {
  //   "user_id" : 1,
  //   "phone" : "090182938483",
  //   "home_address" : "esiri crescent onikanga",
  //   "postal_code": "234234",
  //   "city" : "ayobo",
  //   "state": "lagos",
  //   "country" : "Nigeria"
  // }

  // useEffect(() => {}, [input]);

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Contact</h5>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Phone
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                  />
                  {touched.phone && errors.phone ? (
                    <span>
                      <p className="login_password_alert">{errors.phone} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    name="website"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter Website here"
                  />
                  {touched.website && errors.website ? (
                    <span>
                      <p className="login_password_alert">{errors.website} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Home Address
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="home_address"
                    onChange={handleChange}
                    placeholder="Enter Home Address"
                  />
                  {touched.home_address && errors.home_address ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.home_address}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Address Line 2</label>
                  <input
                    type="text"
                    name="address_two"
                    className="form-control"
                    placeholder="Enter Address line 2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Postal Code
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="postal_code"
                    placeholder="Enter Postal Code here"
                    onChange={handleChange}
                  />
                  {touched.postal_code && errors.postal_code ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.postal_code}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    City <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="Enter City here"
                    onChange={handleChange}
                  />
                  {touched.city && errors.city ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.city}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">State <span className="login_password_alert">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    onChange={handleChange}
                    placeholder="Enter state here"
                  />
                  {touched.state && errors.state ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.state}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    placeholder="Enter Country here"
                    onChange={handleChange}
                  />
                  {touched.country && errors.country ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.country}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <button className="px-2 py-2 my-2 add-btn float-end" onClick={handleSubmit}>
              {UpdateContactInfoIsLoading ? (
                <>
                  <div className="spinner-border loginloader" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="m-1">Submit</span>
                </>
              )}
            </button>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateContactInformation;
