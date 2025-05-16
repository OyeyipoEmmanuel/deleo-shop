import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Footer from "../LandingPg/Footer";
import Filter from "@/components/Filter";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

const FetchProductQuery = () => {
  const filterProductType = useSelector(
    (state) => state.filterProductReducer.productType
  );
  const filterPriceRange = useSelector(
    (state) => state.filterProductReducer.priceRange
  );
  const filterRating = useSelector(
    (state) => state.filterProductReducer.rating
  );

  const {
    isLoading: menShirtIsLoading,
    error: menShirtError,
    data: menShirtData,
  } = useQuery({
    queryKey: ["men-Shirt-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/mens-shirts"
      );
      return res.json();
    },
  });

  const {
    isLoading: menShoeIsLoading,
    error: menShoeError,
    data: menShoeData,
  } = useQuery({
    queryKey: ["men-shoe-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/mens-shoes"
      );
      return res.json();
    },
  });

  const {
    isLoading: womenShoeIsLoading,
    error: womenShoeError,
    data: womenShoeData,
  } = useQuery({
    queryKey: ["women-shoe-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/womens-shoes"
      );
      return res.json();
    },
  });

  const {
    isLoading: womenDressIsLoading,
    error: womenDressError,
    data: womenDressData,
  } = useQuery({
    queryKey: ["women-dresses-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );
      return res.json();
    },
  });

  const {
    isLoading: menWatchIsLoading,
    error: menWatchError,
    data: menWatchData,
  } = useQuery({
    queryKey: ["mens-watches-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/mens-watches"
      );
      return res.json();
    },
  });

  const {
    isLoading: womenWatchIsLoading,
    error: womenWatchError,
    data: womenWatchData,
  } = useQuery({
    queryKey: ["women-watches-products"],
    queryFn: async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/womens-watches"
      );
      return res.json();
    },
  });

  const isLoading =
    menShirtIsLoading ||
    menShoeIsLoading ||
    menWatchIsLoading ||
    womenShoeIsLoading ||
    womenDressIsLoading ||
    womenWatchIsLoading;

  const error =
    menShirtError ||
    menShoeError ||
    menWatchError ||
    womenShoeError ||
    womenDressError ||
    womenWatchError;

  if (isLoading)
    return (
      <div className="flex mx-auto items-center justify-center w-full h-screen">
        <div className="">
          <PacmanLoader />
          <h1 className="text-center text-2xl">Loading.....</h1>
        </div>
      </div>
    );
  if (error) return <p>An Error occured....</p>;

  return (
    <>
      <main className="pt-24 px-8 lg:px-16">
        <h1 className="text-2xl mb-6 ">All Products</h1>
        <Filter />
        <section className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8  items-stretch">
          {menShirtData.products.map(
            (shirt) =>
              // filterProductType == "menShirtFilter" &&
              shirt.price <= filterPriceRange &&
              shirt.rating <= filterRating && (
                <ProductCard key={shirt.id} data={shirt} type="mens-shirts" />
              )
          )}

          {menShoeData.products.map((eachData) => (
            <ProductCard key={eachData.id} type="mens-shoes" data={eachData} />
          ))}
          {menWatchData.products.map((eachData) => (
            <ProductCard
              key={eachData.id}
              type="mens-watches"
              data={eachData}
            />
          ))}
          {womenShoeData.products.map((eachData) => (
            <ProductCard
              key={eachData.id}
              type="womens-shoes"
              data={eachData}
            />
          ))}
          {womenDressData.products.map((eachData) => (
            <ProductCard
              key={eachData.id}
              type="womens-dresses"
              data={eachData}
            />
          ))}
          {womenWatchData.products.map((eachData) => (
            <ProductCard
              key={eachData.id}
              type="womens-watches"
              data={eachData}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FetchProductQuery;
