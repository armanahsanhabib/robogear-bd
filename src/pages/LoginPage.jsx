/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle input change for username
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request using Axios
      const response = await axios.post(
        "https://server.robogearbd.com/user/user-authentication",
        {
          phone,
          password,
        }
      );

      if (response.status === 200) {
        props.setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
        props.setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        setPhone("");
        setPassword("");
        setError("");
      }
      navigate("/my-account");
    } catch (error) {
      console.error(error);
      setError("Invalid username or password!");
      toast.error("Invalid username or password!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="overflow-hidden py-[100px] flex flex-col items-center justify-center bg-[#f6f9fb]">
      <div className="right w-full flex items-center flex-col justify-center">
        <div className="item relative py-[50px] shadow-xl px-6 bg-white w-[95%] max-w-[600px] rounded-2xl flex flex-col items-center gap-5">
          <div className="absolute bar -top-[40px] left-0 w-full h-[15px] rounded bg-blue-500"></div>
          <div className="text text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-700">Login</h2>
            <p className="text-sm font-[400] text-gray-500">
              Enter your mobile number and password to login!
            </p>
            {error && <div className="mt-3 text-red-500">{error}</div>}
          </div>
          <form
            onSubmit={handleLoginSubmit}
            className="mt-5 max-w-[450px] w-full"
          >
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
                value={phone}
                onChange={handlePhoneChange}
                className="border-2 rounded-md w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-sky-500"
                placeholder="Enter your mobile number"
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
                  value={password}
                  onChange={handlePasswordChange}
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
            <div className="button w-full text-center">
              <input
                type="submit"
                value="Login"
                className="bg-[#344563] w-full text-white cursor-pointer py-2 px-8 rounded hover:bg-[#23324d]"
              />
            </div>
          </form>
          <hr />
          <p className="text-center font-[400] text-gray-700">
            Don&apos;t have account?{" "}
            <a
              type="button"
              // onClick={() => props.setLoginWindow(true)}
              href="/sign-up"
              className="text-blue-600 hover:underline"
            >
              Create
            </a>{" "}
            one!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
