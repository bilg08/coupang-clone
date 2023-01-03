import React from "react";
import ShoppingOfferOfTheDay from "./Cart/ShoppingOfferOfTheDayCart";
import SellerDealsoftheDay from "./Cart/SellerDealsOfTheDay";
const components = {
  ShoppingOfferOfTheDay,
  SellerDealsoftheDay,
};

function Products({ type, productsOfP }) {
  return (
    <div className="max-w-[1050px] mx-auto">
      <h1 className="text-xl font-bold">{type}</h1>
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
