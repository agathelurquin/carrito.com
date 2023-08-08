import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ButtonDisplayMore() {
    const[counter,setCounter] = useState(1);

    useEffect(() => {
        axios
          .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=3`)
          .then((response) => {
            setCounter(response.data);
          })
          .catch((e) => console.log(e));
      }, [counter]);

      if(!counter) {
        return <p>Loading...</p>
      }

    
  return (
    <div>
        <button onClick={() => setCounter(counter +1)}>More Shoes</button>
    </div>
  )
}

export default ButtonDisplayMore;