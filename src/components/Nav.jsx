import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const totalItemQty = useSelector((state) => state.cartStoreReducer.totalQty);

  return (
    <>
      <nav
        className={`mt-4 fixed z-50 w-[90%] mx-6 lg:mx-16 px-6 py-2 shadow-2xl customShadow bg-gray-100 ${
          mobileNav ? "rounded-xl" : "rounded-full"
        } border border-gray-400`}
      >
        <div className="flex justify-between items-center">
          <section className="flex items-center">
            <div className="lg:hidden flex items-center space-x-2 mr-3">
              <HiBars3BottomRight
                className={`${mobileNav && "hidden"} text-3xl cursor-pointer`}
                onClick={() => setMobileNav((prev) => !prev)}
              />
              {mobileNav && (
                <MdClose
                  className="text-3xl cursor-pointer"
                  onClick={() => setMobileNav(false)}
                />
              )}
            </div>

            <Link to="/">
              <h1 className="headerFont font-extrabold text-2xl">SHOP.CO</h1>
            </Link>
          </section>
          <section>
            <ul className="hidden lg:flex space-x-18 text-lg">
              <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
                <NavLink
                  to="/all-products"
                  className={({ isActive }) => (isActive ? "navActive" : "")}
                >
                  Shop
                </NavLink>
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
          <section className="flex text-3xl space-x-3 lg:text-4xl">
            <Link to="/cart">
              <IoCartOutline
                title="cart"
                className="relative cursor-pointer hover:transition-all hover:duration-200"
              />
            </Link>

            {totalItemQty == 0 ? (
              " "
            ) : (
              
                <motion.div
                  key={totalItemQty}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-red-700 w-5 h-4 rounded-full text-white text-[13px] flex items-center justify-center font-extrabold"
                >
                  {totalItemQty}
                </motion.div>
              
            )}

            <Link to="/login">
              <IoIosContact title="login" className="cursor-pointer" />
            </Link>
          </section>
        </div>

        <AnimatePresence>
          {mobileNav && (
            <motion.section
              className="mx-auto text-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col text-lg space-y-4 mt-4 overflow-hidden">
                <li className="cursor-pointer hover:opacity-65 hover:transition-all hover:duration-200">
                  <NavLink
                    to="/all-products"
                    className={({ isActive }) => (isActive ? "navActive" : "")}
                  >
                    Shop
                  </NavLink>
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
            </motion.section>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
