import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";

export const CartItem = (props) => {
  const { id, productName, price, image, description } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        
      </div>
    </div>
  );
};