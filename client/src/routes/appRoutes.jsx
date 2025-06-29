import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product-detail/:id" element={<ProductDetail/>} />
                <Route path="/category/:category" element={<Products/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;