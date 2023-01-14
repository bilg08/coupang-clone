import useHover from "../../hook/useHover";
import cn from "classnames";
import Rating from "../Rating";
function ShoppingOfferOfTheDay({ product }) {
  const [hover, onMouseOut, onMouseOver] = useHover();
  return (
    <div
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      className={"relative text-sm min-w-[195px] h-fit"}>
      <img src={product.image} alt=""/>
      <Productdiscount discount={product.discountRate} />
      <h2
        className={cn("truncate", {
          "underline decoration-[1.5px] decoration-blue-500": hover,
        })}>
        {product.name.split(',')[0]}
      </h2>
      {product.freeshipping && <p>FREE Shipping</p>}
      <div className="flex items-center mb-1">
        <Rating rating={product.rating} />
      </div>
    </div>
  );
}

function Productdiscount({ discount }) {
  return (
    <div>
      {discount !== undefined && discount > 0 && (
        <div className="absolute top-0 left-0 rounded px-3 py-1 bg-red-600">
          <h2 className="font-bold text-white">{discount + "%"}</h2>
        </div>
      )}
    </div>
  );
}
export default ShoppingOfferOfTheDay;
