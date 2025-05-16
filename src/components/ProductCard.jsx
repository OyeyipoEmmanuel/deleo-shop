import React from "react";

import ProductCardUi from "./ProductCardUi";

const ProductCard = ({ data, type }) => {
  if (type === "mens-shoes") {
    return <ProductCardUi data={data} />;
  }
  if (type === "mens-shirts") {
    return <ProductCardUi data={data} />;
  }
  if (type === "mens-watches") {
    return <ProductCardUi data={data} />;
  }
  if (type === "womens-shoes") {
    return <ProductCardUi data={data} />;
  }
  if (type === "womens-dresses") {
    return <ProductCardUi data={data} />;
  }
  if (type === "womens-watches") {
    return <ProductCardUi data={data} />;
  }
};

export default ProductCard;
