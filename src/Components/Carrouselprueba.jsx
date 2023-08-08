import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Buttondisplaymore from "./Buttondisplaymore";
import Carrousel from "./Carrousel";
import React from "react";
import ReactDOM from 'react-dom';

function DemoCarousel() {
  const [products, setProducts] = useState();
//   const [counter, setCounter] = useState(1);

var Carousel = require('react-responsive-carousel').Carousel
var createRoot = require('react-dom');
  var DemoCarousel = React.creatClass({
    render (){

  useEffect(() => {
    axios
      .get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=3`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!men) {
    return <p>Loading...</p>;
  }

  return (
    <Carrousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
    <div>
        <img src={products.image} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={`https://${products.image}`} alt={man.image} /> 
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={`https://${products.image}`} alt={man.image} /> 
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={`https://${products.image}`} alt={man.image} /> 
        <p className="legend">Legend 4</p>
    </div>
    <div>
        <img src={`https://${products.image}`} alt={man.image} /> 
        <p className="legend">Legend 5</p>
    </div>
    <div>
        <img src={`https://${products.image}`} alt={man.image} /> 
        <p className="legend">Legend 6</p>
    </div>
</Carrousel>
);
}
});
}

createRoot.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel;
