import React from "react";
import ButtonUI from "./ButtonUI";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCardUi = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col space-y-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
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

        <Link to={`/all-products/${data.id}`}>
          <ButtonUI btnName="Full Preview" className="mt-auto " />
        </Link>
      </div>
    </motion.section>
  );
};

export default ProductCardUi;
