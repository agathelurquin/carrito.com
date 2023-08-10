import { Link } from "react-router-dom";
function Purchase() {
  return (
    <div>
      <h1>Thanks for your order!</h1>
      <Link to={`/`}>
        <button>Go back to the store</button>
      </Link>
    </div>
  );
}
export default Purchase;
