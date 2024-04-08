import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  // manage states for product suggestions list
  const [suggestions, setSuggestions] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/product/all-products`
        );
        const data = response.data;

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
    <div className="relative">
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
                    src={`${import.meta.env.VITE_SERVER_URI}/product_images/${
                      product.product_image
                    }`}
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
  );
};

export default SearchBar;
