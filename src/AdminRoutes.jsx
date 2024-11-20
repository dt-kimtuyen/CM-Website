// src/AdminRoutes.js
import { Routes, Route } from "react-router-dom";
import Product from "./pages/View/Admin/ProductManager/index";
import DashboardContent from "./pages/View/Admin/DashBoard/index"; // Update import path
import ProductCreate from "./pages/View/Admin/ProductManager/Create";
import ProductEdit from "./pages/View/Admin/ProductManager/Edit";
import CategoryIndex from "./pages/View/Admin/CategoryManager/index";
import CategoryCreate from "./pages/View/Admin/CategoryManager/Create";
import CategoryEdit from "./pages/View/Admin/CategoryManager/Edit";
import OrderIndex from "./pages/View/Admin/OrderManager/index";
import CustomerIndex from "./pages/View/Admin/CustomerManager/index";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardContent />} />
    <Route path="/productmanager" element={<Product />} />
    <Route path="/productmanager/create" element={<ProductCreate />} />
    <Route path="/productmanager/edit/:id" element={<ProductEdit />} />
    <Route path="/categorymanager" element={<CategoryIndex />} />
    <Route path="/categorymanager/create" element={<CategoryCreate />} />
    <Route path="/categorymanager/edit/:id" element={<CategoryEdit />} />
    <Route path="/ordermanager" element={<OrderIndex />} />
    <Route path="/customermanager" element={<CustomerIndex />} />
  </Routes>
);

export default AdminRoutes;
