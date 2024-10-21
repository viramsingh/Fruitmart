import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./Pages/PageNotFound";
import FruiteDetails from "./Pages/FruiteDetails";
import Loading from "./components/Loading";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./Pages/Shop"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./Pages/Cart"));
const FAQ = lazy(() => import("./Pages/faq"));
const Register = lazy(() => import("./Pages/Ragister"));
const Login = lazy(() => import("./Pages/Login"));
const OrderNow = lazy(() => import("./Pages/OrderNow"));

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar cart={cart} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/shop"
              element={<Shop cart={cart} setCart={setCart} />}
            />
            <Route path="/fruiteDeatails/:id" element={<FruiteDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/order-now"
              element={<OrderNow cart={cart} setCart={setCart} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>

      <Toaster />
    </>
  );
};

export default App;
