import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid'

function Discoveryoftheday() {
  return (
    <div className="max-w-[1350px] m-auto">
      <h1 className="text-sm">Discovery of the day</h1>
      <div className="flex gap-x-2 gap-y-2 flex-wrap border grid-flow-row max-w-[980px]">
        <div className="hover:border-2  border hover:border-sky-500 w-[468px] h-[300px]">
          <img
            alt="image"
            src="https://static.coupangcdn.com/ta/cmg_paperboy/image/1672022529183/C2-B1.jpg"
          />
        </div>
        <div className="relative hover:border-2 border hover:border-sky-500 w-[468px] h-[300px]">
          <img
            alt="image"
            src="https://static.coupangcdn.com/ta/cmg_paperboy/image/1672022529183/C2-B1.jpg"
          />
          <ArrowRightIcon className="absolute h-8 bottom-10 left-5" />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt=""
            src="https://static.coupangcdn.com/ia/cmg_paperboy/image/1671769728754/C2-B7.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
        <div className="hover:border-2 border hover:border-sky-500">
          <img
            alt="image"
            src="https://static.coupangcdn.com/la/cmg_paperboy/image/1671769704993/C2-B4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Discoveryoftheday
