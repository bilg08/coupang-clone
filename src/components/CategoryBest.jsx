import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import cn from "classnames";
import Tocs from "./Tocs";
const hotKeyWords = [
  "#low carbon",
  "#vitamin",
  "#diet",
  "tart cherry",
  "Simple Meals",
  "#MidNight Snack",
];

function CategoryBest({ category }) {
  function generateCategoryColor() {
    if (category.name === "Food") return 'text-yellow-500'
    else if (category.name === "Card") return "text-red-500"
    else if (category.name === 'Clothes') return 'text-green-500'
    else return 'text-sky-500'
  }
  const textColor = generateCategoryColor(category.name)
  return (
    <nav id={category.name}>
      <div className={`flex gap-10 max-sm:gap-2 max-w-[990px] ml-0 mx-auto grid-cols-2 md:grid-cols-3 border-t-2 border-t-${textColor}`} >
        {/* left */} 
        <div className={`${textColor} w-[16vw] flex-row justify-between h-fit` }>
          <div>
            <div className='text-[50px] max-sm:text-[20px] font-bold'>{category.name}</div>
            <div className="flex gap-1 mt-[-7px] items-center">
              <div className="max-sm:text-footer text-xs">Дэлгэрэнгүй</div>
              <MdKeyboardArrowRight />
            </div>
          </div>

          <div className="mt-24">
            <div className="max-sm:text-[0.5rem] text-sm">Тренд түлхүүр үг</div>
            <div className="flex max-sm:gap-1 max-sm:mt-2 mt-3 gap-2 flex-wrap">
              {category.hotKeyWords.map((hotKeyWord) => (
                <div
                  className="border  pl-1 text-[0.6rem] py-1 w-[86px] max-sm:text-[0.4rem] max-sm:w-fit max-sm:px-1 max-sm:py-0.5"
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
        <div className="flex-col gap-2 w-[300px] mt-3">
        <div className="flex gap-2 scrollbar-hide overflow-scroll h-fit max-sm:ml-10 my-2">
          {category.products.map((product,i) => (
            <CategoryCart key={product.name + i} product={product} />
          ))}
        </div>
        <div className="flex gap-2 scrollbar-hide overflow-scroll h-fit max-sm:ml-10 my-2">
          {category.products.map((product,i) => (
            <CategoryCart key={product.name + i} product={product} />
          ))}
        </div>
        </div>
      </div>
    </nav>
  );
}
function CategoryBests() {
  const products = [
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex ",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's  Acid Collagen Hyaluronic ",
      price: 15200,
    },
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex ",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's  Acid Collagen Hyaluronic ",
      price: 15200,
    },
    {
      img: "https://thumbnail7.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f13a/c2d823633071b57d800a35a06e1f35987dff3d217b0f491bbaa17187c77c.png",
      name: "Pantomona Women's Optimal Combination Complex",
      price: 15900,
    },
    {
      img: "https://thumbnail10.coupangcdn.com/thumbnails/remote/160x160ex/image/vendor_inventory/f50c/c6e5ba844ba0e94effd5033d87c7d781d77250e4b5d122b5642538a54f2c.png",
      name: "Pantomona Women's Acid Collagen Hyaluronic ",
      price: 15200,
    }
  ];
  const sliderItems = [
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
  const categories = [
    {
      name: "Food",
      products,
      sliderItems,
      hotKeyWords,
    },
    {
      name: "Clothes",
      products,
      sliderItems,
      hotKeyWords,
    },
    {
      name: "Car",
      products,
      sliderItems,
      hotKeyWords,
    },
  ];
  return (
    <div className="max-w-[1050px] mx-auto items-center">
      <div className="flex mt-4 flex-col gap-5">
        {/* <Tocs /> */}
        {categories.map((category) => (
          <CategoryBest
            key={category.name}
            category={category}
          />
        ))}
      </div>
    </div>

  );
}

export default CategoryBests;




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
    <div className="relative max-sm:hidden flex justify-end items-center w-[30vw] h-contain bg-green-500">
      <Slides>
        {data.map((image, i) => (
          <Slide
            key={image.url + i}
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
    <div className="absolute hidden max-sm:block md:block top-0 left-0 w-full h-full">{children}</div>
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
        className={`absolute top-0 left-0 max-sm:h-full  h-auto md:h-full w-full transition-all object-cover`}
        key={image}
        src={image}
        alt={image}
      />
      <div className="bg-yellow-400 text-white w-[95%] left-2 h-20 text-center absolute bottom-8 md:bottom-6">
        <h2 className="font-bold text-xl">{title}</h2>
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
    <div className="absolute hidden max-sm:flex md:flex  h-5  top-2 md:bottom-0 w-full  gap-2">
      {images.map((_image, i) => (
        <div key={i} onClick={()=>click(i)} className=" bg-slate-400 relative w-4 h-4 rounded-full">
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
    <div className="w-[50vw] h-[12vw] max-sm:w-[70px] max-sm:h-fit">
      <img src={product.img} alt="" />
      <div className='max-sm:text-footer text-xs'>{product.name}</div>
      <p><span className="font-bold max-sm:text-footer">{product.price}</span>₩</p>
    </div>
  );
}