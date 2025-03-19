import React from "react";
import ButtonUI from "../../components/ButtonUI";
import heroImg from "../../assets/images/heroImg2.png";
import starImg from "../../assets/images/star1.png" 


const HeaderSection = () => {
  return (
    <main className="bg-[rgba(242,240,241,1)] pt-8 md:flex md:items-center md:justify-between">
      <div className="md:w-[70%]">
        <section className="px-8 md:px-16">
          <h1 className="text-4xl md:text-7xl font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="py-4 md:text-xl text-gray-600 md:w-[70%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <ButtonUI btnName="Shop Now"/>
        </section>

        <section className="flex items-center justify-center py-6 px-8 md:px-16 md:justify-start">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4">
            <span>
              <h1 className="text-2xl font-bold">200+</h1>
              <p className="text-gray-500 text-[14px]">International Brands</p>
            </span>
            <span>
              <h1 className="text-2xl font-bold">2,000+</h1>
              <p className="text-gray-500 text-[14px]">High-Quality Products</p>
            </span>
            <span className="col-span-2 mx-auto md:mx-0">
              <h1 className="text-2xl font-bold">30,000+</h1>
              <p className="text-gray-500 text-[14px]">Happy Customers</p>
            </span>
          </div>
        </section>
      </div>
      <section className="relative w-full md:w-[35%]">
        <img src={heroImg} className="w-full"/>
        <img src={starImg} className="absolute top-0 right-0 max-w-20 md:w-full"/>
        <img src={starImg} className="absolute bottom-60 left-0 max-w-20 md:w-full"/>
      </section>
    </main>
  );
};

export default HeaderSection;
