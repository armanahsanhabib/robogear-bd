/* eslint-disable react/prop-types */
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const MyCart = (props) => {
  const [promo, setPromo] = useState("");

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the promo form, such as applying the promo code
    toast.error(`Invalid promo code!`, {
      position: "bottom-center",
      autoClose: 3000,
    });
    console.log("Promo code submitted:", promo);
  };

  const handlePromoChange = (e) => {
    setPromo(e.target.value);
  };

  const CartItem = (props) => {
    return (
      <tr key={props.order?.orderNo} className="border-b border-gray-300">
        <td className="py-3 flex items-center gap-3">
          <img
            src="https://placehold.co/250"
            alt="image"
            className="h-[65px] rounded"
          />
          <div className="details">
            <h3 className="">Arduino UNO R3 High Quality</h3>
            <p className="text-gray-500 font-[300]">Code: #RGBD-246</p>
          </div>
        </td>
        <td className="py-3 px-4 text-center">৳ 850.00</td>
        <td className="py-3 px-4 text-center mx-auto w-[120px]">
          <div className="qty flex">
            <span
              className="px-3 flex items-center text-xl text-gray-600 bg-white hover:bg-gray-100 border rounded-s-lg cursor-pointer select-none"
              // onClick={decreaseQuantity}
            >
              -
            </span>
            <input
              type="text"
              value={3} // Use the quantity state as the input value
              className="text-center py-1 outline-none border-t w-[50px] border-b"
              readOnly // Make the input read-only to prevent manual editing
            />
            <span
              className="px-3 flex items-center text-xl text-gray-600 bg-white hover:bg-gray-100 border rounded-e-lg cursor-pointer select-none"
              // onClick={increaseQuantity}
            >
              +
            </span>
          </div>
        </td>
        <td className="py-3 px-4 text-center">৳ 1700.00</td>
        <td className="py-3 px-4 text-center">
          <button type="button" className="">
            <LiaTimesSolid className="text-xl text-gray-500" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container md:px-5 px-2 mx-auto py-[30px]">
        <div className="all_products bg-white lg:pb-[50px] lg:pt-[40px] rounded-lg border px-[50px] md:py-5 py-3">
          <div className="top flex justify-between items-center border-b pb-3 mb-5">
            <h2 className="md:text-2xl text-xl font-semibold w-full">
              My Cart
            </h2>
          </div>
          <div className="cart_container flex gap-12">
            <div className="added_products w-full">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                Added Products
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-gray-500 border-y-2 text-sm border-y-gray-300">
                    <th className="py-2 px-4 font-[500]">Product Details</th>
                    <th className="py-2 px-4 font-[500]">Price</th>
                    <th className="py-2 px-4 font-[500]">Qty</th>
                    <th className="py-2 px-4 font-[500]">Total</th>
                    <th className="py-2 px-4 font-[500]">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </tbody>
              </table>
            </div>
            <div className="order_summery w-[450px]">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                Order Summary
              </h3>
              <div className="promo my-3">
                <form onSubmit={handlePromoSubmit}>
                  <label htmlFor="promo" className="text-sm text-gray-700">
                    Enter promo
                  </label>
                  <div className="flex items-center gap-5 mt-2">
                    <input
                      type="text"
                      name="promo"
                      id="promo"
                      placeholder="Enter promo"
                      className="outline-none focus:outline-none border px-3 py-2 border-gray-600 focus:border-gray-800"
                      value={promo}
                      onChange={handlePromoChange} // Update promo state on change
                    />
                    <input
                      type="submit"
                      value="Apply"
                      className="px-8 py-2 bg-[#344563] hover:bg-[#182233] text-white cursor-pointer"
                    />
                  </div>
                </form>
              </div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="">
                    <td className="py-2">Subtotal</td>
                    <td className="py-2 text-right">
                      {props.subtotal} 1280.00
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-2">Shipping Charge</td>
                    <td className="py-2 text-right">{props.shipping} 110.00</td>
                  </tr>
                  <tr className="">
                    <td className="py-2">Discount</td>
                    <td className="py-2 text-right">-{props.discount} 20.00</td>
                  </tr>
                  <tr className="border-t-2 border-t-gray-500">
                    <td className="py-2 font-semibold">Total</td>
                    <td className="py-2 font-semibold text-right">
                      {props.total} 1160.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="buttons mt-5">
                <button
                  type="button"
                  className="w-full py-3 text-md rounded-full text-white bg-[#344563] hover:bg-[#182233]"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
