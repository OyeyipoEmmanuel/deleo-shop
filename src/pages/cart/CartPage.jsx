import Nav from "@/components/Nav";
import React, { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../LandingPg/Footer";
import CartProductCard from "@/components/CartProductCard";
import usePreviousRoute from "@/hooks/UsePreviousRoute";

const CartPage = () => {
  const previousRoute = usePreviousRoute();

  useEffect(()=>{
    window.scrollTo({top: 0, behavior:"smooth"})
  },[])

  return (
    <>
      <Nav />

      <main className="pt-24 px-8 lg:px-16">
        <div className="w-fit">
          <Link to={previousRoute}>
            <IoMdArrowRoundBack className="text-4xl cursor-pointer hover:opacity-80" />
          </Link>
        </div>

        <section className="mt-3">
          <h1 className="text-3xl font-extrabold pb-3">YOUR CART</h1>
          <div className="">
            <CartProductCard />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CartPage;
