import {Bars3Icon,UserIcon,ShoppingCartIcon} from '@heroicons/react/24/solid'
import logo from '../asset/logo.png';
import Search from './Search';
function Header() {
  return (
    <header className="max-w-5xl mx-auto h-24 flex justify-between">
      {/* Right */}
      <div className="flex items-center gap-6">
        <div className="bg-blue-500 flex text-white justify-center items-center flex-col h-full w-24">
          <Bars3Icon className="h-8" />
          <p>category</p>
        </div>
        <img
          className=" w-[140px] h-8 md:w-[171px] md:h-10"
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
          <UserIcon className="h-6" />
          <p className="text-xs">My Coupang</p>
        </div>
        <div className="flex flex-col">
          <ShoppingCartIcon className="h-6" />
          <p className="text-sm">Cart</p>
        </div>
      </div>
      {/*  */}
    </header>
  );
}

export default Header


