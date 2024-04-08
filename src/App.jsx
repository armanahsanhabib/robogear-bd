import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [currentCartItem, setCurrentItem] = useState({
    _id: "",
    qty: 1,
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  // fetch all products data
  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URI}/product/all-products`
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

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URI}/user/user-data/${userId}`
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;

      setCartItems(result.cart);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchProductsData();
    fetchCart();
  }, []);

  const handleCartClick = async (_id, qty) => {
    if (!authenticated) {
      toast.error("Login first to add product!", {
        autoClose: 3000,
        position: "top-center",
      });
    } else {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_SERVER_URI}/user/add-to-cart`,
          {
            userId,
            productId: _id,
            qty: qty,
          }
        );

        if (response.status === 200) {
          // If the item is successfully added to the cart, update the cart items state
          setCartItems(response.data.user.cart);
          toast.success("Item added to cart successfully!", {
            autoClose: 3000,
            position: "top-center",
          });
        } else {
          toast.error("Failed to add item to cart!", {
            autoClose: 3000,
            position: "top-center",
          });
        }
      } catch (error) {
        console.error("Error adding item to cart:", error.message);
        toast.error("Failed to add item to cart!", {
          autoClose: 3000,
          position: "top-center",
        });
      }
    }
  };

  return (
    <Router>
      <Header />
      <Navbar
        userId={userId}
        authenticated={authenticated}
        cartLength={cartItems.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              handleCartClick={handleCartClick}
              setCurrentItem={setCurrentItem}
              currentCartItem={currentCartItem}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              handleCartClick={handleCartClick}
              setCurrentItem={setCurrentItem}
              currentCartItem={currentCartItem}
            />
          }
        />
        <Route
          path="/product-details"
          element={<ProductDetailsPage handleCartClick={handleCartClick} />}
        />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setAuthenticated={setAuthenticated}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/my-account"
          element={
            authenticated ? (
              <MyAccount
                userId={userId}
                setUserId={setUserId}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            ) : (
              <LoginPage
                setAuthenticated={setAuthenticated}
                setUserId={setUserId}
              />
            )
          }
        />
        {authenticated && (
          <Route
            path="/my-cart"
            element={
              <MyCart
                userId={userId}
                products={products}
                cartItems={cartItems}
                fetchCart={fetchCart}
                fetchProductsData={fetchProductsData}
              />
            }
          />
        )}
        {!authenticated && <Route path="/sign-up" element={<SignupPage />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
