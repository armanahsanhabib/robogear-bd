/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [loginWindow, setLoginWindow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginClick = () => {
    setLoginWindow(!loginWindow);
  };

  return (
    <div className="navbar bg-blue-100 sticky top-0 left-0 z-30">
      <div className="container px-5 py-3 mx-auto flex items-center justify-between">
        <div className="left">
          <nav>
            <ul className="flex items-center gap-x-3">
              <li
                className={`flex items-center justify-center px-5 py-2 text-[14px] rounded-full ${
                  currentPath === "/"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-300"
                }`}
              >
                <a href="/" className={`flex gap-x-2 items-center`}>
                  <FaHome /> <span className="text-[14px]">Home</span>
                </a>
              </li>
              <NavList href="/products" hidden="true" name="All Products" />
              <NavList href="/protmotions" name="Promotions" />
              <NavList href="/contact" name="Contact Us" />
              <NavList href="/faqs" name="FAQ's" />
            </ul>
          </nav>
        </div>
        <div className="right">
          <ul className="flex items-center gap-x-3">
            <button
              className={`rounded-full px-5 py-2 text-[14px] hidden lg:inline-block transition-all hover:bg-blue-300`}
              onClick={() => handleLoginClick()}
            >
              Login/Signup
            </button>
            <NavRound href="my-account" icon={AiOutlineUser} />
            <NavRound href="wishlist" icon={GoHeart} count="0" />
            <NavRound
              additionalStyle="text-white bg-blue-600"
              href="cart"
              icon={AiOutlineShoppingCart}
              count="0"
            />
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {loginWindow && (
          <div className="fixed h-screen w-screen left-0 top-0 bg-[#00000080] flex items-center justify-center">
            <div className="container px-5 mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }} // Initial animation properties
                animate={{ opacity: 1, scale: 1 }} // Animation properties
                // exit={{ opacity: 0, scale: 0.5 }} // Exit animation properties
                transition={{ duration: 0.3 }} // Animation duration
                className="relative overflow-hidden max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
              >
                <h1 className="text-2xl font-bold mb-8">
                  {isLogin ? "Login" : "Sign Up"}
                </h1>
                <form>
                  {/* Common Fields for both Login and Signup */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border rounded w-full py-2 px-3 outline-none transition-all focus:outline-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Additional Fields for Sign Up */}
                  {!isLogin && (
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Confirm your password"
                      />
                    </div>
                  )}

                  {/* Login or Sign Up Button */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </form>

                {/* Switch between Login and Sign Up */}
                <p className="mt-4">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={handleSwitch}
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </span>
                </p>
                <button
                  className="absolute top-0 right-0 p-3 text-2xl bg-gray-200 text-rose-600"
                  onClick={() => handleLoginClick()}
                >
                  <IoMdClose />
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavList = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <li>
      <a
        href={props.href}
        className={`rounded-full px-5 py-2 text-[14px] hidden lg:inline-block transition-all ${
          props.href === currentPath
            ? "bg-blue-600 text-white"
            : "hover:bg-blue-300"
        }`}
      >
        {props.name}
      </a>
    </li>
  );
};

const NavRound = (props) => {
  return (
    <li
      className={`relative h-[40px] w-[40px] text-[20px] flex items-center justify-center rounded-full ${
        !props.additionalStyle ? "bg-white" : props.additionalStyle
      }`}
    >
      <a href={props.href} className={`inline-block`}>
        <props.icon /> {props.txt}
        {props.count && (
          <span className="span absolute -top-[7px] -right-[7px] text-[12px] bg-white border w-[20px] h-[20px] rounded-full flex items-center justify-center text-gray-600">
            {props.count}
          </span>
        )}
      </a>
    </li>
  );
};

export default Navbar;
