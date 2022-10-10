import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AdminDashboard } from "./pages/dashboard/admin/pages/dashboard/index";
import { ForgotPassword } from "./pages/ForgotPassword/index";
import { Salesorder } from "./pages/dashboard/admin/pages/SalesOrder";
import { AdminDashboardProducts } from "./pages/dashboard/admin/pages/products";
import { AdminDashboardOrders } from "./pages/dashboard/admin/pages/orders";
import { AdminDashboardMessages } from "./pages/dashboard/admin/pages/messages";
import { AdminDashboardRequests } from "./pages/dashboard/admin/pages/requests";
import { AdminDashboardQueries } from "./pages/dashboard/admin/pages/queries";
import { AdminDashboardSettings } from "./pages/dashboard/admin/pages/settings";
import { ProductOnePage } from "./pages/dashboard/admin/pages/products/productone";
import { ProductEdit } from "./pages/dashboard/admin/pages/products/productedit";
import { AdminDashboardUsers } from "./pages/dashboard/admin/pages/users";
import { UserDetails } from "./pages/dashboard/admin/pages/users/userdetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/admin-dashboard"> 
            <Route path={""} element={<AdminDashboard />} />
            <Route path="products">
              <Route path={""} element={<AdminDashboardProducts />} />
              <Route path=":id" element={<ProductOnePage />} />
            </Route>

            <Route path="orders">
              <Route path={""} element={<AdminDashboardOrders />} />
              <Route path=":id" element={<ProductOnePage />} />
            </Route>

            <Route path="messages">
              <Route path={""} element={<AdminDashboardMessages />} />
              <Route path=":id" element={<ProductOnePage />} />
            </Route>

            <Route path="products">
              <Route path={""} element={<ProductEdit />} />
              <Route path=":id" element={<ProductEdit/>} />
            </Route>

            <Route path="userdetails">
              <Route path={""} element={<UserDetails />} />
              <Route path=":id" element={<UserDetails/>} />
            </Route>


            <Route path="requests" element={<AdminDashboardRequests />} />
            <Route path="queries" element={<AdminDashboardQueries />} />
            <Route path="settings" element={<AdminDashboardSettings />} />
            <Route path="users" element={<AdminDashboardUsers/>} />
        </Route>
        <Route path="/salesorder" element={<Salesorder/>} />
      </Routes>
    </>
  );
}

export default App;
