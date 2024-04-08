/* eslint-disable react/prop-types */
import { FaCartPlus } from "react-icons/fa6";

const ProductCard = (props) => {
  const truncatedProductName =
    props.product_name.length > 20
      ? `${props.product_name.slice(0, 20)}...`
      : props.product_name;

  return (
    <div className="md:p-3 p-2 bg-white rounded-lg hover:shadow-lg border transition-all flex flex-col justify-between">
      <a href={`/product-details?id=${props.productId}`}>
        <div className="img flex flex-col justify-center items-center mb-3">
          <img
            src={`${import.meta.env.VITE_SERVER_URI}/product_images/${
              props.product_image
            }`}
            alt={props.product_name}
            className="md:h-[200px] h-[180px] w-full rounded-lg object-cover"
          />
        </div>
        <div className="txt">
          <h1 className="product_name md:text-base text-sm font-[400]">
            {truncatedProductName}
            {/* {props.product_name} */}
          </h1>
          <h2 className="price mb-3">
            <span className="text-gray-500 font-[300] line-through mr-2 text-sm">
              {`${(props.selling_price + props.selling_price * 0.2)?.toFixed(
                2
              )} BDT`}
            </span>
            <br />
            <span className="text-blue-600 text-lg">
              {`${props.selling_price?.toFixed(2)} BDT`}
            </span>
          </h2>
        </div>
      </a>
      <div className="add_cart">
        <button
          className="rounded-lg bg-blue-500 hover:bg-blue-600 w-full py-2 text-white font-[500] flex items-center justify-center gap-2"
          onClick={() => props.handleCartClick(props._id, props.cartItemQty)}
        >
          <FaCartPlus className="text-xl" />{" "}
          <span className="text-sm">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
