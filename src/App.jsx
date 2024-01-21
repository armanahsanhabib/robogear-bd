import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import FaqsPage from "./pages/FaqsPage";
import HomePage from "./pages/HomePage";
import LoginSignup from "./pages/LoginSignup";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import TutorialsPage from "./pages/TutorialsPage";

const App = () => {
  const [products, setProducts] = useState([]);

  // fetch all products data
  const fetchProductsData = async () => {
    try {
      const response = await fetch(
        "https://robogear-bd-97bac4d16518.herokuapp.com/products/all-product"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
