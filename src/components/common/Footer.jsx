import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import PaymentPartners from "../../assets/images/payment partners.png";
import Logo from "../../assets/images/robogear logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container px-5 mx-auto">
          <div className="top md:text-base text-sm grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-[100px] gap-x-[50px] md:gap-y-[50px] gap-y-8 py-10 text-center lg:text-start">
            <div className="logo">
              <img
                src={Logo}
                alt=""
                className="xl:h-[64px] md:h-[50px] h-[35px] mb-2 mx-auto lg:mx-0"
              />
              <p className="text-gray-500 mb-5 font-[300]">
                RoboGear BD is Bangladesh&apos;s most popular engineering and
                robotics online shop.
              </p>
              <h2 className="md:text-lg text-base font-semibold mb-2">
                Found Us
              </h2>
              <ul className="flex items-center gap-x-3 justify-center lg:justify-start">
                <li>
                  <a href="/" className="xl:text-3xl text-2xl text-sky-700">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/" className="xl:text-3xl text-2xl text-green-600">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="/" className="xl:text-3xl text-2xl text-rose-600">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="font-semibold md:mb-6 mb-3">Categories</h3>
              <ul className="flex flex-col md:gap-y-3 gap-y-1 font-[300] text-gray-500">
                <li>
                  <a href="/">Arduino and boards</a>
                </li>
                <li>
                  <a href="/">Sensors and Transistors</a>
                </li>
                <li>
                  <a href="/">Microcontroller & IC</a>
                </li>
                <li>
                  <a href="/">Tools and Accessories</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="font-semibold md:mb-6 mb-3">Useful Links</h3>
              <ul className="flex flex-col md:gap-y-3 gap-y-1 font-[300] text-gray-500">
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">How to place order</a>
                </li>
                <li>
                  <a href="/">How to review</a>
                </li>
                <li>
                  <a href="/">How to make payment</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="font-semibold md:mb-6 mb-3">Reach Us</h3>
              <ul className="flex flex-col md:gap-y-3 gap-y-1 font-[300] text-gray-500">
                <li>
                  <a href="/">Like our Facebook Page</a>
                </li>
                <li>
                  <a href="/">Subscribe our Youtube Channel</a>
                </li>
                <li>
                  <a href="/">Knock at Whatsapp</a>
                </li>
                <li>
                  <a href="/">Drop a mail</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bototm border-t py-5 font-[300]">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="left text-gray-500 sm:text-base text-sm text-center">
            {`\u00A9 2023 - ${new Date().getFullYear()}`} RoboGearBD - All
            Rights Reserved.
          </div>
          <div className="right flex items-center flex-col sm:flex-row">
            <h2 className="sm:border-r sm:mr-5 sm:pr-5 border-b sm:border-b-0 mb-2 text-sm sm:text-base sm:mb-0 text-gray-500">
              Payment Method
            </h2>
            <img
              src={PaymentPartners}
              alt="payment method"
              className="h-[30px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
