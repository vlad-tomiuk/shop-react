import { apiUrl } from "../api/getData.js"; // Імпортуємо функцію getData і об'єкт api з відповідних модулів
import viewProducts from "./products.js";
import { boxSearchBtn, boxSearchInput } from "./helpers/elements.js"; // Імпортуємо необхідні елементи з модулю elements

// Функція для відображення продуктів на сторінці.
export default function searchProducts() {

	// Працюємо з формою пошуку
	if (boxSearchBtn) {
		boxSearchBtn.onclick = () => {
		
			// Відбираємо поле пошуку
			const val = boxSearchInput.value;
		
			// Змінна для виводу товарів
			const setUrl = (val.length == 0) ? apiUrl.catalog : apiUrl.search + val;
		
			// Виводимо товари
			viewProducts(setUrl);
		}
	}
} 
