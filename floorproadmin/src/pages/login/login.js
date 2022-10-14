import React from "react";
import "./login.css";
import bootstrap from "bootstrap";
import { useFormik } from "formik";
import { LoginValidation } from "./validator";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/auth/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setToken, setUser } from "../../store/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [
    LoginMutation,
    {
      isLoading: loginIsLoading,
      isError: loginIsError,
      data: loginData,
      error: loginError,
    },
  ] = useLoginMutation();

  const submitLogin = (values, action) => {
    console.log({ values, action });

    LoginMutation(values)
      .unwrap()
      .then((res) => {
        // dispatch(setToken(res.data.token));
        // dispatch(setUser(userData));
        console.log("res status", res);
        if (res.status && res.status === 'success') {
          console.log("Login successful");
          const user_data = res ? res.user : null;
          const token = res && res.authorisation ? res.authorisation.token : null;
          
          // save to the store
          dispatch(setToken(token));
          dispatch(setUser(JSON.stringify(user_data)));

          navigate("/admin-dashboard", { replace: true });
          
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
        console.log("error", e);
      });
  };

  // form validation
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginValidation,
    onSubmit: submitLogin,
  });

  return (
    <>
      <div className="container-fluid container-top-div">
        <div className="container-div p-3">
          <h3 className="text-center login-header">Admin Login</h3>
          <form className="p-3">
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon1"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              {touched.email ? (
                <span>
                  <p className="login_password_alert">{errors.email} </p>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              {touched.password ? (
                <span>
                  <p className="login_password_alert">{errors.password} </p>
                </span>
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="float-end login-btn"
            >
              {loginIsLoading ? (
                <>
                  <div className="spinner-border loginloader"  role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
