/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
// import { GoHeart } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const NavList = (props) => {
    return (
      <li className="border-b lg:border-b-0">
        <a
          href={props.href}
          className={`lg:rounded-full px-5 lg:py-2 block py-3 text-[14px] transition-all ${
            props.href === currentPath
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-300"
          } ${!showNavbar ? "" : ""}`}
        >
          {props.name}
        </a>
      </li>
    );
  };

  return (
    <div className="navbar bg-blue-100 sticky top-0 left-0 z-30">
      <div className="container md:px-5 px-2 py-3 mx-auto flex items-center justify-between">
        <div className="left relative">
          <nav
            className={`${
              !showNavbar
                ? "hidden lg:block"
                : "fixed lg:static z-50 top-0 left-0 h-screen lg:h-auto w-screen lg:w-auto bg-[#000000aa] lg:bg-transparent"
            }`}
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <ul
              className={`flex flex-col lg:flex-row lg:items-center lg:h-auto lg:w-auto lg:bg-transparent lg:gap-3 ${
                !showNavbar
                  ? ""
                  : "w-[300px] h-full shadow-lg lg:shadow-none bg-white"
              }`}
            >
              <li
                className={`lg:hidden p-3 text-2xl mx-auto border rounded-full my-3 ${
                  showNavbar ? "block" : "hidden"
                }`}
                onClick={() => setShowNavbar(!showNavbar)}
              >
                <FaTimes />
              </li>
              <li className="w-full h-[10px] mb-3 bg-blue-600 lg:hidden block"></li>
              <li
                className={`lg:flex border-b lg:border-b-0 items-center justify-center px-5 py-2 text-[14px] lg:rounded-full ${
                  currentPath === "/"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-300"
                }`}
              >
                <a href="/" className={`flex gap-x-2 items-center`}>
                  <FaHome className="hidden lg:block" />{" "}
                  <span className="text-[14px]">Home</span>
                </a>
              </li>
              <NavList href="/products" hidden="true" name="All Products" />
              <NavList href="/protmotions" name="Promotions" />
              <NavList href="/contact" name="Contact Us" />
              <NavList href="/faqs" name="FAQ's" />
            </ul>
          </nav>
          <button type="button" className="menu block lg:hidden text-2xl">
            <FaBars className="" onClick={() => handleShowNavbar()} />
          </button>
        </div>
        <div className="search_bar block lg:hidden w-[70%]">
          <SearchBar />
        </div>
        <div className="right">
          <ul className="flex items-center gap-x-3">
            {!props.authenticated ? (
              <a
                className={`rounded-full lg:px-5 px-3 py-2 lg:text-[14px] transition-all hover:bg-blue-500 hover:text-white bg-blue-300`}
                // onClick={() => props.setLoginWindow(true)}
                href="/login"
              >
                Login<span className="hidden lg:inline-block">/Signup</span>
              </a>
            ) : (
              <div className="flex items-center gap-x-3">
                {/* <button
                  className={`rounded-full px-5 py-2 text-[14px] hidden lg:inline-block transition-all hover:bg-blue-300`}
                  onClick={() => props.setLogOutConfirmation(true)}
                >
                  Log Out
                </button> */}
                {/* <NavRound href="/my-account" icon={AiOutlineUser} /> */}
                <li
                  className={`relative hidden bg-white h-[40px] w-[40px] lg:w-auto lg:flex items-center lg:px-4 hover:bg-gray-50 justify-center rounded-full`}
                >
                  <a
                    href="/my-account"
                    className={`flex text-sm items-center gap-1`}
                  >
                    <AiOutlineUser className="text-[20px]" />{" "}
                    {/* {`${props.userData.fullName.split(" ")[0]}`} */}
                    <span className="lg:inline-block hidden">My Account</span>
                  </a>
                </li>
                {/* <NavRound href="/wishlist" icon={GoHeart} count="0" /> */}
                <NavRound
                  additionalStyle="text-white bg-blue-600"
                  href="/my-cart"
                  icon={AiOutlineShoppingCart}
                  count={props.cartLength.toString()}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
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
