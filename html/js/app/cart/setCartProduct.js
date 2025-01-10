import cartList from "./cartList.js"; // Імпортуємо масив корзини
import viewCartProducts from "./viewCartProducts.js"; // Імпортуємо функцію для виводу добавлених товарів в корзину

// Підрахунок добавлених товарів
export default function setCartProduct(e) {
    e.preventDefault();

    // Витягуємо елемент по якому був клік
    let el = e.target;

    // Якщо це елемент іконки тоді відбираємо його батьківський елемент
    if (el.classList.contains("icon")) el = el.parentNode;

    // Проблема з svg іконкою, а саме тегом use
    if (el.nodeName == "use") el = el.parentNode.parentNode;
	
    // Якщо це елемент категорії починаємо робити наш функціонал
    if (el.getAttribute('data-cart-add-id')) {
	
        // Формуємо дані про товар, які знаходяться в дата атрибуті
        const elData = el.dataset;

        // Знаходження індексу елемента у масиві cartList за унікальною властивістю, наприклад, "id"
        const existingIndex = cartList.findIndex(item => item.cartAddId === elData.cartAddId);
        
        // Якщо дублікат, то не додаємо товар, а кількість 
        if (existingIndex !== -1) {
            
            // Якщо товар вже є у корзині, змінюємо кількість
            cartList[existingIndex].count++;
        } else {
            
            // Добавляємо товар в корзину
            cartList.push(el.dataset);
        }

		// Після добавлення виводимо товари
		viewCartProducts();
    }
}
