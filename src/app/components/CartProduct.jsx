export default function CartProduct({ product, cartRemove, cartToggleCount }) {
	const { id, title, img, price, count } = product;

	return (
		<div className="cart-added-list__item">
			<button className="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon" onClick={ () => cartRemove(product) }>
				<svg className="icon icon-close"><use href="#icon-close"></use></svg>
			</button>
			<img src={`/img/catalog/${img}`} alt={title} className="cart-added-list__item-img" />
			<p className="cart-added-list__item-text-hold">
				<span className="cart-added-list__item-title-link">{title}</span>
				<span className="cart-added-list__item-meta-list">
					<span className="cart-added-list__item-meta">Ціна: {price} грн</span>
				</span>
			</p>
			<input type="text" className="cart-added-list__item-count" placeholder="0" value={count} readOnly/>
			<button className="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon"  data-type="plus" onClick={(e) => cartToggleCount(product, e.target)}></button>
			<button className="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" data-type="minus" onClick={(e) => cartToggleCount(product, e.target)}></button>
		</div>
	)
}