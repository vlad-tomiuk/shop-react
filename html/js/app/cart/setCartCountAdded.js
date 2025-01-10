import cartList from "./cartList.js"; // Імпортуємо масив корзини
import { cartAddedSumm } from "../helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements

// Підрахунок добавлених товарів
export default function setCartCountAdded() {
 
	// Перебираємо елементи, де потрібно відображати кількість
	cartAddedSumm.forEach((countEl) => {
	   
		// Якщо корзина пуста, тоді ховаємо циферку
		if (cartList.length == 0)
		   countEl.classList.remove('show-num');
		else
		   countEl.classList.add('show-num');
 
	   // Виводимо кількість в елемент
	   countEl.innerHTML = cartList.length;
   });
}