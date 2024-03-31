import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyAccount from "./pages/MyAccount";
import MyCart from "./pages/MyCart";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import SignupPage from "./pages/SignupPage";
import TutorialsPage from "./pages/TutorialsPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );

  useEffect(() => {
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  // fetch all products data
  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "https://server.robogearbd.com/product/all-products"
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;
      setProducts(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const handleCartClick = () => {
    console.log("clicked");
  };

  return (
    <Router>
      <Header />
      <Navbar userData={userData} authenticated={authenticated} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage products={products} handleCartClick={handleCartClick} />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route
          path="/product-details"
          element={<ProductDetailsPage />}
          handleCartClick={handleCartClick}
        />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setAuthenticated={setAuthenticated}
              setUserData={setUserData}
            />
          }
        />
        {authenticated && (
          <Route
            path="/my-account"
            element={
              <MyAccount
                userData={userData}
                setUserData={setUserData}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
        )}
        {authenticated && <Route path="/my-cart" element={<MyCart />} />}
        {!authenticated && <Route path="/sign-up" element={<SignupPage />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
