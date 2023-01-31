import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchAllDepartmentsQuery } from "../../../../../../store/departments/api";
import { useUpdateBasicInformationMutation } from "../../../../../../store/users/api";
import "./index.css";
import { UpdateBasicInfoValidation } from "./validator";

const UpdateBasicInformation = () => {
  const [department, setdepartment] = useState([]);
  const [
    UpdateBasicInfoMutation,
    {
      isLoading: UpdateBasicInfoIsLoading,
      isError: UpdateBasicInfoIsError,
      data: UpdateBasicInfoData,
      error: UpdateBasicInfoError,
    },
  ] = useUpdateBasicInformationMutation();

  // fetch user details
  const userDetails = sessionStorage.getItem("user_data")
    ? JSON.parse(sessionStorage.getItem("user_data"))
    : null;

  // fetch all the departments
  const {
    isLoading: fetchdepartmentIsLoading,
    isError: fetchdepartmentIsError,
    error: fetchdepartmentError,
    data: fetchdepartmentData,
  } = useFetchAllDepartmentsQuery();

  useEffect(() => {
    if (fetchdepartmentData && fetchdepartmentData.data) {
      setdepartment(fetchdepartmentData.data);
    }
  }, [department]);

  const UpdateBasicInfoFunction = (values, action) => {
    console.log("valeus =>", { values, action });

    UpdateBasicInfoMutation(values)
      .unwrap()
      .then((res) => {
        // dispatch(setToken(res.data.token));
        // dispatch(setUser(userData));
        console.log("res status", res);
        if (res.status && res.status === "success") {
          return toast.success(`Login Successful!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((e) => {
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

  // fetch the user

  // form validation
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: userDetails ? userDetails.email : null,
      name: "",
      user_id: userDetails ? userDetails.id : "",
      gender: userDetails ? userDetails.gender : "",
      dob: userDetails ? userDetails.dob : "",
      role: userDetails ? userDetails.role : "",
      department_id: userDetails ? userDetails.department_id : "",
      status: "",
    },

    validationSchema: UpdateBasicInfoValidation,
    onSubmit: UpdateBasicInfoFunction,
  });

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h6 className="card-title mb-4">Basic Information</h6>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Full Name <span className="login_password_alert">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                  {touched.name && errors.name ? (
                    <span>
                      <p className="login_password_alert">{errors.name} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter Username"
                  />
                  {touched.username && errors.username ? (
                    <span>
                      <p className="login_password_alert">{errors.username} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="text" value={userDetails && userDetails.email} className="form-control" disabled />
                  {touched.email && errors.email ? (
                    <span>
                      <p className="login_password_alert">{errors.email} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <div className="d-flex gap-3">
                    <input
                      type={"date"}
                      className="form-control"
                      placeholder="Select date of birth"
                      onChange={handleChange}
                      name="dob"
                    />
                    {touched.dob && errors.dob ? (
                      <span>
                        <p className="login_password_alert">{errors.dob} </p>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    name="role"
                    onChange={handleChange}
                  >
                    <option defaultValue="admin" name="role[]">
                      Admin
                    </option>
                    <option value="sales-rep" name="role[]">
                      Sales Rep
                    </option>
                  </select>
                  {touched.role && errors.role ? (
                    <span>
                      <p className="login_password_alert">{errors.role} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" name="status" onClick={handleChange}>
                    <option value="" name="status[]">-- select a status -- </option>
                    <option
                      value="1"
                      selected={values.status == 1 ? true : false}
                      name="status[]"
                    >
                      Active
                    </option>
                    <option
                      value="0"
                      selected={values.status == 1 ? true : false}
                      name="status[]"
                    >
                      Inactive
                    </option>
                  </select>
                  {touched.status && errors.status ? (
                    <span>
                      <p className="login_password_alert">{errors.status} </p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <select className="form-select" name="department">
                    <option value="" name="department[]">Select a department</option>
                    {fetchdepartmentData && fetchdepartmentData.data
                      ? department.map((item, key) => {
                          return (
                            <>
                              <option key={key} value={item.id} selected={values.department_id == item.id ? true : false}>
                                {item.name}
                              </option>
                            </>
                          );
                        })
                      : ""}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="inlineRadio1"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="inlineRadio2"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              onClick={handleSubmit}
              className="float-end login-btn my-3"
            >
              {fetchdepartmentIsLoading ? (
                <>
                  <div className="spinner-border loginloader" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBasicInformation;
