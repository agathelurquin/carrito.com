import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Carrousel({type}) {
	const [products, setProducts] = useState();
    const [counter, setCounter] = useState(1);

	useEffect(() => {
		setProducts(null)
		axios
			.get(`https://carrito.adaptable.app/products?_page=${counter}&_limit=4`)
			.then((response) => {
				setProducts(response.data);			
			})
			.catch((e) => console.log(e));
	}, [counter]);
	

	// if (!products) {
	// 	// Return a skeleton if you don't want the UI it move when fetching new data
	// 	// return <p>Loading...</p>;

	// }

	return (
		<div className="page-container">
			<div className="list-container">
				<h2>
					<span className="carritostyle">{type} Section</span>					
				</h2>

				<div className="display-products">
					{products ? products.map((product) => (
						<div key={product.id} className="card">
							<Link to={`/${product.gender.toLowerCase()}`}>
								<div className="card-image">
                                <img src={product.image} alt={product.image} />
								</div>
								<div className="card-content">
									<p className="brand-name">{product.brand}</p>
									<p className="price">{product.currentPrice}€</p>
								</div>
							</Link>
						</div>
					)) :  <div style={{
						display: 'flex',
						justifyContent:'space-evenly',
						gap: '2rem'
					}}>
					<div>
							<div className="image-skeleton" style={{
								width: 314,
								height: 400,
								background: 'gray',
								borderRadius: '1rem'
							}}></div>
							<div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
								<div style={{background: 'gray', width: 100}}></div>
								<div style={{background: 'gray', width: 100}}></div>
							</div>
						</div>
					<div>
							<div className="image-skeleton" style={{
								width: 314,
								height: 400,
								background: 'gray',
								borderRadius: '1rem'
							}}></div>
							<div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
								<div style={{background: 'gray', width: 100}}></div>
								<div style={{background: 'gray', width: 100}}></div>
							</div>
						</div>
					<div>
							<div className="image-skeleton" style={{
								width: 314,
								height: 400,
								background: 'gray',
								borderRadius: '1rem'
							}}></div>
							<div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
								<div style={{background: 'gray', width: 100}}></div>
								<div style={{background: 'gray', width: 100}}></div>
							</div>
						</div>
					
					</div>
						}
				</div>
			</div>
			
            <button onClick={() => setCounter(counter +1)}>More Shoes</button>
		</div>
	);
}

export default Carrousel;