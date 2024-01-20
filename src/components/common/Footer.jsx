import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import PaymentPartners from "../../assets/images/payment partners.png";
import Logo from "../../assets/images/robogear logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container px-5 mx-auto">
          <div className="top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-[100px] gap-x-[50px] gap-y-[50px] py-10 text-center lg:text-start">
            <div className="logo">
              <img
                src={Logo}
                alt=""
                className="xl:h-[64px] h-[50px] mb-2 mx-auto lg:mx-0"
              />
              <p className="text-gray-500 mb-5 font-[300]">
                RoboGear BD is Bangladesh&apos;s most popular engineering and
                robotics online shop.
              </p>
              <h2 className="text-lg font-semibold mb-2">Found Us</h2>
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
              <h3 className="font-semibold mb-6">Categories</h3>
              <ul className="flex flex-col gap-y-3 font-[300] text-gray-500">
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
              <h3 className="font-semibold mb-6">Useful Links</h3>
              <ul className="flex flex-col gap-y-3 font-[300] text-gray-500">
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
              <h3 className="font-semibold mb-6">Reach Us</h3>
              <ul className="flex flex-col gap-y-3 font-[300] text-gray-500">
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
      <div className="footer-bototm border-t py-5">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="left text-gray-500 text-sm sm:text-base text-center">
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
