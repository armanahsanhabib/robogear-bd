import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Banar1 from "../../../assets/images/home/slider-image1.jpg";
import Banar2 from "../../../assets/images/home/slider-image2.jpg";
import Banar3 from "../../../assets/images/home/slider-image3.jpg";

const ImageSlider = () => {
  const images = [Banar1, Banar2, Banar3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle changing to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle changing to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Use useEffect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-xl bg-blue-300 w-full h-full"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slider_dots absolute md:bottom-[20px] bottom-2 left-[50%] -translate-x-[50%] px-2 py-2 rounded-full bg-gray-50">
        <ul className="dots flex items-center gap-x-1">
          {images.map((_, index) => (
            <li
              key={index}
              className={`circle md:w-3 w-2 md:h-3 h-2 ${
                index === currentImageIndex ? "bg-gray-600" : "bg-gray-300"
              } rounded-full`}
            ></li>
          ))}
        </ul>
      </div>
      <div
        className="prev_control absolute md:left-[10px] left-0 top-[50%] -translate-y-[50%] p-3 cursor-pointer text-xl"
        onClick={prevImage}
      >
        <GrPrevious />
      </div>
      <div
        className="next_control absolute md:right-[10px] right-0 top-[50%] -translate-y-[50%] p-3 cursor-pointer text-xl"
        onClick={nextImage}
      >
        <GrNext />
      </div>
    </div>
  );
};

export default ImageSlider;
