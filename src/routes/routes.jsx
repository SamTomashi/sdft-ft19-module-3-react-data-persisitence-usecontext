import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/dashboard/Profile";
import Security from "../pages/dashboard/Security";
import Dashboard from "../pages/dashboard/Dashboard";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index path="profile" element={<Profile />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    );
}