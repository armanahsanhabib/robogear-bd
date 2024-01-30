import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import PhoneText from "../../assets/images/phone-text.svg";
import RobogearLogo from "../../assets/images/robogear logo.png";
import WorldGlobe from "../../assets/images/world-globe.svg";

const Header = () => {
  // manage states for product suggestions list
  const [suggestions, setSuggestions] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          "https://robogear-bd-97bac4d16518.herokuapp.com/products/all-products"
        );
        const data = await response.json();

        const filteredSuggestions = data.filter((product) =>
          product.product_name
            .toLowerCase()
            .includes(searchProduct.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (searchProduct) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchProduct]);

  return (
    <header>
      <div className="container md:px-5 px-3 mx-auto md:py-[20px] py-3 flex items-center justify-between">
        <div className="logo">
          <a href="/">
            <img
              src={RobogearLogo}
              alt="logo"
              className="md:h-[50px] h-[40px] w-auto"
            />
          </a>
        </div>
        <button className="md:hidden flex gap-2 bg-gray-100 items-center px-8 py-2 text-sm border rounded-full">
          Search <BsSearch />
        </button>
        <div className="relative md:block hidden search xl:w-[500px] lg:w-[350px] md:w-[500px] w-[180px] mx-[50px]">
          <input
            type="text"
            name="search_product"
            id="search_product"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className="w-full rounded-full border focus:outline-blue-600 px-5 py-2"
            placeholder="Search for products..."
          />
          <button className="absolute top-[50%] -translate-y-[50%] right-2 rounded-full bg-blue-600 p-2 text-white">
            <BsSearch />
          </button>
          {suggestions.length > 0 && (
            <ul className="z-50 suggestion-list absolute left-0 top-[50px] max-h-[300px] w-full overflow-y-auto rounded border bg-gray-50 shadow">
              {suggestions.map((product) => (
                <li
                  className="cursor-pointer border-b px-3 py-2 hover:bg-gray-100"
                  key={product._id}
                  // onClick={() => handleSelectProduct(product)}
                >
                  <a
                    href={`/product-details?id=${product.product_id}`}
                    className="flex gap-3"
                  >
                    <div className="left">
                      <img
                        src={`https://robogear-bd-97bac4d16518.herokuapp.com/product_images/${product.product_image}`}
                        alt={product.product_name}
                        className="h-[45px]"
                      />
                    </div>
                    <div className="right">
                      <h3 className="text-blue-600">{product.product_name}</h3>
                      <p className="text-sm font-[300]">
                        {`Price: ${product.selling_price}`}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
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
        <button className="menu block lg:hidden text-2xl">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
