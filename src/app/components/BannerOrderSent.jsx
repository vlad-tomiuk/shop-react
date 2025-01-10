import { Link } from "react-router-dom";

export default function BannerOrderSent() {
	return (
		<h2 className="title-square title-square--icon title-cart-success no-before">
			<Link to="/" className="title-square__icon">
				<svg className="icon icon-check-circle"><use href="#icon-check-circle"></use></svg>
			</Link>
			<span className="title-square__main">Замовлення відправлено!</span>
			<span className="title-square__small"><Link to="/" className="link-hover">Повернутися до каталогу</Link></span>
		</h2>
	)
}