/* eslint-disable react/prop-types */
import { GrNext } from "react-icons/gr";
import Ad1 from "../assets/images/home/ad1.jpg";
import Ad2 from "../assets/images/home/ad2.jpg";
import Ad3 from "../assets/images/home/ad3.jpg";
import ImageSlider from "../components/common/home/ImageSlider";
import ProductCard from "../components/common/home/ProductCard";

const HomePage = (props) => {
  return (
    <div className="bg-gray-100 lg:py-[50px] md:py-5 py-3">
      <div className="container md:px-5 px-2 mx-auto">
        <div className="hero grid md:gap-5 gap-3 grid-cols-4 grid-rows-2">
          <div className="lg:col-span-2 col-span-4 row-span-2 lg:h-full md:h-[400px] h-[250px]">
            <ImageSlider />
          </div>
          <div className="ad1 lg:col-span-2 col-span-4">
            <img src={Ad1} alt="ad1" className="rounded-lg h-full" />
          </div>
          <div className="ad2 lg:col-span-1 col-span-2">
            <img src={Ad2} alt="ad2" className="rounded-lg h-full" />
          </div>
          <div className="ad3 lg:col-span-1 col-span-2">
            <img src={Ad3} alt="ad3" className="rounded-lg h-full" />
          </div>
        </div>
        <div className="popular_products md:pt-[50px] pt-8">
          <div className="top flex justify-between items-center md:mb-[30px] mb-5">
            <h2 className="md:text-2xl text-xl font-semibold">
              Popular products
            </h2>
            <a href="/products">
              <button className="px-5 py-2 md:text-base text-sm rounded-full bg-blue-200 hover:bg-blue-300 transition-all flex items-center gap-x-2">
                All Products <GrNext />
              </button>
            </a>
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
            {/* <MoreProductsCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
