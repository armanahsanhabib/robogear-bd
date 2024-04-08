/* eslint-disable react/prop-types */
import { GrNext } from "react-icons/gr";
import Ad1 from "../assets/images/home/ad1.jpg";
import Ad2 from "../assets/images/home/ad2.jpg";
import Ad3 from "../assets/images/home/ad3.jpg";
import ImageSlider from "../components/home/ImageSlider";
import ProductCard from "../components/home/ProductCard";

const HomePage = (props) => {
  return (
    <div className="bg-gray-100 lg:py-[50px] md:py-5 py-3">
      <div className="container md:px-5 px-2 mx-auto">
        <div className="hero grid md:gap-5 gap-3 grid-cols-4 grid-rows-2">
          <div className="lg:col-span-2 col-span-4 row-span-2 lg:h-full md:h-[400px] h-[250px]">
            <ImageSlider />
          </div>
          <div className="ad1 lg:col-span-2 col-span-4">
            <img src={Ad1} alt="ad1" className="rounded-lg h-full" />
          </div>
          <div className="ad2 lg:col-span-1 col-span-2">
            <img src={Ad2} alt="ad2" className="rounded-lg h-full" />
          </div>
          <div className="ad3 lg:col-span-1 col-span-2">
            <img src={Ad3} alt="ad3" className="rounded-lg h-full" />
          </div>
        </div>
        <div className="promo text-gray-800 md:mt-[50px] bg-white sm:p-8 p-3 rounded-xl mt-8 grid lg:grid-cols-2 grid-cols-1 items-center sm:gap-8 gap-3">
          <div className="left flex flex-col items-center xl:gap-[50px] sm:gap-[35px] gap-[20px] lg:my-0 sm:my-8 my-3">
            <div className="title 2xl:text-4xl sm:text-3xl text-2xl font-semibold">
              Build Your Project with Us
            </div>
            <div className="icons-container grid grid-cols-3 items-center sm:justify-around justify-between w-full">
              <div className="item flex flex-col text-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="ico-1-video-row"
                  viewBox="0 0 64 64"
                  fill="#4876ca"
                  className="mb-3 sm:w-[80px] w-[45px]"
                >
                  <defs> </defs>
                  <path
                    id="svg-7571"
                    data-name="Forma 1"
                    className="cls-1"
                    d="M37.475,14.549a1.027,1.027,0,1,0,0,2.054,1.624,1.624,0,0,1,1.642,1.6,1.044,1.044,0,0,0,2.088,0A3.692,3.692,0,0,0,37.475,14.549Zm1.795,7.874a1.043,1.043,0,0,0-1.044,1.033,1.625,1.625,0,0,1-1.642,1.6,1.033,1.033,0,1,0,0,2.066,3.7,3.7,0,0,0,3.73-3.667A1.044,1.044,0,0,0,39.27,22.422ZM28.54,14.536a3.7,3.7,0,0,0-3.73,3.653,1.044,1.044,0,0,0,1.044,1.034A1.026,1.026,0,0,0,26.9,18.2a1.624,1.624,0,0,1,1.642-1.6A1.033,1.033,0,1,0,28.54,14.536Zm0.891,10.521a1.625,1.625,0,0,1-1.642-1.6,1.044,1.044,0,0,0-2.088,0,3.7,3.7,0,0,0,3.73,3.667A1.033,1.033,0,1,0,29.431,25.057Zm19.36,3.552-0.255-.731H45.354a5.412,5.412,0,0,0,.318-1.79,5.187,5.187,0,0,0-.344-1.851,5.27,5.27,0,0,0,1.247-3.4,5.353,5.353,0,0,0-1.808-3.993c0.013-.126.013-0.264,0.013-0.39a5.471,5.471,0,0,0-5.512-5.418H37.055a5.523,5.523,0,0,0-8.07,0H26.77a5.471,5.471,0,0,0-5.511,5.418c0,0.126,0,.252.013,0.39a5.354,5.354,0,0,0-1.807,3.993,5.2,5.2,0,0,0,1.247,3.4,5.187,5.187,0,0,0-.344,1.851,5.294,5.294,0,0,0,.318,1.79H17.517l-0.229.731a15.443,15.443,0,0,0-.675,4.032,16.086,16.086,0,0,0,6.606,13.468c2.52,1.852,3.653,3.791,3.653,6.3v4.359H24.7v2.066h2.253a6.181,6.181,0,0,0,12.194,0h2.24V56.767H39.219v-3.1H39.207v-1.26c0-2.519,1.107-4.409,3.7-6.336A15.923,15.923,0,0,0,48.791,28.609ZM34.064,11.537a3.393,3.393,0,0,1,1.667,1.16l0.318,0.4h3.22a3.392,3.392,0,0,1,3.424,3.351,3.778,3.778,0,0,1-.064.63l-0.127.655,0.547,0.391a3.271,3.271,0,0,1,.344,5.152l-0.6.542,0.382,0.706a3.2,3.2,0,0,1,.42,1.561,3.282,3.282,0,0,1-.534,1.79h-9V11.537h0Zm-11.1,6.59,0.547-.379-0.127-.654a2.868,2.868,0,0,1-.063-0.63,3.4,3.4,0,0,1,3.424-3.351h3.22l0.318-.4a3.353,3.353,0,0,1,1.68-1.16V27.89h-9a3.389,3.389,0,0,1-.535-1.8,3.2,3.2,0,0,1,.42-1.561l0.382-.706-0.6-.542A3.26,3.26,0,0,1,22.965,18.127Zm10.043,43.8a4.072,4.072,0,0,1-3.959-3.1h7.93A4.086,4.086,0,0,1,33.008,61.932Zm4.1-5.165H28.922v-3.1h8.184v3.1Zm4.519-12.334c-2.826,2.091-4.277,4.4-4.506,7.181H34.051V40.262h4.1V38.2H27.789v2.066h4.175V51.614H28.9c-0.229-2.8-1.655-5.09-4.455-7.143a14.014,14.014,0,0,1-5.753-11.755,13.237,13.237,0,0,1,.395-2.772h27.9A13.8,13.8,0,0,1,41.625,44.432ZM31.964,0h2.087V4.13H31.964V0ZM15.433,4.707l1.476-1.46,2.952,2.922L18.385,7.63ZM9.014,19.614h4.175V21.68H9.014V19.614Zm43.812,0H57V21.68H52.826V19.614ZM46.151,6.168L49.1,3.247l1.476,1.46L47.627,7.63Z"
                    transform="translate(-1)"
                  ></path>
                </svg>
                <h3 className="sm:text-lg text-base font-semibold">1. Idea</h3>
                <p className="text-gray-600 font-[400] sm:text-sm text-[10px]">
                  Innovate ideas
                </p>
              </div>
              <div className="item flex flex-col items-center">
                <svg
                  id="svg-7888"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="#4876ca"
                  className="mb-3 sm:w-[80px] w-[45px]"
                >
                  <defs> </defs>
                  <path
                    className="cls-1"
                    d="M64,39.465h0V1.065A1.008,1.008,0,0,0,62.932,0H1.068A1.008,1.008,0,0,0,0,1.065V51.2a1.008,1.008,0,0,0,1.067,1.067H11.734V50.13h-9.6v-48h59.73V38.4H51.2a1.008,1.008,0,0,0-1.067,1.068V50.13H26.667v2.134H51.2a0.966,0.966,0,0,0,.747-0.32L63.679,40.211c0.107-.107.107-0.213,0.213-0.32V39.784A0.39,0.39,0,0,0,64,39.465ZM52.266,40.531h8.106l-4.053,4.053-4.053,4.053V40.531ZM20.161,10.344a0.99,0.99,0,0,0-1.92,0l-3.093,9.28a1.518,1.518,0,0,0-.213.641V62.931A1.008,1.008,0,0,0,16,64h6.4a1.007,1.007,0,0,0,1.067-1.067V20.265a1.147,1.147,0,0,0-.213-0.641ZM17.068,21.331h1.067V54.4H17.068V21.331Zm3.2,0h1.067V54.4H20.267V21.331ZM19.2,14.078l1.707,5.12H17.494Zm2.133,47.787H17.068V56.531h4.267v5.334Zm16-55.467a9.56,9.56,0,0,0-9.6,9.6v2.132h2.133V16A7.466,7.466,0,1,1,44.8,16v2.132h2.133V16A9.56,9.56,0,0,0,37.333,6.4ZM57.6,17.064V14.931H55.466v2.133a7.466,7.466,0,1,1-14.933,0V14.931H38.4v2.133A9.6,9.6,0,1,0,57.6,17.064ZM26.667,35.2V45.865a1.008,1.008,0,0,0,1.067,1.066H38.4a1.008,1.008,0,0,0,1.067-1.066V35.2A1.007,1.007,0,0,0,38.4,34.132H27.734A1.007,1.007,0,0,0,26.667,35.2ZM28.8,36.264h8.533V44.8H28.8V36.264Zm12.8,1.067v2.134h2.133A1.008,1.008,0,0,0,44.8,38.4V29.864A1.007,1.007,0,0,0,43.733,28.8H35.2a1.007,1.007,0,0,0-1.067,1.066V32h2.133V30.931h6.4v6.4H41.6Zm-35.2-32H8.534V7.464H6.4V5.331Zm4.267,0H12.8V7.464H10.668V5.331Zm4.267,0h2.133V7.464H14.934V5.331ZM10.668,9.6H12.8v2.134H10.668V9.6ZM6.4,9.6H8.534v2.134H6.4V9.6Zm0,4.266H8.534V16H6.4V13.864Zm0,4.267H8.534v2.134H6.4V18.131Zm0,4.266H8.534v2.134H6.4V22.4Zm0,4.267H8.534V28.8H6.4V26.664Zm0,4.266H8.534v2.134H6.4V30.931Zm0,4.267H8.534v2.134H6.4V35.2Zm0,4.268H8.534V41.6H6.4V39.465Zm0,4.266H8.534v2.134H6.4V43.731Z"
                  ></path>
                </svg>
                <h3 className="sm:text-lg text-base font-semibold">2. Buy</h3>
                <p className="text-gray-600 sm:text-sm text-[10px] font-[400]">
                  Buy parts & gears
                </p>
              </div>
              <div className="item flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="ico-3-video-row"
                  viewBox="0 0 64 64"
                  fill="#4876ca"
                  className="mb-3 sm:w-[80px] w-[45px]"
                >
                  <defs> </defs>
                  <path
                    id="svg-3378"
                    data-name="Forma 1"
                    className="cls-1"
                    d="M21.535,32.6a0.737,0.737,0,0,0-.825-0.169,0.782,0.782,0,0,0-.468.724V47.065a0.771,0.771,0,0,0,.758.783H34.443a0.757,0.757,0,0,0,.7-0.483,0.807,0.807,0,0,0-.164-0.856ZM21.757,46.28V35.044L32.614,46.28H21.757ZM59.763,4.827L55.825,0.751a0.741,0.741,0,0,0-1.071,0L31.992,24.31a0.777,0.777,0,0,0-.168.263l-2.5,6.484L19.288,20.666l1.8-1.864a0.8,0.8,0,0,0,0-1.109,0.739,0.739,0,0,0-1.071,0l-1.8,1.865L15.2,16.43V0.781A0.771,0.771,0,0,0,14.438,0H5.753A0.771,0.771,0,0,0,5,.781V63.215A0.771,0.771,0,0,0,5.753,64h8.684a0.771,0.771,0,0,0,.757-0.783V54.64H49.972l2.115,2.189a0.738,0.738,0,0,0,1.071,0,0.8,0.8,0,0,0,0-1.109L30.481,32.25l6.265-2.582A0.768,0.768,0,0,0,37,29.494L59.763,5.936A0.8,0.8,0,0,0,59.763,4.827ZM13.68,62.43H6.511v-1.4h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V57h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V52.963h1.3a0.785,0.785,0,0,0,0-1.569h-1.3V48.927h1.3a0.785,0.785,0,0,0,0-1.569h-1.3V44.89h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V40.854h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V36.818h1.3a0.785,0.785,0,0,0,0-1.568h-1.3V32.781h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V28.746h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V24.71h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V20.673h1.3a0.784,0.784,0,0,0,0-1.568h-1.3V16.637h1.3a0.784,0.784,0,0,0,0-1.567h-1.3V12.6h1.3a0.784,0.784,0,0,0,0-1.567h-1.3V8.566h1.3A0.785,0.785,0,0,0,7.812,7h-1.3V4.529h1.3a0.784,0.784,0,0,0,0-1.567h-1.3v-1.4H13.68V62.43h0Zm1.515-9.358V18.647l3.686,3.815-2.155,2.23a0.8,0.8,0,0,0,0,1.109,0.739,0.739,0,0,0,1.071,0l2.155-2.23,1.686,1.745-2.155,2.231a0.8,0.8,0,0,0,0,1.108,0.737,0.737,0,0,0,1.071,0l2.155-2.229L24.4,28.17,22.241,30.4a0.8,0.8,0,0,0,0,1.109,0.74,0.74,0,0,0,1.071,0l2.155-2.23,1.686,1.745L25,33.255a0.8,0.8,0,0,0,0,1.109,0.741,0.741,0,0,0,1.071,0l2.155-2.23,1.686,1.745-2.155,2.231a0.8,0.8,0,0,0,0,1.108,0.738,0.738,0,0,0,1.071,0l2.155-2.23,1.686,1.745-2.155,2.23a0.8,0.8,0,0,0,0,1.109,0.738,0.738,0,0,0,1.071,0L33.74,37.84l1.686,1.746-2.155,2.231a0.8,0.8,0,0,0,0,1.108,0.74,0.74,0,0,0,1.071,0L36.5,40.7l1.686,1.745-2.155,2.231a0.8,0.8,0,0,0,0,1.108,0.74,0.74,0,0,0,1.071,0l2.155-2.23,1.686,1.746-2.155,2.229a0.8,0.8,0,0,0,0,1.109,0.738,0.738,0,0,0,1.071,0L42.013,46.4,43.7,48.148l-2.155,2.231a0.8,0.8,0,0,0,0,1.109,0.738,0.738,0,0,0,1.071,0l2.155-2.231,3.686,3.815H15.195ZM35.568,26.9L54.4,7.407l0.9,0.93L36.466,27.831ZM34.5,25.792l-0.9-.929L52.434,5.369l0.9,0.929Zm-1.691.468,2.311,2.391-3.841,1.584ZM56.372,7.229L53.505,4.261l1.784-1.847,2.867,2.968ZM55.009,57.636a0.74,0.74,0,0,0-1.071,0,0.8,0.8,0,0,0,0,1.108l2.337,2.42a0.74,0.74,0,0,0,1.071,0,0.8,0.8,0,0,0,0-1.109ZM59.2,61.969a0.739,0.739,0,0,0-1.071,0,0.8,0.8,0,0,0,0,1.108l0.048,0.05a0.739,0.739,0,0,0,1.071,0,0.8,0.8,0,0,0,0-1.109ZM34.968,4.114a0.743,0.743,0,0,0,.536-0.23l0.121-.124a0.8,0.8,0,0,0,0-1.11,0.739,0.739,0,0,0-1.071,0l-0.121.125a0.8,0.8,0,0,0,0,1.108A0.741,0.741,0,0,0,34.968,4.114ZM30.78,8.448a0.74,0.74,0,0,0,.536-0.23L33.653,5.8a0.8,0.8,0,0,0,0-1.108,0.739,0.739,0,0,0-1.071,0L30.244,7.11a0.8,0.8,0,0,0,0,1.108A0.74,0.74,0,0,0,30.78,8.448Zm-4.187,4.335a0.743,0.743,0,0,0,.535-0.23l2.337-2.419a0.8,0.8,0,0,0,0-1.108,0.739,0.739,0,0,0-1.071,0l-2.338,2.419a0.8,0.8,0,0,0,0,1.108A0.744,0.744,0,0,0,26.593,12.783ZM22.4,17.115a0.739,0.739,0,0,0,.535-0.229l2.337-2.418a0.8,0.8,0,0,0,0-1.109,0.74,0.74,0,0,0-1.071,0l-2.337,2.42a0.8,0.8,0,0,0,0,1.108A0.74,0.74,0,0,0,22.4,17.115Z"
                    transform="translate(-0.5)"
                  ></path>
                </svg>
                <h3 className="sm:text-lg text-base font-semibold">3. Build</h3>
                <p className="text-gray-600 font-[400] sm:text-sm text-[10px]">
                  Build your project
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="video w-full h-full aspect-video overflow-hidden rounded border bg-white sm:rounded-lg">
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Vl62s7nnXSo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="popular_products md:mt-[50px] mt-8">
          <div className="top flex justify-between items-center md:mb-[30px] mb-5">
            <h2 className="md:text-2xl text-xl font-semibold">
              Popular products
            </h2>
            <a href="/products">
              <button className="px-5 py-2 md:text-base text-sm rounded-full bg-blue-200 hover:bg-blue-300 transition-all flex items-center gap-x-2">
                All Products <GrNext />
              </button>
            </a>
          </div>
          <div className="product_container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-5 gap-2">
            {props.products.map(
              (products, index) =>
                index < 24 && (
                  <ProductCard
                    key={products._id}
                    _id={products._id}
                    product_name={products.product_name}
                    selling_price={products.selling_price}
                    product_image={products.product_image}
                    productId={products.product_id}
                    handleCartClick={props.handleCartClick}
                    cartItemQty={props.currentCartItem.qty}
                  />
                )
            )}
            {/* <MoreProductsCard /> */}
          </div>
          <div className="pagination flex items-center gap-3 justify-center mt-12">
            <a href="/products">
              <button className="px-5 py-2 md:text-base text-sm rounded-full bg-blue-200 hover:bg-blue-300 transition-all flex items-center gap-x-2">
                View All Products <GrNext />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
