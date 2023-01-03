import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { createPortal } from "react-dom";
import categoriesjson from "../data/categories.json";
import {
  HiOutlineMicrophone,
  HiSearch,
} from "react-icons/hi";
import { GrClose } from "react-icons/gr";


function Search() {
  const [isShowing, setIsShowing] = useState(false);
  function open() {
   setIsShowing(true)
  }
  function close() {
   setIsShowing(false)
}
  return (
    <div className="flex  flex-grow justify-end md:justify-center">
      <div className="hidden md:flex max-w-[500px]  flex-grow  border-2 border-blue-400 h-[40%] my-auto">
        <select className="hidden md:inline-block w-[140px]  outline-none w-30 border-r  border-r-slate-300">
          <option value="all">all</option>
          {categoriesjson.map((category) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </select>

        <div className="flex relative pl-4 pr-0.5 py-1 bg-secondary-button dark:bg-gray-80 outline-none focus:ring focus:outline-none betterhover:hover:bg-opacity-80 pointer items-center text-left w-full text-gray-30 rounded-lg align-middle text-sm">
          <input
            type={"text"}
            className="flex-grow outline-none"
            placeholder="Search for the products you are looking for!"
          />
          <span className="ml-auto flex item-center space-x-2 pr-2">
            <HiOutlineMicrophone className="text-2xl text-blue-500" />
            <HiSearch className="text-2xl text-blue-500" />
          </span>
        </div>
      </div>

      <button
        aria-label="Search"
        type="button"
        onClick={open}
        className="inline-flex md:hidden items-center text-lg p-1 ml-4 lg:ml-6">
        <MagnifyingGlassIcon className="h-6 mx-4  text-blue-500  " />
      </button>

      {isShowing &&
        createPortal(
          <div
            className="absolute  top-0 left:0 w-[100vw] h-full backdrop-blur-sm">
            <div className="flex py-2 flex-grow bg-white w-[85%] mx-auto  border-2  rounded-md  my-auto">
              <select className="hidden md:inline-block w-[140px]  outline-none w-30 border-r  border-r-slate-300">
                <option value="all">all</option>
                {categoriesjson.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
              </select>

              <div className="flex relative pl-4 pr-0.5 py-1 bg-secondary-button dark:bg-gray-80 outline-none focus:ring focus:outline-none betterhover:hover:bg-opacity-80 pointer items-center text-left w-full text-gray-30 rounded-lg align-middle text-sm">
                <input
                  type={"text"}
                  className="flex-grow outline-none"
                  placeholder="Search for the products you are looking for!"
                />
                <span className="ml-auto flex item-center space-x-2 pr-2">
                  <HiOutlineMicrophone className="text-2xl text-blue-500" />
                  <HiSearch className="text-2xl text-blue-500" />
                </span>
              </div>
            </div>
            <button className="absolute top-2 right-0  p-2">
              <GrClose onClick={close} />
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}

export default Search;
