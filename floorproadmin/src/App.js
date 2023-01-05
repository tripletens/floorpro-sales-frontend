import logo from "./logo.svg";
import "./pages/dashboard/admin/components/FontAwesomeIcon";
import "./App.css";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AdminDashboard } from "./pages/dashboard/admin/pages/dashboard/index";
import { ForgotPassword } from "./pages/ForgotPassword/index";
import { Salesorder } from "./pages/dashboard/admin/pages/SalesOrder";

import { ProductPage } from "./pages/product";
import { Users } from "./pages/users";
import { AdminDashboardProducts } from "./pages/dashboard/admin/pages/products";
import { AdminDashboardOrders } from "./pages/dashboard/admin/pages/orders";
import { AdminDashboardMessages } from "./pages/dashboard/admin/pages/messages";
import { AdminDashboardRequests } from "./pages/dashboard/admin/pages/requests";
import { AdminDashboardQueries } from "./pages/dashboard/admin/pages/queries";
import { AdminDashboardSettings } from "./pages/dashboard/admin/pages/settings";
import { ProductOnePage } from "./pages/dashboard/admin/pages/products/productone";
import { ProductDetails } from "./pages/dashboard/admin/pages/products/productdetails";
import { AdminDashboardUsers } from "./pages/dashboard/admin/pages/users";
import { AdminDashboardUserDetails } from "./pages/dashboard/admin/pages/users/userdetails";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { CategoryOnePage} from "./pages/dashboard/admin/pages/category/categoryone";
import { AdminDashboardCategory } from "./pages/dashboard/admin/pages/category";
import ProductAdd from "./pages/dashboard/admin/pages/products/productadd";
import { AddCategoryPage } from "./pages/dashboard/admin/pages/category/addcategory";
import { AddOrderPage } from "./pages/dashboard/admin/pages/orders/addorder";
import { OrderPage } from "./pages/dashboard/admin/pages/orders/orderdetails";




function App() {
  const ProtectedRoute = ({ redirectPath = "/" }) => {
    const token = useSelector((state) => state.auth.token);
    const access_token = sessionStorage.getItem("access_token")
      ? sessionStorage.getItem("access_token")
      : null;

    if (!token && !access_token) {
      return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin-dashboard">
            <Route path={""} element={<AdminDashboard />} />
            <Route path="products">
              <Route path={""} element={<AdminDashboardProducts />} />
              <Route path=":id" element={<ProductOnePage />} />
            </Route>

            <Route path="orders"> 
              <Route path={""} element={<AdminDashboardOrders />} />
              <Route path=":ref" element={<OrderPage />} />
              <Route path="add" element={<AddOrderPage />} />
            </Route>

            <Route path="messages">
              <Route path={""} element={<AdminDashboardMessages />} />
              <Route path=":id" element={<ProductOnePage />} />
            </Route>

            <Route path="products">
              <Route path={""} element={<AdminDashboardProducts />} />
              <Route path=":id" element={<ProductDetails />} />
              <Route path={"add"} element={<ProductAdd />} />
            </Route>

            <Route path="category"> 
              <Route path={""} element={<AdminDashboardCategory />} />
              <Route path=":id" element={<CategoryOnePage />} />
              <Route path="add" element={<AddCategoryPage />} />
            </Route>

            <Route path="users">
              <Route path={""} element={<AdminDashboardUsers />} />
              <Route path=":id" element={<AdminDashboardUserDetails />} />
            </Route>

            <Route path="requests" element={<AdminDashboardRequests />} />
            <Route path="queries" element={<AdminDashboardQueries />} />
            <Route path="settings" element={<AdminDashboardSettings />} />
            <Route path="users" element={<AdminDashboardUsers />} />
          </Route>
          <Route path="/salesorder" element={<Salesorder />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Users" element={<Users />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
