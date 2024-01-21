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
    {
      userImage:
        "https://avatars.sched.co/8/90/1938608/avatar.jpg.320x320px.jpg?002",
      userName: "Alex Deck",
    },
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
  }, [productId]);

  return (
    <div className="bg-gray-100 py-[50px]">
      <div className="container px-5 mx-auto">
        <div className="main_product grid gap-10 grid-cols-2">
          <div className="left h-[450px] flex items-center justify-center bg-white rounded-xl overflow-hidden border">
            <img
              src={`https://robogear-bd-97bac4d16518.herokuapp.com/product_images/${productDetails.product_image}`}
              alt="product image"
              className="transition-all h-full w-auto object-contain"
            />
          </div>
          <div className="right flex flex-col gap-y-5 border bg-white p-5 rounded-xl">
            <h1 className="text-3xl font-semibold">
              {productDetails.product_name}
            </h1>
            <p className="font-[300] text-gray-500">{`#RGBD-${productDetails.product_id}`}</p>
            <h2 className="price mb-3">
              <div className="text-lg text-gray-500 font-[300] line-through mr-2">
                query string: {productId}
              </div>
              <div className="text-3xl text-blue-600 font-semibold">
                {/* {productDetails.selling_price} */}
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
                className="text-xl w-[80px] text-center px-5 py-2 outline-none border-t border-b"
                readOnly // Make the input read-only to prevent manual editing
              />
              <span
                className="px-5 flex items-center text-xl text-gray-600 bg-white hover:bg-gray-100 border rounded-e-lg cursor-pointer select-none"
                onClick={increaseQuantity} // Increase quantity when clicked
              >
                +
              </span>
            </div>
            <div className="add_cart">
              <button className="rounded-lg bg-blue-500 hover:bg-blue-600 w-[300px] py-3 text-white font-[500]">
                Add to Cart
              </button>
            </div>
            <div className="add_cart">
              <button className="rounded-lg bg-rose-500 hover:bg-rose-600 w-[300px] py-3 text-white font-[500]">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="bottom_details mt-[50px] grid gap-10 grid-cols-2">
          <div className="details p-5 bg-white rounded-xl border">
            <h2 className="text-xl font-semibold text-gray-800">Description</h2>
            <hr className="mt-3 mb-5" />
            <p className="text-gray-500 font-[300]">
              Arduino Uno R3 is the clone one of the latest version of Arduino
              Uno with an on-board CH340 usb – serial converter chip. Even there
              are some little differences with respect to the original one, it
              is almost the same in terms of usage and software. This provides
              you a cheaper opportunitiy to get started with Arduino boards. The
              microcontroller model of this board is the same as the original
              one (Atmega328). The only difference between microcontrollers is
              ther package.
            </p>
          </div>
          <div className="reviews p-5 bg-white rounded-xl border">
            <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
            <hr className="mt-3 mb-5" />
            {!reviews.length && (
              <div className="empty w-full h-[75%] flex justify-center items-center">
                <div className="txt text-gray-500 font-[300]">
                  This product has no reviews!
                </div>
              </div>
            )}
            {reviews.length >= 1 && (
              <div className="reviews_card_container flex flex-col gap-4">
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
