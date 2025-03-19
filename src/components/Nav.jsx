import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Nav = () => {
  return (
    <>
    <nav className="w-[90%] mx-auto px-6 py-2 bg-gray-100 rounded-full border border-gray-400">
      <div className="flex justify-between items-center">

      
      <section className="flex items-center">
        <div className="flex items-center space-x-2">
          <HiBars3BottomRight className="text-3xl cursor-pointer" />
          <MdClose className="hidden text-3xl cursor-pointer" />
        </div>

        <h1 className="font-bold text-2xl">SHOP.CO</h1>
      </section>
      <section>
        <ul className="hidden md:flex space-x-18 text-lg">
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Shop
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            On Sale
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Article
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Brands
          </li>
        </ul>
      </section>
      <section className="flex text-3xl space-x-3 md:text-4xl">
        <IoCartOutline
          title="cart"
          className="cursor-pointer hover:transition-all hover:duration-200"
        />
        <IoIosContact title="contact" className="cursor-pointer" />
      </section>
      </div>
      <section className="hidden mx-auto text-center">
        <ul className="flex flex-col text-lg space-y-8">
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Shop
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            On Sale
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Article
          </li>
          <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
            Brands
          </li>
        </ul>
      </section>
    </nav>
    </>
  );
};

export default Nav;
