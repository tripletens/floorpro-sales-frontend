import React from "react";
import "./index.css";
export const AdminSidebar = () => {
  return (
    <>
      <div
        style={{
          background: "#1a1449",
          position: "fixed",
          width: "20%",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div className="sidebar-menu">
          <div className="sidebar-menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>{" "}
            Dashboard
          </div>
          <div className="sidebar-menu-item">Sales Orders</div>
          <div className="sidebar-menu-item">Message</div>
          <div className="sidebar-menu-item">Requests</div>
          <div className="sidebar-menu-item">Queries</div>
          <div className="sidebar-menu-item">Settings</div>
          <div className="sidebar-menu-item">Users</div>
        </div>
      </div>
    </>
  );
};
