/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigateTo = useNavigate();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignupFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://server.robogearbd.com/user/create-user", // Replace with your backend URL
        formData
      );

      if (response.status === 201) {
        // User created successfully
        toast.success("User created successfully!", {
          position: "top-center",
          autoClose: 3000, // Close after 3 seconds
        });
        // Reset form data
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          password: "",
          cpassword: "",
        });
        setError("");
        navigateTo.push("/login");
      }
    } catch (error) {
      toast.error(
        error.response.data.error || "An error occurred. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
      setError(
        error.response.data.error || "An error occurred. Please try again."
      );
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="overflow-hidden py-[100px] flex flex-col items-center justify-center bg-[#f6f9fb]">
      <div className="right w-full flex items-center flex-col justify-center">
        <div className="item relative py-[50px] shadow-xl px-6 bg-white w-[95%] max-w-[600px] rounded-2xl flex flex-col items-center gap-5">
          <div className="absolute bar -top-[40px] left-0 w-full h-[15px] rounded bg-[#41936b]"></div>
          <div className="text text-center">
            {/* <img
              src={Logo}
              alt="robogear logo"
              className="mx-auto mb-5 h-[50px]"
            /> */}
            <h2 className="mb-2 text-3xl font-bold text-gray-700">Sign Up</h2>
            <p className="text-sm font-[400] text-gray-500">
              Fill the form below carefully to create your account!
            </p>
            {error && <div className="mt-3 text-red-500">{error}</div>}
          </div>
          <form
            onSubmit={handleSignupSubmit}
            className="mt-5 max-w-[450px] w-full"
          >
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-600 text-sm mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleSignupFormChange}
                className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 text-sm mb-2"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleSignupFormChange}
                className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleSignupFormChange}
                className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-600 text-sm mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleSignupFormChange}
                className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500"
                placeholder="Your delivery address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleSignupFormChange}
                  className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 px-3 flex text-xl items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="cpassword"
                className="block text-gray-600 text-sm mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  value={formData.cpassword}
                  onChange={handleSignupFormChange}
                  className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500 pr-10"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 px-3 flex text-xl items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="button w-full text-center">
              <input
                type="submit"
                value="Create Account"
                className="bg-[#344563] w-full text-white cursor-pointer py-2 px-8 rounded hover:bg-[#23324d]"
              />
            </div>
          </form>
          <hr />
          <p className="text-center font-[400] text-gray-700">
            Already have account?{" "}
            <a
              type="button"
              // onClick={() => props.setLoginWindow(true)}
              href="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </a>{" "}
            instead!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
