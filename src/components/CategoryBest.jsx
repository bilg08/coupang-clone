import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import cn from "classnames";
const hotKeyWords = [
  "#low carbon",
  "#vitamin",
  "#diet",
  "tart cherry",
  "Simple Meals",
  "#MidNight Snack",
];

function CategoryBest() {
  const products = [
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic Acid Pomegranate Nutritional Supplement, 3 Boxes (135 Days Supply)",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic ",
      price: 15200,
    },
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic Acid Pomegranate Nutritional Supplement, 3 Boxes (135 Days Supply)",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic ",
      price: 15200,
    },
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic Acid Pomegranate Nutritional Supplement, 3 Boxes (135 Days Supply)",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's Optimal Combination Complex Ingredient Biotin Pantothenic Acid Collagen Hyaluronic ",
      price: 15200,
    }
  ];
  return (
    <div className="flex gap-10 max-w-[1050px] mx-auto grid-cols-2 md:grid-cols-3">
      {/* left */}
      <div>
        <div>
          <h1 className="text-yellow-500 text-2xl font-bold">Food</h1>
          <div className="flex gap-1 items-center">
            <h1>Go to</h1>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div>
          <h1>Hot KeyWord</h1>
          <div className="flex flex-col gap-2">
            {hotKeyWords.map((hotKeyWord) => (
              <div
                className="border text-yellow-500 pl-1 text-xs py-2 w-[86px]"
                key={hotKeyWord}>
                {hotKeyWord}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Center */}
      <CategoryBestSlider />
      {/* Right */}
      <div className="flex md:w-[550px] flex-grow gap-2 overflow-y-scroll scrollbar-hide">
        {products.map((product) => (
            <CategoryCart product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryBest;




function CategoryBestSlider() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      url: "https://static.coupangcdn.com/va/cmg_paperboy/image/1672196002173/C3_PC.jpg",
      title: "The perfect coffee to enjoy at home",
      detail: "Recommend by Maxisim",
    },
    {
      url: "https://static.coupangcdn.com/ra/cmg_paperboy/image/1671687405977/C3_PC.jpg",
      title: "Holidays with Kimci",
      detail: "Recommend by NongShim",
    },
  ];
  useEffect(() => {
    let interval = setInterval(() => {
      if (index >= data.length - 1) setIndex(0);
      else setIndex(index + 1);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative hidden md:flex justify-end items-center sm:w-[200px] sm:h-[350px] min-w-[200px] h-full w-auto  md:h-[500px] md:w-[300px] ">
      <Slides>
        {data.map((image, i) => (
          <Slide
            image={image.url}
            title={image.title}
            detail={image.detail}
            isCurrent={i === index}
          />
        ))}
      </Slides>
      <Indicator images={data} currentIndex={index} setCurrenIndex={setIndex} />
    </div>
  );
}
function Slides({children}) {
  return (
    <div className="absolute hidden md:block top-0 left-0 w-full h-full">{children}</div>
  )
}
function Slide({ image, title, detail, isCurrent }) {
  function checkIsCurrent(isCurrent) {
    let isBlock;
    if (isCurrent) {
      isBlock = 'block';
    } else {
      isBlock = 'hidden';
    }
    return isBlock;
  }

  return (
    <div className={cn(checkIsCurrent(isCurrent),'absolute top-0 left-0 w-full h-[350px] md:w-full md:h-full')}>
      <img
        className={`absolute top-0 left-0 min-w-[245px]  h-auto md:h-full w-full transition-all object-cover`}
        key={image}
        src={image}
        alt={image}
      />
      <div className="bg-yellow-400 text-white w-[95%] left-2 h-20 text-center absolute bottom-8 md:bottom-6">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm">{detail}</p>
      </div>
    </div>
  );
}





function Indicator({ images, currentIndex, setCurrenIndex }) {
  function click(index) {
    setCurrenIndex(index)
  }
  return (
    <div className="absolute hidden md:flex  h-5  top-2 md:bottom-0 w-full  gap-2">
      {images.map((_image, i) => (
        <div onClick={()=>click(i)} className=" bg-slate-400 relative w-4 h-4 rounded-full">
          <div
            className={cn(
              "bg-slate-300 w-4 h-4 rounded-full  absolute top-0 left-0",
              { block: currentIndex === i },
              { hidden: currentIndex !== i }
            )}></div>
        </div>
      ))}
    </div>
  );
}

function CategoryCart({product}) {
  return (
    <div className="w-[160px]">
      <img src={product.img} />
      <h1 className="text-xs truncate">{product.name}</h1>
      <p><span className="font-bold">{product.price}</span> won</p>
    </div>
  );
}