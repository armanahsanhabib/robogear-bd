import { CiCircleMore } from "react-icons/ci";

const MoreProductsCard = () => {
  return (
    <div className="p-3 bg-white rounded-lg hover:shadow-lg transition-all">
      <a
        href="/products"
        className="bg-blue-50 hover:bg-blue-500 rounded-lg transition-all hover:text-white text-blue-600 block h-full w-full flex gap-y-3 flex-col items-center justify-center"
      >
        <div className="icon text-[80px]">
          <CiCircleMore />
        </div>
        <div className="txt">
          <h3 className="text-xl font-semibold">More Products</h3>
        </div>
      </a>
    </div>
  );
};

export default MoreProductsCard;
