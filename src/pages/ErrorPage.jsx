import Error404 from "../assets/images/404 error.png";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container px-5 mx-auto py-[80px]">
        {/* <div className="relative h-[300px]">
          <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-7xl text-blue-600 font-bold z-10">
            NOT FOUND
          </h1>
          <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[350px] text-white">
            404
          </span>
        </div> */}
        <img
          src={Error404}
          alt="404 Error Image"
          className="mx-auto w-[90%] max-w-[800px]"
        />
        <h2 className="text-3xl font-semibold text-gray-600 text-center">
          Sorry! The requested url not found.
        </h2>
      </div>
    </div>
  );
};

export default ErrorPage;
