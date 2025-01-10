import cartList from "./cartList.js"; // Імпортуємо масив корзини
import setCartCountAdded from "./setCartCountAdded.js"; // Імпортуємо додаткові функції корзини
import { boxCartProducts } from "../helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements
import { viewPrice, noResult } from '../helpers/utils.js';


// Вивід товарів в корзину
export default function viewCartProducts() {

	// Виводимо кількість відразу в будь-якому випадку
	setCartCountAdded();
 
	// Перевірка на пустоту
	if (cartList.length == 0) {
	   
	   // Виводимо пустий результат
	   boxCartProducts.innerHTML = noResult('Товарів не додано!', 'empty-cart.png');
 
	} else {
 
	   // Наповнюємо змінну масивом в вигляді html
	   const productsHtml = cartList.map((product, key) => {
			
			// Деструктуризація об'єкту продукту для легкого доступу до властивостей
			const { cartAddId, img, title, price, count } = product;

		  	// Виводимо html доданого товару
		  	return `<div class="cart-added-list__item">
				   <button class="cart-added-list__item-btn-delete btn-light js-card-remove" data-id="${cartAddId}"><svg class='icon icon-close'><use href='#icon-close'></use></svg></button>
				   <img src="img/catalog/${img}" alt="" class="cart-added-list__item-img">
				   <p class="cart-added-list__item-text-hold">
					  <a href="#" class="cart-added-list__item-title-link">${title}</a>
					  <span class="cart-added-list__item-meta-list">
						 <span class="cart-added-list__item-meta">Ціна: ${viewPrice(price)} грн</span>
					  </span>
				   </p>
				   <input type="text" class="cart-added-list__item-count" readonly placeholder="0" value="${count}" id="cart-count-${cartAddId}">
				   <button class="cart-added-list__item-btn-plus btn-light js-card-count" data-type="plus" data-id="${cartAddId}" data-for-input="#cart-count-${cartAddId}"></button>
				   <button class="cart-added-list__item-btn-minus btn-light js-card-count" data-type="minus" data-id="${cartAddId}" data-for-input="#cart-count-${cartAddId}"></button>
				</div>`;
	   });
 
	   // Виводимо одним махом
	   boxCartProducts.innerHTML = productsHtml.join('');
	}
	
	// Зберігаємо дані в localstorage
	localStorage.setItem('cart', JSON.stringify(cartList));
 }