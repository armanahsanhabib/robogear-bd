/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetailsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  const [productDetails, setProductDetails] = useState([]);

  // Initialize quantity state with a default value
  const [quantity, setQuantity] = useState(1);

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const reviews = [
    // {
    //   userImage:
    //     "https://avatars.sched.co/8/90/1938608/avatar.jpg.320x320px.jpg?002",
    //   userName: "Alex Deck",
    // },
  ];

  // fetch product details data
  const fetchProductDetailsData = async () => {
    try {
      const response = await fetch(
        `https://robogear-bd-97bac4d16518.herokuapp.com/products/product-details?id=${productId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setProductDetails(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchProductDetailsData();
  });

  return (
    <div className="bg-gray-100 lg:py-[50px] py-3">
      <div className="container lg:px-5 px-2 mx-auto">
        <div className="main_product grid gap-5 lg:grid-cols-2 grid-cols-1">
          <div className="left lg:h-[450px] h-[350px] flex items-center justify-center bg-white md:rounded-xl rounded-lg overflow-hidden border">
            <img
              src={`https://robogear-bd-97bac4d16518.herokuapp.com/product_images/${productDetails.product_image}`}
              alt={productDetails.product_name}
              className="transition-all h-full w-auto object-contain"
            />
          </div>
          <div className="right flex flex-col lg:gap-y-3 gap-y-3 border bg-white md:p-5 p-3 md:rounded-xl rounded-lg">
            <h1 className="lg:text-3xl text-2xl font-semibold">
              {productDetails.product_name}
            </h1>
            <p className="font-[300] text-gray-500">{`Product Code: #RGBD-${productDetails.product_id}`}</p>
            <h2 className="price mb-3">
              <div className="lg:text-lg text-gray-400 font-[300] line-through mr-2">
                {`${(
                  productDetails.selling_price +
                  productDetails.selling_price * 0.2
                )?.toFixed(2)} BDT`}
              </div>
              <div className="lg:text-3xl text-2xl text-blue-600 font-semibold">
                {productDetails.selling_price?.toFixed(2)} BDT
              </div>
            </h2>
            <div className="qty flex">
              <span
                className="px-5 flex items-center text-xl text-gray-600 bg-white hover:bg-gray-100 border rounded-s-lg cursor-pointer select-none"
                onClick={decreaseQuantity} // Decrease quantity when clicked
              >
                -
              </span>
              <input
                type="text"
                value={quantity} // Use the quantity state as the input value
                className="lg:text-xl text-md w-[80px] text-center px-5 py-2 outline-none border-t border-b"
                readOnly // Make the input read-only to prevent manual editing
              />
              <span
                className="px-5 flex items-center text-xl text-gray-600 bg-white hover:bg-gray-100 border rounded-e-lg cursor-pointer select-none"
                onClick={increaseQuantity} // Increase quantity when clicked
              >
                +
              </span>
            </div>
            <div className="buttons mt-2 flex lg:flex-col lg:gap-3 gap-5">
              <button className="rounded-lg bg-blue-500 hover:bg-blue-600 lg:w-[300px] w-full py-3 text-white font-[500]">
                Add to Cart
              </button>
              <button className="rounded-lg bg-emerald-500 hover:bg-emerald-600 lg:w-[300px] w-full py-3 text-white font-[500]">
                Buy Now
              </button>
            </div>
          </div>
          <div className="details md:p-5 p-3 bg-white md:rounded-xl rounded-lg border">
            <h2 className="md:text-xl text-lg font-semibold text-gray-800">
              Description
            </h2>
            <hr className="my-3" />
            <p className="text-gray-500 font-[300]">
              Sorry this product has no information! To know more about this
              product please{" "}
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  productDetails.product_name
                )}`}
                className="text-blue-600 hover:underline"
                target="blank"
              >
                click
              </a>{" "}
              here.
            </p>
          </div>
          <div className="reviews md:p-5 p-3 bg-white md:rounded-xl rounded-lg border">
            <h2 className="md:text-xl text-lg font-semibold text-gray-800">
              Reviews
            </h2>
            <hr className="my-3" />
            {!reviews.length && (
              <div className="empty w-full flex justify-center items-center">
                <div className="txt text-gray-500 font-[300]">
                  This product has no reviews!
                </div>
              </div>
            )}
            {reviews.length >= 1 && (
              <div className="reviews_card_container flex flex-col gap-4">
                <div className="review_card flex gap-3 border rounded-lg bg-gray-50">
                  <img
                    className="rounded-full w-[62px] h-[62px]"
                    src={reviews[0].userImage}
                    alt={reviews[0].userName}
                  />
                  <div className="txt flex flex-col gap-y-1">
                    <h3 className="text-lg font-[600]">
                      {reviews[0].userName}
                    </h3>
                    <p className="text-gray-500 font-[300]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo praesentium quo earum magnam officiis tempora fugiat
                      cumque aliquam porro. Maxime.
                    </p>
                  </div>
                </div>
                <div className="review_card flex gap-3 border rounded-lg bg-gray-50 p-3">
                  <img
                    className="rounded-full w-[62px] h-[62px]"
                    src={reviews[0].userImage}
                    alt={reviews[0].userName}
                  />
                  <div className="txt flex flex-col gap-y-1">
                    <h3 className="text-lg font-[600]">
                      {reviews[0].userName}
                    </h3>
                    <p className="text-gray-500 font-[300]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo praesentium quo earum magnam officiis tempora fugiat
                      cumque aliquam porro. Maxime.
                    </p>
                  </div>
                </div>
                <div className="review_card flex gap-3 border rounded-lg bg-gray-50 p-3">
                  <img
                    className="rounded-full w-[62px] h-[62px]"
                    src={reviews[0].userImage}
                    alt={reviews[0].userName}
                  />
                  <div className="txt flex flex-col gap-y-1">
                    <h3 className="text-lg font-[600]">
                      {reviews[0].userName}
                    </h3>
                    <p className="text-gray-500 font-[300]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo praesentium quo earum magnam officiis tempora fugiat
                      cumque aliquam porro. Maxime.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
