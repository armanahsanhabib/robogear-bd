import React from "react";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-[50px]">
        <div className="relative h-[300px]">
          <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-7xl text-blue-600 font-bold z-50">
            NOT FOUND
          </h1>
          <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[350px] text-gray-100">
            404
          </span>
        </div>
        <h2 className="text-3xl font-semibold text-gray-600 text-center">
          Sorry! The requested url not found.
        </h2>
      </div>
    </div>
  );
};

export default ErrorPage;
