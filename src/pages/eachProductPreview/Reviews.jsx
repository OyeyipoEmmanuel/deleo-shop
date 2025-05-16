import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdVerified } from "react-icons/md";

const Reviews = ({ productid, queryFn }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`product-${productid}`],
    queryFn: queryFn,
  });

  if (isLoading) return <p>Loading....</p>;

  

  return (
    <main className="mt-6 border-t border-gray-200 pt-4">
      <h1 className="text-xl flex items-center">
        All Reviews
        <p className="font-light text-sm pl-1 self-end text-gray-400">({data.reviews.length})</p>
      </h1>
      <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
        {data.reviews.map((eachData) => (
          <div
            className=" flex flex-col p-3 space-y-2 border border-gray-300 rounded-xl"
            key={Math.random() * 100000}
          >
            <span>⭐⭐⭐⭐⭐</span>
            <h1 className="flex items-center font-semibold text-xl">
              {eachData.reviewerName}
              <span className="pl-2 text-lg">
                <MdVerified className="text-[#01AB31]" />
              </span>
            </h1>
            <p className="pb-4 text-gray-600">{eachData.comment}</p>
            <p className="text-gray-600 text-md">
              Posted on: {new Date(eachData.date).toLocaleString()}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Reviews;
