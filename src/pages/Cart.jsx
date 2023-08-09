import { useState, useEffect, useRef } from "react";

function Cart({ cart, handleClick }) {
  //   const [cart, setCart] = useState([]);
  //   const upDateCart = (cart) => {
  //     console.log(cart);
  //   };
  //   upDateCart;

  if (!cart) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => {
        return (
          <div>
            <div key={product.id} c>
              <img src={`${product.image}`} alt="" width={200} />
              <h2>{product.name}</h2>
              <h3>Price</h3>
              <p>$ {product.currentPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
