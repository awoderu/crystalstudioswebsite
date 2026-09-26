import React from "react";

const CartSummary = () => {
  return (
    <div className="rounded-3xl border border-neutral-300 p-4 xl:p-6 xl:w-full xl:h-94">
      <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">Order Summary</h1>

      <div className="space-y-2 text-sm xl:text-base">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          {/* <p className="font-semibold">${subtotal}</p> */}
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Total Item</p>
          {/* <p className="font-semibold">${totalItems}</p> */}
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Discount (-20%)</p>
          {/* <p className="font-semibold text-red-600">${discount}</p> */}
        </div>

        <div className="flex justify-between border-b border-neutral-300 pb-4">
          <p className="text-gray-600">Delivery Fee</p>
          {/* <p className="font-semibold">${deliveryFee}</p> */}
        </div>
      </div>

      <div className="mt-4 flex justify-between text-lg font-semibold xl:text-xl">
        <p>Total</p>
        {/* <p>${total}</p> */}
      </div>

      <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-3xl bg-black
       text-white transition-colors cursor-pointer hover:bg-gray-900">
        Go to Checkout
        <i className="bx bx-arrow-right text-2xl"></i>
      </button>
    </div>
  );
};

export default CartSummary;