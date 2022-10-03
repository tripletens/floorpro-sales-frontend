import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AdminDashboard } from "./pages/dashboard/admin/pages/dashboard/index";
import { ForgotPassword } from "./pages/ForgotPassword/index";
import { Salesorder } from "./pages/dashboard/admin/pages/SalesOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/salesorder" element={<Salesorder/>} />
      </Routes>
    </>
  );
}

export default App;
