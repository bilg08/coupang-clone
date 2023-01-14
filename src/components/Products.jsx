import React from "react";
import { Link } from "react-router-dom"
import ShoppingOfferOfTheDay from "./Cart/ShoppingOfferOfTheDayCart";
import SellerDealsoftheDay from "./Cart/SellerDealsOfTheDay";
import NeedThisProductNow from "./Cart/NeedThisProductNow";
import shoppingBag from "../asset/shopping-bag.svg";
const components = {
  ShoppingOfferOfTheDay,
  SellerDealsoftheDay,
  NeedThisProductNow,
};

function  Products({ type, productsOfP }) {
  return (
    <div className="max-w-[1050px] mx-auto">
      {type === "ShoppingOfferOfTheDay" && (
        <div className="flex gap-2">
          <img src={shoppingBag} className="h-6" alt="" />
          <h2 className="font-bold text-md md:text-lg max-sm:ml-1 my-2">
            <span className="text-red-500">Өдрийн</span> Хямдрал
          </h2>
        </div>
      )}
      {type === "SellerDealsoftheDay" && (
        <h2 className="font-bold text-md md:text-lg max-sm:ml-8 my-2">Seller Deal of The Day</h2>
      )}
      {type === "NeedThisProductNow" && (
        <h2 className="font-bold text-md md:text-lg max-sm:ml-8 my-2">Need This Product Now</h2>
      )}
      <div className="flex gap-2 max-h-max max-w-[980px]">
        <ShowProducts type={type} products={productsOfP} />
      </div>
    </div>
  );
}

export default Products;

function ShowProducts({ products, type }) {
  const SpecificProducts = components[type];
  return (
    <div
      className="flex gap-2 scrollbar-hide overflow-scroll h-fit max-sm:ml-10">
      {products.map((product,i) => (
        <Link to={`/product/${i}`}>
          <SpecificProducts key={product.name + i} product={product} />
        </Link>
      ))}
    </div>
  );
}
