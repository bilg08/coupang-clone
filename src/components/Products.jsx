import React from "react";
import ShoppingOfferOfTheDay from "./Cart/ShoppingOfferOfTheDayCart";
import SellerDealsoftheDay from "./Cart/SellerDealsOfTheDay";
import NeedThisProductNow from "./Cart/NeedThisProductNow";
import shoppingBag from "../asset/shopping-bag.svg";
const components = {
  ShoppingOfferOfTheDay,
  SellerDealsoftheDay,
  NeedThisProductNow,
};

function Products({ type, productsOfP }) {
  return (
    <div className="max-w-[1050px] mx-auto">
      {type === "ShoppingOfferOfTheDay" && (
        <div className="flex gap-2">
          <img src={shoppingBag} className="h-6" alt="" />
          <h2 className="font-bold text-md md:text-lg">
            <span className="text-red-500">Өдрийн</span> Хямдрал
          </h2>
        </div>
      )}
      {type === "SellerDealsoftheDay" && (
        <h2 className="font-bold text-md md:text-lg">Seller Deal of The Day</h2>
      )}
      {type === "NeedThisProductNow" && (
        <h2 className="font-bold text-md md:text-lg">Need This Product Now</h2>
      )}
      <div className="flex gap-2">
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
      className="flex 
     gap-2 scrollbar-hide overflow-y-scroll">
      {products.map((product,i) => (
        <SpecificProducts key={product.name + i} product={product} />
      ))}
    </div>
  );
}
