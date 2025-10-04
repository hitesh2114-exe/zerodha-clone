import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./LandingPage/Home/HomePage";
import Pricing from "./LandingPage/Pricing/Pricing";
import Products from "./LandingPage/Products/Products";
import About from "./LandingPage/About/About";
import Support from "./LandingPage/Support/Support";
import SignUp from "./LandingPage/SignUp/SignUp";
// import './index.css'
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./LandingPage/NavBar";
import Footer from "./LandingPage/Footer";
import NotFound from "./LandingPage/NotFound";
import Login from "./LandingPage/Login/Login";
import ScrollToTop from "./ScrollToTop";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <ScrollToTop/>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);
