/* eslint-disable react/prop-types */
import ProductCard from "../components/common/home/ProductCard";

const ProductsPage = (props) => {
  return (
    <div className="bg-gray-100">
      <div className="container md:px-5 px-2 mx-auto">
        <div className="all_products md:py-5 py-3">
          <div className="top flex justify-between items-center md:mb-[30px] mb-5">
            <h2 className="md:text-2xl text-xl font-semibold">All products</h2>
          </div>
          <div className="product_container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-5 gap-2">
            {props.products.map((products) => (
              <ProductCard
                key={products._id}
                product_name={products.product_name}
                selling_price={products.selling_price}
                product_image={products.product_image}
                productId={products.product_id}
                handleCartClick={props.handleCartClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
