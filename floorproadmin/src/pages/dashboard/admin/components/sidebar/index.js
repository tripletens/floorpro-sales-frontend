import React from "react";
import { Link } from "react-router-dom";
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
          <a href={"/admin-dashboard"} className="sidebar-menu-item">
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
          </a>

          <a href={"/admin-dashboard/orders"} className="sidebar-menu-item">
            Sales Orders
          </a>
          <a href={"/admin-dashboard/products"} className="sidebar-menu-item">
            Products
          </a>
          <a href={"/admin-dashboard/messages"} className="sidebar-menu-item">
            Message
          </a>
          <a href={"/admin-dashboard/requests"} className="sidebar-menu-item">
            Requests
          </a>
          <a href={"/admin-dashboard/queries"} className="sidebar-menu-item">
            Queries
          </a>
          <a href={"/admin-dashboard/settings"} className="sidebar-menu-item">
            Settings
          </a>
          <a href={"/admin-dashboard/users"} className="sidebar-menu-item">
            Users
          </a>
        </div>
      </div>
    </>
  );
};
