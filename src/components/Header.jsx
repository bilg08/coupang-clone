import { UserIcon } from '@heroicons/react/24/solid';
import {
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../asset/logo.png';
import Search from './Search';
function Header() {
  return (
    <header className="w-full m-auto">
      {/* */}
      <div className="bg-[#f0f0f0]">
        <div className="w-full py-1 text-sm m-auto flex justify-between items-center">
          {/* left */}
          <div className="flex gap-2">
            <p>Favorited</p>
            <p>Application for entry</p>
          </div>
          {/*  */}
          {/* right */}
          <div className="flex gap-2">
            <p>login</p>
            <p>Sign Up</p>
            <p>Service center</p>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="mx-auto max-w-[1050px] h-28 flex justify-between">
        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="bg-blue-500 flex text-white justify-center items-center flex-col h-full w-24">
            <GiHamburgerMenu  className='text-4xl'/>
            <p>category</p>
          </div>
          <img
            className=" w-[100px] h-6 md:w-[160px] md:h-9"
            src={logo}
            alt="logo"
          />
        </div>
        {/*  */}
        {/* Middle */}
        <Search />
        {/*  */}
        {/* Left */}
        <div className="flex justify-end space-x-4 items-center">
          <div className="flex flex-col ">
            <UserIcon className="h-8" />
            <p className="text-xs">My Coupang</p>
          </div>
          <div className="flex flex-col">
            <HiOutlineShoppingCart className="text-3xl" />
            <p className="text-sm">Cart</p>
          </div>
        </div>
        {/*  */}
      </div>
    </header>
  );
}

export default Header


