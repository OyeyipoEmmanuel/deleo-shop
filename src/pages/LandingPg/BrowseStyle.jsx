import React from 'react';
import { motion } from 'framer-motion';
import casualImg from "../../assets/images/browse-dress-style//image 11.png";
import formalImg from "../../assets/images/browse-dress-style//image 13.png";
import partyImg from "../../assets/images/browse-dress-style//image 12.png";
import gymImg from "../../assets/images/browse-dress-style//image 14.png";

const BrowseStyle = () => {
  return (
    <main className='bg-[rgba(242,240,241,1)] rounded-xl mx-3 my-12 px-3 py-5 lg:mx-16 lg:px-12 overflow-hidden'>
      <motion.h1
        className='text-3xl text-center font-bold'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }} // Triggers when 50% is in view
      >
        BROWSE BY DRESS STYLE
      </motion.h1>

      <section className='grid grid-cols-1 gap-6 lg:gap-12 mt-8 lg:grid-cols-3 px-4 lg:px-0'>
        {[
          { img: casualImg, label: "Casual", span: "col-span-1" },
          { img: formalImg, label: "Formal", span: "lg:col-span-2" },
          { img: partyImg, label: "Party", span: "lg:col-span-2" },
          { img: gymImg, label: "Gym", span: "col-span-1" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`relative bg-white rounded-3xl flex justify-end hover:scale-105 transition-all duration-300 ${item.span} shadow-2xl`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={item.img} alt={item.label} className='rounded-3xl w-full object-cover' />
            <h1 className='absolute top-6 left-4 text-3xl lg:text-5xl font-bold text-black drop-shadow'>
              {item.label}
            </h1>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default BrowseStyle;
