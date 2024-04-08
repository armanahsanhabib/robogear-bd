import { AiOutlineUser } from "react-icons/ai";
import PhoneText from "../../assets/images/phone-text.svg";
import RobogearLogo from "../../assets/images/robogear logo.png";
import WorldGlobe from "../../assets/images/world-globe.svg";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="container md:px-5 px-3 mx-auto md:py-[20px] py-3 flex items-center justify-between">
        <div className="logo">
          <a href="/">
            <img
              src={RobogearLogo}
              alt="logo"
              className="lg:h-[50px] h-[35px] w-auto"
            />
          </a>
        </div>
        <div className="search_bar lg:block hidden search xl:w-[500px] lg:w-[350px] md:w-[500px] w-[180px] mx-[50px]">
          <SearchBar />
        </div>
        <div className="right hidden lg:flex items-center gap-x-8">
          <div className="contact flex gap-x-2 items-center">
            <div className="left">
              <img src={PhoneText} alt="phone text" className="h-[40px]" />
            </div>
            <div className="right">
              <h3 className="font-semibold">Call us</h3>
              <a
                href="tel:+880 1704-428814"
                className="font-[300] text-blue-600"
              >
                +880 1704-428814
              </a>
            </div>
          </div>
          <div className="contact flex  gap-x-2 items-center">
            <div className="left">
              <img src={WorldGlobe} alt="World Globe" className="h-[40px]" />
            </div>
            <div className="right">
              <h3 className="font-semibold">All Bangladesh</h3>
              <p className="font-[300] text-blue-600">Cash On Delivery</p>
            </div>
          </div>
        </div>
        <div
          className={`relative lg:hidden bg-blue-600 h-[40px] lg:w-auto flex items-center px-4 hover:bg-blue-500 justify-center rounded-full`}
        >
          <a
            href="/my-account"
            className={`flex text-sm items-center gap-1 text-white`}
          >
            <AiOutlineUser className="text-[20px]" />{" "}
            {/* {`${props.userData.fullName.split(" ")[0]}`} */}
            <span className="">My Account</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
