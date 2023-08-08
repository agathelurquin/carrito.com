import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function womenStore({ handleAddToCart }) {
	const [women, setWomen] = useState();
	useEffect(() => {
		axios
			.get("https://carrito.adaptable.app/products")
			.then((response) => {
				setWomen(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!women) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-container">
				<h1>
					<span className="carritostyle">Carrito</span>
					<span className="women-section">  Women Section</span>
				</h1>

				<div className="display-womenproducts">
					{women.map((woman) => (
						<div key={woman.gender} className="card">
							<Link to={`/products/${woman.gender}`}>
								<div className="card-image">
									<img src={woman.image} alt={woman.name} />
								</div>
								<div className="card-content">
									<p className="brand-name">{woman.brandName}</p>
									<p className="price">{woman.price}€</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default womenStore;
