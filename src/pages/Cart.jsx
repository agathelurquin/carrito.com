import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (product) => {
    console.log(product);
    setQuantity(() => (product.quantity += 1));
  };
  const handleDecrement = (product) => {
    console.log(product);
    if (quantity > 0) {
      setQuantity(() => (product.quantity -= 1));
    }
  };
  const handleDelete = (product) => {
    const cartCopy = structuredClone(cart);
    cartCopy.splice(product, 1);
    setCart(cartCopy);
  };

  if (!cart) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <h1>Cart</h1>
      <h3>Total price</h3>
      <p>
        ${" "}
        {cart
          .reduce((acc, item) => acc + item.currentPrice * item.quantity, 0)
          .toFixed(2)}
      </p>
      <Link to={`/PurchaseOrderPage`}>
        <button onClick={() => setCart([])}>Finish and pay</button>
      </Link>

      {cart.map((product) => {
        return (
          <div>
            <div key={product.id}>
              <img src={`${product.image}`} alt="" width={200} />
              <h2>{product.name}</h2>
              <h3>Price</h3>
              <p>$ {product.currentPrice}</p>
            </div>
            <div>
              {" "}
              <button onClick={() => handleChange(product)}> + </button>{" "}
              <p>{product.quantity}</p>
              <button onClick={() => handleDecrement(product)}> - </button>{" "}
              <button onClick={() => handleDelete(product)}> Delete </button>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
