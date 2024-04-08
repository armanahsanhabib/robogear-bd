/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bKashQr from "../assets/images/bkash qr.png";
import bKash from "../assets/images/bkash send money.png";
import cellfinQr from "../assets/images/cellfin qr.png";
import cellfin from "../assets/images/cellfin.png";
import nagad from "../assets/images/nagad.png";

const MyCart = (props) => {
  const navigate = useNavigate();
  const [promo, setPromo] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [checkoutPage, setCheckoutPage] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState("");
  const [orderNo, setOrderNo] = useState(0);

  useEffect(() => {
    const fetchOrderNo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/order/all-invoices`
        );
        const data = response.data;

        if (data.length > 0) {
          // Find the maximum invoice number
          const maxInvoiceNo = Math.max(
            ...data.map((invoice) => invoice.receiptNo)
          );
          // Set invoice number to one greater than the maximum existing invoice number
          setOrderNo(maxInvoiceNo + 1);
        } else {
          setOrderNo(123001);
        }
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    };

    fetchOrderNo();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URI}/user/user-data/${props.userId}`
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const user = response.data;

      setName(user.fullName);
      setAddress(user.address);
      setPhone(user.phone);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    props.fetchProductsData();
  }, []);

  useEffect(() => {
    calculateCartValues();
  }, [props.cartItems, props.products, discount, shipping, city]);

  const calculateCartValues = () => {
    let subTotal = 0;

    props.cartItems.forEach((cartItem) => {
      const product = props.products.find(
        (product) => product._id === cartItem.productId
      );
      if (product) {
        subTotal += product.selling_price * cartItem.qty;
      }
    });

    setSubtotal(subTotal);
    if (city === "barishal") {
      setShipping(0);
    } else if (city === "outside-barishal") {
      setShipping(110);
    }
    setTotal(subTotal + shipping - discount);
  };

  useEffect(() => {
    const updatePaymentMethod = () => {
      if (city === "barishal") {
        setPayment("");
      } else if (city === "outside-barishal") {
        setPayment("");
      }
    };

    // Call the function to update payment method when city changes
    updatePaymentMethod();
  }, [city]);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (promo === "ROBOGEARBD25" && subtotal >= 500) {
      toast.success(`Congratulations! You got 25 TK discount!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setDiscount(25);
    } else if (promo === "ROBOGEARBD25" && subtotal < 500) {
      toast.warning(`You have to make minimum 500 TK order!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setDiscount(0);
    } else {
      toast.error(`Invalid promo code!`, {
        position: "bottom-center",
        autoClose: 3000,
      });
      setDiscount(0);
    }
  };

  const handlePromoChange = (e) => {
    setPromo(e.target.value);
  };

  const handleCartItemRemove = async (userId, index) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URI}/user/remove-from-cart`,
        {
          userId,
          index,
        }
      );

      if (response.status === 200) {
        toast.success("Item removed from cart!", {
          autoClose: 3000,
          position: "top-center",
        });
        props.fetchCart();
        if (discount) {
          setDiscount(0);
          setPromo("");
          toast.error("Promo discount removed!", {
            autoClose: 3000,
            position: "top-center",
          });
        }
      } else {
        toast.error("Failed to remove item from cart!", {
          autoClose: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
      toast.error("Failed to remove item from cart!", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  const handleCheckout = () => {
    if (props.cartItems.length === 0) {
      toast.error(
        "Your cart is empty, please add products to coplete your order!",
        {
          autoClose: 3000,
          position: "top-center",
        }
      );
    } else {
      setCheckoutPage(true);
      window.scrollTo(0, 0);
    }
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URI}/user/place-order`,
        {
          userId: props.userId,
          orderDetails: {
            orderNo,
            orderDate: new Date(),
            cartItems: props.cartItems,
            name,
            address,
            phone,
            city,
            paymentMethod: payment,
            subtotal,
            discount,
            shipping,
            orderTotal: total,
            paymentStatus: "Pending",
            orderStatus: "Pending",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Order placed successfully!", {
          autoClose: 3000,
          position: "top-center",
        });
        navigate("/my-account");
      } else {
        toast.error("Failed to place order!", {
          autoClose: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
      toast.error("Failed to place order!", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  const handleOrderConfirm = (e) => {
    e.preventDefault();
    placeOrder();
  };

  const CartItem = (props) => {
    return (
      <tr className="border-b border-gray-300">
        <td className="py-3 sm:pr-3 pr-2">
          <div className="flex md:flex-row flex-col md:text-start text-center items-center gap-x-3 gap-y-2">
            <img
              src={`${import.meta.env.VITE_SERVER_URI}/product_images/${
                props.productImg
              }`}
              alt="image"
              className="lg:h-[65px] h-[50px] rounded"
            />
            <div className="details">
              <h3 className="lg:text-base text-sm">{props.productName}</h3>
              <p className="text-gray-500 hidden sm:block lg:text-base text-xs font-[300]">
                Code: #RGBD-{props.productId}
              </p>
            </div>
          </div>
        </td>
        <td className="py-3 md:px-4 px-2 text-center lg:text-base text-sm">
          ৳ {props.price?.toFixed(2)}
        </td>
        <td className="py-3 md:px-4 px-2 text-center mx-auto lg:w-[120px]">
          <div className="qty flex lg:flex-row flex-col items-center">
            <span
              className="px-3 flex items-center text-2xl text-gray-600 bg-white hover:bg-gray-100 lg:border lg:rounded-s-lg cursor-pointer select-none"
              // onClick={decreaseQuantity}
            >
              -
            </span>
            <input
              type="text"
              value={props.qty} // Use the quantity state as the input value
              className="text-center lg:text-base text-sm py-1 outline-none border-t w-[50px] border-b"
              readOnly // Make the input read-only to prevent manual editing
            />
            <span
              className="px-3 flex items-center text-2xl text-gray-600 bg-white hover:bg-gray-100 lg:border lg:rounded-e-lg cursor-pointer select-none"
              // onClick={increaseQuantity}
            >
              +
            </span>
          </div>
        </td>
        <td className="py-3 md:px-4 px-2 text-center lg:text-base text-sm">
          ৳ {props.cost?.toFixed(2)}
        </td>
        <td className="py-3 md:px-4 px-2 text-center">
          <button
            type="button"
            className=""
            onClick={() => handleCartItemRemove(props.userId, props.index)}
          >
            <LiaTimesSolid className="md:text-xl text-base text-gray-500" />
          </button>
        </td>
      </tr>
    );
  };

  const PaymentCard = (props) => {
    return (
      <div
        className={`payment_card flex flex-col items-center w-full p-5 rounded-lg border ${props.style}`}
      >
        <img
          src={
            payment === "bkash"
              ? bKash
              : payment === "nagad"
              ? nagad
              : payment === "cellfin"
              ? cellfin
              : ""
          }
          className="sm:h-[80px] w-[60%] sm:w-auto mb-3"
          alt="bkash"
        />
        <div className="flex gap-3 flex-col items-center">
          {payment !== "nagad" && (
            <img
              src={
                payment === "bkash"
                  ? bKashQr
                  : payment === "cellfin"
                  ? cellfinQr
                  : ""
              }
              alt="qr code"
              className="sm:w-[325px] w-[80%]"
            />
          )}
          <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="number sm:text-3xl text-xl">
              {payment !== "cellfin" ? "Send Money:" : "Cellfin Transfer:"}{" "}
              01704428814
            </h3>
            {payment === "bkash" ? (
              <p className="sm:text-xl">
                Amount: {Math.ceil(total * (1 + 1.25 / 100)).toFixed(2)} BDT{" "}
                <span className="sm:text-sm text-xs">{`(${total.toFixed(
                  2
                )} + 1.25% bKash charge)`}</span>
              </p>
            ) : payment === "nagad" ? (
              <p className="sm:text-xl">
                Amount: {Math.ceil(total * (1 + 1.5 / 100)).toFixed(2)} BDT{" "}
                <span className="sm:text-sm text-xs">{`(${total.toFixed(
                  2
                )} + 1.5% Nagad charge)`}</span>
              </p>
            ) : (
              <p className="sm:text-xl">
                Amount: {Math.ceil(total).toFixed(2)} BDT
              </p>
            )}
            <p className="sm:text-xl">Reference: RGBD{orderNo}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container md:px-5 p-2 mx-auto md:py-[30px]">
        {!checkoutPage ? (
          <div className="all_products bg-white lg:pb-[50px] lg:pt-[40px] rounded-lg border lg:px-[50px] sm:px-[25px] px-3 sm:py-5 py-3">
            <div className="top flex justify-between items-center border-b pb-3 mb-5">
              <h2 className="md:text-2xl text-xl font-semibold w-full">
                My Cart
              </h2>
            </div>
            <div className="cart_container flex xl:flex-row items-center xl:items-start flex-col gap-12">
              <div className="added_products w-full">
                <h3 className="text-lg text-center xl:text-start font-semibold text-blue-600 mb-3">
                  Added Products
                </h3>
                <table className="w-full overflow-x-auto border-collapse">
                  <thead>
                    <tr className="text-gray-500 border-y-2 lg:text-sm text-xs border-y-gray-300">
                      <th className="py-2 md:px-4 font-[500]">
                        Product Details
                      </th>
                      <th className="py-2 md:px-4 font-[500]">Price</th>
                      <th className="py-2 md:px-4 font-[500]">Qty</th>
                      <th className="py-2 md:px-4 font-[500]">Total</th>
                      <th className="py-2 md:px-4 font-[500]">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cartItems.map((cartItem, index) => {
                      const product = props.products.find(
                        (product) => product._id === cartItem.productId
                      );

                      if (!product) {
                        // Handle the case when product is not found
                        console.warn(
                          `Product not found for productId: ${cartItem.productId}`
                        );
                        return null; // or render a placeholder component
                      }

                      return (
                        <CartItem
                          key={index}
                          productImg={product.product_image}
                          productName={product.product_name}
                          productId={product.product_id}
                          price={product.selling_price}
                          cost={product.selling_price * cartItem.qty}
                          qty={cartItem.qty}
                          userId={props.userId}
                          index={index}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="order_summery lg:w-[450px] w-[96%]">
                <h3 className="text-lg text-center xl:text-start font-semibold text-blue-600 mb-3">
                  Order Summary
                </h3>
                <div className="promo my-3">
                  <form onSubmit={handlePromoSubmit}>
                    <label htmlFor="promo" className="text-sm text-gray-700">
                      Enter promo
                    </label>
                    <div className="flex items-center gap-5 justify-between mt-2">
                      <input
                        type="text"
                        name="promo"
                        id="promo"
                        placeholder="Enter promo"
                        className="outline-none w-[65%] focus:outline-none border px-3 py-2 border-gray-600 focus:border-gray-800"
                        value={promo}
                        onChange={handlePromoChange} // Update promo state on change
                      />
                      <input
                        type="submit"
                        value="Apply"
                        className="px-8 py-2 bg-[#344563] w-[35%] hover:bg-[#182233] text-white cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="">
                      <td className="py-2">Subtotal</td>
                      <td className="py-2 text-right">{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Shipping Charge</td>
                      <td className="py-2 text-right">{shipping.toFixed(2)}</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Discount</td>
                      <td className="py-2 text-right">
                        - {discount.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-t-2 border-t-gray-500">
                      <td className="py-2 font-semibold">Total</td>
                      <td className="py-2 font-semibold text-right">
                        {total.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="buttons mt-5">
                  <button
                    type="button"
                    className="w-full py-3 text-md rounded-full text-white bg-[#344563] hover:bg-[#182233]"
                    onClick={() => handleCheckout()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="all_products bg-white lg:pb-[50px] lg:pt-[40px] rounded-lg border lg:px-[50px] sm:px-[25px] px-3 sm:py-5 py-3">
            <div className="top flex justify-between items-center border-b pb-3 mb-5">
              <h2 className="md:text-2xl text-xl font-semibold w-full flex gap-2 items-center">
                <BiArrowBack
                  onClick={() => setCheckoutPage(false)}
                  className="text-blue-600 cursor-pointer"
                />{" "}
                Checkout page
              </h2>
            </div>
            <div className="cart_container flex xl:flex-row items-center xl:items-start flex-col-reverse gap-12">
              <div className="w-full order_details">
                <h3 className="text-lg text-center mb-1 xl:text-start font-semibold text-blue-600">
                  Order Details
                </h3>
                <p className="mb-3 text-gray-700">Order No: #RGBD-{orderNo}</p>
                <form
                  onSubmit={handleOrderConfirm}
                  className="max-w-[1000px] grid grid-cols-3 gap-x-8 gap-y-5 sm:mb-0 pb-5"
                >
                  <div className="item flex flex-col sm:col-span-1 col-span-3 gap-1">
                    <label htmlFor="name" className="text-gray-700 font-[300]">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                      className="outline-none px-3 py-1 focus:outline-none border focus:border-blue-600 rounded-md"
                    />
                  </div>
                  <div className="item flex sm:col-span-1 col-span-3 flex-col gap-1">
                    <label
                      htmlFor="contact"
                      className="text-gray-700 font-[300]"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      className="outline-none px-3 py-1 focus:outline-none border focus:border-blue-600 rounded-md"
                    />
                  </div>
                  <div className="item flex flex-col sm:col-span-1 col-span-3 gap-1">
                    <label htmlFor="city" className="text-gray-700 font-[300]">
                      Select your city
                    </label>
                    <select
                      name="city"
                      id="city"
                      value={city}
                      onChange={handleCityChange}
                      required
                      className="outline-none px-3 py-1 focus:outline-none border focus:border-blue-600 rounded-md"
                    >
                      <option value="" selected disabled>
                        Select your city
                      </option>
                      <option value="barishal">
                        Barishal City (Free delivery)
                      </option>
                      <option value="outside-barishal">
                        Outside of Barishal City
                      </option>
                    </select>
                  </div>
                  <div className="item flex flex-col gap-1 sm:col-span-2 col-span-3">
                    <label
                      htmlFor="address"
                      className="text-gray-700 font-[300]"
                    >
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={address}
                      onChange={handleAddressChange}
                      required
                      className="outline-none px-3 py-1 focus:outline-none border focus:border-blue-600 rounded-md"
                    />
                  </div>
                  <div className="item flex sm:col-span-1 col-span-3 flex-col gap-1">
                    <label
                      htmlFor="payment_method"
                      className="text-gray-700 font-[300]"
                    >
                      Payment Method
                    </label>
                    <select
                      name="payment_method"
                      id="payment_method"
                      value={payment}
                      onChange={handlePaymentChange}
                      required
                      className="outline-none px-3 py-1 focus:outline-none border focus:border-blue-600 rounded-md"
                    >
                      {city === "barishal" ? (
                        <>
                          <option value="" selected disabled>
                            Select payment method
                          </option>
                          <option value="cod">Cash on delivery</option>
                          <option value="bkash">bKash (send money)</option>
                          <option value="nagad">Nagad (send money)</option>
                          <option value="cellfin">
                            Cellfin (fund Transfer)
                          </option>
                        </>
                      ) : city === "outside-barishal" ? (
                        <>
                          <option value="" selected disabled>
                            Select payment method
                          </option>
                          <option value="bkash">bKash (send money)</option>
                          <option value="nagad">Nagad (send money)</option>
                          <option value="cellfin">
                            Cellfin (fund Transfer)
                          </option>
                        </>
                      ) : (
                        <>
                          <option value="" selected disabled>
                            Select payment method
                          </option>
                          <option value="cod" disabled>
                            Cash on delivery
                          </option>
                          <option value="bkash" disabled>
                            bKash (send money)
                          </option>
                          <option value="nagad" disabled>
                            Nagad (send money)
                          </option>
                          <option value="cellfin" disabled>
                            Cellfin (fund Transfer)
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                  {payment === "cod" ||
                    (payment !== "" && (
                      <div className="col-span-3">
                        <PaymentCard props />
                      </div>
                    ))}
                  <div className="item flex text-rose-600 flex-col gap-1 col-span-3">
                    {payment === "cod" ? (
                      <div className="">
                        <p>
                          আপনি &apos;Cash on delivery&apos; সিলেক্ট করেছেন!
                          আপনার প্রোডাক্ট রিসিভ করার সময় ৳ {total.toFixed(2)}{" "}
                          টাকা পেমেন্ট পরিশোধ করুন!
                        </p>
                      </div>
                    ) : payment === "bkash" ? (
                      <div className="">
                        <p>
                          আপনি Payment method হিসেবে &apos;bKash payment&apos;
                          সিলেক্ট করেছেন! আমাদের বিকাশ নাম্বারে সর্বমোট ৳{" "}
                          {Math.ceil(total * (1 + 1.25 / 100)).toFixed(2)} টাকা
                          &apos;send-money&apos; করে আপনার অর্ডার নিশ্চিত করুন!
                        </p>
                      </div>
                    ) : payment === "nagad" ? (
                      <div className="">
                        <p>
                          আপনি Payment method হিসেবে &apos;Nagad payment&apos;
                          সিলেক্ট করেছেন! আমাদের নগদ নাম্বারে সর্বমোট ৳{" "}
                          {Math.ceil(total * (1 + 1.5 / 100)).toFixed(2)} টাকা
                          &apos;send-money&apos; করে আপনার অর্ডার নিশ্চিত করুন!
                        </p>
                      </div>
                    ) : payment === "cellfin" ? (
                      <div className="">
                        <p>
                          আপনি Payment method হিসেবে &apos;Cellfin&apos; সিলেক্ট
                          করেছেন! আমাদের Cellfin নাম্বারে সর্বমোট ৳{" "}
                          {total.toFixed(2)} টাকা &apos;Cellfin Fund
                          Transfer&apos; করে আপনার অর্ডার নিশ্চিত করুন!
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="item flex flex-col gap-1 col-span-3 mt-5">
                    <input
                      type="submit"
                      value="Confirm Order"
                      className="px-8 py-2 max-w-[250px] cursor-pointer hover:shadow hover:bg-blue-800 mx-auto rounded-lg bg-blue-600 text-white"
                    />
                  </div>
                </form>
              </div>
              <div className="right lg:w-[450px] w-[96%]">
                <h3 className="text-lg text-center xl:text-start font-semibold text-blue-600 mb-3">
                  Order Summary
                </h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="">
                      <td className="py-2">Subtotal</td>
                      <td className="py-2 text-right">{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Shipping Charge</td>
                      <td className="py-2 text-right">{shipping.toFixed(2)}</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Discount</td>
                      <td className="py-2 text-right">
                        - {discount.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-t-2 border-t-gray-500">
                      <td className="py-2 font-semibold">Total</td>
                      <td className="py-2 font-semibold text-right">
                        {total.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
