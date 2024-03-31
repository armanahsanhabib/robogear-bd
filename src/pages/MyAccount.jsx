/* eslint-disable react/prop-types */
import axios from "axios";
import greetingTime from "greeting-time";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationWindow from "../components/common/ConfirmationWindow";

const MyAccount = (props) => {
  const navigate = useNavigate();
  const [logoutConfirmation, setLogOutConfirmation] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    cart: [],
    orders: [],
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/user/user-data/${props.userData._id}`
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;

      setUserData(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Logout function to clear authentication status
  const logout = () => {
    props.setAuthenticated(false);
    setLogOutConfirmation(false);
    localStorage.removeItem("authenticated");
    localStorage.removeItem("userData"); // Remove userData on logout
    toast.success("Logout successful!", {
      position: "top-center",
      autoClose: 3000,
    });
    navigate("/login");
  };

  const UserDataLi = (props) => {
    return (
      <li className="flex items-center text-gray-600">
        <div className="w-[120px]">{props.tag}:</div>
        <div className="">{props.fullName}</div>
      </li>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container md:px-5 px-2 mx-auto py-[30px]">
        <div className="all_products bg-white lg:pb-[50px] lg:pt-[40px] rounded-lg border px-[50px] md:py-5 py-3">
          <div className="top flex justify-between items-center border-b pb-3 mb-5">
            <h2 className="md:text-2xl text-xl font-semibold w-full">
              My Account
            </h2>
            <button
              className="rounded-full w-[120px] px-5 py-2 transition-all bg-blue-300 break-keep hover:bg-blue-500"
              onClick={() => setLogOutConfirmation(true)}
            >
              Log Out
            </button>
          </div>
          <div className="product_container">
            <h3 className="text-xl capitalize">
              {`${greetingTime(new Date())}, ${
                userData.fullName.split(" ")[0]
              }!`}
            </h3>
            <p className="text-gray-700 font-[300] mb-8">
              Welcome to your account! You can view your all data here.
            </p>
            <h3 className="text-xl text-blue-600 font-semibold mb-3">
              Account Details
            </h3>
            <ul className="account_details flex flex-col gap-3 text-lg">
              <UserDataLi tag="Name" fullName={userData.fullName} />
              <UserDataLi tag="Phone" fullName={userData.phone} />
              <UserDataLi tag="Email" fullName={userData.email} />
              <UserDataLi tag="Address" fullName={userData.address} />
              {/* <UserDataLi tag="Password" fullName={props.userData.password} /> */}
            </ul>
            <div className="order_details mt-8">
              <h3 className="text-xl text-blue-600 font-semibold">
                Your orders
              </h3>
              <p className="text-gray-700 font-[300] mb-3">
                You can view your order status from here,
              </p>
              {userData.orders?.length > 0 ? (
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="py-2 px-4 border">Order No.</th>
                      <th className="py-2 px-4 border">Order Date</th>
                      <th className="py-2 px-4 border">Payment Method</th>
                      <th className="py-2 px-4 border">Total Bill</th>
                      <th className="py-2 px-4 border">Payment Status</th>
                      <th className="py-2 px-4 border">Order Status</th>
                      <th className="py-2 px-4 border">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.orders.map((order) => (
                      <tr
                        key={order.orderNo}
                        className="border-b border-gray-300"
                      >
                        <td className="py-2 text-center px-4 border">
                          #{order.orderNo}
                        </td>
                        <td className="py-2 text-center px-4 border">
                          {order.orderDate}
                        </td>
                        <td className="py-2 text-center px-4 border">
                          {order.paymentMethod}
                        </td>
                        <td className="py-2 text-center px-4 border">
                          {order.totalBill.toFixed(2)} BDT
                        </td>
                        <td className="py-2 text-center px-4 border">
                          {order.paymentStatus}
                        </td>
                        <td className="py-2 text-center px-4 border">
                          {order.orderStatus}
                        </td>
                        <td className="py-2 text-center px-4 border">
                          <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="no_order italic border p-3 text-rose-500 bg-white">
                  You don&apos;t have any order!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ConfirmationWindow
        logout={logout}
        logoutConfirmation={logoutConfirmation}
        setLogOutConfirmation={setLogOutConfirmation}
      />
    </div>
  );
};

export default MyAccount;
