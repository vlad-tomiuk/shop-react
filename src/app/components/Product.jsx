import { useContext } from "react";
import { cartContext } from "./CartProvider";

export default function Product({ product }) {
	const { id, title, img, price, oldprice } = product;
	const { cartAdd } = useContext(cartContext);

	function handleCartAdd(e) {
		e.preventDefault();
		cartAdd(product);
	}

    return (
        <div className="card-product">
            <div className="card-product__img-hold">
                <img src={`/img/catalog/${img}`} alt="" className="card-product__img" />
            </div>
            <div className="card-product__text-hold">
                <a href={id} className="card-product__title-link">{title}</a>
                <span className="card-product__price">{price} грн <small>{oldprice} грн</small></span>
				<a href={id} className="card-product__btn-add" onClick={handleCartAdd}>
                    <svg className="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                </a>
            </div>
        </div>
    )
}