import { useEffect, useState } from "react";
import { getHotProducts } from "../hooks/Hooks";
import Product from "./Product";

export default function HotOffers() {
	const [hotProductList, setHotProductOfferList] = useState([]);

 	useEffect(() => {
		getHotProducts(setHotProductOfferList);
	}, []);

	return (
		<div className="catalog">
			<div className="container">
				
				<div className="hot-offers" id="hot-offers">
					<div className="container">

						<h2 className="hot-offers__title title-square">
							<span className="title-square__icon">
								<svg className="icon icon-fire"><use href="#icon-fire"></use></svg>
							</span>
							<span className="title-square__small">Акційні пропозиції!</span>
							<span className="title-square__main">Гарячі пропозиції</span>
						</h2>

						<div className="hot-offers__cards" id="hot-offer-products">

							{
								hotProductList.map(product => <Product product={product} key={product.id} />)
							}

						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
