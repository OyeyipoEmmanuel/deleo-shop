import Nav from "@/components/Nav";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import FetchProductQuery from "./FetchProductsQuery";

const AllProducts = () => {


  return (
    <div>
      <Nav />
      <FetchProductQuery/>
    </div>
  );
};

export default AllProducts;
