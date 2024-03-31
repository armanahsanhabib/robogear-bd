/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "../components/home/ProductCard";

const ProductsPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate items per page dynamically based on grid rows and columns
  const gridRowsPerPage = 4;
  const gridColumns = 6;
  const itemsPerPage = gridRowsPerPage * gridColumns;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-100">
      <div className="container md:px-5 px-2 mx-auto">
        <div className="all_products md:py-5 py-3">
          <div className="top border md:mb-[30px] rounded-lg my-5 bg-white px-5 py-3">
            <h2 className="md:text-2xl text-xl font-semibold">All products</h2>
            <p className="mt-1 text-lg">
              {`Showing (${indexOfFirstItem + 1}-${Math.min(
                indexOfLastItem,
                props.products.length
              )}) of 
              ${props.products.length}`}
            </p>
          </div>
          <div className="product_container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-5 gap-2">
            {currentItems.map((product) => (
              <ProductCard
                key={product._id}
                product_name={product.product_name}
                selling_price={product.selling_price}
                product_image={product.product_image}
                productId={product.product_id}
                handleCartClick={props.handleCartClick}
              />
            ))}
          </div>
          <div className="pagination flex items-center gap-3 justify-center my-8">
            {Array.from(
              { length: Math.ceil(props.products.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-5 py-3 hover:bg-gray-800 hover:text-white rounded ${
                    currentPage === index + 1
                      ? "bg-gray-800 text-white"
                      : "bg-white"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
