import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const YouMightLike = ({ category }) => {
  const queryFn = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=4&skip=1`
    );

    return res.json();
  };
  const {isLoading, error, data} = useQuery({
    queryKey: ["might-like-category"],
    queryFn: queryFn,
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="my-8">
      <h1 className="text-2xl font-bold mb-4">YOU MIGHT ALSO LIKE</h1>
      <section className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8  items-stretch">
        {data.products.map((eachData) => (
          <ProductCard key={eachData.id} type={category} data={eachData} />
        ))}
      </section>
    </main>
  );
};

export default YouMightLike;
