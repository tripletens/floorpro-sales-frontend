import React from "react";
import "./index.css";
import bootstrap from "bootstrap";

export const ForgotPassword = () => {
  return (
    <>
      <div className="container-fluid container-top-div">
        <div className="container-div p-3">
          <h1 className="text-center login-header">Reset Password</h1>
          <form className="p-3">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon1"
              />
            </div>
            <button type="button" className="float-end login-btn">
              Reset my password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
