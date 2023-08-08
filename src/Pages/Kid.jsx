import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function kidStore({ handleAddToCart }) {
	const [kid, setKid] = useState();
	useEffect(() => {
		axios
			.get("https://carrito.adaptable.app/products")
			.then((response) => {
				setKid(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!kid) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					<span className="highlight-color italic">Carrito</span>
					<span className="italic">Kids Section</span>
				</h1>

				<div className="cards-wrapper">
					{kid.map((kids) => (
						<div key={kids.gender} className="card">
							<Link to={`/products/${kids.gender}`}>
								<div className="card-image">
									<img src={kids.image} alt={kids.name} />
								</div>
								<div className="card-content">
									<p className="brand-name">{kids.brandName}</p>
									<p className="price">{kids.price}€</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default kidStore;
