/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
// import { GoHeart } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar bg-blue-100 sticky top-0 left-0 z-30">
      <div className="container md:px-5 px-2 py-3 mx-auto flex items-center justify-between">
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
            {!props.authenticated ? (
              <a
                className={`rounded-full px-5 py-2 text-[14px] hidden lg:inline-block transition-all hover:bg-blue-500 hover:text-white bg-blue-300`}
                // onClick={() => props.setLoginWindow(true)}
                href="/login"
              >
                Login/Signup
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
                  className={`relative bg-white h-[40px] flex items-center px-4 hover:bg-gray-50 justify-center rounded-full`}
                >
                  <a
                    href="/my-account"
                    className={`flex text-sm items-center gap-1`}
                  >
                    <AiOutlineUser className="text-[20px]" />{" "}
                    {/* {`${props.userData.fullName.split(" ")[0]}`} */}
                    My Account
                  </a>
                </li>
                {/* <NavRound href="/wishlist" icon={GoHeart} count="0" /> */}
                <NavRound
                  additionalStyle="text-white bg-blue-600"
                  href="/my-cart"
                  icon={AiOutlineShoppingCart}
                  count="0"
                />
              </div>
            )}
          </ul>
        </div>
      </div>
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
