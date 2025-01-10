import cartList from "./cartList.js"; // Імпортуємо масив корзини
import viewCartProducts from "./viewCartProducts.js";

// Події для карточки добавлених товарів
export default function cartAddedEvents(e) {
    e.preventDefault();

    // Витягуємо елемент по якому був клік
    let el = e.target;

    // Якщо це елемент іконки тоді відбираємо його батьківський елемент
    if (el.classList.contains("icon")) el = el.parentNode;

    // Проблема з svg іконкою, а саме тегом use
    if (el.nodeName == "use") el = el.parentNode.parentNode;

    // Відбираємо дата атрибути цього елементу
    const elData = el.dataset;

    // Відираємо css клас, щоб по ньому відбирати потрібний нам елемент
    const elClass = el.classList;

	// Шукаємо товар в масиві корзини і формуємо ключ масива
	const elKey = cartList.findIndex((item) => item.cartAddId === elData.id);

    // Якщо це елемент категорії починаємо робити наш функціонал
    if (elClass.contains("js-card-remove")) {

        // Видаляємо товар з корзини
        cartList.splice(elKey, 1);

        // Виводимо оновлений список товарів
        viewCartProducts();
    }

    // Підрахунок товарів
    if (elClass.contains("js-card-count")) {

        // Відбираємо поле з яким будемо працювати
        const input = document.querySelector(elData.forInput);

        // Формуємо кількість
        let count = parseInt(input.value);

        // Використання тернарного оператора для збільшення / зменшення кількості
		count = elData.type === "minus" ? (count > 1 ? count - 1 : count) : count + 1;

        // Оновлюємо кількість в полі
        input.value = count;

        // Оновлюємо кількість в масиві
        cartList[elKey].count = count;

        // Зберігаємо дані в localstorage
        localStorage.setItem("cart", JSON.stringify(cartList));
    }
}
