import React from "react";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ButtonUI from "./ButtonUI";
import { cartStoreActions } from "@/store/cartStore";
import emptyCartImg from "../assets/images/emptyCart.jpg";
import { Link } from "react-router-dom";

const CartProductCard = () => {
  const cartItems = JSON.parse(localStorage.getItem("Cart-Item"));

  const dispatch = useDispatch();

  const totalPrice = Number(useSelector((state) => state.cartStoreReducer.totalPrice));

  const vatPrice = +(totalPrice * (7.5 / 100)).toFixed(2);

  const overallTotal = +(vatPrice + totalPrice + 6.99);

  return (
    <main className="lg:flex lg:justify-between lg:space-x-6 lg:items-start">
      {cartItems.length != 0 ? (
        <section className="border border-gray-300 rounded-xl lg:w-[58%]">
          {cartItems.map((item) => (
            <section
              key={item.id}
              className="flex items-center justify-between space-x-3 p-3 border-b border-gray-300 lg:items-start"
            >
              <div className="max-w-[30%] bg-[#F0EEED] rounded-xl">
                <img src={item.image} alt={item.productName} className="" />
              </div>
              <div className="min-w-[70%]">
                <span className="flex justify-between items-center">
                  <h1 className="font-semibold mb-1 lg:text-3xl">{item.productName}</h1>
                  <RiDeleteBinFill
                    className="text-xl self-start text-red-600 hover:opacity-70 cursor-pointer lg:text-3xl"
                    onClick={() =>
                      dispatch(cartStoreActions.removeItemFromCart(item.id))
                    }
                  />
                </span>
                <p className="text-[13px] mb-4 lg:text-lg">Category: {item.category}</p>
                <span className="flex justify-between space-x-3 items-center lg:mt-18">
                  <h1 className="text-xl font-semibold lg:text-2xl">${item.totalPrice.toFixed(2)}</h1>
                  <span className="flex justify- px-between space-x-2 items-center px-2 py-1 bg-[#F0F0F0] rounded-full text-xl lg:text-2xl">
                    <FaMinus className="text-lg cursor-pointer" onClick={()=> dispatch(cartStoreActions.decreaseQty(item.id))}/>
                    <p className="font-bold text-[14px]">{item.quantity}</p>
                    <IoMdAdd className="text-xl cursor-pointer lg:text-3xl" onClick={()=> dispatch(cartStoreActions.increaseQty(item.id))}/>
                  </span>
                </span>
              </div>
            </section>
          ))}
        </section>
      ) : (
        <div>
          <img src={emptyCartImg} alt="empty cart" className="mx-auto w-full mb-12" />
          <Link to="/all-products"><ButtonUI btnName="Shop"/></Link>
        </div>
      )}

      {cartItems.length > 0 && (
        <section
          id="summary"
          className="mt-6 p-3 border border-gray-300 rounded-xl lg:w-[40%] lg:mt-0 lg:fixed lg:right-4" 
        >
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="flex flex-col space-y-4 mb-6">
            <span className="flex justify-between mt-5">
              <p className="text-[rgba(0,0,0,0.6)] text-xl">Subtotal</p>
              <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
            </span>

            <span className="flex justify-between">
              <p className="text-[rgba(0,0,0,0.6)] text-xl">Delivery Fee</p>
              <p className="text-xl font-semibold">$6.99</p>
            </span>

            <span className="flex justify-between border-b border-gray-300">
              <p className="text-[rgba(0,0,0,0.6)] text-xl">VAT(7.5%)</p>
              <p className="text-xl font-semibold">${vatPrice}</p>
            </span>

            <span className="flex justify-between">
              <p className="text-[rgba(0,0,0)] text-xl">Total</p>
              <p className="text-xl font-semibold">
                ${overallTotal.toFixed(2)}
              </p>
            </span>
          </div>
          <ButtonUI btnName="Checkout" />
        </section>
      )}
    </main>
  );
};

export default CartProductCard;
