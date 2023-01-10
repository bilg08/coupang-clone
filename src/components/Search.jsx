// import {
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import { createPortal } from "react-dom";
import categoriesjson from "../data/categories.json";
import {
  HiOutlineMicrophone,
  HiSearch,
} from "react-icons/hi";
// import { GrClose } from "react-icons/gr";


const Search=() =>{
  return (
    <div className="flex  flex-grow justify-end md:justify-center max-sm:h-[5.1vh] ml-2">
      <div className="max-sm:w-44 max-sm:h-[4.3vw] flex-grow  items-center flex flex-row border-2 max-sm:border border-blue-400 h-[40%] my-auto">
        <select style={{fontSize:'0.6rem',color:'gray'}} className="max-sm:h-[3vw] outline-none max-sm:w-1/3 border-r border-r-slate-300">
          <option value="all">Бүгд</option>
          {categoriesjson.map((category) => (
            <option  key={category.name}>{category.name}</option>
          ))}
        </select>

        <div className="flex items-center relative pl-4 max-sm:pl-1 pr-0.5 bg-secondary-button dark:bg-gray-80 outline-none focus:ring focus:outline-none betterhover:hover:bg-opacity-80 pointer items-center text-left w-2/3  text-gray-30 rounded-lg align-middle text-sm">
          <input
            type={"text"}
            className="flex-grow max-sm:w-2/3 max-sm:h-[3vw] outline-none max-sm:placeholder:text-placeholder max-sm:text-placeholder bg-blend-multiply"
            placeholder="Бүтээгдэхүүн хайх"
          />
          <span className="ml-auto flex item-center space-x-2 max-sm:space-x-1 max-sm:pr-0.5 pr-2">
            <HiOutlineMicrophone className="text-2xl max-sm:text-placeholderIcon text-blue-500" />
            <HiSearch className="text-2xl max-sm:text-placeholderIcon text-blue-500" />
          </span>
        </div>
      </div>

      {/* <button
        aria-label="Search"
        type="button"
        className="inline-flex md:hidden items-center text-lg p-1 ml-4 lg:ml-6">
        <MagnifyingGlassIcon className="h-6 mx-4  text-blue-500  " />
      </button> */}
    </div>
  );
}

export default Search;
