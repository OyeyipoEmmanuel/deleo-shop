import React from "react";
import ButtonUI from "../../components/ButtonUI";
import heroImg from "../../assets/images/heroImg2.png";
import starImg from "../../assets/images/star1.png";
import Nav from "@/components/Nav";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  return (
    <>
      <main className="bg-[rgba(242,240,241,1)] ">
        <Nav />
        <div className="lg:flex lg:justify-between pt-24">
        <div className="lg:w-[75%]">
          <section className="px-8 lg:px-16">
            <h1 className="headerFont text-4xl pt-5 md:text-7xl lg:pt-12 font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="py-4 md:text-2xl text-gray-600 lg:w-[70%]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <NavLink to="/all-products">
              <ButtonUI btnName="Shop Now" className="lg:w-[50%]"/>
            </NavLink>
            
          </section>

          <section className="flex items-center justify-center py-6 px-8 lg:px-16 lg:justify-start">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:flex md:space-x-3 md:gap-2 md:items-center md:justify-center">
              <span className="md:border-r md:border-gray-400 md:px-3">
                <h1 className="text-2xl font-bold">200+</h1>
                <p className="text-gray-500 text-[14px]">
                  International Brands
                </p>
              </span>
              <span className="md:border-r md:border-gray-400">
                <h1 className="text-2xl font-bold">2,000+</h1>
                <p className="text-gray-500 text-[14px] md:pr-2">
                  High-Quality Products
                </p>
              </span>
              <span className="col-span-2 mx-auto md:mx-0">
                <h1 className="text-2xl font-bold">30,000+</h1>
                <p className="text-gray-500 text-[14px]">Happy Customers</p>
              </span>
            </div>
          </section>
        </div>
        <section className="relative w-full lg:w-[50%]">
          <img src={heroImg} className="w-full" />
          <img
            src={starImg}
            className="absolute top-0 right-0 max-w-20 md:w-full"
          />
          <img
            src={starImg}
            className="absolute bottom-60 left-0 max-w-20 md:w-full"
          />
        </section>
        </div>
      </main>
    </>
  );
};

export default HeaderSection;
