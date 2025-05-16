import React from "react";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import visaLogo from "../../assets/images/payment-methods-logo/visa logo.png"
import mastercard from "../../assets/images/payment-methods-logo/mastercard logo.png"
import paypal from "../../assets/images/payment-methods-logo/paypal logo.png"
import applepay from "../../assets/images/payment-methods-logo/applepay logo.png"
import googlepay from "../../assets/images/payment-methods-logo/googlepay logo.png"

const Footer = () => {
  return (
    <footer className="mt-64 relative bg-[#dadada]">
      <section className="absolute top-0 -translate-y-48 mx-8 bg-black text-white p-8 rounded-xl flex flex-col lg:flex-row lg:justify-between lg:items-center lg:-translate-y-20 lg:p-12 lg:mx-16">
        <h1 className="text-4xl headerFont font-extrabold pb-6 lg:w-[60%] md:text-4xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white text-black outline-none rounded-full px-8 py-3  w-full placeholder:text-gray-500"
          />
          <Button
            variant="primary"
            className="bg-white text-black text-center rounded-full w-full py-6 cursor-pointer mt-3 hover:opacity-80 hover:duration-200 hover:transition-all"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <section className="w-full px-8 pt-[calc(16rem-2rem)] lg:flex lg:px-16 lg:pt-52 border-b border-gray-400 pb-4">
        <div className="">
          <h1 className="headerFont font-extrabold text-2xl pb-3 md:text-4xl">
            SHOP.CO
          </h1>
          <p className="text-gray-600 md:text-xl">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <aside className="flex mt-6 items-center space-x-4">
            <span className="border-gray-400 border-1 bg-white text-black rounded-full p-2 cursor-pointer hover:opacity-80 duration-200 transition-all">
              <FaXTwitter />
            </span>
            <span className="bg-black text-white rounded-full p-2 cursor-pointer hover:opacity-80 duration-200 transition-all">
              <FaFacebookF />
            </span>
            <span className="border-gray-400 border-1 bg-white text-black rounded-full p-2 cursor-pointer hover:opacity-80 duration-200 transition-all">
              <FaInstagram />
            </span>
            <span className="border-gray-400 border-1 bg-white text-black rounded-full p-2 cursor-pointer hover:opacity-80 duration-200 transition-all">
              <FaGithub />
            </span>
          </aside>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 w-full py-4 lg:py-0">
          <span>
            <h1 className="font-semibold text-xl">COMPANY</h1>
            <ul className="space-y-2 pt-2 text-gray-600">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </span>
          <span>
            <h1 className="font-semibold text-xl">HELP</h1>
            <ul className="space-y-2 pt-2 text-gray-600">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </span>
          <span>
            <h1 className="font-semibold text-xl">FAQ</h1>
            <ul className="space-y-2 pt-2 text-gray-600">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </span>
          <span>
            <h1 className="font-semibold text-xl">RESOURCES</h1>
            <ul className="space-y-2 pt-2 text-gray-600">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </span>
        </div>
      </section>
      <section className="px-8 lg:px-16 flex flex-col justify-center items-center space-y-4 lg:flex-row lg:justify-between pb-6 lg:pb-12">

        <h1 className="text-center text-gray-600 text-md pt-4 md:text-xl">
          Shop.co &copy; 2000-2025, All Right Reserved
        </h1>

        <div className="flex">
          <img src={visaLogo} alt="visaLogo" className=""/>
          <img src={mastercard} alt="mastercard-Logo" />
          <img src={paypal} alt="paypal-Logo" />
          <img src={applepay} alt="applepay-Logo" />
          <img src={googlepay} alt="googlepay-Logo" />
        </div>

      </section>
    </footer>
  );
};

export default Footer;
