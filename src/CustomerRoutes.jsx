import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom';
import Product from "./pages/View/Customer/Product"
import ShoppingCart from "./pages/View/Customer/ShoppingCart/ShoppingCart";
import Checkout from "./pages/View/Customer/Checkout/Checkout";
import OrderDetail from "./pages/View/Customer/OrderDetaiil/OrderDetail";
import OrderInvoice from "./pages/View/Customer/OrderDetaiil/OrderInvoice/OrderInvoice/OrderInvoice";
import Confirmation from "./pages/View/Customer/Checkout/Confirmation/Confirmation";
<<<<<<< HEAD
import ProductDetail from "./pages/View/Customer/Product/ProductDetail";
=======

>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
const CustomerRoutes = () =>{
    return(
        <>
        <Routes>
            <Route path="/Product" element={<Product/>}/>
<<<<<<< HEAD
            <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
=======
>>>>>>> 4ca596fe95273da02de94af89d6f160b8b73466c
            <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/confirm" element={<Confirmation/>}/>
            <Route path="/OrderDetail" element={<OrderDetail accountId={1}/>} />
            <Route path="/OrderDetail/:orderId" element={<OrderInvoice/>}/>
        </Routes>
        </>
    )
}

export default CustomerRoutes

