import useHover from "../../hook/useHover";
import cn from "classnames";
import { CiDiscount1 } from "react-icons/ci";
import Rating from "../Rating";

function SellerDealsoftheDay({ product }) {
  const [hover, onMouseOut, onMouseOver] = useHover();
  return (
    <div
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      className={"relative border text-sm min-w-[195px] h-[266px]"}>
      <img
        alt=""
        className="w-[160px] h-[160px]"
        src="https://thumbnail10.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/2b96/fe7e61631cc663223543f2578b71872e6c8318bca2d685cd286bc7040aea.jpg"
      />
      <div className="flex gap-2">
        {
          <CiDiscount1 className="bg-red-500 text-white text-2xl rounded-full" />
        }
        <p className="font-bold text-red-500">
          {product.discountRate}% off now
        </p>
      </div>
      <h2
        className={cn("truncate", {
          "underline decoration-[1.5px] decoration-blue-500": hover,
        })}>
        {product.name}
      </h2>
      <h2 className="font-bold text-red-500">{product.price} won</h2>
      {product.freeshipping && <p>FREE Shipping</p>}
      <div className="flex items-center mb-1">
        <Rating rating={product.rating} />
      </div>
    </div>
  );
}
export default SellerDealsoftheDay;