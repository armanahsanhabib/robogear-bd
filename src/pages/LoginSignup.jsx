import { useState } from "react";
import RobotBg from "../assets/images/home-made-robot-desk.jpg";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="py-[50px]">
      <div className="container grid grid-cols-2 px-5 mx-auto">
        <div className="image_sectio">
          <img src={RobotBg} alt="login page bg" />
        </div>
        <div className="form section flex items-center justify-center h-full w-full bg-blue-100">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-8">
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <form>
              {/* Common Fields for both Login and Signup */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your password"
                />
              </div>

              {/* Additional Fields for Sign Up */}
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              {/* Login or Sign Up Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Switch between Login and Sign Up */}
            <p className="mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleSwitch}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
