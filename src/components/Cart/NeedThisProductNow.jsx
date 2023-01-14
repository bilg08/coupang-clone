import React from 'react'
import useHover from '../../hook/useHover';
import cn from 'classnames';
import Rating from '../Rating';
function NeedThisProductNow({product}) {
  const [hover, onMouseOut, onMouseOver] = useHover();
  return (
    <div
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      className={"relative border-none text-sm min-w-[195px] h-fit"}>
      <img
        alt=""
        className="w-[160px] h-[160px]"
        src={product.image}
      />
      <h2
        className={cn("truncate", {
          "underline decoration-[1.5px] decoration-blue-500": hover,
        })}>
        {product.name.split(',')[0]}
      </h2>
      <h2 className="font-bold text-red-500">{product.price} won</h2>
      {product.freeshipping && <p>FREE Shipping</p>}
      <Rating rating={product.rating}/>
    </div>
  );
}

export default NeedThisProductNow
