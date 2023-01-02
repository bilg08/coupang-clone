import {
  MicrophoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { createPortal } from "react-dom";
import categoriesjson from "../data/categories.json";


function Search() {
  const [isShowing, _setIsShowing] = useState(false);

  return (
    <div className="flex  flex-grow justify-end">
      <div className="hidden md:flex max-w-2xl flex-grow  border-2 border-blue-400 h-[40%] my-auto">
        <select className="hidden md:inline-block outline-none w-30 border-r bg-white border-r-slate-300">
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
          <span className="ml-auto flex item-center">
            <MicrophoneIcon className="h-6" />
            <MagnifyingGlassIcon className="h-6 text-blue-500" />
          </span>
        </div>
      </div>

      <button
        aria-label="Search"
        type="button"
        className="inline-flex md:hidden items-center text-lg p-1 ml-4 lg:ml-6">
        <MagnifyingGlassIcon className="h-6 mx-4  text-blue-500  " />
      </button>

      {isShowing &&
        createPortal(
          <div className="absolute  top-0 left:0 w-[100vw] h-full backdrop-blur-md">
         
          </div>,
          document.body
        )}
    </div>
  );
}

export default Search;
