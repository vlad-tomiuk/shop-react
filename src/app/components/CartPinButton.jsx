import { useContext, useState } from "react";
import CartEmpty from "./CartEmpty";
import CartProduct from "./CartProduct";
import { cartContext } from "./CartProvider";

export default function CartPinButton() {
	const [showCart, setShowCart] = useState(false);
	const { cart, cartRemove, cartToggleCount, cartTotalCount } = useContext(cartContext);

	return (
		<div className="cart-added-list">
			<button className="cart-added-list__btn btn btn-icon" onClick={() => setShowCart(!showCart) }>
				<span className={`cart-added-summ js-cart-added-summ ${cartTotalCount ? 'show-num' : ''}`}>{cartTotalCount}</span>
				<svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
			</button>
			<div className={`cart-added-list__item-list ${showCart ? 'show' : ''}`}>

				{
					(!cart.length)
						? <CartEmpty />
						: cart.map(product => <CartProduct
								key={product.id}
								product={product}
								cartRemove={cartRemove}
								cartToggleCount={cartToggleCount} />)
				}

			</div>
		</div>
	)
}