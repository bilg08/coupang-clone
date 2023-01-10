import { UserIcon } from '@heroicons/react/24/solid';
import {
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../asset/logo.png';
import Search from './Search';
const Header=()=> {
  return (
    <header className="w-full m-auto ">
      {/* */}
      <div className="bg-[#f0f0f0] max-sm:h-[4.3vw] sm:h-[2.6vw] lg:h-[3.5vh]">
        <div className="w-full py-1 text-sm m-auto flex justify-between items-center lg:max-w-[1050px] px-1">
          {/* left */}
          <div className="flex gap-2">
            <p className='max-sm:text-xxs max-lg:text-ms min-2xl:text-xs'>Таалагдсан</p>
            <p className='max-sm:text-xxs max-lg:text-ms min-2xl:text-xs'>Нэвтрэх өргөдөл</p>
          </div>
          {/*  */}
          {/* right */}
          <div className="flex gap-2">
            <p className='max-sm:text-xxs max-lg:text-ms'>Нэвтрэх</p>
            <p className='max-sm:text-xxs max-lg:text-ms'>Бүртгүүлэх</p>
            <p className='max-sm:text-xxs max-lg:text-ms'>Үйлчилгээний төв</p>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="mx-auto max-w-[1050px] h-[12vw] flex items-center justify-between">
        {/* Right */}
        <div className="flex items-center gap-6 max-sm:gap-3 max-sm:h-[5.2vh] max-sm:w-[35vw]">
          <div className="bg-blue-500 flex text-white justify-center items-center flex-col h-full w-32">
            <GiHamburgerMenu  className='text-[4.5vh] max-sm:text-[1.6vh]'/>
            <p className='max-sm:text-xxs'>Ангилал</p>
          </div>
          <img
            className=" w-[100px] h-6 max-sm:w-[80px] max-sm:h-[1.15rem]"
            src={logo}
            alt="logo"
          />
        </div>
        {/*  */}
        {/* Middle */}
        <Search />
        {/*  */}
        {/* Left */}
        <div className="flex justify-end space-x-4 max-sm:space-x-3 mx-2 max-sm:h-[1.15rem] items-start">
          <div className="flex flex-col ">
            <UserIcon className="h-8 max-sm:h-3.5" />
            <p className="text-xs max-sm:text-xxs flex w-100% text-center">Миний Coupang</p>
          </div>
          <div className="flex flex-col">
            <HiOutlineShoppingCart className="text-3xl max-sm:h-3.5" />
            <p className="text-sm max-sm:text-xxs max-sm:mt-1">Сагс</p>
          </div>
        </div>
        {/*  */}
      </div>
    </header>
  );
}

export default Header


