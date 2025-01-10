import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../components/CartProvider";
import BannerCartEmpty from "../components/BannerCartEmpty";
import CartEmpty from "../components/CartEmpty";
import CartProduct from "../components/CartProduct";
import FormOrder from "../components/forms/FormOrder";
import BannerOrderSent from "../components/BannerOrderSent";

export default function Order() {
	const { cart, cartRemove, cartToggleCount, cartTotalPrice, cartReset } = useContext(cartContext);
	const [formSubmitStatus, setFormSubmitStatus] = useState(false);

	return (
		<div className="page-content page-content-order">
			<div className="container">
				{(!cart.length && !formSubmitStatus) ? (
					<BannerCartEmpty />
				) : (
					<>
						{!formSubmitStatus ? (
							<>
								<h2 className="title-square title-square--icon">
									<Link to="/" className="title-square__icon">
										<svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
									</Link>
									<span className="title-square__small">
										<Link to="/" className="link-hover">Повернутися до каталогу</Link>
									</span>
									<span className="title-square__main">Форма замовлення</span>
								</h2>

								<div className="content-grid content-hold">
									<div className="content-form">
										<FormOrder setFormSubmitStatus={setFormSubmitStatus} cartReset={cartReset} />
									</div>

									<div className="content-cart">
										<div className="cart-added-list">
											<h2 className="cart-added-list__title">Корзина:</h2>
											<div className="cart-added-list__hold" id="js-cart-added-items">
												{cart.length ? (
													cart.map(product => (
														<CartProduct
															key={product.id}
															product={product}
															cartRemove={cartRemove}
															cartToggleCount={cartToggleCount}
														/>
													))
												) : (
													<CartEmpty />
												)}
											</div>
											<p className="cart-added-list__summ">
												<span className="summ-label">Сума до оплати:</span>
												<span className="summ-number">{cartTotalPrice} грн</span>
											</p>
										</div>
									</div>
								</div>
							</>
						) : (
							<BannerOrderSent />
						)}
					</>
				)}
			</div>
		</div>
	)
}