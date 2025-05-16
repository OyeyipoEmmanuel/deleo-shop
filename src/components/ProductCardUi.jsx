import React from "react";
import ButtonUI from "./ButtonUI";
import { Link } from "react-router-dom";

const ProductCardUi = ({ data }) => {
  return (
    <section className="flex flex-col space-y-3 ">
      <div className="bg-[#F0EEED] rounded-lg relative">
        <img src={data.images[0]} alt={data.title} className="" />
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="font-bold">
          {window.innerWidth < 640
            ? data.title.slice(0, 13)
            : data.title.slice(0, 30)}
          ....
        </h1>
        <span className="flex space-x-1">
          <p className="text-sm">⭐⭐⭐⭐</p>
          <aside className="text-sm text-gray-500 self-end">
            {data.rating}/5
          </aside>
        </span>
        <div className="flex space-x-0.5">
          <h2 className="font-bold">${data.price}</h2>
        </div>
        <span className="flex space-x-0.5">
          <p className=" line-through font-semibold text-gray-400">
            $
            {`${(
              data.price * (data.discountPercentage / 100) +
              data.price
            ).toFixed(2)}`}
          </p>
          <p className="w-fit text-[13px] bg-[#ff333333] rounded-full px-1 py-1 font-light text-[#FF3333]">
            -{data.discountPercentage}%
          </p>
        </span>

        <Link to={`/all-products/${data.id}`}><ButtonUI btnName="Full Preview" className="mt-auto " /></Link>
      </div>
    </section>
  );
};

export default ProductCardUi;
