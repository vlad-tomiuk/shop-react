import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
	const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
	const [cartTotalPrice, setCartTotalPrice] = useState(0);
	const [cartTotalCount, setCartTotalCount] = useState(0);
	
	useEffect(() => {
		if (!Array.isArray(cart)) return;
		
		const calculateTotalPrice = cart => cart.reduce((sum, { count, price }) => sum + count * price, 0);
		setCartTotalPrice(calculateTotalPrice(cart));

		const totalCount = cart => cart.reduce((sum, { count }) => sum + count, 0);
		setCartTotalCount(totalCount(cart));

		// Save cart to local storage
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
	
	function cartAdd(product) {

		const productIndex = cart.findIndex((cartProduct) => cartProduct.id === product.id);

		if (productIndex === -1) {
			setCart([...cart, { ...product, count: 1 }]);
		} else {
			const cloneCart = [...cart];
			cloneCart[productIndex].count++;
			setCart(cloneCart);
		}
	}

	function cartRemove(product) {
		const productIndex = cart.findIndex((cartProduct) => cartProduct.id === product.id);

		if (productIndex !== -1) {
			const cloneCart = [...cart];
			cloneCart.splice(productIndex, 1);
			setCart(cloneCart);
		}
	}

	function cartToggleCount(product, target) {
		const productIndex = cart.findIndex((cartProduct) => cartProduct.id === product.id);

		const cloneCart = [...cart];

		switch (target.getAttribute('data-type')) {
			case 'plus':
				cloneCart[productIndex].count++;
				break;

			case 'minus':
				if (cloneCart[productIndex].count > 1)
					cloneCart[productIndex].count--;
				break;
		}

		setCart(cloneCart);
	}

	function cartReset() {
		setCart([]);
	}

	return (
		<cartContext.Provider value={{ cart, setCart, cartAdd, cartRemove, cartToggleCount, cartTotalPrice, cartTotalCount, cartReset }}>
			{children}
		</cartContext.Provider>
	)
}
