import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerCartEmpty() {
	return (
		<h2 className="title-square title-square--icon title-cart-empty">
			<Link to="/" className="title-square__icon">
				<svg className="icon icon-shopping-bag"><use href="#icon-shopping-bag"></use></svg>
			</Link>
			<span className="title-square__main">Корзина пуста!</span>
			<span className="title-square__small"><Link to="/" className="link-hover">Повернутися до каталогу</Link></span>
		</h2>
	)
}
