import React, { useEffect, useState } from "react";
import bannerImages from "../asset/banner_images.json";
import cn from "classnames";
function Banner() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      if (index >= bannerImages.length - 1) {
        setIndex(0);
      } else setIndex(index + 1);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative flex justify-end items-center h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] ">
      {bannerImages.map(({ backgroundImage }, i) => (
        <img
          className={cn(
            `absolute h-full transition-all object-cover`,
            {
              "left-0 top-0": i === index,
            },
            {
              "left-[-3000px]": i !== index,
            }
          )}
          key={backgroundImage}
          src={backgroundImage}
          alt={backgroundImage}
        />
      ))}
      <div className="duration-150  absolute ">
        {bannerImages.map(({ productName, productImage }, i) => (
          <div
            key={productName}
            onMouseOver={() => {
                  setIndex(i);
            }}
            className={cn("flex", {
              "border-2 transition-all border-sky-500 ": index === i,
            })}>
            <img key={productName} alt={productName} src={productImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Banner;
