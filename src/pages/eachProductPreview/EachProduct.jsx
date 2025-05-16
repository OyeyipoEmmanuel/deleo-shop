import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../LandingPg/Footer";
import Nav from "@/components/Nav";
import { useQuery } from "@tanstack/react-query";
import { PacmanLoader } from "react-spinners";
import ButtonUI from "@/components/ButtonUI";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Reviews from "./Reviews";
import YouMightLike from "./YouMightLike";
import { IoMdArrowRoundBack } from "react-icons/io";

const EachProduct = () => {
  const params = useParams();
  const [orderQty, setOrderQty] = useState(1);

  const decreaseOrderQty = () => {
    if (orderQty > 1) {
      setOrderQty((prev) => prev - 1);
    } else {
      setOrderQty(1);
    }
  };

  const increaseOrderQty = () => {
    setOrderQty((prev) => prev + 1);
  };

  const queryFn = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${params.productid}`
    );
    return res.json();
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [`product-${params.productid}`],
    queryFn: queryFn,
  });

  if (isLoading)
    return (
      <div className="flex mx-auto items-center justify-center w-full h-screen">
        <div className="">
          <PacmanLoader />
          <h1 className="text-center text-2xl">Loading.....</h1>
        </div>
      </div>
    );
  if (error) return <p>An Error occured</p>;

  return (
    <>
      <Nav />

      <main className="pt-24 px-8 lg:px-16">
        <div className="-fit">
        <Link to="/all-products">
          <IoMdArrowRoundBack className="text-4xl cursor-pointer hover:opacity-80" />
        </Link>
        </div>
        <section className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center lg:space-x-8">
          <div className="bg-[#F0EEED] rounded-lg lg:w-[45%]">
            <img src={data.images[0]} />
          </div>
          <div className="flex flex-col space-y-2 lg:w-[50%]">
            <p className="text-sm underline">Category: {data.category}</p>
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              {data.title}
            </h1>
            <span className="flex space-x-1">
              <p className="text-sm">⭐⭐⭐⭐</p>
              <aside className="text-sm text-gray-500 self-end">
                {data.rating}/5
              </aside>
            </span>
            <span className="flex space-x-2">
              <h2 className="font-bold md:text-xl">${data.price}</h2>
              <p className=" line-through font-semibold text-gray-400 md:text-xl">
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
            <p className="text-lg text-gray-500 md:text-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-2 gap-3 py-4 font-semibold md:grid-cols-3 md:gap-6">
              <span className="bg-red-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                {data.availabilityStatus}
              </span>
              <span className="bg-blue-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                {data.stock}pcs left
              </span>
              <span className="bg-orange-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                Brand: {data.brand}
              </span>
              {data.tags.map((each) => (
                <span
                  className="bg-green-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]"
                  key={each}
                >
                  {each}
                </span>
              ))}
              <span className="bg-yellow-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                width: {data.dimensions.width}cm
              </span>
              <span className="bg-purple-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                height: {data.dimensions.height}cm
              </span>
              <span className="bg-gray-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                depth: {data.dimensions.depth}cm
              </span>
              <span className="bg-pink-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                weight: {data.weight}kg
              </span>
              <span className="bg-cyan-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                {data.returnPolicy}
              </span>
              <span className="col-span-2 bg-violet-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                Shipping Information: {data.shippingInformation}
              </span>
              <span className="col-span-2 bg-lime-300/70 rounded-full w-fit px-3 py-1 text-[12px] md:text-[15px]">
                SKU: {data.sku}
              </span>
            </div>
            <div className="border-t pt-6 border-gray-200 flex justify-between space-x-3 ">
              <span className="flex justify- px-between space-x-8 items-center px-2 py-1 bg-[#F0F0F0] rounded-full text-xl lg:text-2xl">
                <FaMinus
                  className="cursor-pointer"
                  onClick={decreaseOrderQty}
                />
                <p className="font-bold">{orderQty}</p>
                <IoMdAdd
                  className="text-2xl cursor-pointer lg:text-3xl"
                  onClick={increaseOrderQty}
                />
              </span>
              <ButtonUI btnName="Add to Cart" />
            </div>
          </div>
        </section>

        <Reviews productid={params.productid} queryFn={queryFn} />

        <YouMightLike category={data.category} />
      </main>

      <Footer />
    </>
  );
};

export default EachProduct;
