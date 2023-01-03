import React,{useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const discoveriesofthedays = [
  {
    src: "https://static.coupangcdn.com/ta/cmg_paperboy/image/1672022529183/C2-B1.jpg",
  },
  {
    src: "https://static.coupangcdn.com/ta/cmg_paperboy/image/1672022529183/C2-B1.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
  {
    src: "https://static.coupangcdn.com/ia/cmg_paperboy/image/1671769728754/C2-B7.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
  {
    src: "https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg",
  },
];
const promotionsofdiscoveriesofthedays = [
  {
    url: "https://static.coupangcdn.com/ga/cmg_paperboy/image/1671779831078/W1_PC.png",
  },
  {
    url: "https://static.coupangcdn.com/ta/cmg_paperboy/image/1672035366735/W1_PC.png",
  },
  {
    url: "https://image7.coupangcdn.com/image/displayitem/displayitem_eaf1d6a5-4a6d-4143-a5f4-a98067c6fa78.jpg",
  },
  {
    url: "https://image9.coupangcdn.com/image/displayitem/displayitem_ad84783d-4811-49c6-99e8-79a1085b0d8b.png",
  },
];
function Discoveriesoftheday() {
  return (
    <div className="max-w-[1050px] m-auto">
      <h1 className="text-sm">Discovery of the day</h1>
      <div className="flex w-full gap-5">
        <div className="flex gap-x-2 gap-y-2 p-3 flex-wrap border grid-flow-row max-w-[980px]">
          {discoveriesofthedays.map((image, i) => (
            <DiscoveryofthedayItem key={image.src + i} image={image} />
          ))}
        </div>
        <PromotionsOfDiscoveryOfTheDays />
      </div>
    </div>
  );
}

export default Discoveriesoftheday;

function DiscoveryofthedayItem({ image }) {
  const [hover, setHover] = useState(false);
  function onMouseOver() {
    setHover(true);
  }
  function onMouseOut() {
    setHover(false);
  }
  
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`relative  max-w-[48%] hover:border-1 border hover:border-sky-500 `}>
      <img alt="image" className="object-cover w-full h-full"  src={image.src} />
      {!hover ? (
        <div className="h-10 flex items-center justify-center text-4xl absolute bottom-5 left-2  bg-slate-100 w-12">
          <MdKeyboardArrowRight />
        </div>
      ) : (
        <div className="h-10 flex text-white bg-blue-500 items-center justify-center  p-2 absolute bottom-5 left-2 ">
          <p className="text-[12px]">바로가기</p>
          <div className="text-2xl">
            <MdKeyboardArrowRight/>
          </div>
        </div>
      )}
    </div>
  );
}
function PromotionsOfDiscoveryOfTheDays() {
  return (
    <div className="hidden md:inline-flex flex-col gap-1">
      {promotionsofdiscoveriesofthedays.map((promotion) => (
        <img
          className="max-w-[100px]"
          key={promotion.url}
          src={promotion.url}
        />
      ))}
    </div>
  );
}