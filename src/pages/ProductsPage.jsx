/* eslint-disable react/prop-types */
import ProductCard from "../components/common/home/ProductCard";

const ProductsPage = (props) => {
  return (
    <div className="bg-gray-100">
      <div className="container px-5 mx-auto">
        <div className="all_products py-[50px]">
          <div className="top flex justify-between items-center mb-[30px]">
            <h2 className="text-2xl font-semibold">All products</h2>
          </div>
          <div className="product_container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {props.products.map((products) => (
              <ProductCard
                key={products._id}
                product_name={products.product_name}
                selling_price={products.selling_price}
                product_image={products.product_image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
