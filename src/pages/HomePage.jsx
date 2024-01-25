/* eslint-disable react/prop-types */
import { GrNext } from "react-icons/gr";
import Ad1 from "../assets/images/home/ad1.jpg";
import Ad2 from "../assets/images/home/ad2.jpg";
import Ad3 from "../assets/images/home/ad3.jpg";
import ImageSlider from "../components/common/home/ImageSlider";
import MoreProductsCard from "../components/common/home/MoreProductsCard";
import ProductCard from "../components/common/home/ProductCard";

const HomePage = (props) => {
  return (
    <div className="bg-gray-100 md:py-[50px] py-3">
      <div className="container px-5 mx-auto">
        <div className="hero grid gap-5 grid-cols-4 grid-rows-2">
          <div className="lg:col-span-2 col-span-4 row-span-2 lg:h-full h-[400px]">
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
        <div className="popular_products pt-[50px]">
          <div className="top flex justify-between items-center mb-[30px]">
            <h2 className="text-2xl font-semibold">Popular products</h2>
            <a href="/products">
              <button className="px-5 py-2 rounded-full bg-blue-200 hover:bg-blue-300 transition-all flex items-center gap-x-2">
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
              />
            ))}
            <MoreProductsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
