import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useUpdateContactInformationMutation, useUpdateSocialInformationMutation } from "../../../../../../store/users/api";
import { UpdateContactInfoValidation, UpdateSocialInfoValidation } from "./validator";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateSocialInformation = () => {
  let navigate = useNavigate();
  const [
    UpdateSocailInfoMutation,
    {
      isLoading: UpdateSocailInfoIsLoading,
      isError: UpdateSocailInfoIsError,
      data: UpdateSocailInfoData,
      error: UpdateSocailInfoError,
    },
  ] = useUpdateSocialInformationMutation();

  // fetch user details
  const userDetails = sessionStorage.getItem("user_data")
    ? JSON.parse(sessionStorage.getItem("user_data"))
    : null;

  const UpdateSocailInfoFunction = (values, action) => {
    console.log("values =>", { values, action });

    UpdateSocailInfoMutation(values)
      .unwrap()
      .then((res) => {
        if (res.status && res.status === "success") {
          return toast.success(`Social Info updated successfully!`, {
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
      whatsapp: "",
      instagram: "",
      user_id: userDetails ? userDetails.id : null,
      twitter: "",
      facebook: ""
    },

    validationSchema: UpdateSocialInfoValidation,
    onSubmit: UpdateSocailInfoFunction,
  });

  // useEffect(() => {}, [input]);

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Social </h5>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Whatsapp Number
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="Enter whatsapp number"
                    className="form-control"
                    onChange={handleChange}
                  />
                  {touched.whatsapp && errors.whatsapp ? (
                    <span>
                      <p className="login_password_alert">{errors.whatsapp} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Twitter</label>
                  <input
                    type="text"
                    name="twitter"
                    placeholder="Enter Twitter username"
                    className="form-control"
                    onChange={handleChange}
                  />
                  {touched.twitter && errors.twitter ? (
                    <span>
                      <p className="login_password_alert">{errors.twitter} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-md-6">
              
                <div className="mb-3">
                  <label className="form-label">
                    Instagram 
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="instagram"
                    placeholder="Enter Instagram username"
                    onChange={handleChange}
                  />
                  {touched.instagram && errors.instagram ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.instagram}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Facebook 
                    <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="facebook"
                    placeholder="Enter Facebook username"
                    onChange={handleChange}
                  />
                  {touched.facebook && errors.facebook ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.facebook}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <button className="px-2 py-2 my-2 add-btn float-end" onClick={handleSubmit}>
              {UpdateSocailInfoIsLoading ? (
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

export default UpdateSocialInformation;
