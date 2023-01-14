import { useParams } from "react-router-dom"
import React,{useState} from 'react'
import Rating from './Rating'
import { MoreProduct } from "./MoreProduct"

export const ProductDetail =()=>{
    const prod = [
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
        {
          name: "Stevia Sweet Mild Stevia Coffee Mix, 950g, 1 pc",
          freeshipping: true,
          rating: 4976,
          isDiscounted: true,
          discountRate: 16,
          image:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/9c53/49f4250828752dc6dd376b69539ce84cc6412624a8d548cce8be2a06c8f3.jpg",
        },
        {
          name: "G7 Black Coffee 100pcs",
          freeshipping: false,
          rating: 350,
          isDiscounted: false,
          discountRate: 0,
          image:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/e661/68384bc1d358463aef3d00719762b5a7c361683ee60971a74269e39839e9.jpg",
        },
      ]
    let {id} = useParams();
    const [count, setCount]= useState(1)
return(
    <div className="flex-col container-sm mx-3 xam-sm:gap-3 h-[65vh]">
        <div className="flex"><div className="mx-1 w-1/2" style={{backgroundImage:`url(${prod[id].image})`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
        <div className="mx-1 w-1/2">
            <div>
                <div className="text-[3vw] font-bold">{prod[id].name.split(',')[0]}</div>
                <Rating rating={prod[id].rating}/>
            </div>
            <div className="my-3">
                {prod[id].isDiscounted ? <div><div><span className="text-[2.7vw] mr-1">{prod[id].discountRate}%</span><span className="line-through text-[2.7vw]">150000 ₩</span></div> <div className="text-red-500 font-bold">126000 ₩</div></div>: <div>150000 ₩</div>}
            </div>
            <div>{prod[id].freeshipping ? <div className="text-footer">ҮНЭГҮЙ хүргэлттэй</div> : <div className="text-footer font-bold">Төлбөртэй хүргэлттэй</div>}</div>
            <div className="flex justify-between my-3">
                <div className="flex h-6">
                    <input type="number" class="outline-none focus:outline-none text-center w-[23%] px-0.5 border-y border-l border-gray-600 font-semibold text-md hover:text-black max-sm:w-[3.5vw] max-sm:placeholder:text-placeholder max-sm:text-[2.2vw] focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" placeholder={count}></input>
                    <div className=" flex flex-col border-y border-gray-500 border-r">
                        <button onClick={(e)=>setCount(count+1)} className="h-fit max-sm:text-[2vw] max-sm:mt-[-1px] mt-[-6px]">+</button>
                        <button onClick={(e)=>setCount(count-1)} className="h-fit max-sm:text-[2vw] max-sm:mt-[-1px] mt-[-12px]">-</button>
                    </div>
                </div>
                <button className="w-1/2 mx-1 max-sm:text-footer text-white bg-blue-500 border">САГСАНД ХИЙХ</button>
                <button className="w-1/2 mx-1 max-sm:text-footer text-blue-500 border">ХУДАЛДАН АВАХ</button>
            </div>
        </div></div>
        <MoreProduct text={'More Like It'} products={prod}/>
    </div>
)
}