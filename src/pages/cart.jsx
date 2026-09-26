import React from "react";
import {  useNavigate } from "react-router-dom";
import CartItem from "../components/cartitem";
import CartSummary from "../components/cartsummary";

const Cart = () => {
  const navigate = useNavigate();
  co
  


  return (
    
    <div className="mx-auto my-8 w-full px-4 xl:my-10 xl:w-10/12 justify-center">
          <div className="space-y-4">
            <div className="flex items-center text-sm xl:text-base">
              <h1
                className="cursor-pointer font-semibold text-gray-600 hover:underline"
                onClick={() => navigate("/")}
              >
                Home &gt;
              </h1>
              <h2 className="ml-2 font-semibold">Cart</h2>
            </div>
    
            <h1 className="font-mono text-4xl xl:text-5xl">YOUR CART</h1>
          </div>
    
          <div className="mt-8 flex flex-col gap-6 xl:flex-row">
            {/* <div className="w-full xl:w-7/12">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div> */}
    
            <div className="w-full xl:w-5/12">
              {/* <CartSummary /> */}
            </div>
          </div>
        </div>
  );
};

export default Cart;
