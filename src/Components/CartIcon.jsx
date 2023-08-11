import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon() {
  return (
    <FontAwesomeIcon
      icon={faCartShopping}
      style={{ color: "#febb40", fontSize: "30px" }}
      className="cart-icon"
    />
  );
}

export default CartIcon;
