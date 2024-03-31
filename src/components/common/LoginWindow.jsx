/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const LoginWindow = (props) => {
  return (
    <AnimatePresence>
      {props.loginWindow && (
        <div className="fixed h-screen w-screen left-0 top-0 bg-[#00000080] flex items-center z-50 justify-center">
          <div className="container px-5 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} // Initial animation properties
              animate={{ opacity: 1, scale: 1 }} // Animation properties
              transition={{ duration: 0.3 }} // Animation duration
              className="relative overflow-hidden max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
            >
              <h1 className="text-2xl font-bold text-center">Login</h1>
              {props.error && (
                <div className="mt-2 text-red-500 text-center">
                  {props.error}
                </div>
              )}
              <form onSubmit={props.handleLoginSubmit} className="mt-5">
                <div className="mb-4">
                  {/* <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={props.email}
                    onChange={props.handleEmailChange}
                    className="border rounded w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  {/* <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={props.password}
                    onChange={props.handlePasswordChange}
                    className="border rounded w-full py-2 px-3 outline-none focus:outline-none transition-all focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="button w-full text-center">
                  <input
                    type="submit"
                    value="Login"
                    className="bg-blue-500 text-white py-2 cursor-pointer px-8 rounded hover:bg-blue-600"
                  />
                </div>
              </form>
              <p className="mt-4 text-center">
                Don&apos;t have an account?{" "}
                <a href="/sign-up" className="text-blue-500 cursor-pointer">
                  Sign Up
                </a>
              </p>
              <button
                className="absolute top-0 right-0 p-3 text-3xl hover:rotate-90 transition-all text-rose-600"
                onClick={() => props.setLoginWindow(false)}
              >
                <IoMdClose />
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginWindow;
