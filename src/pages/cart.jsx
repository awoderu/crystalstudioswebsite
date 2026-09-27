
import {  useNavigate } from "react-router-dom";
import { PRODUCTS } from "../product";
import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";

    // import CartItem from "../components/cartitem";
    import CartSummary from "../components/cartsummary";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateCartItemCount, removeFromCart } = useContext(ShopContext);

  


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
    
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <div className="flex flex-col gap-6">
              {PRODUCTS.filter((product) => cartItems[product.id] > 0).map((product) => (
                <article key={product.id} className="flex w-full items-center gap-5 rounded-xl bg-white p-5 text-black shadow">
                  <img src={product.image} alt={product.productName} className="h-32 w-32 object-contain" />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{product.productName}</h2>
                    <p className="mt-2">N{product.price.toLocaleString()}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button type="button" onClick={() => removeFromCart(product.id)} className="h-8 w-8 rounded border">-</button>
                      <span>{cartItems[product.id]}</span>
                      <button type="button" onClick={() => updateCartItemCount(cartItems[product.id] + 1, product.id)} className="h-8 w-8 rounded border">+</button>
                    </div>
                  </div>
                  <strong>N{(product.price * cartItems[product.id]).toLocaleString()}</strong>
                </article>
              ))}
              {PRODUCTS.every((product) => cartItems[product.id] === 0) && (
                <p className="text-lg text-white/70">Your cart is empty.</p>
              )}
            </div>
            <div className="relative lg:sticky lg:top-24">
              <CartSummary />
            </div>
        </div>
        </div>
  );
};

export default Cart;
