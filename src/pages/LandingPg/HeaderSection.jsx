import React from "react";
import { motion } from "framer-motion";
import ButtonUI from "../../components/ButtonUI";
import heroImg from "../../assets/images/heroImg2.png";
import starImg from "../../assets/images/star1.png";
import Nav from "@/components/Nav";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  return (
    <>
      <main className="bg-[rgba(242,240,241,1)] overflow-x-hidden">
        <Nav />
        <div className="lg:flex lg:justify-between pt-24">
          <div className="lg:w-[75%]">
            <motion.section
              className="px-8 lg:px-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="headerFont text-4xl pt-5 md:text-7xl lg:pt-12 font-extrabold"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </motion.h1>

              <motion.p
                className="py-4 md:text-2xl text-gray-600 lg:w-[70%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </motion.p>

              <NavLink to="/all-products">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <ButtonUI btnName="Shop Now" className="lg:w-[50%]" />
                </motion.div>
              </NavLink>
            </motion.section>

            <motion.section
              className="flex items-center justify-center py-6 px-8 lg:px-16 lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:flex md:space-x-3 md:gap-2 md:items-center md:justify-center">
                {[
                  { title: "200+", subtitle: "International Brands" },
                  { title: "2,000+", subtitle: "High-Quality Products" },
                  { title: "30,000+", subtitle: "Happy Customers" },
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className={`${
                      index < 2 ? "md:border-r md:border-gray-400 md:px-3" : "col-span-2 mx-auto md:mx-0"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-gray-500 text-[14px]">{item.subtitle}</p>
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            className="relative w-full lg:w-[50%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.img
              src={heroImg}
              className="w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            />
            <motion.img
              src={starImg}
              className="absolute top-0 right-0 max-w-20 md:w-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
            <motion.img
              src={starImg}
              className="absolute bottom-60 left-0 max-w-20 md:w-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default HeaderSection;
