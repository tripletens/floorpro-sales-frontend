import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  useUpdateContactInformationMutation,
  useUpdatePasswordInformationMutation,
  useUpdateSocialInformationMutation,
} from "../../../../../../store/users/api";
import {
  UpdateContactInfoValidation,
  UpdatePasswordInfoValidation,
  UpdateSocialInfoValidation,
} from "./validator";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePasswordInformation = () => {
  let navigate = useNavigate();
  const [
    UpdatePasswordInfoMutation,
    {
      isLoading: UpdatePasswordInfoIsLoading,
      isError: UpdatePasswordInfoIsError,
      data: UpdatePasswordInfoData,
      error: UpdatePasswordInfoError,
    },
  ] = useUpdatePasswordInformationMutation();

  // fetch user details
  const userDetails = sessionStorage.getItem("user_data")
    ? JSON.parse(sessionStorage.getItem("user_data"))
    : null;

  const UpdatePasswordInfoFunction = (values, action) => {
    console.log("values =>", { values, action });

    UpdatePasswordInfoMutation(values)
      .unwrap()
      .then((res) => {
        if (res.status && res.status === "success") {
          return toast.success(`Password Info updated successfully!`, {
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
      new_password: "",
      old_password: "",
      user_id: userDetails ? userDetails.id : null,
      confirm_password: "",
    },

    validationSchema: UpdatePasswordInfoValidation,
    onSubmit: UpdatePasswordInfoFunction,
  });

  // useEffect(() => {}, [input]);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title mb-4">Change Password</h6>
          <div className="row">
            <form>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input type="password" name="old_password"  onChange={handleChange} className="form-control" />
                {touched.old_password && errors.old_password ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.old_password}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" name="new_password" onChange={handleChange} className="form-control" />
                {touched.new_password && errors.new_password ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.new_password}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">New Password Repeat</label>
                <input type="password" name="confirm_password" onChange={handleChange}  className="form-control" />
                {touched.confirm_password && errors.confirm_password ? (
                    <span>
                      <p className="login_password_alert">
                        {errors.confirm_password}{" "}
                      </p>
                    </span>
                  ) : (
                    ""
                  )}
              </div>
            </div>
            <button  type="submit" className="px-2 py-2 my-2 add-btn float-end" onClick={handleSubmit}>
              {UpdatePasswordInfoIsLoading ? (
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
      </div>
    </>
  );
};

export default UpdatePasswordInformation;
